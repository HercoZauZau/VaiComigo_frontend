/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Main, NavBar, Letter } from './styled';
import { galeria } from '../../fakeapi';

export default function MainGallery() {
  const updateShow = (id) => {
    const picture = document.querySelectorAll('.spot-picture');
    const button = document.querySelectorAll('.btt');

    picture.forEach((e) => {
      const { className } = e;
      const type = Number(className.split(' ')[2]);

      if (id !== 0) {
        e.style.display = type === id ? 'inline-block' : 'none';
        // e.style.filter = type === id ? 'grayscale(0%)' : 'grayscale(100%)';
      } else {
        // e.style.filter = 'grayscale(0%)';
        e.style.display = 'inline-block';
      }
    });

    button.forEach((e) => {
      const { className } = e;
      const type = Number(className.split(' ')[1]);

      e.style.backgroundColor = type === id ? '#18988b' : '#c0c0c0';
    });
  };

  return (
    <Main>
      <h1 className="gal_title">Nossa Galeria</h1>

      <NavBar>
        <div
          className="btt 0"
          onClick={() => {
            updateShow(0);
          }}
        >
          Todas
        </div>

        <div
          className="btt 1"
          onClick={() => {
            updateShow(1);
          }}
        >
          Moçambique
        </div>

        <div
          className="btt 2"
          onClick={() => {
            updateShow(2);
          }}
        >
          Momentos
        </div>

        <div
          className="btt 3"
          onClick={() => {
            updateShow(3);
          }}
        >
          Natureza
        </div>
      </NavBar>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry className="msGallery" gutter="10px">
          {galeria.map((image) => (
            <img
              key={image.id}
              src={String(image.url)}
              style={{ width: '100%', display: 'block' }}
              className={`gImg spot-picture ${image.tipo}`}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <Letter>
        <h1>Kanimambo</h1>

        <p>
          Queridos Amigos e Viajantes Aventureiros, aqui, queremos expressar
          nossa gratidão profunda a cada um de vocês que escolheu a VaiComigo
          como sua companheira de viagem. Obrigado por confiarem em nós para
          criar momentos inesquecíveis e experiências únicas em suas vidas. É
          através dos seus sorrisos, olhares de admiração e histórias
          compartilhadas que nossa paixão por guiar e explorar o mundo ganha
          vida. Cada fotografia capturada, cada destino explorado e cada amizade
          formada nos enche de alegria e orgulho. Em nossa galeria de fotos,
          celebramos não apenas os lugares incríveis que visitamos, mas também a
          incrível comunidade de viajantes que construímos ao longo dos anos.
          Cada imagem representa não apenas um local, mas também um momento
          especial que vivemos juntos. Agradecemos por confiarem em nós para
          transformar suas viagens em aventuras memoráveis. Seja um pôr do sol
          majestoso em um destino exótico, uma caminhada desafiadora nas
          montanhas, ou um momento de contemplação diante de um monumento
          histórico, estamos honrados por termos sido parte desses momentos com
          você. Nossa missão é continuar a inspirar, explorar e compartilhar
          essas experiências inesquecíveis. Obrigado por fazerem parte desta
          jornada conosco.
        </p>

        <p>Com gratidão, a equipe da VaiComigo.</p>
      </Letter>
    </Main>
  );
}
