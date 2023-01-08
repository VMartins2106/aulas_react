import React from "react";
import ListaCarros from "./componentes/ListaCarros";
import ListaCarrosFuncao from "./componentes/ListaCarrosFuncao";

export default function App() {
  return (
    <div>
      <div style={{margin: '5%',display: 'flex'}}>
        <div style={{borderStyle: 'dotted',width:'30%'}}>
          <h1>API COM CLASSE</h1>
          <ListaCarros/>
        </div>
        <div style={{borderStyle: 'dotted',width:'30%',marginLeft: '5%'}}>
          <h1>API COM FUNCÃO</h1>
          <ListaCarrosFuncao/>
        </div>
      </div>
      <div style={{margin: '5%'}}>
        <div style={{borderStyle: 'dotted',width:'30%'}}>
          <h1>API USANDO FETCH</h1>
          <ListaCarros/>
        </div>
      </div>
    </div>
  );
}