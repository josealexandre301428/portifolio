import React, { Component } from "react";

import fotoJose from "../images/Foto-jose.png";
import logoLink from "../images/linkedin-logo.png";
import logoGit from "../images/github-logo.png";
import logoEmail from "../images/email-logo.png";
import { Link } from "react-router-dom";

class Home extends Component{
    render() {
        function MouseOver({target}) {
            target.style.color="white";
          }
          function MouseOut({target}){
            target.style.color="black";
          }
        return(
            <section className="home">
                <img id="fotoPrincipal" src={ fotoJose } alt="Foto Homem sorrindo" />
                <div className="homeContainer">
                    <h1>José Alexandre</h1>
                    <hr></hr>
                    <h3>Sobre mim</h3>
                    <p>Olá mundo, sou o José Alexandre, tenho 23 anos, sou brasileiro, nasci em Belo Horizonte capital de Minas Gerais e atualmente moro em Nova Lima que fica na região metropolitana de Belo Horizonte, sou estudante de Desenvolvimento de Software pela Trybe, muito empolgado com essa nova fase da vida, descobri essa paixão a pouco tempo e ja estou me dedicando bastante para alcançar meus objetivos, sem perder o foco no desenvolvimento da pessoa humana, com ética e empatia.
                    </p>
                </div>
                <div className="homeContainer">
                    <h2 className="contact">Informações de contato</h2>
                   <div className="info-container">
                        <a 
                            className="icones"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/jos%C3%A9-alexandre-da-silva-e-souza-pinto-filho/"
                            style={{ textDecoration: 'none', color: 'black' }}
                            onMouseOver={MouseOver} 
                            onMouseOut={MouseOut}
                        >
                            <img  width= "50px" src={ logoLink } alt="linkedin logo" />
                        </a>
                        <a 
                            className="icones"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/josealexandre301428"
                            style={{ textDecoration: 'none', color: 'black' }}
                            onMouseOver={MouseOver} 
                            onMouseOut={MouseOut}
                        >
                            <img width= "50px" src={ logoGit } alt="linkedin logo" />
                        </a>
                        <Link
                            className="icones"
                            to="/sendEmail"
                            style={{ textDecoration: 'none', color: 'black' }}
                            onMouseOver={MouseOver} 
                            onMouseOut={MouseOut}
                        >
                            <img width= "50px" src={ logoEmail } alt="linkedin logo" />
                        </Link>
                   </div>
                </div>
            </section>
        )
    }
}

export default Home;