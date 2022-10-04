import { useEffect, useState } from "react";


const BotonAgregar = () => {

    const [counter, setCounter] = useState(0)

    useEffect( ()=>{
        console.log("se monto el componente");
    }, [] )

    return (
        <div className="flex flex-row">
            <button onClick={()=> setCounter(counter+1)} className="btn m-5 btn-primary">Agregar</button>
            <div className="badge badge-md"> {counter} </div>
            <button onClick={()=> setCounter(counter-1)} className="btn m-5 btn-secondary">Quitar</button>

        </div>
    )
}
export default BotonAgregar