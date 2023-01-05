import logo from './logo.svg';
import './App.css';
import UsandoMAP from './componentes/UsandoMAP';
import Formulario from './componentes/Formulario';
import Manipulando from './componentes/Manipulando';
import Elevacao from './componentes/Elevacao_state';
import Json from './componentes/Elevacao_json'

function App() {

  return (
    <div>
      <UsandoMAP/>
      <Formulario/>
      <Manipulando/>
      <Elevacao/>
      <Json/>
    </div>
  );
}

export default App;
