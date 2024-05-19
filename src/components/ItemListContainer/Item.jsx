/** @format */

import PropTypes from "prop-types";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../ItemListContainer/Item.css";

function Item({ product }) {
    return (
        <Card>
            <div className='imgCard'>
                <CardImg
                    alt='Card image cap'
                    src={`../${product.img}`}
                    top='true'
                    width='100%'
                />
            </div>
            <CardBody>
                <CardTitle tag='h5'>{product.name}</CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </CardText>
                <Link to={`/detail/${product.id}`}>
                    <Button>Detalles del producto</Button>
                </Link>
            </CardBody>
        </Card>
    );
}

Item.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Item;
