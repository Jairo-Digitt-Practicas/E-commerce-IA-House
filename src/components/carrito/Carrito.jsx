/** @format */

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CardImg, Button } from "react-bootstrap";
import "../carrito/Carrito.css";

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    };

    return (
        <div className='container-checkout'>
            <h1 className='main-title'>Carrito</h1>

            {carrito.map((prod) => (
                <div className='carrito-prod' key={prod.id}>
                    <br />
                    <h3>{prod.name}</h3>
                    <CardImg src={prod.img} />
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))}

            {carrito.length > 0 ? (
                <>
                    <div className='end-carrito'>
                        <h2>Precio total: ${precioTotal()}</h2>
                    </div>
                    <div className='end2-carrito'>
                        <Button onClick={handleVaciar}>Vaciar</Button>
                        <Link to='/checkout'>Finalizar compra</Link>
                    </div>
                </>
            ) : (
                <h2>El carrito está vacío :(</h2>
            )}
        </div>
    );
};

export default Carrito;
