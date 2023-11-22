/* eslint-disable no-unused-vars */
import React from 'react';
import { get } from 'lodash';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../services/axios';

import { Form, Design } from './styled';
import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  // const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const hideLoginComponent = () => {
    const loginComponent = document.getElementById('loginComponent');

    loginComponent.style.display = 'none';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (password.length < 5 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (formErrors) return;

    try {
      dispatch(actions.loginRequest({ email, password }));
      // dispatch(actions.loginRequest({ email, password, prevPath }));
    } catch (error) {
      toast.error('Credênciais inválidas');

      console.error('Error making POST request:', error);
    }
  };

  return (
    <Design id="loginComponent" style={{ display: 'none' }}>
      <Container>
        <Loading isLoading={isLoading} />

        <div className="x-div">
          <button id="x-btt" onClick={hideLoginComponent} type="button">
            X
          </button>
        </div>

        <h1>Faça seu login e vai comigo!</h1>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <span> E-mail</span>

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="password">
            <span>Password</span>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <span className="lst-psw">Esqueci minha senha</span>

          <button type="submit">Entrar</button>
        </Form>
      </Container>
    </Design>
  );
}
