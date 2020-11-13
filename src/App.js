/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
/* eslint-disable react/jsx-no-undef */
import { Reset } from 'styled-reset'
//Componentes
import {
  Content,
  Wrap
} from './Components/Template/style'
import {
  Left
} from './Components/Left/style'
import {
  Contato,
  Experiencia,
  Legenda,
  Perfil,
  Right,
  TextoRotate
} from './Components/Right/style'
//Foto
import Foto from './imgs/perfil.jpg';
//Render
const App = () => {
  return (
    <>
      <React.Fragment>
        <Reset />
        <Wrap>
          <Content>
            <Left>
              <div className="container">
              <div className="row">
                  <div className="col-full">
                    <h1 className="hero">Experiências de trabalho</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-left">
                    <span className="ano">2019</span>
                  </div>
                  <div className="col-right">
                    <h2 className="nome-empresa">Agência Coffee</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-full">
                    <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-left">
                    <span className="ano">2020</span>
                  </div>
                  <div className="col-right">
                    <h2 className="nome-empresa">Agência Velance</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-full">
                    <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                    </p>
                  </div>
                </div>
              </div>
            </Left>
            <Right>
              <Perfil>
                <img src={Foto} />
                <Legenda>
                  <h1>Brutus <br/> Rodrigues</h1>
                  <p className="profissao">Desenvolvedor Web</p>
                  <Experiencia>
                    <p className="texto_experiencia">Desenvolvedor <br/> Experiente</p>
                  </Experiencia>
                </Legenda>
              </Perfil>
              <Contato>
                <li>Telefone: (xx) xxxxx-xxxx</li>
                <li>E-mail: xxxxxx@gmail.com</li>
                <li>Link Linkedin</li>
              </Contato>
              <TextoRotate>
                <h1>Dev</h1>
              </TextoRotate>
            </Right>
          </Content>
        </Wrap>
      </React.Fragment>
    </>
  );
}

export default App;
