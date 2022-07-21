import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Habilidades from './pages/Habilidades';
import Projetos from './pages/Projetos';
import Home from './pages/Home';
import NotFoud from './pages/NotFoud';
import Footer from './footer';
import './App.css';

class App extends React.Component {
  render() {
    function MouseOver({target}) {
      target.style.color="white";
    }
    function MouseOut({target}){
      target.style.color="black";
    }
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <section>
          <div>
            <header className="header">
              <h1 id="title">Meu Portfólio</h1>
              <div className="navi">
              <Link
                to="/"
                style={{ textDecoration: 'none', color: 'black' }}
                onMouseOver={MouseOver} 
                onMouseOut={MouseOut}
              >
                Perfil
              </Link>
              <Link
                to="/habilidades"
                style={{ textDecoration: 'none', color: 'black' }}
                onMouseOver={MouseOver} 
                onMouseOut={MouseOut}
              >
                Habilidades
              </Link>
              <Link
                to="/projetos"
                style={{ textDecoration: 'none', color: 'black' }}
                onMouseOver={MouseOver} 
                onMouseOut={MouseOut}
              >
                Projetos
              </Link>
              </div>
            </header>
          </div>
          <main className='main'>
            <Routes>
              <Route path="/habilidades" element={ <Habilidades /> } />
              <Route path="/projetos" element={ <Projetos /> } />
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
