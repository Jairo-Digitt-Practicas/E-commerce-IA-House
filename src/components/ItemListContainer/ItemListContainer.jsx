/** @format */
import "../ItemListContainer/ItemListContainer.css";

function ItemListContainer({ greeting }) {
    return (
        <div className='title-page'>
            <h2>{greeting}</h2>
        </div>
    );
}

export default ItemListContainer;
