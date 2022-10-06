/* import { useState } from "react"
import { useEffect } from "react"

const HeladosApi = () => {

const [Helados, setHelados] = useState([])

useEffect(() => {
    
    getHelados()

}, [])

const getHelados = () => {

    const URL = "www.thecocktaildb.com/api/json/v1/1/"
        fetch ( URL )
            .then (response => response.json())
            .then (data =>{
                setHelados(data.results)
            })
}


    return (
        <div>
            {Helados.map(p => <li key={p.url}>{p.name}</li>)}
        </div>
    )
    }
export default HeladosApi */