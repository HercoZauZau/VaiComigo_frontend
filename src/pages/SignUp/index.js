/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '../../components/Loading';
import { Form, Design } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';

export default function UserRegister() {
  const dispatch = useDispatch();

  // const id = useSelector((state) => state.auth.user.id);
  // const nameStored = useSelector((state) => state.auth.user.nome);
  // const emailStored = useSelector((state) => state.auth.user.email);
  // const isLoading = useSelector((state) => state.auth.user.isLoading);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const hideRegisterComponent = () => {
    const loginComponent = document.getElementById('registerComponent');

    loginComponent.style.display = 'none';
  };

  // React.useEffect(() => {
  //   if (!id) return;

  //   setName(nameStored);
  //   setEmail(emailStored);
  // }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (name.length < 3 || name.length > 50) {
      formErrors = true;
      toast.error('O nome deve ter entre 3 e 50 caracteres');
    }

    // if (!id && (password.length < 5 || password.length > 50)) {
    //   formErrors = true;
    //   toast.error('A senha deve ter entre 5 e 50 caracteres');
    // }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if (formErrors) return;

    // dispatch(actions.registerRequest({ nome: name, email, password, id }));
  }

  return (
    <Design id="registerComponent" style={{ display: 'none' }}>
      <Container>
        <div className="x-div">
          <button id="x-btt" onClick={hideRegisterComponent} type="button">
            X
          </button>
        </div>

        {/* <h1>
          {id ? 'Editar dados da conta' : 'Regista uma conta e vai comigo!'}
        </h1> */}

        {/* <Loading isLoading={isLoading} /> */}

        <Form onSubmit={handleSubmit}>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="password">
            Senha
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button type="submit">Salvar</button>
        </Form>
      </Container>
    </Design>
  );
}
