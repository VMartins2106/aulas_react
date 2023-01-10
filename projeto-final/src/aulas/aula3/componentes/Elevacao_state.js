import React,{useState} from "react";
import Notas from "./Notas";
import Resultado from "./Resultado";

export default function Elevacao_state(){

    const estiloDiv = {
        borderStyle: 'inset',
        marginTop: '26%', 
        marginLeft: '32%',
        display: 'flex', 
        flexDirection: 'column', 
        position: 'Fixed',
        width: '30%',
    }

    const [nota1,setNota1]=useState(0)
    const [nota2,setNota2]=useState(0)
    const [nota3,setNota3]=useState(0)
    const [nota4,setNota4]=useState(0)

    return(
        <div style={estiloDiv}>
            <b><center>ELEVAÇÃO DE STATE</center></b>
            <Notas num={1} nota={nota1} setNota={setNota1}/>
            <Notas num={2} nota={nota2} setNota={setNota2}/>
            <Notas num={3} nota={nota3} setNota={setNota3}/>
            <Notas num={4} nota={nota4} setNota={setNota4}/>
            <Resultado somaNotas={(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4))/4}/>
        </div>  
    )
}