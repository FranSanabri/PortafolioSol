import './App.css';
import Background from './Background';
import AboutMe from './components/About Me/AboutMe';
import SolImagen from './components/Imagen/SolImagen';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import Skills from './components/Habilidades/Skills';
import Portafolio from './components/Portafolio/Portafolio';
import Contact from './components/Contactos/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Background />
     <NavBar />
    <Titulo />
    <AboutMe />
    <SolImagen />
    <Skills />
    <Portafolio />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
