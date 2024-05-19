/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
} from "firebase/firestore";
import { db } from "../firebase/ImportBD";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const { idProduct, idCategory } = useParams();

    const getProducts = async () => {
        if (idProduct) {
            const selectedProductRef = await doc(
                collection(db, "productos"),
                idProduct
            );

            await getDoc(selectedProductRef)
                .then((docSnapshot) => {
                    if (docSnapshot.exists()) {
                        setProduct({
                            id: docSnapshot.id,
                            ...docSnapshot.data(),
                        });
                    } else {
                        console.error("Producto no encontrado");
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener el producto:", error);
                });
        }
    };
    useEffect(() => {
        getProducts();
    }, [idProduct]);

    useEffect(() => {
        if (idCategory) {
            const productsRef = collection(db, "productos");
            const productsRefFilter = query(
                productsRef,
                where("category", "==", parseInt(idCategory))
            );

            getDocs(productsRefFilter)
                .then((querySnapshot) => {
                    const categoryProducts = [];
                    querySnapshot.forEach((doc) => {
                        categoryProducts.push({ ...doc.data(), id: doc.id });
                    });
                    setProduct(categoryProducts);
                })
                .catch((error) => {
                    console.error("Error al obtener productos:", error);
                });
        }
    }, [idCategory]);

    console.log(product);

    return (
        <>
            <h2>Detalles del Producto</h2>
            <ItemDetail product={product} />
        </>
    );
}

export default ItemDetailContainer;
