import React from "react";

export default class Carro extends React.Component{

    constructor(props){
        super(props)
        this.modelo='HRV'
        this.state={
            ligado:false,
            velocidadeAtual:0
        }
        this.ld=this.ligarDesligar.bind(this)
    }

    ligarDesligar(){
        this.setState(
            (state)=>(
                {ligado: !state.ligado}
            )
        )
    }
    
    acelerar(){
        this.setState(
            (state,props)=>(
                {velocidadeAtual: state.velocidadeAtual + props.fator}
            )
        )
    }

    // CHAMADO QUANDO O COMPONENTE É CRIADO
    componentDidMount(){
        console.log('O carro foi criado')
    }

    // CHAMADO QUANDO O COMPONENTE É ATUALIZADO
    componentDidUpdate(){
        console.log('O carro foi atualizado')
    }

    // CHAMADO QUANDO O COMPONENTE É REMOVIDO
    componentWillUnmount(){
        console.log('O carro foi removido')
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
                </button>
            </>
        )
    }
}