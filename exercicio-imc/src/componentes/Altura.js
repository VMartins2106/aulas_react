import React,{useState} from "react";

export default function Altura(props){

    return(
      <div>
        <label>Altura:</label>
        <br/>
        <input type='text' value={props.h} onChange={(e)=>props.sh(e.target.value)}></input>
      </div>
    )
}