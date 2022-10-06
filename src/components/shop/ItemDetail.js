import { useParams } from "react-router-dom"
import { products } from "../products/Products"
import React, {useEffect, useState} from "react"

const ItemDetail = () => {

    const {id: itemId} = useParams ()
    const [Loading, setLoading] = useState(true)

    const [item, setItem] = useState({})

    useEffect(() => {
        getItemDetails().then(response =>{
            setItem(response)
            setLoading(false)
        })
    
    }, [])
    

    const getItemDetails = () => {  
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve( products.find( p => p.id === Number(itemId) ) )
        }, 3000)
    })
}

    return (
        <>
        <html data-theme="cupcake"></html>
        { Loading ?
        <button className="btn btn-square loading"></button>
        :
        <div>
            <div>{item.id}</div>
            <div>{item.precio}</div>
            <div>{item.nombre}</div>
        </div>
}
        </>
    )
}
export default ItemDetail