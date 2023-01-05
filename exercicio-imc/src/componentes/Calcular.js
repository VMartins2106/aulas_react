import React from "react";

export default function Calcular(props){

    const calc = ()=>{
        props.sRes(props.p/(props.h*props.h))
    }

    return(
        <div>
            <div>
                <button onClick={calc}>Calcular IMC</button>
            </div>
        </div>
    )
}