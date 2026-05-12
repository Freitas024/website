import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TechMarquee } from "../components/ui";
import { About } from "../components/About";
import { Experience } from "../components/experience";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { Contato } from "../components/Contatos";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Contato />
      <Footer />
    </main>
  );
}
