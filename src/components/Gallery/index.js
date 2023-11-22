import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { Main } from './styled';

export default function Gallery({ config, imagesOnly }) {
  const data = config;
  const getNomeProvincia = (id) => {
    switch (id) {
      case 1:
        return 'Maputo';
      case 2:
        return 'Gaza';
      case 3:
        return 'Inhambane';
      case 4:
        return 'Sofala';
      case 5:
        return 'Manica';
      case 6:
        return 'Tete';
      case 7:
        return 'Zambezia';
      case 8:
        return 'Nampula';
      case 9:
        return 'Cabo Delgado';
      case 10:
        return 'Niassa';
      default:
        return 'Provincia Desconhecida';
    }
  };

  return (
    <Main>
      {imagesOnly
        ? data.map((e) => (
            <div key={e}>
              <img src={e} alt="img" />
            </div>
          ))
        : data.map((e) => (
            <Link
              to={`destino/${e.id}`}
              className="picture"
              key={String(e.name)}
            >
              <img src={e.image_url} alt="img" />

              <div className="pic-data">
                <h5>{e.name}</h5>

                <span className="location">
                  <MdLocationPin />

                  <p>{getNomeProvincia(e.province_id)}</p>
                </span>

                <span>
                  {/* <p>{e.nota.toFixed(1)}</p> */}

                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </span>
              </div>
            </Link>
          ))}
    </Main>
  );
}

Gallery.defaultProps = {
  config: [],
  imagesOnly: false,
};

Gallery.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  config: PropTypes.array,
  imagesOnly: PropTypes.bool,
};
