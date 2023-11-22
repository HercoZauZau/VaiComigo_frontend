/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileContainerGuia from '../../components/ProfileContainerGuia';
import axios from '../../services/axios';

import Loading from '../../components/Loading';
import GalleryPacotes from '../../components/GalleryPacotes';

import { Main, Cover, Title, Desc } from './styled';

export default function Destination() {
  const { id } = useParams();
  const user_type = useSelector((state) => state.auth.user.user_type);

  console.log(user_type);

  const [destinos, setDestinos] = React.useState([]);
  const [profiles, setProfiles] = React.useState([]);
  const [packages, setPackages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/destinos/${id}`);
        const response = await axios.get('/users');
        // const packageGuide = await axios.get('/packages-guide');
        const packageGuide = await axios.get('/packages');

        setDestinos(data);
        setProfiles(response.data);
        setPackages(packageGuide.data);

        console.log(packageGuide.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);

  return (
    <Main>
      <Loading isLoading={isLoading} />

      <Cover src={destinos.image_url} alt="img" />

      <Title>{destinos.name}</Title>

      <Desc>
        <h3>Conheça nossos guias mais próximos</h3>

        <ProfileContainerGuia
          province={destinos.province_id}
          config={profiles}
        />

        <h3>Incríveis pacotes próximos de {destinos.name}</h3>

        <GalleryPacotes
          pacote={destinos.id}
          province={destinos.province_id}
          config={packages}
        />
      </Desc>
    </Main>
  );
}
