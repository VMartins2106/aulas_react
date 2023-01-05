import React,{useState,useEffect} from "react";
import Globais from "./componentes/Globais";
import Info from "./componentes/Info";
import Pagina1 from "./componentes/paginas/Pagina1";
import Pagina2 from "./componentes/paginas/Pagina2";

function App() {

  const [resumo,setResumo] = useState(Globais.resumo)

  const gravarResumo=()=>{
    Globais.resumo=resumo
  }
  const verResumo=()=>{
    alert(Globais.resumo)
  }
  

  const [pagina,setPagina] = useState(0)

  const linksPagina = (p)=>{
    if(p===1){
      window.open('http://localhost:3000?1','_self')
    } else if(p===2){
      window.open('http://localhost:3000?2','_self')
    } else if(p===0){
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

  const retornaPagina = ()=>{
    if(pagina==1){
      return <Pagina1/>
    } else if(pagina==2){
      return <Pagina2/>
    } else {
      return  <div>
                <button onClick={()=>linksPagina(0)}>Página inicial</button>
                <br/>
                <button onClick={()=>linksPagina(1)}>Página 1</button>
                <br/>
                <button onClick={()=>linksPagina(2)}>Página 2</button>                
              </div>
    }
  }

  return (
    <div style={{display:'flex'}}>
      <div style={{margin:'3%',borderStyle:'dotted'}}>
        <Info/>
        <hr/>
        <h1>Arquivo pai: Variáveis globais static</h1>
        <p>{'Criador: ' + Globais.criador}</p>
        <p>{Globais.curso}</p>
        <p>{'Ano: ' + Globais.ano}</p>
        <hr/>
        <input style={{width: '90%'}} type='text' value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
        <br/>
        <button onClick={()=>gravarResumo()}>Gravar resumo</button>
        <br/>
        <button onClick={()=>verResumo()}>Ver resumo</button>
      </div>
      <div style={{margin:'3%',borderStyle:'dotted'}}>
        <h1>Navegação nativa no react</h1>
        {retornaPagina()}
      </div>
    </div>
  );
}

export default App;
