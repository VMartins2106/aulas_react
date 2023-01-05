import React from "react";

export default function NotasJson(props){
    return(
        <div>
            <legend>Informe a nota {props.num}:</legend>
            <input type='text' value={props.nota} name={props.nome} onChange={e=>props.handler(e)}></input>
        </div>
    )
}