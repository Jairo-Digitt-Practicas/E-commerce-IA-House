/** @format */

import { useContext } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import "../../components/NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            <Link className='menu-link' to='/carrito'>
                <CiShoppingBasket size='30px' />
                <span className='babge'>{cantidadEnCarrito()}</span>
            </Link>
        </div>
    );
}

export default CartWidget;
