import imagenesHelados from "../recursos/imagenesHelados"

const tamanioBanner = {
    width: "100%",
    height: "35rem",
}

const Main = () => {
    return (
        <div >
            <img style={tamanioBanner} src={imagenesHelados.img8}></img>
        </div>
    )
}
export default Main