import React from "react";

export default function Dados(props){
    
    let n1=10
    let n2=5

    return(
        <section>
            <p>GitHub: {props.github()}</p>
            <p>Linkedin: {props.linkedin}</p>
            <p>Curso: {props.curso}</p>
            <p>A soma de {n1} com {n2} é igual a: {props.somar(n1,n2)}</p>
        </section>
    )
}