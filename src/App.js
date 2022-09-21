import logo from './logo.svg';
import './App.css';
import Saludo from "./components/Saludo";
import { BoxForChildren } from './components/BoxForChildren';
import NavBar from './components/NavBar'
import Footer from "./components/Footer"

function App() {
  const background = {
    color: "#EDE1F2"
  }

  const styles = {
    border: "solid 2px blue",
    padding: "20px",
  }
  return (
    <>
    
    <header  data-theme="cupcake">
    <NavBar></NavBar>
    {/* <h1 className="text-3xl font-bold underline">Hola mundo</h1> */}
    <BoxForChildren>
      <p>Este es un parrafo</p>
    </BoxForChildren>
    </header>
    {/* <h2 style={ styles }>Subtitulo</h2>
    <Saludo name="Miguel" age={23}/>
    <Saludo name="Lucas" age={25}/>
    <Saludo name="Jorge" age={18}/> */}
    <Footer data-theme="cupcake">
    </Footer>
    </>
  );
}

export default App;