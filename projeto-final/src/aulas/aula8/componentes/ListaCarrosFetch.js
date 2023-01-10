import React,{useState,useEffect} from "react";

export default function ListaCarrosFetch(){

    const [carros,setCarros] = useState([])

    useEffect(()=>{

        fetch('https://victorreactexemplo1.victormartins24.repl.co').then(
                res => res.json()
            ).then(
                (resultado)=>{
                    setCarros(resultado)
                }
            )
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