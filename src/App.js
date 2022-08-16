import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Habilidades from './pages/Habilidades';
import Projetos from './pages/Projetos';
import Home from './pages/Home';
import NotFoud from './pages/NotFoud';
import SendEmail from './pages/sendEmai';
import Header from './componentes/Header';
import Footer from './componentes/footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <section>
          <Header/>
          <main className='main'>
            <Routes>
              <Route path="/habilidades" element={ <Habilidades /> } />
              <Route path="/projetos" element={ <Projetos /> } />
              <Route path="/Fundamentos" element={ <Projetos /> } />
              <Route path="/Front-End" element={ <Projetos /> } />
              <Route path="/Back-End" element={ <Projetos /> } />
              <Route path="/Ciencia_Da_Computacao" element={ <Projetos /> } />
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
