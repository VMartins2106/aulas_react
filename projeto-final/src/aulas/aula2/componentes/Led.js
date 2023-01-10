import React from 'react';
import Verde from './imgs/verde.png'
import Vermelho from './imgs/vermelho.png'

export default function Led(props) {
    return (
        <>
        <img src={props.ligado ? Verde : Vermelho} style={{display: 'flex', width: '100px', marginTop: '10px'}}/>
        <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado ? 'Desligar' : 'Ligar'}</button>
        </>
    );
}