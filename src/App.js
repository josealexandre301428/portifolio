import { BrowserRouter } from 'react-router-dom';
import { DropdownToggle,UncontrolledDropdown, DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Habilidades from './pages/Habilidades';
import Projetos from './pages/Projetos';
import Home from './pages/Home';
import NotFoud from './pages/NotFoud';
import SendEmail from './pages/sendEmai';
import Footer from './footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <section>
          <div >
            <header className="header shadow-lg">
              <div className="navi">
                <UncontrolledDropdown>
                  <DropdownToggle 
                  caret
                  color="dark"
                  >
                    ≣
                  </DropdownToggle>
                  <DropdownMenu>
                        <Link
                          to="/"
                        >
                          <DropdownItem Perfil>
                            <Badge
                              className="text-dark"
                              color="light"
                            >
                              Perfil
                            </Badge>
                          </DropdownItem>
                        </Link>
                        <Link
                          to="/habilidades"
                        >
                          <DropdownItem Habilidades>
                            <Badge
                              className="text-dark"
                              color="light"
                            >
                              Habilidades
                            </Badge>
                          </DropdownItem>
                        </Link>
                        <Link
                          to="/projetos"
                        >
                          <DropdownItem Projetos>
                            <Badge
                              className="text-dark"
                              color="light"
                            >
                              Projetos
                            </Badge>
                          </DropdownItem>
                        </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <h1 id="title">Desenvolvedor Front End</h1>
            </header>
          </div>
          <main className='main'>
            <Routes>
              <Route path="/habilidades" element={ <Habilidades /> } />
              <Route path="/projetos" element={ <Projetos /> } />
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
