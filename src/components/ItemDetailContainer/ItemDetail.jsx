/** @format */

import PropTypes from "prop-types";
import { Card, CardImg, CardBody, CardTitle, CardText } from "react-bootstrap";
import "../ItemDetailContainer/ItemDetail.css";
import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemDetail({ product }) {
    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        setCantidad(cantidad + 1);
    };

    return (
        <div className='cardFilter'>
            <Card>
                <div className='imgCard'>
                    <CardImg
                        alt='Product Image'
                        src={`../${product.img}`}
                        width='300px'
                    />
                </div>
                <CardBody>
                    <CardTitle tag='h5'>{product.name}</CardTitle>
                    <CardText>
                        <strong>Description:</strong>
                        <ul>
                            <li>{product.especificaciones1}</li>
                            <li>{product.especificaciones2}</li>
                            <li>{product.especificaciones3}</li>
                            <li>{product.especificaciones4}</li>
                        </ul>
                    </CardText>
                    <CardText>
                        <strong>Price:</strong> ${product.precio}.00
                    </CardText>
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => {
                            toast.success("Producto agregado al carrito!", {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                            });
                            agregarAlCarrito(product, cantidad);
                        }}
                    />
                </CardBody>
            </Card>
        </div>
    );
}

ItemDetail.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ItemDetail;
