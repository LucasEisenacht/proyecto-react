import { useState } from "react"
import { useEffect } from "react"

    const StarWarsContainer = () => {

        const [people, setPeople] = useState([])

        useEffect(()=> {
            getPeople()
        }, [])

        const getPeople = () => {
            const URL = "https://swapi.dev/api/people/"
                fetch ( URL )
                    .then( response => response.json() )

                    
                    .then( data => {
                        setPeople(data.results)
                    }) 
        }


    return (
        <div>
            <h1>StarWars Container</h1>
            {people.map(p => <li key={p.id}>{p.name}</li>)}

        </div>
    )
    }
    export default StarWarsContainer