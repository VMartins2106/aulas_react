import React from "react";

export default function Informacoes(props){
    return(
        <section>
            <p>Email: {props.email}</p>
            <p>Tel: {props.tel}</p>
        </section>
    )
}