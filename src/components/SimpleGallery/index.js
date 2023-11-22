import React from 'react';
import PropTypes from 'prop-types';
import { BsStarFill } from 'react-icons/bs';

import { Main } from './styled';

export default function Gallery({ config }) {
  const data = config.lista;

  return (
    <Main>
      {data.map((e) => (
        <div className="picture" key={String(e.nome)}>
          <img src={e.img} alt="img" />

          <div className="pic-data">
            <h5>{e.nome}</h5>

            <span>
              <p>{e.nota.toFixed(1)}</p>

              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </span>
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
