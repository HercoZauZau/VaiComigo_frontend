/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { BsPerson, BsCalendar3, BsCalendar2Check } from 'react-icons/bs';

import { Main } from './styled';

export default function Header2() {
  return (
    <Main>
      <div className="main2">
        <div className="intro">
          <h1>Vai comigo, a aventura é o destino!</h1>
          <div>
            <p>
              Descubra destinos incríveis, construa lembranças que permanecerão
              e aventure-se pelo mundo conosco numa experiência verdadeiramente
              excepcional.
            </p>
          </div>
        </div>

        <div className="ex">
          <footer>
            <div>
              <div className="atributo">
                <CiLocationOn />
                <p>localização</p>
              </div>
              <input type="text" />
            </div>

            <div>
              <div className="atributo">
                <BsPerson />
                <p>pessoas</p>
              </div>
              <input type="number" min={1} />
            </div>

            <div>
              <div className="atributo">
                <BsCalendar3 />
                <p>check-in</p>
              </div>
              <input type="text" />
            </div>

            <div>
              <div className="atributo">
                <BsCalendar2Check />
                <p>check-out</p>
              </div>
              <input type="text" />
            </div>

            <button type="button">
              <AiOutlineSearch />
              <p>Explorar</p>
            </button>
          </footer>

          <button className="exbut" type="button">
            Explorar
          </button>
        </div>
      </div>
    </Main>
  );
}
