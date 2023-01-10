import React,{useState} from "react";

export default function Calculadora() {

  const [valorTela,setValorTela] = useState('')
  const [resultado,setResultado] = useState(0)
  const [acumulador,setAcumulador] = useState(0)
  const [operado,setOperado] = useState(false)

  // COMPONENTES
  const tela = (valor,res)=>{
    return(
      <div style={cssTela}>
        <span style={cssTelaOperacao}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    )
  }
  const btn = (label,onClick)=>{
    return(
      <button style={cssBtn} onClick={onClick}>{label}</button>
    )
  }

  // FUNÇÕES
  const addDigitoTela = (d)=>{
    if((d=='+' || d=='-' || d=='*' || d=='/') && operado){
      console.log("+-*/")
      setOperado(false)
      setValorTela(resultado + d)
      return
    }
    if (operado){
      setValorTela(d)
      setOperado(false)
      return
    }
    const valorDigitado = valorTela + d
    setValorTela(valorDigitado)
  }
  const limparMemoria = ()=>{
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }
  const operacao = (oper)=>{
    if(oper=='bs'){
      let vtela = valorTela
      vtela = vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try{
      const res = eval(valorTela) // CÁLCULO
      setAcumulador(res)
      setResultado(res)
      setOperado(true)
    }catch{
      setResultado('ERRO')

    }
  }

  // ESTILOS
  const cssTela={
    display:'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
    flexDirection: 'column',
    width: 260
  }
  const cssTelaOperacao={
    fontSize: 25,
    color: '#fff',
    height: 20
  }
  const cssTelaRes={
    fontSize: 50,
    color: '#fff'
  }
  const cssBtn ={
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#000',
    textAlign: 'center',
    outline: 'none'
  }
  const cssContainer={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 300,
    border: '1px solid #000'
  }
  const cssBotoes = {
    flexDirection: 'row'
  }

  return (
    <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div style={cssContainer}>
        <h3>Calculadora matemática simples</h3>
        {tela(valorTela,resultado)}
        <div style={cssBotoes}>
          {btn('AC',limparMemoria)}
          {btn('(',()=>addDigitoTela('('))}
          {btn(')',()=>addDigitoTela(')'))}
          {btn('/',()=>addDigitoTela('/'))}
          {btn('7',()=>addDigitoTela('7'))}
          {btn('8',()=>addDigitoTela('8'))}
          {btn('9',()=>addDigitoTela('9'))}
          {btn('*',()=>addDigitoTela('*'))}
          {btn('4',()=>addDigitoTela('4'))}
          {btn('5',()=>addDigitoTela('5'))}
          {btn('6',()=>addDigitoTela('6'))}
          {btn('-',()=>addDigitoTela('-'))}
          {btn('1',()=>addDigitoTela('1'))}
          {btn('2',()=>addDigitoTela('2'))}
          {btn('3',()=>addDigitoTela('3'))}
          {btn('+',()=>addDigitoTela('+'))}
          {btn('0',()=>addDigitoTela('0'))}
          {btn('.',()=>addDigitoTela('.'))}
          {btn('<-',()=>operacao('bs'))}
          {btn('=',()=>operacao('='))}
        </div>
      </div>
    </div>
  );
}