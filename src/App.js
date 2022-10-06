import logo from './logo.svg';
import './App.css';
import Saludo from "./components/Saludo";
import { BoxForChildren } from './components/BoxForChildren';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Main from "./components/Main"
import BotonAgregar from './components/BotonAgregar';
import ItemListContainer from './components/shop/ItemListContainer';
import StarWarsContainer from './components/starwars/StarWarsContainer';
import RMContainer from './components/rickmorty/RMContainer';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import  RMDetail  from "./components/rickmorty/RMDetail";
import HeladosApi from './components/starwars/HeladosApi';
import BannerHelados from './components/BannerHelados';
import ItemList from "./components/shop/ItemList"
import ItemDetail from './components/shop/ItemDetail';


function App() {
  const background = {
    color: "#EDE1F2"
  }

  const styles = {
    border: "solid 2px blue",
    padding: "20px",
  }

  const colorLetra = {
    color: "#000000",
  }
  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<header  data-theme="cupcake"/>}></Route>

      <Route path={'/ram'} element={<RMContainer/>}></Route>

      <Route path={'/ram/:id'} element={<RMDetail/>}></Route>

      <Route path='/helados' element={<BoxForChildren></BoxForChildren>}></Route>

      <Route path={"/helados2"} element={<HeladosApi></HeladosApi>}></Route>
  
      <Route path={'/shop/ItemDetail'} element={<ItemDetail></ItemDetail>}></Route>

      <Route path={'/shop/ItemList'} element={<ItemList></ItemList>}></Route>

    <Route path='/BannerHelados' element={<BannerHelados></BannerHelados>}></Route>
    </Routes>
    </BrowserRouter>
    <ItemListContainer className="colorLetra" greeting="Mi Tienda"/>
    <Main>
    </Main>
    <StarWarsContainer/>
    <Footer data-theme="cupcake">
    </Footer>
    </>
  );
}

export default App;