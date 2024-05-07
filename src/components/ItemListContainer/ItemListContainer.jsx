/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

function ItemListContainer() {
    const [productList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { idCategory } = useParams();
    useEffect(() => {
        fetch("https://run.mocky.io/v3/c07ffff3-0492-4adb-a04b-07a7dac75597")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Falla al traer la información");
                }
                return response.json();
            })
            .then((data) => {
                setProductList(data);
                if (idCategory) {
                    const filtered = data.filter(
                        (product) => product.category === parseInt(idCategory)
                    );
                    setFilteredProducts(filtered);
                }
            })
            .catch((error) => {
                console.error("Error en la llamada a la API: ", error);
            });
    }, [idCategory]);

    return (
        <>
            <h2>Lista de Productos</h2>
            <ItemList products={idCategory ? filteredProducts : productList} />
        </>
    );
}

export default ItemListContainer;
