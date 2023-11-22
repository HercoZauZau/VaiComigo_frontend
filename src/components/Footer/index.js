/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';

import { Main } from './styled';

export default function Footer() {
  return (
    <Main>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Sobre nós</h1>

          <p>
            Na VaiComigo, nossa paixão é criar experiências inesquecíveis para
            viajantes de todo o mundo. Com uma equipe de guias locais altamente
            qualificados e dedicados, estamos comprometidos em tornar cada
            jornada única e conectar você a lugares incríveis, proporcionando
            aventuras seguras e significativas que enriqueçam sua vida e ampliem
            seus horizontes. Junte-se a nós!
          </p>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>

          <li className="nav__item ">
            <h2 className="nav__title">Tags</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Políticas gerais</a>
              </li>

              <li>
                <a href="#">Políticas de viagem</a>
              </li>

              <li>
                <a href="#">Como ser um guia</a>
              </li>

              <li>
                <a href="/gallery">Galeria</a>
              </li>

              {/* <li>
                <a href="/aboutus">Sobre nós</a>
              </li> */}

              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Redes Sociais</h2>

            <div className="">
              <ul className="social-icons">
                <li>
                  <a className="" href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    <FaPinterest />
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2023 Recycle Gang. All rights reserved.</p>
        </div>
      </footer>
    </Main>
  );
}
