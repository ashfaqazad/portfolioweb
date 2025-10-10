import './App.css';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Skills from './Pages/Skills';
import Footer from './Pages/Footer'

function App() {
  return (
    <>

    <Navbar />
     <Home />
    <About />
    <Services />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
