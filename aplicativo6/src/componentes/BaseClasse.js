import React from "react";

export default class BaseClasse extends React.Component{
    constructor(props){
        // PARA PERMITIR O USO DE PROPS
        super(props)

        // USO DE STATE
        this.state={
            criador: 'Victor Martins',
            curso: 'Curso de React',
            ativo: true,
            nome: this.props.nomeAluno
        }
        this.status = this.props.status

        // BINDAGEM
        this.ad = this.ativarDesativar.bind(this)
    }

    // FUNÇÃO PARA MANIPULAR STATE
    ativarDesativar(){
        this.setState(
            (state)=>({
                ativo: !state.ativo
            })
        )
        
    }

    componentDidMount(){
        console.log('O componente foi criado')
    }
    componentDidUpdate(){
        console.log('O componente foi atualizado')
    }
    componentWillUnmount(){
        console.log('O componente foi removido')
    }

    render(){
        return(
            <>
                <h1>Base para um componente de Classe</h1>
                {/* CHAMADA DA FUNÇÃO COM BIND */}
                <button onClick={this.ad}>Ativar / Desativar (COM BIND)</button>
                {/* CHAMADA DA FUNÇÃO SEM BIND */}
                <button onClick={()=>this.ativarDesativar()}>Ativar / Desativar (SEM BIND)</button>
                <br/>
                <br/>
                {this.state.ativo ? 'ATIVADO' : 'DESATIVADO'}
            </>
        )
    }

}