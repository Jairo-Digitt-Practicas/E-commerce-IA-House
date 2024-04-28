/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productsArray from "../../../productsArray.js";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    let { idProduct } = useParams();

    useEffect(() => {
        const selectedProduct = productsArray.find(
            (Item) => Item.id === parseInt(idProduct)
        );
        console.log(productsArray);

        if (selectedProduct) {
            setProduct(selectedProduct);
        } else {
            console.error("Producto no encontrado");
        }
    }, [idProduct]);

    return (
        <>
            <h2>Detalles del Producto</h2>
            {product && <ItemDetail product={product} />}
        </>
    );
}

export default ItemDetailContainer;
