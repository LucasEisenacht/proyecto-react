import imagenesHelados from "../recursos/imagenesHelados"

const tamanioBanner = {
    margin:"3rem 13rem",
    width: "80%",
    height: "40rem",
}

const Main = () => {
    return (
        <div >
            <img style={tamanioBanner} src={imagenesHelados.img8}></img>
        </div>
    )
}
export default Main