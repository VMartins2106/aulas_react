import React from "react";
import Globais from "./Globais";

export default function Info() {
  return (
    <div>
        <h1>arquivo Info.js</h1>
        <p>{'Criador: ' + Globais.criador}</p>
        <p>{Globais.curso}</p>
        <p>{'Ano: ' + Globais.ano}</p>
    </div>
  );
}