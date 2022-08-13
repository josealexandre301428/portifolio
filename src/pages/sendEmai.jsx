import React, { Component } from "react";
import fundo from "../images/Fundo.png";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class sendEmail extends Component{
    render() {
        return(
          <main className="back">
           <section className="emailForm">
              <h1>Entre em contato</h1>
              <Form 
                className="form"
                action="mailto:jasspfilho@gmail.com"
                method="post"
                encType="text/plain"
              >
                <FormGroup colum  >
                  <Label>
                    Nome<br/>
                    <Input bsSize="lg" className="inputForm" name="nome" type="text" required/>
                  </Label>
                  <Label>
                    Email<br/>
                    <Input bsSize="lg" className="inputForm" name="email" type="text" required/>
                  </Label>
                  <Label>
                    Sua menssagem<br/>
                    <Input bsSize="lg" className="inputForm" name="menssagem" type="textarea" required/>
                  </Label>
                  <Button type="submit" value="Enviar">Enviar</Button>
                  <Button type="reset" value="Limpar">Limpar</Button>
                </FormGroup>
              </Form>
           </section>
           </main>
        )
    }
}

export default sendEmail;