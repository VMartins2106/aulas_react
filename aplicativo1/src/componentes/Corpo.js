import React from "react";
import Dados from "./Dados";
import Informacoes from "./Informacoes";

export default function Corpo(){

    const github = ()=>{
        return 'VMartins2106'
    }

    const email = 'victor.almeida.martins21@gmail.com'
    const tel = '(11) 9-6058-6785'

    const somar = (v1,v2)=>{
        return v1+v2
    }

    return(
        <section>
            <h2>Curso de React</h2>
            <p>Olhe no GitHub para mais projetos</p>
            <Dados 
                github={github} 
                linkedin='https://www.linkedin.com/in/devvictor/' 
                curso='React.js'
                somar={somar}
            />
            <Informacoes
                email={email}
                tel={tel}
            />
        </section>
    )
}