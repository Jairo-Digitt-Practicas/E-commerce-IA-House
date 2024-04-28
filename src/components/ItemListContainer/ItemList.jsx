/** @format */

import PropTypes from "prop-types";
import Item from "./Item";
import "../ItemListContainer/ItemList.css";

function ItemList({ products }) {
    return (
        <div className='contenedorCards'>
            <div className='row row-cols-3 row-cols-md-3 mb-3 text-center'>
                {products.map((product, id) => (
                    <Item key={id} product={product} />
                ))}
            </div>
        </div>
    );
}

ItemList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ItemList;
