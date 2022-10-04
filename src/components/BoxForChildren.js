import imagenesHelados from "../recursos/imagenesHelados"
import BotonAgregar from "./BotonAgregar"

export const BoxForChildren = ( {children} ) => {

    const styles = {
        border: "pink 3px solid",
        padding: "20px",
        margin: "20px"
    }
    const tamanio = {
        width: "7rem",
    }
    const tamanio2 = {
        width: "9.7rem",
    }
    const borde = {
        border:"#D3F0ED 3px solid",
        borderradius: "2px",
        color: "red",
        padding: "15px",
        margin:"20px"
    }
    return (
        <div  className=" bg-green-100 rounded-md border grid grid-cols-6 gap-1 justify-items-center" style={styles}>
            {/* {children} */}
            <div className=" rounded-lg  flex-col" style={borde}>
                <div className="flex justify-center" >
                    <img  src={imagenesHelados.img1} style={tamanio}></img>
                </div>
                <div className="flex justify-center">

                        <BotonAgregar></BotonAgregar>

                    

                </div>
            </div>            <div className="rounded-lg  flex flex-col" style={borde}>
                <div className="flex justify-center">
                    <img  src={imagenesHelados.img2} style={tamanio}></img>
                </div>
                <div className="flex flex-row justify-center">
                    <BotonAgregar></BotonAgregar>

                </div>
            </div>            <div className="rounded-lg  flex flex-col" style={borde}>
                <div className="flex justify-center">
                    <img  src={imagenesHelados.img3} style={tamanio}></img>
                </div>
                <div className="flex flex-row justify-center">
                    <BotonAgregar></BotonAgregar>

                </div>
            </div>            <div className="rounded-lg  flex flex-col" style={borde}>
                <div className="flex justify-center">
                    <img  src={imagenesHelados.img4} style={tamanio2}></img>
                </div>
                <div className="flex flex-row justify-center">
                    <BotonAgregar></BotonAgregar>
                </div>
            </div>            
            <div className="rounded-lg  flex flex-col" style={borde}>
                <div className="flex justify-center">
                    <img  src={imagenesHelados.img6} style={tamanio}></img>
                </div>
                <div className="flex flex-row justify-center">
                    <BotonAgregar></BotonAgregar>

                </div>
            </div>
        </div>
    )
}