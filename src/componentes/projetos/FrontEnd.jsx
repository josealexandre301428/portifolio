import React from "react";
import { useLocation } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Button, NavLink } from 'reactstrap';

function semBarras(page) {
  return page.replace(/[\W_]+/g,' ');
}

function FrontEnd (){

  const page = useLocation();
  const title = semBarras(page.pathname); 

    return (
      <main className="back">
        <div className="projetoMain">
            <h1>{title}</h1>
            <div className="outOrder">
              <main className="cards">
                <div className="card">
                  <Card
                      style={{
                        width: '18rem'
                      }}
                    >
                      <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                        Lessons-Learned
                        </CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        >
                          Html, Css, JavaScript
                        </CardSubtitle>
                        <CardText>
                          Meu primeiro projeto, nele aprendi a criar uma aplicaçao web utilizando Html, Css e JavaScript.
                        </CardText>
                        <Button>
                          <NavLink  target="_blank" href="https://github.com/josealexandre301428/Lessons-Learned">
                            Mais
                          </NavLink>
                        </Button>
                      </CardBody>
                  </Card>
                </div>
                <div className="card">
                  <Card
                      style={{
                        width: '18rem'
                      }}
                    >
                      <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          To-Do-List
                        </CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        >
                          Html, Css, JavaScript
                        </CardSubtitle>
                        <CardText>
                        Neste projeto desenvolvi uma lista de tarefas usando HTML, CSS e JavaScript
                        </CardText>
                        <Button>
                          <NavLink target="_blank" href="https://github.com/josealexandre301428/To-Do-List">
                            Mais
                          </NavLink>
                        </Button>
                      </CardBody>
                  </Card>
                </div>
                <div className="card">
                  <Card
                      style={{
                        width: '18rem'
                      }}
                    >
                      <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          Playground-Functions
                        </CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        >
                          Html, Css, JavaScript
                        </CardSubtitle>
                        <CardText>
                          Neste projeto utilizei variáveis e tipos primitivos em JavaScript, Utilizei tambem conceitos da linguagem como a tipagem dinâmica e operadores lógicos/aritméticos/de atribuição em meu código. 
                        </CardText>
                        <Button>
                          <NavLink target="_blank" href="https://github.com/josealexandre301428/Playground-Functions">
                            Mais
                          </NavLink>
                        </Button>
                      </CardBody>
                  </Card>
                </div>
              </main>
            </div>
        </div>
        </main>
    )
}

export default FrontEnd;