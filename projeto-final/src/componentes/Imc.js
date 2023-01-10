import React,{useState} from "react";

import TabelaIMC from "./calculo/TabelaIMC";
import PesoIMC from "./calculo/PesoIMC";
import AlturaIMC from "./calculo/AlturaIMC";
import CalcularIMC from "./calculo/CalcularIMC";
import ResultadoIMC from "./calculo/ResultadoIMC";

export default function Imc(){

    const [peso,setPeso] = useState(0)
    const [altura,setAltura] = useState(0)
    const [resultado,setResultado] = useState(0)

    return(
    <div style={{height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <PesoIMC p={peso} sp={setPeso}/>
        <AlturaIMC h={altura} sh={setAltura}/>
        <CalcularIMC p={peso} h={altura} sRes={setResultado}/>
        <ResultadoIMC res={resultado}/>
        <TabelaIMC/>
      </div>
    )
}