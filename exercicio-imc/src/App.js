import React,{useState} from "react";

import Tabela from "./componentes/Tabela";
import Peso from "./componentes/Peso";
import Altura from "./componentes/Altura";
import Resultado from "./componentes/Resultado";
import Calcular from "./componentes/Calcular";

import TabelaIMC from "./componentes/componentes-classe/TabelaIMC";
import PesoIMC from "./componentes/componentes-classe/PesoIMC";
import AlturaIMC from "./componentes/componentes-classe/AlturaIMC";
import CalcularIMC from "./componentes/componentes-classe/CalcularIMC";
import ResultadoIMC from "./componentes/componentes-classe/ResultadoIMC";

const tabelaIMC = ()=>{
  return(
    <table border='1' style={{borderCollapse:'collapse'}}>
      <thead>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do peso</td>
          <td>Abaixo de 18.5</td>
        </tr>
        <tr>
          <td>Peso normal</td>
          <td>Entre 18.5 e 24.9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29.9</td>
        </tr>
        <tr>
          <td>Obesidade Grau I</td>
          <td>Entre 30 e 34.9</td>
        </tr>
        <tr>
        <td>Obesidade Grau II</td>
          <td>Entre 35 e 39.9</td>
        </tr>
        <tr>
          <td>Obesidade Grau III</td>
          <td>Maior que 40</td>
        </tr>
      </tbody>
    </table>
  )
}

const fpeso = (p,sp)=>{
  return(
    <div>
      <label>Peso:</label>
      <input type='text' value={p} onChange={(e)=>sp(e.target.value)}></input>
    </div>
  )
}
const faltura = (h,sh)=>{
  return(
    <div>
      <label>Altura:</label>
      <input type='text' value={h} onChange={(e)=>sh(e.target.value)}></input>
    </div>
  )
}

const calcular = (p,h,sRes)=>{
  const calc = ()=>{
    sRes(p/(h*h))
  }
  return(
    <div>
      <button onClick={calc}>Calcular IMC</button>
    </div>
  )
}

const fresultado = (res)=>{
  return(
    <div>
      <p>Resultado: {res.toFixed(2)}</p>
    </div>
  )
}

export default function App() {

  const [peso,setPeso] = useState(0)
  const [altura,setAltura] = useState(0)
  const [resultado,setResultado] = useState(0)

  return (
    <div style={{borderStyle: 'dotted', display: 'flex'}}>
      <div style={{margin: '2%'}}>
        {fpeso(peso,setPeso)}
        {faltura(altura,setAltura)}
        {calcular(peso,altura,setResultado)}
        {fresultado(resultado)}
        {tabelaIMC()}
      </div>

      {/* UTILIZANDO ARQUIVOS EXTERNOS */}

      <div style={{margin: '2%', marginLeft: '10%'}}>
        <h1>Mesmo esquema, porém em arquivos externos</h1>
        <div style={{display: 'flex', gap: '50px'}}>
          <Peso p={peso} sp={setPeso}/>
          <Altura h={altura} sh={setAltura}/>
          <Tabela/>
        </div>
        <div style={{marginTop: '-14%'}}>
          <Calcular p={peso} h={altura} sRes={setResultado}/>
          <div style={{marginTop: '-5.7%',marginLeft: '32%'}}>
            <Resultado res={resultado}/>
          </div>
        </div>
      </div>
      <div style={{marginTop: '25.5%', marginLeft: '3%', position: 'absolute'}}>
        <h1>Mesmo esquema, porém em componentes de classe</h1>
      </div>
      <div style={{gap: '50px',display: 'flex', marginTop: '32%', marginLeft: '3%', position: 'absolute', width:'99.2%'}}>
        <PesoIMC p={peso} sp={setPeso}/>
        <AlturaIMC h={altura} sh={setAltura}/>
        <CalcularIMC p={peso} h={altura} sRes={setResultado}/>
        <ResultadoIMC res={resultado}/>
        <TabelaIMC/>
      </div>
    </div>
  );
}