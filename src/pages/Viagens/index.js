/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import Loading from '../../components/Loading';

import { Main } from './styled';

export default function Destination() {
  const { id } = useParams();
  const user_type = useSelector((state) => state.auth.user.user_type);
  const user_id = useSelector((state) => state.auth.user.user_id);

  const [isLoading, setIsLoading] = React.useState(false);
  const [viagens, setViagens] = React.useState([]);

  const handleSubmit = async (e, vid) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await axios.put(`/accept-trip/${vid}`, {});

      toast.success('sucesso');

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      const status = get(error, 'response.status', 0);
      const data = get(error, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((err) => toast.error(err));
      } else {
        toast.error('Erro desconhecido');
      }
    }
  };

  const handleSubmit2 = async (e, vid) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await axios.put(`/deny-trip/${vid}`, {});

      toast.success('sucesso');

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      const status = get(error, 'response.status', 0);
      const data = get(error, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((err) => toast.error(err));
      } else {
        toast.error('Erro desconhecido');
      }
    }
  };

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        if (user_type == 'guia') {
          const { data } = await axios.get(`/trips-guide/${id}`);
          setViagens(data);
        } else {
          const { data } = await axios.get(`/trips-tourist/${id}`);
          setViagens(data);
        }

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

      {viagens.map((e) => (
        <div className="viagens" key={String(e.id)}>
          <p className="descr">Dia da viagem: {e.date}</p>
          <p className="descr">Estado: {e.is_accepted}</p>
          <p className="descr">Nr. de Pessoas: {e.number_people}</p>
          <p className="descr">Preco: {e.price} MZN</p>

          {user_type === 'guia' && (
            <div className="bb">
              <button onClick={(i) => handleSubmit(i, e.id)} type="submit">
                Aceitar
              </button>
              <button onClick={(i) => handleSubmit2(i, e.id)} type="submit">
                Rejeitar
              </button>
            </div>
          )}
        </div>
      ))}
    </Main>
  );
}
