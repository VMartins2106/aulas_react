import React,{useState,useEffect} from "react";
import axios from "axios";

export default function ListaCarrosFuncao(){

    const [carros,setCarros] = useState([])

    useEffect(()=>{
            axios.get('https://victorreactexemplo1.victormartins24.repl.co').then(res=>{
                const dadosCarros = res.data
                setCarros(dadosCarros)
            })
        }
    )

    return(
        <div>
            {carros.map(
                carro => <div key={carro.id}>{carro.id} {carro.marca} - {carro.modelo} </div>
            )}
        </div>
    )
}