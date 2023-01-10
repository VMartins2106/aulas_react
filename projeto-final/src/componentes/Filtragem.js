import React,{useState} from "react";

const carros = [
  {categoria: 'Esporte', preco: '110000', modelo: 'Golf'},
  {categoria: 'Esporte', preco: '120000', modelo: 'Camaro'},
  {categoria: 'SUV', preco: '85000', modelo: 'HRV'},
  {categoria: 'SUV', preco: '83000', modelo: 'T-Cross'},
  {categoria: 'Utilitário', preco: '125000', modelo: 'Hillux'},
  {categoria: 'Utilitário', preco: '90000', modelo: 'Ranger'},
]

const linhas = (cat)=>{
  const li = []

  carros.forEach(
    (carro)=>{
      if(carro.categoria.toUpperCase()==cat.toUpperCase() || cat.toUpperCase() == ''){
        li.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        )
      }
    }
  )
  return li
}

const linhasPreco = (prec)=>{
  const liPrec = []

  carros.forEach(
    (carro)=>{
      if(parseFloat(carro.preco) <= parseFloat(prec) || prec.toUpperCase() == ''){
        liPrec.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        )
      }
    }
  )
  return liPrec
}

const linhasModelo = (mod)=>{
  const liMod = []

  carros.forEach(
    (carro)=>{
      if(carro.modelo.toUpperCase() == mod.toUpperCase() || mod.toUpperCase() == ''){
        liMod.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        )
      }
    }
  )
  return liMod
}

const tabelaCarros = (cat)=>{
  return(
    <table border='1' style={{borderCollapse: 'collapse'}}>
      <thead>
        <tr>
          <th>Categoria</th><th>Preço</th><th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  )
}

const tabelaCarrosPreco = (prec)=>{
  return(
    <table border='1' style={{borderCollapse: 'collapse'}}>
      <thead>
        <tr>
          <th>Categoria</th><th>Preço</th><th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {linhasPreco(prec)}
      </tbody>
    </table>
  )
}

const tabelaCarrosModelo = (mod)=>{
  return(
    <table border='1' style={{borderCollapse: 'collapse'}}>
      <thead>
        <tr>
          <th>Categoria</th><th>Preço</th><th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {linhasModelo(mod)}
      </tbody>
    </table>
  )
}

const pesquisaCategoria = (cat,scat)=>{
  return(
    <div>
      <label>Digite uma categoria</label>
      <br/>
      <input type='text' value={cat} onChange={(e)=>scat(e.target.value)}/>
    </div>
  )
}

const pesquisaPreco = (prec,sprec)=>{
  return(
    <div>
      <label>Até que valor ?</label>
      <br/>
      <input type='text' value={prec} onChange={(e)=>sprec(e.target.value)}/>
    </div>
  )
}

const pesquisaModelo = (mod,smod)=>{
  return(
    <div>
      <label>Qual o modelo ?</label>
      <br/>
      <input type='text' value={mod} onChange={(e)=>smod(e.target.value)}/>
    </div>
  )
}

export default function Filtragem() {

  const [categoria,setCategoria] = useState('')
  const [preco,setPreco] = useState('')
  const [modelo,setModelo] = useState('')

  return (
    <div style={{height: '50vh', margin:'3%',display:'flex', gap: '10%', justifyContent: 'center',marginTop: '10%'}}>
      <div style={{display:'flex', flexDirection: 'column'}}>
        {pesquisaCategoria(categoria,setCategoria)}
        <br/>
        <div>{tabelaCarros(categoria)}</div>
      </div>
      <div style={{display:'flex', flexDirection: 'column'}}>
        {pesquisaPreco(preco,setPreco)}
        <br/>
        <div>{tabelaCarrosPreco(preco)}</div>
      </div>
      <div style={{display:'flex', flexDirection: 'column'}}>
        {pesquisaModelo(modelo,setModelo)}
        <br/>
        <div>{tabelaCarrosModelo(modelo)}</div>
      </div>
    </div>
  );
}