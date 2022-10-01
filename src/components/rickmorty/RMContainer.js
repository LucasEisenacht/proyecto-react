import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export const RMCard = ( {name, image} ) => {
    return (
        <div>
            <div>{name}</div>
            <img src={image}/>
        </div>
    )
}


const RMContainer = () => {

const [chars, setChars] = useState([])
    

    useEffect(() => {
    getChars()
    }, [])

    const getChars = async () => {
        const URL = "https://rickandmortyapi.com/api/character"
        const response = await axios.get(URL)
        setChars(response.data.results)
    }

/*     const getChars = () => {
        const URL = "https://rickandmortyapi.com/api/character"
        fetch( URL )
            .then ( res => res.json())
            .then ( data => {
                console.log(data.results);
                setChars(data.results)
            })

    } */


    //---------------AXIOS---------------




    return (
        <div>
            {chars.map( c => <RMCard key={c.id} {...c}/>)}
        </div>
        
    )
    }
    export default RMContainer