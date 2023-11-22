/* eslint-disable camelcase */
import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';
import { Form } from './styled';

export default function ProfileRegister() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const user_type = useSelector((state) => state.auth.user.user_type);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [isLoading, setIsLoading] = React.useState(false);
  const [pessoas, setPessoas] = React.useState(0);
  const [idTour, setIdTour] = React.useState(0);
  const [datav, setDatav] = React.useState('');

  React.useEffect(() => {
    if (!isLoggedIn) return;

    async function getData() {
      try {
        setIsLoading(true);

        // const { data } = await axios.get(`/user/${id}`);

        // console.log(data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        const status = get(error, 'response.status', 0);
        const errors = get(error, 'response.data.errors', []);

        if (status === 400) errors.map((err) => toast.error(err));
      }
    }

    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (isLoggedIn) {
        await axios.post(`/addtrip/${id}`, {
          date: datav,
          number_people: pessoas,
          id_tourist: idTour,
        });
      }

      toast.success('Sucesso');

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

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1> Viagem </h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="pessoas">
          <span>Nr. de Pessoas</span>
          <input
            type="number"
            min={0}
            value={pessoas}
            onChange={(e) => setPessoas(e.target.value)}
          />
        </label>

        <label htmlFor="dias">
          <span>Data</span>
          <input
            type="date"
            min={0}
            value={datav}
            onChange={(e) => setDatav(e.target.value)}
          />
        </label>

        <label htmlFor="id">
          <span>Turista</span>
          <input
            type="number"
            min={0}
            value={idTour}
            onChange={(e) => setIdTour(e.target.value)}
          />
        </label>

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
