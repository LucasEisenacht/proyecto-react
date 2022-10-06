import { findByLabelText } from "@testing-library/react"
import { hover } from "@testing-library/user-event/dist/hover"
import { createRoutesFromElements } from "react-router-dom"
import imagenesHelados from "../recursos/imagenesHelados"
import BotonAgregar from '../components/BotonAgregar';
import { products } from "./products/Products";
import react, {useEffect, useState} from "react"
import ItemsCard from "./products/ItemsCards";


const width = {
  width: 1200,
  height: 250,
  border:"##311E46 7px solid",
  'borderRadius':'35px',
  
}
const flex = {
      "display": "flex",
      'flex-direction': 'row',
}

const center ={
  "margin-top": "20px",
  "margin-left": "330px"
}
const titulo ={
  "margin-right": "900px",
  width: "2rem"
}

const boton ={
  /* "margin-left":"140px" */
}

const BannerHelados = () => {
      return (
        <>
    
    <div style={center}>
      <figure  className="shadow-inner drop-shadow-2xl flex justify-end bg-green-300 bg-gradient-to-r from-green-300 to-black-400 hover:from-white hover:to-green-300 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300" style={width} >
          <div style={titulo} className="font-mono text-[50px] italic text-black-600/25  card-title">
            <h1 className="ml-20">Menta</h1>
            <div style={boton} className="ml-20" >
              <BotonAgregar></BotonAgregar>
            </div>
          </div>
          <img src={imagenesHelados.menta} />
      </figure>
    </div>
    <div style = {center}>
      <figure  className="shadow-inner drop-shadow-2xl flex justify-end bg-yellow-100 bg-gradient-to-r from-white to-black-400 hover:from-white hover:to-yellow-200 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300" style={width} >
        <div style={titulo} className="font-mono text-[45px] italic text-black-600/25  card-title"><h1 className="ml-20">Americana</h1>
        <div style={boton} className="ml-20">
        <BotonAgregar></BotonAgregar>
        </div>
        </div>
        <img src={imagenesHelados.americana}/>
      </figure>
    </div>
    <div style = {center}>
      <figure  className="shadow-inner drop-shadow-2xl flex justify-end bg-amber-900 bg-gradient-to-r from-yellow-800  hover:from-amber-600 hover:to-yellow-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300" style={width} >
        <div style={titulo} className="font-mono text-[45px] italic text-black-600/25  card-title"><h1 className="ml-11">Chocolate</h1>
        <div style={boton} className="ml-20" >
        <BotonAgregar></BotonAgregar>
        </div>
        </div>
        <img src={imagenesHelados.chocolate}/>
      </figure>
    </div>
    <div style = {center}>
      <figure  className="shadow-inner drop-shadow-2xl flex justify-end bg-red-900 bg-gradient-to-r from-red-800  hover:from-red-500 hover:to-red-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300" style={width} >
        <div style={titulo} className="font-mono text-[45px] italic text-black-600/25  card-title"><h1 className="ml-11">Frutilla</h1>
        <div style={boton} className="ml-20" >
        <BotonAgregar></BotonAgregar>
        </div>
        </div>
        <img src={imagenesHelados.frutilla}/>
      </figure>
    </div>
    <div style = {center}>
      <figure  className="shadow-inner drop-shadow-2xl flex justify-end bg-amber-900 bg-gradient-to-r from-yellow-700  hover:from-amber-500 hover:to-yellow-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300" style={width} >
        <div style={titulo} className="font-mono text-[45px] italic text-black-600/25  card-title"><h1 className="ml-11">Dulce De Leche </h1>
        <div style={boton} className="ml-20" >
        <BotonAgregar></BotonAgregar>
        </div>
        </div>
        <img src={imagenesHelados.ddl}/>
      </figure>
    </div>
  
  </>
    
  )
}
export default BannerHelados