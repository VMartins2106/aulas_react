import React from "react";

export default function Caixa(props){
    return(
        <>
            <p>{props.github}</p>
            {props.children} {/* ISTO RETORNA TUDO QUE TEM DENTRO DO CAIXA NO APP*/}
            {props.children[0]} {/* ISTO RETORNA TUDO QUE TEM DENTRO DO CAIXA NO APP*/}
            {props.children[1]} {/* ISTO RETORNA TUDO QUE TEM DENTRO DO CAIXA NO APP*/}
        </>
    )
}