import React, { Component } from "react";
import frontCertificado from "../images/FrontCertificado.jpg";
import fundamentosCertificado from "../images/fundamentosCertificado.jpg"
import html from "../images/fundamentos/html.svg";
import css from "../images/fundamentos/css.svg";
import js from "../images/fundamentos/javascript.svg";
import flexBox from "../images/fundamentos/flexbox.svg";
import bootstrap from "../images/fundamentos/Bootstrap.svg";
import git from "../images/fundamentos/git.svg";
import react from "../images/front/react.svg"
import redux from "../images/front/Redux.svg"
import RTestLibrary from "../images/front/RTestLibrary.svg"
import ageis from "../images/front/Metodologias.svg"
import hooks from "../images/front/hooks.svg"
import context from "../images/front/contextApi.svg"
import fundo from "../images/Fundo.png";






class Habilidades extends Component{
    render() {
        return(
            <>
            <section className="habilitys-container">
                    <div className="fundamentos">
                        <h1>Fundamentos</h1>
                        <div>
                            <img className="certificado" src={ fundamentosCertificado }
                                alt='foto certificado de fundamentos'/>
                        </div>
                        <div className="habilitys">
                            <div>
                                <img src={ html }
                                alt='foto-react'/>
                                <p>Html</p>
                            </div>
                            <div>
                                <img src={ css } alt="imagem-CSS" />
                                <p>CSS</p>
                            </div>
                            <div>
                                <img src={ js }alt="imagem-JS"/>
                                <p>Java Script</p>
                            </div>
                            <div>
                                <img src={ flexBox } alt="imagem-flexBox" />
                                <p>Flex Box</p>
                            </div>
                            <div>
                                <img src={ bootstrap } alt="imagem-bootstrap" />
                                <p>Bootstrap</p>
                            </div>
                            <div>
                                <img src={ git } alt="imagem-git" />
                                <p>Git</p>
                            </div>    
                        </div>
                    </div>
                    <div className="front" >
                    <h1>Front End</h1>
                        <div>
                            <img className="certificado" src={ frontCertificado }
                                alt='foto certificado de front'/>
                        </div>
                        <div className="habilitys">
                        <div>
                            <img src={ react } alt="imagem-React" />
                            <p>React</p>
                        </div>
                        
                        <div>
                            <img src={ redux } alt="imagem-Redux" />
                            <p>Redux</p>
                        </div>
                        <div>
                            <img src={ RTestLibrary }alt="imagem-RTestLibrary"/>
                            <p>React Test Library</p>
                        </div>
                        <div>
                            <img src={ ageis } alt="imagem metodologias ageis" />
                            <p>Metodologias Ágeis</p>
                        </div>
                        <div>
                            <img src={ hooks } alt="imagem-hooks" />
                            <p>React Hooks</p>
                        </div>
                        <div>
                            <img src={ context } alt="imagem-context" />
                            <p>Context Api</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="fundo-div">
              <img className="fundo" src={ fundo } alt="fundo" />
            </div>
        </>
        )
    }
}

export default Habilidades;
