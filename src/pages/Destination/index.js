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
import axios from '../../services/axios';
import Loading from '../../components/Loading';

import { Main, Gallery } from './styled';

export default function Destination() {
  const { id } = useParams();
  const user_type = useSelector((state) => state.auth.user.user_type);

  console.log(user_type);

  const [destinos, setDestinos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/destinos`);
        setDestinos([...data]);
        // console.log(data);
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
        {user_type == 'admin' && (
          <div className="add">
            <Link to="/destinocrud">
              <div className="plus">
                <BsFillPlusCircleFill />
              </div>

              <h1>novo destino</h1>
            </Link>
          </div>
        )}

        {destinos.map((e) => (
          <div className="picture" key={String(e.name)}>
            <img src={e.image_url} alt="img" />

            <div className="pic-data">
              <h5>{e.name}</h5>

              <span>
                {/* <p>{e.nota.toFixed(1)}</p> */}

                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </span>
            </div>

            {user_type == 'admin' && (
              <Link to={`/destinocrud/${e.id}`}>
                <div className="edit">
                  <BsFillPencilFill />
                </div>
              </Link>
            )}
          </div>
        ))}
      </Gallery>
    </Main>
  );
}
