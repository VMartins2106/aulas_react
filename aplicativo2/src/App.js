import React,{useState} from 'react';
import Numero from './componentes/Numero';
import Led from './componentes/Led';
import './App.css';

function App() {

  const [num,setNum] = useState(10)
  const [nome,setNome] = useState('Victor')

  const [ligado,setLigado] = useState(false)

  const cancelar=(obj)=>{
    return obj.preventDefault()
  }

  const cumprimento=()=>{
    const hora = new Date().getHours()
    if(hora >=0 && hora < 13){
      return <b>Bom dia</b>
    } else if (hora>=13 && hora < 18){
      return <b>Boa Tarde</b>
    } else{
      return <b>Boa Noite</b>
    }
  }
  
  const [log,setLog]=useState(false)

  const msgLogin = ()=>{
    return 'Usuario logado'
  }
  const msgLogoff = ()=>{
    return 'Favor logar'
  }

  const [cor,setCor] = useState(1)

  const vermelho = {color:'#f00'}
  const verde = {color:'#0f0'}
  const azul = {color:'#00f'}

  const retCor=(c)=>{
    if(c==1){
      return vermelho
    }else if(c==2){
      return verde
    }else{
      return azul
    }
  }

  const mudaCor = ()=>{
    setCor(cor+1)
    if (cor > 2){
      setCor(1)
    }
  }

  setInterval(mudaCor,1000);

  return (
    <section style={{margin: '10px'}}>

      {/* STATE EM REACT */}

      <p>Valor do state num em App: {num}</p>
      <Numero num={num} setNum={setNum}/>
      <p>Nome utilizando state: {nome}</p>
      <button onClick={()=>setNome(nome+' Martins')}>Mudar nome</button>

      {/* EVENTOS EM REACT */}

      <Led ligado={ligado} setLigado={setLigado}/>
      <a 
        style={{display: 'block', marginTop: '30px'}}
        href='http://www.github.com/VMartins2106'
        target='_blank'
        onClick={(e)=>cancelar(e)}
      >
        Link com função que retorna preventDefault
      </a>

      {/* RENDERIZAÇÃO CONDICIONAL */}

      <p>Renderização condicional, conforme a hora: {cumprimento()}</p>
      <p>{log?msgLogin():msgLogoff()}</p>
      <button onClick={()=>setLog(!log)}>{log?'Deslogar':'Logado'}</button>

      <h1 style={retCor(cor)}>Curso de React</h1>
      <button onClick={()=>mudaCor()}>Muda cor</button>
    </section>
  );
}

export default App;
