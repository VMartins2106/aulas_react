import React from "react";
import Classe from "./componentes/Classe";
import Carro from "./componentes/Carro";

export default function Aula5() {

  function carro(){
      let velMax=200
      console.log(this)
      // ESTES FUNCIONAM SÓ NO BOTÃO COM BIND
      // console.log(this.cor)
      // console.log(this.marca)
      // console.log(this.modelo)
  }
  let detalhes={
      cor:'Branco',
      marca: 'VW',
      modelo: 'Golf'
  }
  let carroDestalhes = carro.bind(detalhes)

  return (
    <div style={{display:'flex'}}>
      <div style={{borderStyle:'dotted'}}>
        <h1>Componentes de classe</h1>
        <Classe criador='Victor Martins' curso='Curso de React'/>
      </div>
      <div style={{marginLeft:'5%',borderStyle:'dotted'}}>
        <Carro fator={1}/>
      </div>
      <div style={{
        marginLeft:'5%',borderStyle:'dotted'}}>
        <h1>Explicação do BIND
          <br/>
          Exemplo está na div à direita
        </h1>
        <button onClick={()=>carro()}>
          Mostrar carro usando THIS 
          <br/>
          (aparece window ou undefined)
        </button>
        <br/>
        <br/>
        <button onClick={()=>carroDestalhes()}>
          Mostrar detalhes do carro usando BIND
          <br/>
          (o BIND introduz um novo contexto ao this,
          <br/>
          o que passa todas as informações do parâmetro,
          <br/>
          passado para ele)
          <br/>
          (portanto, ao usar 'this.' você consegue capturar
          <br/>
          as chaves, com seus valores, do objeto passado para ele)
        </button>
      </div>
    </div>
  );
}