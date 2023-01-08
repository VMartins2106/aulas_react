import React from "react";
import {Switch,Route,Link} from 'react-router-dom'
import Pagina1 from './componentes/Pagina1'
import Pagina2 from './componentes/Pagina2'
import Pagina3 from './componentes/Pagina3'

function ListaNumeros(props){
  const num = props.numeros
  const lista_numeros = num.map(
    (n)=> <li key={n.toString()}>{n}</li>
  )
  return ( <ul>{lista_numeros}</ul> )
}
const arrayNumeros = [1,2,3,4,5,6,7,8,9]

export default function App() {
  return (
    <div>
      <div>
        <header style={{display: 'flex', gap: '60px', margin:'5%'}}>
            <Link to='/'>Home</Link>
            <Link to='/pag1'>Página 1</Link>
            <Link to='/pag2'>Página 2</Link>
            <Link to='/pag3'>Página 3</Link>
          </header>
          <main style={{margin:'5%'}}>
            <Switch>
              <Route path="/pag1" component={Pagina1}/>
              <Route path="/pag2" component={Pagina2}/>
              <Route path="/pag3" component={Pagina3}/>
            </Switch>
          </main>
      </div>
      <hr/>
      <div style={{marginTop: '10px', marginLeft:'5%'}}>
        <h1>Propriedade KEYS</h1>
        <ListaNumeros numeros={arrayNumeros}/>
      </div>
    </div>
  );
}