import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Habilidades from './pages/Habilidades';
import Home from './pages/Home';
import NotFoud from './componentes/paginacao/NotFoud';
import SendEmail from './componentes/formulario/sendEmai';
import Header from './componentes/paginacao/Header';
import Footer from './componentes/paginacao/footer';
import './App.css';
import Fundamentos from './componentes/projetos/Fundamentos';
import FrontEnd from './componentes/projetos/FrontEnd';
import BackEnd from './componentes/projetos/BackEnd';
import CienciaDaComputacao from './componentes/projetos/CienciaDaComputacao';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <section>
          <Header/>
          <main className='main'>
            <Routes>
              <Route path="/habilidades" element={ <Habilidades /> } />
              <Route path="/Fundamentos" element={ <Fundamentos /> } />
              <Route path="/Front-End" element={ <FrontEnd /> } />
              <Route path="/Back-End" element={ <BackEnd /> } />
              <Route path="/Ciencia_Da_Computacao" element={ <CienciaDaComputacao /> } />
              <Route path='/sendEmail' element={ <SendEmail /> } />
              <Route exact path="/" element={ <Home /> } />
              <Route path="*" element={ <NotFoud /> } />
            </Routes>
          </main>
          <Footer />
        </section>   
      </BrowserRouter>
    );
  }
}

export default App;
