import React from "react";

export default class CalcularIMC extends React.Component{

    constructor(props){
        super(props)
    }

    calc = ()=>{
        this.props.sRes(this.props.p/(this.props.h*this.props.h))
    }

    render(){
        return(
            <div>
                <div>
                    <button onClick={()=>this.calc()}>Calcular IMC</button>
                </div>
            </div>
        )
    }
}