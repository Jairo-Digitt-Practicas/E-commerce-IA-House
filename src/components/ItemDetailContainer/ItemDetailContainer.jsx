/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productsArray from "../../../productsArray.js";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { idProduct, idCategory } = useParams();

    useEffect(() => {
        if (idProduct) {
            const selectedProduct = productsArray.find(
                (item) => item.id === parseInt(idProduct)
            );
            if (selectedProduct) {
                setProduct(selectedProduct);
            } else {
                console.error("Producto no encontrado");
            }
        }
    }, [idProduct]);

    useEffect(() => {
        if (idCategory) {
            const selectedProductCategory = productsArray.find(
                (item) => item.category === parseInt(idCategory)
            );
            if (selectedProductCategory) {
                setProduct(selectedProductCategory);
            } else {
                console.error("Categoria no encontrado");
            }
        }
    }, [idCategory]);

    return (
        <>
            {product ? (
                <>
                    <h2>Detalles del Producto</h2>
                    <ItemDetail product={product} />
                </>
            ) : (
                <h2>Categoría</h2>
            )}
        </>
    );
}

export default ItemDetailContainer;
