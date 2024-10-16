import { useState } from "react";
import {
  Wrapper,
  Profile,
  About,
  Projects,
  Contact,
  Social,
} from "../styles/Home";
import { icons, InfoWorks, links, Tech } from "../settings";
import emailjs from "emailjs-com";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_grthw37",
        "template_fgvjnhb",
        formData,
        "F01V-P3EOwyS8T9g2"
      )
      .then(
        (result) => {
          console.log("Email enviado com sucesso:", result.text);
        },
        (error) => {
          console.error("Erro ao enviar o email:", error.text);
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Wrapper>
      <Profile>
        <img src="/Profile.jpg" alt="profile" width={72} height={72} />
        <div>
          <h2>Vinicius de Freitas e Silva</h2>
          <h3>Desenvolvedor Front-end / UX/UI Designer</h3>
        </div>
      </Profile>
      <About>
        <h3>Sobre mim</h3>
        <br />
        <p>
          Sou desenvolvedor de software com especialização em front-end e design de UX/UI, 
          com paixão por criar soluções digitais criativas que aprimoram a experiência do usuário. 
          Minha missão é transformar ideias em interfaces únicas, agradáveis e eficientes, que proporcionem 
          uma navegação intuitiva e prazerosa.
          <br />
          <br />
          Atualmente cursando Análise e Desenvolvimento de Sistemas (ADS), porém minha jornada na área de tecnologia 
          teve inicio em 2020. Desde então, venho aprimorando minhas habilidades em diversas ferramentas e tecnologias 
          essenciais para o desenvolvimento de software. Sendo algumas delas <strong>HTML, CSS, JavaScript, Reactjs </strong> 
          e mais recentemente <strong>NodeJS.</strong> Esse processo contínuo de aprendizado tem me permitido construir uma base 
          sólida para o desenvolvimento de soluções inovadoras e eficientes.
        </p>
        <br />
        <h3>Certificados</h3>
        <br />
        <div>
          <a href={links.Figma} target="_blank">
            Figma
            <img src={icons.Check} />
          </a>
          <a href={links.UXdesign} target="_blank">
            UX Design
            <img src={icons.Check} />
          </a>
        </div>
        <br />
        <br />
        <h3>Tecnologias</h3>
        <br />
        <ul>
          <img src={Tech.HTML} />
          <img src={Tech.CSS} />
          <img src={Tech.JavaScript} />
          <img src={Tech.React} />
          <img src={Tech.Node} />
          <img src={Tech.Github} />
          <img src={Tech.Git} />
        </ul>
        <br />
      </About>
      <Projects>
        <h3>Projetos</h3>
        <br />
        {InfoWorks.map((info, index) => (
          <li key={index}>
            <h3>{info.title}</h3>
            <p>{info.description}</p>
            <div>
              <a href={info.github} target="_blank">
                Codigo <img src={icons.Eye} />
              </a>
              <a href={info.view} target="_blank">
                website <img src={icons.Eye} />
              </a>
            </div>
          </li>
        ))}
      </Projects>
      <Contact>
        <h3>Contato</h3>
        <br />
        <form onSubmit={sendEmail}>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Seu nome aqui..."
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Seu Email aqui..."
            onChange={handleChange}
          />
          <label>Mensagem</label>
          <textarea
            type="text"
            name="message"
            value={formData.message}
            placeholder="Escreva uma mensagem aqui..."
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </Contact>
      <Social>
        <h3>Redes Sociais</h3>
        <br/>
        <div>
          <a href="https://github.com/freitas024" target="_blank">
            <img src={icons.Github}/>
            Github 
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-de-freitas-e-silva-137a02295/"
            target="_blank"
          >
            <img src={icons.Linkedin}/>
            Linkedin 
          </a>
          <a
            href="https://www.instagram.com/ux_vini/profilecard/?igsh=MXB4eHZuNmd0NHR1dA%3D%3D"
            target="_blank"
          >
            <img src={icons.Instagram}/>
            Instagram 
          </a>
        </div>
      </Social>
    </Wrapper>
  );
}
