import React from 'react';
import PropTypes from 'prop-types';
import { MdLocationPin } from 'react-icons/md';

import { Main, NavBar } from './styled';

export default function Gallery({ config }) {
  const data = config.lista;

  const updateShow = (id) => {
    const picture = document.querySelectorAll('.spot-picture');
    const button = document.querySelectorAll('.btt');

    const color = ['red', 'green', 'yellow', 'black'];

    picture.forEach((e) => {
      const { className } = e;
      const type = Number(className.split(' ')[1]);

      e.style.display = type === id ? 'inline-block' : 'none';
    });

    button.forEach((e) => {
      const { className } = e;
      const type = Number(className.split(' ')[1]);

      e.style.borderBottom = type === id ? '2.5px solid' : 'none';

      e.style.color = type === id ? `${color[type - 1]}` : '#000000';
    });
  };

  return (
    <Main>
      <NavBar>
        <button
          className="btt 1"
          type="button"
          onClick={() => {
            updateShow(1);
          }}
        >
          Gastronomia
        </button>

        <button
          className="btt 2"
          type="button"
          onClick={() => {
            updateShow(2);
          }}
        >
          Natureza
        </button>

        <button
          className="btt 3"
          type="button"
          onClick={() => {
            updateShow(3);
          }}
        >
          Cultura
        </button>

        <button
          className="btt 4"
          type="button"
          onClick={() => {
            updateShow(4);
          }}
        >
          Aventura
        </button>
      </NavBar>

      {data.map((e) => (
        <div className={`spot-picture ${e.tipo}`} key={String(e.nome)}>
          <img src={e.img} alt="img" />

          <div className="pic-data">
            <span>
              <MdLocationPin />
              <p>{e.provincia}</p>
            </span>

            <h5>{e.nome}</h5>

            <p className="desc">{e.descricao}</p>
          </div>
        </div>
      ))}
    </Main>
  );
}

Gallery.defaultProps = {
  config: {},
};

Gallery.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  config: PropTypes.object,
};
