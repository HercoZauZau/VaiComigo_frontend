/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  BsStarFill,
  BsFillPencilFill,
  BsFillPlusCircleFill,
} from 'react-icons/bs';
import GalleryMyPacotes from '../../components/GalleryMyPacotes';

import axios from '../../services/axios';
import Loading from '../../components/Loading';

import { Main, Gallery } from './styled';

export default function Destination() {
  const { id } = useParams();
  // const user_type = useSelector((state) => state.auth.user.user_type);
  const user_id = useSelector((state) => state.auth.user.user_id);

  // console.log(user_id);

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

      <Gallery>
        <div className="add">
          <Link to="/pacotesCrud">
            <div className="plus">
              <BsFillPlusCircleFill />
            </div>

            <h1>novo pacote</h1>
          </Link>
        </div>
      </Gallery>
      <GalleryMyPacotes guia_id={user_id} config={packages} />
    </Main>
  );
}
