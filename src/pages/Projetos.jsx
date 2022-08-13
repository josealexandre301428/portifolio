import React, { Component } from "react";
import fundo from "../images/Fundo.png";

class Projetos extends Component{
    render() {
        return(
        <>
        <div>
            <h1>Projetos</h1>
            <div className="outOrder">
                <p>Em Desenvolvimento!</p>
            </div>
        </div>
        <div className="fundo-div">
                <img className="fundo" src={ fundo } alt="fundo" />
        </div>
        </>
        )
    }
}

export default Projetos;