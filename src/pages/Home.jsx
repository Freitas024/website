import { useState } from "react";
import { Wrapper, Profile, About, Projects, Contact } from "../styles/Home";
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
          Olá, Me chamo Vinicius Freitas sou desenvolvedor de software com foco
          em front-end e em UX/UI Design, Gosto muito da parte do front-end por
          ser onde eu posso criar e desenvolver ideias criativas que ajude o
          usuario na hora de ultilizar produtos e serviços no meio digital
          criando uma experiência unica, agradavél e eficiênte para quem for
          navegar na web.
          <br />
          <br />
          Atualmente estou no 2° Perido do curso de{" "}
          <strong>ADS - Análise e desenvolvimento de sistemas</strong> pela
          faculdade, mas tenho contato com esse mundo da tecnologia desde 2020
          que foi onde eu comecei a estudar sobre desenvolvimento de software
          atualmente possuo conhecimentos em algumas tecnologias como{" "}
          <strong>HTML, CSS, JAVASCRIPT, REACTJS</strong> também tenho
          conhecimento em versionamento de codigo com{" "}
          <strong>GIT e GITHUB</strong> e atualmente estou aprofundando meus
          estudos com
          <strong> NODEJS </strong>.
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
    </Wrapper>
  );
}
