/* eslint-disable camelcase */
import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEmail, isInt, isFloat } from 'validator';

import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';
import { Form, Design } from './styled';

export default function ProfileRegister() {
  const dispatch = useDispatch();

  // const { id } = useParams();
  const id = useSelector((state) => state.auth.user.user_id);

  const [name, setName] = React.useState('');
  const [userType, setUserType] = React.useState('');
  const [birthDay, setBirthDay] = React.useState('');
  const [provinceID, setProvinceID] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password_confirmation, setPassword_confirmation] = React.useState('');

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [isLoading, setIsLoading] = React.useState(false);

  const hideRegisterComponent = () => {
    const loginComponent = document.getElementById('registerComponent');

    loginComponent.style.display = 'none';
  };

  React.useEffect(() => {
    if (!isLoggedIn) return;

    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/user/${id}`);

        setName(data.name);
        setEmail(data.email);
        setBirthDay(data.birth_day);
        setUserType(data.user_type);
        setProvinceID(data.provincia_id);

        console.log(data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        const status = get(error, 'response.status', 0);
        const errors = get(error, 'response.data.errors', []);

        if (status === 400) errors.map((err) => toast.error(err));
      }
    }

    getData();
  }, [id]);

  const TipoUser = [
    { valor: 'guia', nome: 'Guia Turistico' },
    { valor: 'turista', nome: 'Turista' },
  ];

  const ProvinciasMoçambique = [
    { id: 1, nome: 'Maputo' },
    { id: 2, nome: 'Gaza' },
    { id: 3, nome: 'Inhambane' },
    { id: 4, nome: 'Sofala' },
    { id: 5, nome: 'Manica' },
    { id: 6, nome: 'Tete' },
    { id: 7, nome: 'Zambezia' },
    { id: 8, nome: 'Nampula' },
    { id: 9, nome: 'Niassa' },
    { id: 10, nome: 'Cabo Delgado' },
  ];

  const handleProvinciaChange = (event) => {
    setProvinceID(event.target.value);
  };

  const handleTypeChange = (event) => {
    const TypeValue = event.target.value;
    const gInput = document.querySelectorAll('.gInput');

    setUserType(TypeValue);

    if (TypeValue === 'turista') {
      gInput.forEach((e) => {
        e.style.display = 'none';
      });
    } else {
      gInput.forEach((e) => {
        e.style.display = 'inherit';
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (name.length < 3 || name.length > 50) {
      toast.error('O nome precisa ter entre 3 e 50 caracteres');
      formErrors = true;
    }

    if (password !== password_confirmation) {
      toast.error('As senhas precisam ser as mesmas');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail inválido');
      formErrors = true;
    }

    if (formErrors) return;

    const formData = birthDay.split('-');
    const formData2 = `${formData[2]}-${formData[1]}-${formData[0]}`;

    try {
      setIsLoading(true);
      // console.log({
      //   name,
      //   email,
      //   user_type: userType,
      //   birth_day: formData2,
      //   provincia_id: provinceID,
      // });

      if (isLoggedIn) {
        await axios.put(`/rotauser/${id}`, {
          name,
          email,
          user_type: userType,
          birth_day: birthDay,
          provincia_id: provinceID,
          // password,
          // password_confirmation,
        });

        toast.success('Perfil editado com sucesso');
      } else {
        console.log(userType);

        if (userType === 'guia') {
          await axios.post('/register', {
            name,
            email,
            user_type: userType,
            birth_day: birthDay,
            provincia_id: provinceID,
            password,
            password_confirmation,
          });
        } else {
          // console.log(234567890);
          await axios.post('/register', {
            name,
            email,
            user_type: userType,
            birth_day: '1999-11-11',
            provincia_id: provinceID,
            password,
            password_confirmation,
          });
        }

        toast.success('Perfil criado com sucesso');
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      const status = get(error, 'response.status', 0);
      const data = get(error, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((err) => toast.error(err));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Design id="registerComponent" style={{ display: 'none' }}>
      <Container>
        <div className="x-div">
          <button id="x-btt" onClick={hideRegisterComponent} type="button">
            X
          </button>
        </div>

        <Loading isLoading={isLoading} />

        <h1>{id ? 'Editar Conta' : 'Registar Conta'} </h1>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>Nome</span>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="email">
            <span>E-mail</span>

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {!id && (
            <label htmlFor="usertype">
              <span>Tipo de Usuario</span>
              <select
                id="usertype"
                value={userType}
                onChange={handleTypeChange}
                className="select"
              >
                {TipoUser.map((tipo) => (
                  <option key={tipo.valor} value={tipo.valor}>
                    {tipo.nome}
                  </option>
                ))}
              </select>
            </label>
          )}

          <label className="gInput" htmlFor="province_id">
            <span>Provincia</span>
            <select
              id="province_id"
              value={provinceID}
              onChange={handleProvinciaChange}
              className="select "
            >
              {ProvinciasMoçambique.map((provincia) => (
                <option key={provincia.id} value={provincia.id}>
                  {provincia.nome}
                </option>
              ))}
            </select>
          </label>

          <label className="gInput" htmlFor="birth_day">
            <span>Data de Nascimento</span>

            <input
              type="date"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
            />
          </label>

          <label htmlFor="password">
            <span>Senha</span>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label htmlFor="password_confirmation">
            <span>Confirmar Senha</span>

            <input
              type="password"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
            />
          </label>

          <button type="submit">Salvar</button>
        </Form>
      </Container>
    </Design>
  );
}
