import React,{useState,useEffect} from "react";

export default function Pagina1() {

  const [pagina,setPagina] = useState(1)

  const linksPagina = (p)=>{
     if(p===0){
      window.open('http://localhost:3000','_self')
    }
  }

  useEffect(
    ()=>{
      const url = window.location.href
      const res = url.split('?')
      setPagina(res[1])
    }
  )

  return (
    <div>
        <h1>Página 1</h1>
        <h3>Curso de React</h3>
        <button onClick={()=>linksPagina(0)}>Página inicial</button>
    </div>
  );
}