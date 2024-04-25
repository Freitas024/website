import Header from './pages/Header';
import Home from './pages/Home';
import Skills from './pages/Habilidades';
import Projetos from './pages/Projetos';
import Footer from './pages/Footer';

export default function App() {
  return(
    <main>
      <Header/>
      <section className='section' id='Home'>
        <Home/>
      </section>
      <Skills/>
      <section className='section' id='Works'>
        <Projetos/>
      </section>
      <section className='section' id='Footer'>
        <Footer/>
      </section>
    </main>
  );
}
