import React from "react";

export default class Carro extends React.Component{

    constructor(props){
        super(props)
        this.modelo='HRV'
        this.state={
            ligado:false,
            velocidadeAtual:0
        }
        // CRIANDO O BIND DO LIGAR E DESLIGAR
        this.ld=this.ligarDesligar.bind(this)
    }

    ligarDesligar(){
        // this.state.ligado=true ISTO NÃO FUNCIONA

        //this.setState({ligado: !this.state.ligado})

        // FORMA MAIS SEGURA
        this.setState(
            (state)=>(
                {ligado: !state.ligado}
            )
        )

        /* MESMA FORMA SÓ QUE COM FUNCTION

        this.setState(
            function (state){
                return {
                    ligado: !state.ligado
                }
            }
        )*/
    }
    
    acelerar(){
        // FORMA MAIS SEGURA
        this.setState(
            (state,props)=>(
                {velocidadeAtual: state.velocidadeAtual + props.fator}
            )
        )
    }

    render(){
        return(
            <>
                <h1>Meu carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Velocidade atual: {this.state.velocidadeAtual}</p>
                <button onClick={()=>this.ligarDesligar()}>
                    {this.state.ligado ? 'Desligar carro' : 'Ligar carro'}
                </button>
                <button onClick={()=>this.acelerar()}>
                    Acelerar carro
                </button>
                <br/>
                <br/>
                <button onClick={this.ld}>
                    usando BIND
                    {this.state.ligado ? ' Desligar carro' : ' Ligar carro'}
                    {/* COMANDO DO BIND ESTÁ NA LINHA 12*/}
                </button>
            </>
        )
    }
}