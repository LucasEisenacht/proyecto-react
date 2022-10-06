import imagenesHelados from "../recursos/imagenesHelados"

const tamanioBanner = {
    width:"max",
    height: "40rem",
}
const marginLeft = {
    "margin-left": "52.8rem",
}
const marginTop = {
    "margin-top": "3rem"
}

const Main = () => {
    return (
        <div style={marginTop}>
            <div style={tamanioBanner} className="bg-[url('./recursos/bannerhelado.jpg')] bg-cover bg-no-repeat bg-center bg-local shadow-inner">
                <a href="./BannerHelados"><button style={marginLeft} className="btn glass mt-64 ml-center text-3xl font-serif italic font-medium tracking-wider text-yellow-900 shadow-lg opacity-80">C o n o s s s </button></a>
            </div>
        </div>
    )
}
export default Main