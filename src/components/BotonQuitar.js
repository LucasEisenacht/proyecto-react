import { useEffect, useState } from "react";


const BotonQuitar = () => {

    const [counter, setCounter] = useState(0)

    useEffect( ()=>{
        console.log("se monto el componente");
    }, [] )

        const clickHandler = () => {
        console.log("hiciste click");
        setCounter( counter - 1, 0 )
    }

    return (
        <div>
            <button onClick={clickHandler} className="btn m-5 btn-secondary">Quitar</button>
            <div className="badge badge-md"> {counter} </div>
        </div>
    )
}
export default BotonQuitar