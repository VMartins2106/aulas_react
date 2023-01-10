import React from "react";

export default class PesoIMC extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div>
                    <label>Peso:</label>
                    <br/>
                    <input type='text' value={this.props.p} onChange={(e)=>this.props.sp(e.target.value)}></input>
                </div>
            </div>
        )
    }
}