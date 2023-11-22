/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
import React from 'react';
import PropTypes from 'prop-types';
import { get, lowerCase } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';

import { Main, ProfilePicture, ProfileLink } from './styled';

export default function ProfileContainer({ config, user_type }) {
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
      {config.map(
        (profile) =>
          lowerCase(profile.user_type) == user_type && (
            <ProfileLink
              to={`/pacotes/${profile.id}`}
              className="profileCont"
              id={`prov-${profile.provincia_id}`}
              key={String(profile.id)}
            >
              <ProfilePicture>
                {get(profile, 'Fotos[0].url', false) ? (
                  <img src={String(profile.Fotos[0].url)} alt="" />
                ) : (
                  <FaUserCircle className="FaUserCircle" />
                )}
              </ProfilePicture>

              <span>{profile.name}</span>

              <div className="profileData">
                <span className="location">
                  <MdLocationPin />
                  <p>{getNomeProvincia(profile.provincia_id)}</p>
                </span>

                <span className="italic">{profile.email}</span>

                <span className="rating">
                  {/* <p>{profile.nota.toFixed(1)}</p> */}

                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </span>
              </div>
            </ProfileLink>
          )
      )}
    </Main>
  );
}

ProfileContainer.defaultProps = {
  config: [],
  user_type: '',
};

ProfileContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  config: PropTypes.array,
  user_type: PropTypes.string,
};
