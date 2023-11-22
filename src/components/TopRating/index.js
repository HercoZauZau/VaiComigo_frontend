/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';

import { Main, Gallery, Title } from './styled';

export default function TopRating({ config }) {
  const data = config;

  const endHoverEffect = () => {
    const mainTR = document.getElementById('mainTR');

    mainTR.style.backgroundImage =
      "url('https://wallpaperaccess.com/full/81552.jpg')";
  };

  const hoverEffect = (img) => {
    const mainTR = document.getElementById('mainTR');

    mainTR.style.backgroundImage = `url('${img}')`;
  };

  return (
    <Main id="mainTR">
      <Title>
        <h2>Moçambique</h2>
        <h2 className="italic">Destinos de Ouro</h2>
      </Title>

      <Gallery>
        {data.map((e) => (
          <div className="picture" key={String(e.nome)}>
            <img src={e.img} alt="img" />
            <div className="pic-data">
              <h5>{e.nome}</h5>

              <p className="descTxt">{e.desc}</p>

              {/* <span>
                <p>{e.nota.toFixed(1)}</p>

                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </span> */}
            </div>
          </div>
        ))}
      </Gallery>
    </Main>
  );
}

TopRating.defaultProps = {
  config: {},
};

TopRating.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  config: PropTypes.object,
};
