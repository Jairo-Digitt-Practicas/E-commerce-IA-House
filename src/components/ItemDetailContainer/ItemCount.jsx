/** @format */
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../ItemDetailContainer/ItemCount.css";
import { CardBody, Button } from "react-bootstrap";

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
    return (
        <div>
            <div className='item-count'>
                <CardBody>
                    <Button onClick={handleRestar}>-</Button>
                    <p>{cantidad}</p>
                    <Button onClick={handleSumar}>+</Button>
                    <Button
                        className='agregar-al-carrito'
                        onClick={handleAgregar}>
                        Agregar al carrito
                        <ToastContainer />
                    </Button>
                </CardBody>
            </div>
        </div>
    );
};

ItemCount.propTypes = {
    cantidad: PropTypes.number.isRequired,
    handleRestar: PropTypes.func.isRequired,
    handleSumar: PropTypes.func.isRequired,
    handleAgregar: PropTypes.func.isRequired,
};

export default ItemCount;
