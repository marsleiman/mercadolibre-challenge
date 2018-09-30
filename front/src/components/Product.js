import React from 'react'

import { Row, Col, Button } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';

export default function Product ({product}) {
    if(!product){
        return (
            <div>Cargando</div>
        )
    }
    
    return (
        <Col className='product-view'> 
			<Row>
                <Col xs={12} md={8}>
                    <img width="100%" styles='max-width: 680px' height="auto" src={product.picture} alt='thumbnail' className='picture'/>
                </Col>
                <Col xs={12} md={4}>
                    <span className='new'>{product.condition == 'new' ? 'Nuevo' : 'Usado'} - {product.sold_quantity > 1 ? `${product.sold_quantity} vendidos` : `${product.sold_quantity} vendido`}</span>
                    <h1 className='product-title'>{product.title}</h1>
                    <CurrencyFormat value={product.price.amount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} className='price' />                    
                    <span className='decimals'>{product.price.decimals || ""}</span>
                    <Button bsStyle='primary'>Comprar</Button>
                </Col>
            </Row>
          <Row>
            <Col md={8}>
              <h2>Descripción del producto</h2>
              <p>{product.description ? product.description : "Sin descripción :("}</p>
            </Col>
          </Row>
        </Col>
    );
}
