import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import { NullPage } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  return (
    <Container>
      <NullPage>
        <h1>404</h1>

        <h2>Página não encontrada</h2>

        <p>
          O link que você clicou pode estar quebrado ou a página pode ter sido
          removida ou renomeada.
        </p>

        <Link to="/">
          <button type="button">
            <BiArrowBack />
            Voltar
          </button>
        </Link>
      </NullPage>
    </Container>
  );
}
