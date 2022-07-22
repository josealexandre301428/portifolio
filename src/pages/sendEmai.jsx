import React, { Component } from "react";

class sendEmail extends Component{
    render() {
        return(
           <main className="emailForm">
              <h1>Entre em contato</h1>
              <form action="mailto:jasspfilho@gmail.com" method="post" encType="text/plain">
                <label>
                  Nome<br/>
                  <input className="inputForm" name="nome" type="text" required/>
                </label>
                <label>
                  Email<br/>
                  <input className="inputForm" name="email" type="text" required/>
                </label>
                <label>
                  Sua menssagem<br/>
                  <textarea className="inputForm" name="menssagem" type="text" required/>
                </label>
                <input className="inputForm" type="submit" value="Enviar" />
                <input className="inputForm" type="reset" value="Limpar" />
              </form>
           </main>
        )
    }
}

export default sendEmail;