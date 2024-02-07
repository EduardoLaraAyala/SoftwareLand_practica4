import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabla from './components/Tabla'
import jugadores from './jugadores.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola Mundo</p>
        
        <Tabla></Tabla>
        <br></br>
      </header>
    </div>
  );
}

export default App;
