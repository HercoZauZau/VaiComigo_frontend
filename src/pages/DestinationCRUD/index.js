import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';
import { Form, Main } from './styled';

export default function DestinationCRUD() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [name, setName] = React.useState('');
  const [provinciaID, setProvinciaID] = React.useState('');
  const [imgURL, setImgURL] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/destinos/${id}`);

        setName(data.name);
        setProvinciaID(data.province_id);
        setImgURL(data.image_url);

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

    let formErrors = false;

    if (name.length < 3 || name.length > 50) {
      toast.error('O nome precisa ter entre 3 e 50 caracteres');
      formErrors = true;
    }

    if (provinciaID < 0) {
      toast.error('O ID deve ser positivo');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      setIsLoading(true);

      if (id) {
        await axios.put(`/destinos/${id}`, {
          name,
          province_id: provinciaID,
          image_url: imgURL,
        });

        toast.success('Destino editado com sucesso');
      } else {
        await axios.post('/destinos/', {
          name,
          province_id: provinciaID,
          image_url: imgURL,
        });

        toast.success('Destino criado com sucesso');
      }

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
    <Main>
      <Container>
        <Loading isLoading={isLoading} />

        <h1>{id ? 'Editar Destino' : 'Cadastrar Destino'}</h1>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="nome">
            <span>Nome</span>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="provinciaID">
            <span>Provincia ID</span>

            <input
              type="number"
              value={provinciaID}
              onChange={(e) => setProvinciaID(e.target.value)}
            />
          </label>

          <label htmlFor="imgURL">
            <span>Link da Imagem</span>

            <input
              type="text"
              value={imgURL}
              onChange={(e) => setImgURL(e.target.value)}
            />
          </label>

          <button type="submit">Salvar</button>
        </Form>
      </Container>
    </Main>
  );
}
