/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';

import Gallery from '../../components/Gallery';
import GalleryPacotes from '../../components/GalleryPacotes';
import Gallery2 from '../../components/Gallery2';
import Header2 from '../../components/Header2';
import TopRating from '../../components/TopRating';
import Reasons from '../../components/Reasons';
import ProfileContainer from '../../components/ProfileContainer';
import Testemonie from '../../components/Testemonie';
import Loading from '../../components/Loading';
import { HomeContainer } from '../../styles/GlobalStyles';
import { Title, Main } from './styled';
import { melhoresDestinos, melhoresAtracoes } from '../../fakeapi';

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [profiles, setProfiles] = React.useState([]);
  const [destinos, setDestinos] = React.useState([]);
  const [pacotes, setPacotes] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const response = await axios.get('/users');
        const destinoData = await axios.get('/destinos');
        // const pacotesData = await axios.get('/packages-guide');
        setProfiles(response.data);
        setDestinos(destinoData.data);
        // setPacotes(pacotesData.data);

        // console.log(pacotesData.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <HomeContainer>
      <Loading isLoading={isLoading} />

      <Main>
        <Header2 />

        <h1 className="rsn mw5">Aproveite cada momento conosco!</h1>
        <Reasons />

        {/* <h1 className="rsn">Destinos mais procurados</h1> */}
        {/* <GalleryPacotes config={pacotes} /> */}

        <h1 className="rsn">Destinos mais procurados</h1>
        <Gallery config={destinos} />

        <div className="dst">
          <Link to="/destinos">
            <button type="button">Todos Destinos</button>
          </Link>
        </div>

        <h1 className="rsn">Guias disponíveis</h1>
        <ProfileContainer user_type="guia" config={profiles} />

        <div className="dst">
          <Link to="/guides">
            <button type="button">Todos Guias</button>
          </Link>
        </div>

        <h1 className="rsn">Testemunhos de Aventuras</h1>
        <Testemonie />

        <h1 className="rsn mb5">Maiores atrações</h1>
        <Gallery2 config={melhoresAtracoes} />

        {/* <TopRating config={melhoresDestinos} /> */}
      </Main>
    </HomeContainer>
  );
}
