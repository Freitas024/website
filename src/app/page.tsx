import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { Contato } from "../components/Contatos";
import { Footer } from "../components/Footer";
import { TechMarquee } from "../components/ui";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contato />
      <Footer />
    </main>
  );
}
