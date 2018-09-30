import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

export default function ProductCard ({product}) {
    return (
        <div className='product-list'>
            <Row>
                <Link to={`/items/${product.id}`}>
                    <Col xs={12} md={3}>
                        <img width={180} height={180} src={product.picture} alt='thumbnail' className='picture' />
                    </Col>
                    <Col xs={12} md={7} className='mediabody'>  
                        <p className={product.free_shipping ? 'free' : ''}>
                            <CurrencyFormat value={product.price.amount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} />
                            <span className='decimals'>{product.price.decimals || ""}</span>
                        </p>
                        <h2 className='title-product'>{product.title}</h2>
                    </Col>
                    <Col xs={12} md={2}>
                        <span className='region'>{product.region}</span>
                    </Col>
                </Link>
            </Row>
        </div>
    );

}
