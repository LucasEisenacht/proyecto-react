import React, {useEffect, useState} from "react"
import {products} from "../products/Products"
import ItemCard from "../shop/ItemCard"


const ItemList = () => {
    
    const [items, setItems] = useState([])
        
        useEffect(() => {
        getProducts().then( response => {
            console.log(response);
            setItems(response)
        })
        }, [])
    
        const getProducts = () => { 
        return new Promise (resolve => {
            setTimeout(() => {
            resolve(products)
            },3000);
        })
    }


return (
    <>
    <div>
        <h1>Items</h1>
        {items.map( i => <ItemCard key={i.id} {...i}/>)}
    </div>
</>
)
}

export default {ItemList}