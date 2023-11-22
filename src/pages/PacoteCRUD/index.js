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
import { Form, Main } from './styled';

export default function DestinationCRUD() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const user_id = useSelector((state) => state.auth.user.user_id);

  const [base_price, setBasePrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [provinceID, setProvinceID] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const usuario = await axios.get(`/user/${user_id}`);

        setProvinceID(usuario.data.provincia_id);

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

    const newPhoto = document.getElementById('picInput').files[0];

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('id_province', provinceID);
    formData.append('base_price', base_price);
    formData.append('id_guide', user_id);
    formData.append('image', newPhoto);

    let formErrors = false;

    if (title.length < 3 || title.length > 50) {
      toast.error('O nome precisa ter entre 3 e 50 caracteres');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      setIsLoading(true);

      if (id) {
        // await axios.put(`sem rota`, {
        //   title,
        //   description,
        //   id_province: provinceID,
        //   base_price,
        //   id_guide: user_id,
        // });
        // toast.success('Pacote editado com sucesso');
      } else {
        await axios.post('/addpacote', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        toast.success('Pacote criado com sucesso');
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

        <h1>{id ? 'Editar Pacote' : 'Cadastrar Pacote'}</h1>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="titulo">
            <span>Título</span>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label htmlFor="descricao">
            <span>Descrição</span>

            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label htmlFor="preco">
            <span>Preço Base</span>

            <input
              type="number"
              min={0}
              value={base_price}
              onChange={(e) => setBasePrice(e.target.value)}
            />
          </label>

          <label htmlFor="imgURL">
            <span>Link da Imagem</span>
            <input id="picInput" type="file" />
          </label>

          <button type="submit">Salvar</button>
        </Form>
      </Container>
    </Main>
  );
}
