import React from "react";

export default class AlturaIMC extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
      return(
        <div>
          <label>Altura:</label>
          <br/>
          <input type='text' value={this.props.h} onChange={(e)=>this.props.sh(e.target.value)}></input>
        </div>
      )
    }
}