import React from "react";
import { useLocation } from "react-router-dom";


function semBarras(page) {
    return page.replace(/[\W_]+/g,' ');
}

function Projetos (){
const page = useLocation();
const title = semBarras(page.pathname); 
        return(
        <main className="back">
        <div className="projetoMain">
            <h1>{title}</h1>
            <div className="outOrder">
                <p>Em Desenvolvimento!</p>
            </div>
        </div>
        </main>
        )
}

export default Projetos;