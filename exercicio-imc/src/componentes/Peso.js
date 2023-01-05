import React,{useState} from "react";

export default function Peso(props){

    return(
        <div>
            <div>
                <label>Peso:</label>
                <br/>
                <input type='text' value={props.p} onChange={(e)=>props.sp(e.target.value)}></input>
            </div>
        </div>
    )
}