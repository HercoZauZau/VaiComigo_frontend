/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GalleryMyPacotes2 from '../../components/GalleryMyPacotes2';

import axios from '../../services/axios';
import Loading from '../../components/Loading';

import { Main } from './styled';

export default function Destination() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = React.useState(false);
  const [packages, setPackages] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get('/packages');

        console.log(data);

        setPackages(data);

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

      <h1>Pacotes de Viagens</h1>

      <GalleryMyPacotes2 config={packages} />
    </Main>
  );
}
