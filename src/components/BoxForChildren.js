import imagenesHelados from "../recursos/imagenesHelados"

export const BoxForChildren = ( {children} ) => {

    const styles = {
        border: "pink 3px solid",
        padding: "20px",
        margin: "20px"
    }
    const tamanio = {
        width: "7rem",
    }
    const borde = {
        border:"#D3F0ED 3px solid",
        borderradius: "2px",
        color: "red",
        padding: "15px",
        margin:"20px"
    }
    return (
        <div style={styles}>
            {/* {children} */}
            <div style={borde}>
            <img src={imagenesHelados.img1} style={tamanio}></img>
            </div>
            <div style={borde}>
                <img src={imagenesHelados.img2} style={tamanio}></img>
            </div>
            <div style={borde}>
                <img src={imagenesHelados.img3} style={tamanio}></img>
            </div>
            <div style={borde}>
                <img src={imagenesHelados.img4} style={tamanio}></img>
            </div>
            <div style={borde}>
                <img src={imagenesHelados.img5} style={tamanio}></img>
            </div>
            <div style={borde}>
                <img src={imagenesHelados.img6} style={tamanio}></img>
            </div>
        </div>
    )
}