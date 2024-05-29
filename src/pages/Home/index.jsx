import UXanimation from "../../components/animationux";
import Working from "../../components/working";
import { Cards, cursos } from "../../constants";
import { Wrapper, Counter, Animation, CounterProject } from "./Home";
import { useTypewriter } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Desenvolvedor Front-end", "UX/UI Designer"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 40,
  });
  return (
    <>
      <Wrapper>
        <Counter>
          <h2>
            Olá, Me chamo vinicius, <span>{text}</span>
          </h2>
          <h3>apaixonado por animações e design eficiente.</h3>
          <ul>
            <li id={cursos.figma.id}>
              {cursos.figma.texto}
              <a href={cursos.figma.href} target="_blank">
                {cursos.figma.id}
                <img src={cursos.figma.icon} />
              </a>
            </li>
            <li id={cursos.uxDesign.id}>
              {cursos.uxDesign.texto}
              <a href={cursos.uxDesign.href} target="_blank">
                {cursos.uxDesign.id}
                <img src={cursos.figma.icon} />
              </a>
            </li>
          </ul>
        </Counter>
        <Animation>
          <UXanimation />
        </Animation>
      </Wrapper>
      <CounterProject>
        <h1>Projetos</h1>
        <ol>
          {Cards.map((element) => (
            <div key={element.id}>
              <ul>
                <Working />
              </ul>
              <main>
                <li>{element.title}</li>
                <span>{element.trabalho}</span>
                <p>Projeto desenvolvido para font-end.</p>
              </main>
            </div>
          ))}
        </ol>
      </CounterProject>
    </>
  );
}
