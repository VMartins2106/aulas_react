import React from "react";

// QUANDO AS IMAGENS ESTÃO DENTRO DO SRC, FAZEMOS ASSIM: 
import Logo from './imgs/logo.png'

export default function Header(){
    return (
        <header>
            <img src={Logo}/>
            <h1>Curso React</h1>
        </header>
    )
}