import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaUserCircle, FaPlus } from 'react-icons/fa';

import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';
import {
  ProfilePicture,
  PhotosContainer,
  ProfileContainer,
  AddPhotos,
} from './styled';

export default function Profile() {
  const { id } = useParams();
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [photos, setPhotos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/alunos/${id}`);
        const Photos = get(data, 'Fotos', '');

        setName(data.nome);
        setSurname(data.sobrenome);
        setEmail(data.email);
        setAge(data.idade);
        setWeight(data.peso);
        setHeight(data.altura);
        setPhotos([...Photos]);

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

  const handleChange = async (e) => {
    const newPhoto = e.target.files[0];

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', newPhoto);

    try {
      setIsLoading(true);

      await axios.post('/fotos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Foto enviada com sucesso');

      setIsLoading(false);

      window.location.reload(false);
    } catch (error) {
      setIsLoading(false);

      const { status } = get(error, 'response', '');
      toast.error('Erro ao enviar a foto');

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <ProfileContainer>
        {id && (
          <ProfilePicture>
            {photos.length > 0 ? (
              <img src={String(photos[0].url)} alt="" />
            ) : (
              <FaUserCircle className="FaUserCircle" />
            )}

            <AddPhotos>
              <label htmlFor="foto">
                <input type="file" id="foto" onChange={handleChange} />
                <FaPlus />
              </label>
            </AddPhotos>
          </ProfilePicture>
        )}

        <div className="pmdata">
          <h1>
            {name} {surname}
          </h1>

          <span>{email}</span>
        </div>

        <div className="pdata">
          <div>
            <span>Idade</span> <span>{age}</span>
          </div>

          <div>
            <span>Altura</span> <span>{height}</span>
          </div>

          <div>
            <span>Peso</span> <span>{weight}</span>
          </div>

          <Link to={`/profile/${id}/edit`}>
            <button type="button">Editar</button>
          </Link>
        </div>

        <h3>Fotos</h3>

        <PhotosContainer>
          {photos.length > 1 ? (
            photos.map((i) => <img src={String(i.url)} alt="" />)
          ) : (
            <span>Nenhuma foto adicionada</span>
          )}
        </PhotosContainer>
      </ProfileContainer>
    </Container>
  );
}
