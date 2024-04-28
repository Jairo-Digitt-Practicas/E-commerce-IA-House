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
import "../ItemDetailContainer/ItemDetail.css";

function ItemDetail({ product }) {
    return (
        <div className='cardFilter'>
            <Card>
                <div className='imgCard'>
                    <CardImg
                        alt='Card image cap'
                        src={product.img}
                        top='true'
                        width='100%'
                    />
                </div>
                <CardBody>
                    <CardTitle tag='h5'>{product.name}</CardTitle>
                    <CardText>
                        Description: <li>{product.especificaciones1}</li>
                        <li>{product.especificaciones2}</li>
                        <li>{product.especificaciones3}</li>
                        <li>{product.especificaciones4}</li>
                    </CardText>
                    <CardText>Price: ${product.precio}.00</CardText>
                    <Button>Add to Cart</Button>
                </CardBody>
            </Card>
        </div>
    );
}

ItemDetail.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ItemDetail;
