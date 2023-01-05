import React from "react";

export default function ResultadoJson(props){
    return(
        <div>
            <p>Soma das notas: {props.somaNotas}</p>
            <p>{props.somaNotas >= 60 ? 'Aprovado' : 'Reprovado'}</p>
        </div>
    )
}