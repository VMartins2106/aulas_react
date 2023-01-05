import React,{useEffect,useState} from 'react';
import Caixa from './componentes/contencao/Caixa';
import Curso from './componentes/contencao/Curso';

function App() {

  const contencao = {
    borderStyle: 'dotted',
    width: '20%'
  }
  const hook = {
    borderStyle: 'dotted',
    width: '20%',
    marginLeft: '1%'
  }
  const local_storage = {
    borderStyle: 'dotted',
    width: '20%',
    marginLeft: '1%'
  }

  const [contagem,setContagem]=useState(0)

  useEffect(
    ()=>console.log("página carregada"),
    document.title = 'Contagem:'+contagem
  )

  const [nome,setNome] = useState()
  const armazenar = (chave,valor)=>{
    localStorage.setItem(chave,valor)
  }
  const consultar = (chave)=>{
    alert(localStorage.getItem(chave))
  }
  const apagar = (chave)=>{
    localStorage.removeItem(chave)
  }

  return (
    <div style={{display: 'flex'}}>
      <div style={contencao}>
        <Caixa github='http://www.github.com/VMartins2106'>
          <Curso/>      
          <p>Visual Studio Code</p>
        </Caixa>
      </div>
      <div style={hook}>
        <p>Contagem: {contagem}</p>
        <button onClick={()=>setContagem(contagem+1)}>Contar</button>
      </div>
      <div style={local_storage}>
        <label>Digite um nome</label>
        <input type='text' value={nome} onChange={(e)=>setNome(e.target.value)}/>
        <br/>
        <button onClick={()=>armazenar('ls_nome',nome)}>Gravar nome</button>
        <br/>
        <button onClick={()=>consultar('ls_nome')}>Procurar nome</button>
        <br/>
        <button onClick={()=>apagar('ls_nome')}>Apagar nome</button>
      </div>
    </div>
  );
}

export default App;
