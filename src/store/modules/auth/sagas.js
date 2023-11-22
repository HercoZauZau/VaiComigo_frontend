import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const paramsObject = {
      email: payload.email,
      password: payload.password,
    };

    const queryString = Object.keys(paramsObject)
      .map((key) => `${key}=${paramsObject[key]}`)
      .join('&');

    const response = yield call(axios.post, `/login?${queryString}`);

    console.log(response);

    // const response = yield call(axios.post, '/login', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Login feito com sucesso');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    // history.push(payload.prevPath);
  } catch (error) {
    toast.error('Senha ou usuário inválidos');
    console.log(error);

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,
      });

      toast.success('Dados alterados com sucesso');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/users', {
        email,
        nome,
        password,
      });

      toast.success('Conta criada com sucesso');
      yield put(actions.registerCreatedSuccess({ nome, email, password }));

      history.push('/login');
    }
  } catch (error) {
    const errors = get(error, 'resposnse.data.errors', []);
    const status = get(error, 'resposnse.data.status', 0);

    if (status === 401) {
      toast.error('Login necessário');
      yield put(actions.loginFailure());
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((e) => toast.error(e));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
