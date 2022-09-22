import { useEffect, useState } from "react";


const BotonAgregar = () => {

    const [counter, setCounter] = useState(0)

    useEffect( ()=>{
        console.log("se monto el componente");
    }, [] )

        const clickHandler = () => {
                    setCounter( counter + 1 )
    }

    return (
        <div>
            <button onClick={clickHandler} className="btn m-5 btn-primary">Agregar</button>
            <div className="badge badge-md"> {counter} </div>
        </div>
    )
}
export default BotonAgregar