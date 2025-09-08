import { useEffect } from "react";
import './App.css'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Espera a que el navegador termine de renderizar
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App;
