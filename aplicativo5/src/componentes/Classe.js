import React from "react";

export default class Classe extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <h1>Primeiro componente de Classe</h1>
                <h2>Curso: {this.props.curso}</h2>
                <h3>Criador: {this.props.criador}</h3>
            </>
        )
    }
}