/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Main } from './styled';

export default function Header2() {
  return (
    <Main>
      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img
              src="https://media.istockphoto.com/id/1010160820/photo/beautiful-smiling-woman-with-a-map-in-her-hands.jpg?s=612x612&w=0&k=20&c=qAtZ4B507p8W2C3T86LxO0korN7qcRywYjcVy5ZsVoQ="
              alt="img"
            />
          </div>
          <div className="content">
            <div>
              <h2>Experiência Autêntica</h2>
              <p>
                Descubra o destino com guias locais apaixonados que oferecem
                insights culturais e aventuras únicas.
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img
              src="https://media.istockphoto.com/id/1368808461/photo/young-woman-feeding-fish-on-tropical-beach.jpg?s=612x612&w=0&k=20&c=qIdzSEI3BQvGliysV65R5NzHGuhX_4Mq_PU7nBhhsBQ="
              alt="img"
            />
          </div>
          <div className="content">
            <div>
              <h2>Atendimento Personalizado</h2>
              <p>
                Adaptamos cada passeio às suas preferências, garantindo uma
                experiência memorável e sob medida.
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img
              src="https://media.istockphoto.com/id/1354385636/photo/unrecognizable-man-with-bag-and-suitcase-walking-in-airport-rear-view.jpg?s=612x612&w=0&k=20&c=VuhHtlG1JsWujj3CVtcibmIie2_K2zfbbxSeL7anx_M="
              alt="img"
            />
          </div>
          <div className="content">
            <div>
              <h2>Conexões Locais</h2>
              <p>
                Acesso exclusivo a locais e atividades autênticas,
                proporcionando uma imersão genuína na cultura local.
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img
              src="https://media.istockphoto.com/id/977701560/photo/vintage-compass-close-up.jpg?s=612x612&w=0&k=20&c=mkj2-keRlfi02IanmOekKhHauNTaF32sVlcW3o9DsUc="
              alt="img"
            />
          </div>
          <div className="content">
            <div>
              <h2>Segurança e Confiabilidade</h2>
              <p>
                Viaje com tranquilidade, sabendo que nossos guias experientes
                cuidam de todos os detalhes da sua jornada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
