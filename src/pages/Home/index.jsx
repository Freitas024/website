import UXanimation from "../../components/animationux";
import {
  CounterAnimation,
  CounterInformation,
  Wrapper,
  BlocoUm,
  BlocoDois,
} from "./Home";
import { Cards, cursos } from "../../constants";
import { useTypewriter } from "react-simple-typewriter";
import Working from "../../components/working";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Desenvolvedor Front-end", "UX/UI Designer"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 40,
  });
  return (
    <Wrapper>
      <BlocoUm>
        <CounterInformation>
          <h1>
            Me chamo Vinicius, <span>{text}</span>
          </h1>
          <h2>Apaixonado por animações e design bonitos.</h2>
          <ul>
            <li>
              <p>
                {cursos.figma.texto}
                <a href={cursos.figma.href} target="_blank">
                  {cursos.figma.id}
                </a>
                <img src={cursos.figma.icon} />
              </p>
            </li>
            <li>
              <p>
                {cursos.uxDesign.texto}
                <a href={cursos.uxDesign.href} target="_blank">
                  {cursos.uxDesign.id}
                </a>
                <img src={cursos.uxDesign.icon} />
              </p>
            </li>
          </ul>
        </CounterInformation>
        <CounterAnimation>
          <UXanimation />
        </CounterAnimation>
      </BlocoUm>
      <BlocoDois>
        <h1>projetos</h1>
        <ol>
          {Cards.map((elements) => (
            <ul key={elements.id}>
              <main>
                <Working />
              </main>
              <li>{elements.title}</li>
              <p>{elements.trabalho}</p>
            </ul>
          ))}
        </ol>
      </BlocoDois>
    </Wrapper>
  );
}
