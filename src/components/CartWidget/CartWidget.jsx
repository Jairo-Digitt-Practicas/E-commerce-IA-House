/** @format */

import { CiShoppingBasket } from "react-icons/ci";
import "../../components/NavBar/NavBar.css";

function CartWidget() {
    return (
        <div>
            <CiShoppingBasket size='30px' />
            <span className='babge'>10</span>
        </div>
    );
}

export default CartWidget;
