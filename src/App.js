import logo from './logo.svg';
import './App.css';
import Saludo from "./components/Saludo";
import { BoxForChildren } from './components/BoxForChildren';
import NavBar from './components/NavBar';

function App() {

  const styles = {
    border: "solid 2px blue",
    padding: "20px",
  }
  return (
    <>
    <NavBar></NavBar>
    <h1 className="text-3xl font-bold underline">Hola mundo</h1>
    <BoxForChildren>
      <p>Este es un parrafo</p>
    </BoxForChildren>
    <h2 style={ styles }>Subtitulo</h2>
    <Saludo name="Miguel" age={23}/>
    <Saludo name="Lucas" age={25}/>
    <Saludo name="Jorge" age={18}/>
    </>
  );
}

export default App;