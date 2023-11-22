import React from 'react';
import Loading from '../../components/Loading';
import ProfileContainer from '../../components/ProfileContainer';
import { HomeContainer } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Home() {
  const [profiles, setProfiles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const response = await axios.get('/users');
        setProfiles(response.data);

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

      <ProfileContainer user_type="guia" config={profiles} />
    </HomeContainer>
  );
}
