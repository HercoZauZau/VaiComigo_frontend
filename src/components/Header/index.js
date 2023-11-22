/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { BsFillPencilFill } from 'react-icons/bs';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Navbar } from './styled';
import Login from '../../pages/Login';
import ProfileRegister from '../../pages/ProfileRegister';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const name = useSelector((state) => state.auth.user.name);
  const id = useSelector((state) => state.auth.user.user_id);
  const type = useSelector((state) => state.auth.user.user_type);

  const showLoginComponent = () => {
    const loginComponent = document.getElementById('loginComponent');

    loginComponent.style.display = 'inherit';
  };

  const showRegisterComponent = () => {
    const registerComponent = document.getElementById('registerComponent');

    registerComponent.style.display = 'inherit';
  };

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(actions.loginFailure());

    window.location.reload();
    // history.push('/');
  };

  return (
    <main className="mainHeader">
      <Navbar>
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">VaiComigo</div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span />
              <span />
              <span />
            </label>
          </div>

          <div className="nav-links">
            <Link to="/">
              <span>Home</span>
            </Link>

            <Link to="/destinos">
              <span>Destinos</span>
            </Link>

            {type === 'guia' && (
              <Link to="/pacotes">
                <span>Pacotes</span>
              </Link>
            )}

            {(type === 'turista' || type === 'guia') && (
              <Link to={`/viagens/${id}`}>
                <span>Viagens</span>
              </Link>
            )}

            <Link to="/gallery">
              <span>Galeria</span>
            </Link>

            {/* <Link to="/">
              <span>Quero ser um guia</span>
            </Link> */}

            <Link to="/">
              {isLoggedIn ? (
                <span
                  className="nolink editpen"
                  // type="button"
                  onClick={showRegisterComponent}
                >
                  {name}
                  <BsFillPencilFill />
                </span>
              ) : (
                <span
                  className="nolink"
                  // type="button"
                  onClick={showRegisterComponent}
                >
                  Cadastro
                </span>
              )}
            </Link>

            <Link to="/">
              {isLoggedIn ? (
                <Link onClick={handleLogout} to="/logout">
                  <span className="white">Sair</span>
                </Link>
              ) : (
                <span
                  type="button"
                  onClick={showLoginComponent}
                  className="login-btt"
                >
                  Entrar
                </span>
              )}
            </Link>

            {/* <Link to="/">
              <span>PT</span>
            </Link> */}

            {/* <Mode>{true ? <MdDarkMode /> : <MdOutlineLightMode />}</Mode> */}
          </div>
        </div>
      </Navbar>
      <Login />

      <ProfileRegister />
    </main>
  );
}
