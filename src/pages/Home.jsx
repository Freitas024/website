import React from 'react';
import { Wrapper, Profile, About } from '../styles/Home';
import { icons, links } from '../settings';


export default function Home() {
  return (
    <Wrapper>
      <Profile>
        <img src='../../public/Profile.jpg' alt='profile' width={72} height={72}/>
        <div>
          <h2>Vinicius de Freitas e Silva</h2>
          <h3>Desenvolvedor Front-end / UX/UI Designer</h3>
        </div>
      </Profile>
      <About>
        <h3>Sobre mim</h3>
        <br/>
        <p>
          Olá, Me chamo Vinicius Freitas sou desenvolvedor de software com foco em front-end 
          e em UX/UI Design, Gosto muito da parte do front-end por ser onde eu posso criar e
          desenvolver ideias criativas que ajude o usuario na hora de ultilizar produtos e serviços
          no meio digital criando uma experiência unica, agradavél e eficiênte para quem for navegar na web.
          <br/>
          <br/>
          Atualmente estou no 2° Perido do curso de <strong>ADS - Análise e desenvolvimento de sistemas</strong> pela faculdade, mas
          tenho contato com esse mundo da tecnologia desde 2020 que foi onde eu comecei a estudar sobre desenvolvimento de software 
          atualmente possuo conhecimentos em algumas tecnologias como <strong>HTML, CSS, JAVASCRIPT, REACTJS</strong> também tenho 
          conhecimento em versionamento de codigo com <strong>GIT e GITHUB</strong> e atualmente estou aprofundando meus estudos com
          <strong> NODEJS </strong>.
        </p>
        <br/>
          <h3>Certificados</h3>
          <br/>
          <div>
            <a href={links.Figma} target='_blank'>
              Figma
              <img src={icons.Check}/>
            </a>
            <a href={links.UXdesign} target='_blank'>
              UX Design
              <img src={icons.Check}/>
            </a>
        </div>
      </About>
    </Wrapper>
  );
}

