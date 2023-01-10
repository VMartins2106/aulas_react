import React from "react"
import Header from "./componentes1/Header";
import Corpo from "./componentes1/Corpo";
import Relogio from "./componentes1/Relogio";
// IMPORTANDO NO APP PAI, NÃO PRECISAMOS IMPORTAR NO RESTANTE
import Estilo from './estilizacao1/style.css'

export default function Aula1() {

  /*const dono = 'Victor Martins - GitHub: VMartins2106'
  const curso = 'Curso de React'
  const funcaoArrow = ()=>{
    return 'Victor Martins'
  }
  function funcao(){
    return 'React'
  }*/

  const textoDestaque={
    color:'#00f',
    fontSize: '1.5em'
  }

  return (
    <section className="caixa">
      <section>
        <Relogio/>
      </section>
      <h1 style={{color: "#f00", fontSize: '1.5em'}}>Curso de React</h1>
      <h2 style={textoDestaque}>Victor Martins</h2>
      <p className="texto">Entre no GitHub para ter acesso a todo meu conteúdo</p>
      <a href="https://www.github.com/VMartins2106" target='_blank'>Link do meu GitHub</a>
      <Header/>
      <Corpo/>
    
    {/*
      <header>
         PARA INSERIR JAVASCRIPT, ABRIMOS CHAVES }
        <p>{dono + ' - React'}</p>
        <p>{curso}</p>
        <p>Texto normal</p>
        <p>Com função arrow: {funcaoArrow()}</p>
        <p>Com função: {funcao()}</p>
      </header>
      <div>
        <img src={Logo}/>
        { ASSIM, PEGAMOS UMA IMAGEM QUE ESTÁ EM PUBLIC }
        <img src="/img/imagem.jpg"/>
      </div>
    {*/}
    </section>
  );
}