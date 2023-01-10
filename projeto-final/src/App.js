import React from "react";
import {Switch,Route,Link} from 'react-router-dom'

// IMAGEM
import Logo from "./images/logo.png"

// AULAS
import Aula1 from "./aulas/aula1/Aula1";
import Aula2 from "./aulas/aula2/Aula2";
import Aula3 from "./aulas/aula3/Aula3";
import Aula4 from "./aulas/aula4/Aula4";
import Aula5 from "./aulas/aula5/Aula5";
import Aula6 from "./aulas/aula6/Aula6";
import Aula7 from "./aulas/aula7/Aula7";
import Aula8 from "./aulas/aula8/Aula8";
import Aula9 from "./aulas/aula9/Aula9";

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
        <div className="nav">
          <div class="dropdown" style={{marginTop: '6%'}}>
            <button class="dropbtn">Aulas desenvolvidas em REACT</button>
            <div class="dropdown-content">
              <Link to='/1'>1</Link>
              <Link to='/2'>2</Link>
              <Link to='/3'>3</Link>
              <Link to='/4'>4</Link>
              <Link to='/5'>5</Link>
              <Link to='/6'>6</Link>
              <Link to='/7'>7</Link>
              <Link to='/8'>8</Link>
              <Link to='/9'>9</Link>
            </div>
          </div>    
          <div class="dropdown" style={{marginTop: '6%'}}>
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
      </div>
      <div className="conteudo">
        <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center', marginTop: '10%'}}>
          <h2>
            Site desenvolvido com o objetivo de fortalecer os conhecimentos
            <br/>
            em React, e aplicar em alguns projetos, exibindo-os todos juntos.
            <br/>
            <br/>
            Para ir mais além no conteúdo das aulas, basta inspecionar a página
            <br/>
            ou fazer o donwload do arquivo completo no meu github!
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
            <Route path="/1" component={Aula1}/>
            <Route path="/2" component={Aula2}/>
            <Route path="/3" component={Aula3}/>
            <Route path="/4" component={Aula4}/>
            <Route path="/5" component={Aula5}/>
            <Route path="/6" component={Aula6}/>
            <Route path="/7" component={Aula7}/>
            <Route path="/8" component={Aula8}/>
            <Route path="/9" component={Aula9}/>
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