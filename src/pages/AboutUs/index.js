import React from 'react';

import { Main, HeaderImg } from './styled';
import Testemonie from '../../components/Testemonie';
// import { melhoresDestinos, melhoresAtracoes, topGuias } from '../../fakeapi';

export default function AboutUs() {
  return (
    <Main>
      <HeaderImg>
        <img src="/assets/img/darkBanner.png" alt="img" />
      </HeaderImg>

      <h1>Testemunhos</h1>
      <Testemonie />
    </Main>
  );
}
