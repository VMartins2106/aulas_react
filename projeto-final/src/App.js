import React from "react";
import {Switch,Route,Link} from 'react-router-dom'

// IMAGEM
import Logo from "./images/logo.png"

// PROJETOS
import Calculadora from "./componentes/Calculadora";
import Velha from "./componentes/Velha";
import Imc from "./componentes/Imc";
import Filtragem from "./componentes/Filtragem";

// ESTILOS
import Style from './estilos/style.css'

export default function App() {
  return (
    <div>
      <div>
        <div style={{position: 'absolute'}}>
          <img src={Logo}/>
        </div>
        <div class="dropdown nav">
          <button class="dropbtn">Projetos desenvolvidos em REACT</button>
          <div class="dropdown-content">
            <Link to='/'>Página inicial</Link>
            <Link to='/velha'>Jogo da velha</Link>
            <Link to='/calc'>Calculadora</Link>
            <Link to='/filt'>Filtragem</Link>
            <Link to='/imc'>IMC</Link>
          </div>
        </div>
      </div>
      <div className="conteudo">
        <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center', marginTop: '10%'}}>
          <h2>
            Site desenvolvido com o objetivo de fortalecer os conhecimentos
            <br/>
            em React, e aplicar em alguns projetos, exibindo-os todos juntos
            <br/>
            <br/>
            Aplicação desenvolvida por Victor de Almeida Martins, através do
            <br/>
            Visual Studio Code. Link para github completo com tudo realizado:
            <br/>
            <br/>
            <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                <a href="http://www.github.com/VMartins2106" target='_blank'>github.com/VMartins2106</a>
            </div>
          </h2>
        </div>
        <main>
          <Switch>
            <Route path="/velha" component={Velha}/>
            <Route path="/calc" component={Calculadora}/>
            <Route path="/filt" component={Filtragem}/>
            <Route path="/imc" component={Imc}/>
          </Switch>
        </main>
      </div>
    </div>
  );
}