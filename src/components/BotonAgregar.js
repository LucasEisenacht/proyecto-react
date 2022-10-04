import { useEffect, useState } from "react";


const BotonAgregar = () => {

    const [counter, setCounter] = useState(0)

    useEffect( ()=>{
        console.log("se monto el componente");
    }, [] )

    return (
        <div className="flex">
            <button onClick={()=> setCounter(counter+1)} className="btn m-5 font-sans text-lg glass text-green-900 shadow-xl ring-2 ring-green-400 hover:text-green-500  ">Agregar</button>
            <div className="badge ring-2 ring-green-700 badge-md glass shadow-lg text-green-900 "> {counter} </div>
            <button onClick={()=> setCounter(counter-1)} className="btn m-5 glass text-lg text-green-900 shadow-xl ring-2 ring-green-400 hover:text-green-500 ">Quitar</button>
        </div>
    )
}
export default BotonAgregar