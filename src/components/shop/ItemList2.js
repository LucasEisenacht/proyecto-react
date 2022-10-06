/* import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"

const products = [
  {id: 1, name:"mouse", price:"20"},
  {id: 2, name:"teclado", price:"30"},
  {id: 3, name:"monitor", price:"250"},
]

const ItemList2 = () => {

  const [items, setItems] = useState ([])

  useEffect( ()=>{
    getProducts()
  },[] )

  const getProducts = () => {
    const productsPromise = new Promise( ( resolve )=>{
      setTimeout( ()=>{
        resolve( products )
      }, 3000 )
    } )

    productsPromise
      .then( res => {
        console.log("res:" + JSON.stringify(res) );
        setItems( res )
    })
    .catch ( err => {
      console.log("err: " + err);} )

    console.log("Trayendo productos...");
  }


  return (
    <div className="m-5">
      <h1>Componente ItemList2</h1>
      {items.map( item => <ItemCard key={item.id} {...item}/>)}
    </div>
  )
}
export default ItemList2 */