import { useParams } from "react-router-dom"

const RMDetail = () => {


        const {id} = useParams()


    return (
        <div>
            Detalle del ID: {id}
        </div>
    )
}
export default RMDetail