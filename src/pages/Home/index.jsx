import UXanimation from '../../components/animationux';
import {Wrapper, Container} from '../../styles/styledHome';
import {useTypewriter} from 'react-simple-typewriter';

export default function Home() {

  const [text] = useTypewriter({
    words: ['Desenvolvedor Front-end', 'UX/UI Designer'],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 40,
  }); 

  const cursos = [
    {id: 'FIGMA', texto: 'Alura Cursos Online', href: 'https://cursos.alura.com.br/degree/certificate/a84be5bb-1a01-4b18-a3c0-d1f7675a4248?lang=pt_BR', url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 100 100'%3E%3Cpath fill='white' fill-rule='evenodd' d='m47.655 1.634l-35 95c-.828 2.24 1.659 4.255 3.68 2.98l33.667-21.228l33.666 21.228c2.02 1.271 4.503-.74 3.678-2.98l-35-95C51.907.514 51.163.006 50 .008c-1.163.001-1.99.65-2.345 1.626m-.155 14.88v57.54L19.89 91.461Z' color='white'/%3E%3C/svg%3E"},
    {id: 'UX DESIGN', texto: 'Alura Cursos Online', href: 'https://cursos.alura.com.br/degree/certificate/0c0e8901-ba81-45b9-88a5-e801323a9695?lang=pt_BR', url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 100 100'%3E%3Cpath fill='white' fill-rule='evenodd' d='m47.655 1.634l-35 95c-.828 2.24 1.659 4.255 3.68 2.98l33.667-21.228l33.666 21.228c2.02 1.271 4.503-.74 3.678-2.98l-35-95C51.907.514 51.163.006 50 .008c-1.163.001-1.99.65-2.345 1.626m-.155 14.88v57.54L19.89 91.461Z' color='white'/%3E%3C/svg%3E"},
  ];

  return(
    <Wrapper>
      <Container>
        <h2>Olá, Me chamo vinicius Freitas, <span>{text}</span></h2>
        <h3>Apaixonado por animações e design eficiêntes.</h3>
        { cursos.map( curso => (
          <li key={curso.id}>
            {curso.texto}
            <span><a href={curso.href} target='_blank'>{curso.id}</a></span>
            <img src={curso.url}/>
          </li>
        ))}
      </Container>
      <UXanimation/>
    </Wrapper>
  );
}