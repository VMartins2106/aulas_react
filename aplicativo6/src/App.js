import React,{useState} from "react";
import Carro from "./componentes/Carro";
import BaseClasse from "./componentes/BaseClasse";

function App() {

  const [carro,setCarro]=useState(true)

  const mostrarOcultarCarro = ()=>{
    setCarro(!carro)
  }

  return (
    <div style={{display:'flex'}}>
      <div style={{marginLeft:'3%',borderStyle:'dotted'}}>
        {carro ? <Carro fator={1}/> : <h1>Carro removido</h1>}
        <br/>
        <br/>
        <button onClick={()=>mostrarOcultarCarro()}>
            {carro ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>
      <div style={{marginLeft:'3%',borderStyle:'dotted'}}>
        <BaseClasse/>
      </div>
    </div>
  );
}

export default App;
