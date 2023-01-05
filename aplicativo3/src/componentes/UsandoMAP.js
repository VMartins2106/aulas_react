import React from "react";

export default function UsandoMAP(){
    const carros = ['HRV','Golf','Focus','Cruze','Argo']
    const listaCarros = carros.map(
        (c,i) => <li key={i}>{i} - {c}</li>
    )

    const carrosJson = [
        {categoria: 'Esporte',preco: '110000.00', modelo: 'Gof GTI'},
        {categoria: 'Esporte',preco: '120000.00', modelo: 'Camaro'},
        {categoria: 'SUV',preco: '85000.00', modelo: 'HRV'},
        {categoria: 'SUV',preco: '83000.00', modelo: 'T-Cross'},
        {categoria: 'Utilitário',preco: '120000.00', modelo: 'Hillux'},
        {categoria: 'Utilitário',preco: '90000.00', modelo: 'Ranger'},
    ]
    const listaCarrosJson = carrosJson.map(
        (c,i) => <li key={i}>{i} - {c.categoria} - {c.modelo} - R${c.preco}</li>
    )

    const estiloDiv = {
        borderStyle: 'outset',
        marginTop: '1%', 
        marginLeft: '1.5%',
        display: 'flex', 
        flexDirection: 'column', 
        position: 'Fixed',
        width: '30%',
    }
    return(
        <div style={estiloDiv}>
            <p>Exemplo com LISTA</p>
            <ul>{listaCarros}</ul>
            <p>Exemplo com JSON</p>
            <ul>{listaCarrosJson}</ul>
        </div>
    )
}