import React from 'react';
import { Main } from './styled';

export default function Testemonie() {
  return (
    <Main>
      <div className="outerdiv">
        <div className="innerdiv">
          <div className="div1 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name">Rafael C.</p>
                <p className="designation">Jornada Cultural</p>
              </div>
            </div>
            <div className="review">
              <h4>
                Minha jornada com a agência de guias turísticos foi uma imersão
                total na cultura local.
              </h4>
              <p>
                “ Os guias eram nativos da região que visitamos, e sua paixão
                por compartilhar sua herança e tradições era palpável. Eles nos
                levaram a mercados locais, festivais tradicionais e até a
                aldeias remotas que normalmente não seriam visitadas pelos
                turistas. Foi uma experiência autêntica e enriquecedora que me
                fez sentir como se tivesse vivido a cultura, não apenas a
                visitado. A agência também se destacou em termos de organização
                e cuidado com os detalhes. ”
              </p>
            </div>
          </div>
          <div className="div2 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name">Jonathan Walters</p>
                <p className="designation">Aventuras na Natureza</p>
              </div>
            </div>
            <div className="review">
              <h4>Esta agência sempre foi uma aventura.</h4>
              <p>
                “ Eles têm um profundo respeito pelo meio ambiente e nos levaram
                a lugares deslumbrantes. Meus guias eram ambientalistas que
                compartilharam seu conhecimento. ”
              </p>
            </div>
          </div>
          <div className="div3 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name dark">Kira Whittle</p>
                <p className="designation dark">Viagens Memoráveis</p>
              </div>
            </div>
            <div className="review dark">
              <h4>
                Nossas viagens com a agência são sempre momentos especiais.
              </h4>
              <p>
                “ Eles têm a capacidade rara de criar itinerários que agradam a
                todas as idades, desde as crianças até os avós. Os guias eram
                incrivelmente pacientes e atenciosos com as crianças, tornando
                as experiências educacionais e divertidas ao mesmo tempo. O
                aspecto mais importante para nós é a segurança, e a agência
                sempre fez da segurança uma prioridade máxima. Eles escolheram
                destinos que são adequados para famílias e garantiram que todas
                as atividades fossem supervisionadas e seguras. Nossas viagens
                em família se tornaram memórias preciosas que sempre iremos
                valorizar. ”
              </p>
            </div>
          </div>
          <div className="div4 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name dark">Jeanette Harmon</p>
                <p className="designation dark">Aventura Gastronômica</p>
              </div>
            </div>
            <div className="review dark">
              <h4>Minha viagem foi uma aventura gastronômica. </h4>
              <p>
                “ Eles nos levaram a restaurantes locais autênticos que serviam
                pratos incríveis que eu nunca teria experimentado de outra
                forma. ”
              </p>
            </div>
          </div>
          <div className="div5 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name">Patrick Abrams</p>
                <p className="designation">Serviço Impecável</p>
              </div>
            </div>
            <div className="review">
              <h4>
                O serviço da agência é simplesmente impecável. Cada aspecto da
                viagem foi planejado com cuidado e atenção aos detalhes.
              </h4>
              <p>
                “ Desde o momento em que chegamos ao aeroporto até o nosso
                retorno, tudo foi perfeitamente coordenado. Os guias eram
                extremamente profissionais e bem preparados, respondendo a todas
                as nossas perguntas com paciência. Eu aprecio especialmente a
                flexibilidade da agência. Eles se adaptaram às nossas
                preferências e nos deram opções para personalizar nossa viagem.
                ”
              </p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
