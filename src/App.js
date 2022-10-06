import logo from './logo.svg';
import './App.css';

import { BoxForChildren } from './components/BoxForChildren';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Main from "./components/Main"
import BotonAgregar from './components/BotonAgregar';
import ItemListContainer from './components/shop/ItemListContainer';
import StarWarsContainer from './components/starwars/StarWarsContainer';
import RMContainer from './components/rickmorty/RMContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  RMDetail  from "./components/rickmorty/RMDetail";
import HeladosApi from './components/starwars/HeladosApi';
import BannerHelados from './components/BannerHelados';
import ItemList from "./components/shop/ItemList"
import ItemDetail from './components/shop/ItemDetail';


function App() {
  const background = {
    color: "#faf7f5"
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
    <BrowserRouter >
    <NavBar ></NavBar>
    <Routes>
      <Route path='/' element={<header  data-theme="cupcake"/>}></Route>

      <Route path={'/ram'} element={<RMContainer data-theme="cupcake"/>}></Route>

      <Route path={'/ram/:id'} element={<RMDetail data-theme="cupcake"/>}></Route>

      <Route path='/helados' element={<BoxForChildren data-theme="cupcake"></BoxForChildren>}></Route>
  
      <Route path={'/shop/ItemDetail'} element={<ItemDetail data-theme="cupcake"></ItemDetail>}></Route>

      <Route path={"/shop/"} element={<ItemList data-theme="cupcake"/>}></Route>
      
      <Route path={"/shop/item/:id"} element={<ItemDetail data-theme="cupcake"/>}></Route>
      
    <Route path='/BannerHelados' element={<BannerHelados data-theme="cupcake"></BannerHelados>}></Route>
    </Routes>
    </BrowserRouter>
    <Main className="bg-#faf7f5">
    </Main>
    <Footer data-theme="cupcake">
    </Footer>
    </>
  );
}

export default App;