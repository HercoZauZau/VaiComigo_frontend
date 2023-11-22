/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
import React from 'react';
import PropTypes from 'prop-types';

import { BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Main } from './styled';

export default function GalleryPacotes({ config, guia_id }) {
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
        return '';
    }
  };

  return (
    <Main>
      {data.map((e) => (
        <Link
          to={`/solicitar/${e.id}`}
          className="picture"
          key={String(e.name)}
        >
          <img
            src="https://i.pinimg.com/564x/fe/86/0e/fe860e96538a5be157e7f42677e14b70.jpg"
            alt="img"
          />

          <div className="price">{e.base_price} MZN</div>

          <div className="pic-data">
            <h5>{e.title}</h5>

            <p className="descr">{e.description}</p>

            <span className="location">
              <div className="md">
                <MdLocationPin />

                <p>{getNomeProvincia(e.id_province)}</p>
              </div>

              <span>
                {/* <p>{e.nota.toFixed(1)}</p> */}

                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </span>
            </span>
          </div>
        </Link>
      ))}
    </Main>
  );
}

GalleryPacotes.defaultProps = {
  config: [],
  guia_id: 0,
};

GalleryPacotes.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  config: PropTypes.array,
  guia_id: PropTypes.number,
};
