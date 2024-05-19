/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/ImportBD";
import ItemList from "./ItemList";

function ItemListContainer() {
    const [productList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            const productsRef = collection(db, "productos");
            const snapshot = await getDocs(productsRef);
            const productsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProductList(productsData);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            if (idCategory) {
                const productsRef = collection(db, "productos");
                const filteredProductsQuery = query(
                    productsRef,
                    where("category", "==", parseInt(idCategory))
                );
                const snapshot = await getDocs(filteredProductsQuery);
                const filteredProductsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setFilteredProducts(filteredProductsData);
            }
        };

        fetchFilteredProducts();
    }, [idCategory]);

    return (
        <>
            <h2>Lista de Productos</h2>
            <ItemList products={idCategory ? filteredProducts : productList} />
        </>
    );
}

export default ItemListContainer;
