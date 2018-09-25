import React from 'react';

import {Media, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

export default function ProductCard ({product}) {
    return (
        <div className='product-list'>
                <Col xs={12} md={2} />
                <Media.ListItem>
                    <Link to={`/items/${product.id}`}>
                        <Media.Left>
                                <img width={180} height={180} src={product.picture} alt='thumbnail' />
                        </Media.Left>
                        <Media.Body>
                            <div className={product.free_shipping ? 'free' : ''}>
                                <CurrencyFormat value={product.price.amount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '}></CurrencyFormat>
                                <span className='decimals'>{product.price.decimals || ""}</span>
                                <span className='region'>{product.region}</span>
                            </div>
                            <h2 className='title-product'>{product.title}</h2>
                        </Media.Body>
                    </Link>
                </Media.ListItem>
        </div>
    );

}
