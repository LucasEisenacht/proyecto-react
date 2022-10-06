import React from "react";
import { Link } from "react-router-dom";


const ItemCard = ( {id, precio, nombre} ) => {
    return (
    <Link to={`/shop/item/${id}`}>
        <div className="m-5">
            <div>{id}</div>
            <div>{precio}</div>
            <div>{nombre}</div>
        </div>
    </Link>
    )
}
export default ItemCard