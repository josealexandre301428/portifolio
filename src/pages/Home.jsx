import React, { Component } from "react";
import fotoJose from "../images/Foto-jose.png";

class Home extends Component{
    render() {
        return(
            <section className="home">
                <img id="fotoPrincipal" src={ fotoJose } alt="Foto Homem sorrindo" />
                <div className="homeContainer">
                    <h1>José Alexandre</h1>
                    <hr></hr>
                    <h3>Sobre mim</h3>
                    <p>Olá mundo, sou o José Alexandre, tenho 22 anos, sou brasileiro, nasci em Belo Horizonte capital de Minas Gerais e atualmente moro em Nova Lima que fica na região metropolitana de Belo Horizonte, sou estudante de Desenvolvimento de Software pela Trybe, muito empolgado com essa nova fase da vida, descobri essa paixão a pouco tempo e ja estou me dedicando bastante para alcançar meus objetivos, sem perder o foco no desenvolvimento da pessoa humana, com ética e empatia.
                    </p>
                </div>
            </section>
        )
    }
}

export default Home;