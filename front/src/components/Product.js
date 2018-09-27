import React, { Component } from 'react'

import { Row, Col, Button} from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';

export default class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
        product: {}
    };
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/items/' + this.props.match.params.id)
      .then((response) => { return response.json(); })
      .then((data) => {
        this.setState({ product : data });
      });
  }

  render() {
    if(this.state.product.item){
      return (
      <Col className='product-view'> 
					<Row>
            <Col xs={12} md={8}>
              <img width="100%" styles='max-width: 680px' height="auto" src={this.state.product.item.picture} alt='thumbnail' className='picture'/>
            </Col>
            <Col xs={12} md={4}>
              <span className='new'>{this.state.product.item.condition == 'new' ? 'Nuevo' : 'Usado'} - {this.state.product.item.sold_quantity > 1 ? `${this.state.product.item.sold_quantity} vendidos` : `${this.state.product.item.sold_quantity} vendido`}</span>
              <h1 className='product-title'>{this.state.product.item.title}</h1>
              <CurrencyFormat value={this.state.product.item.price.amount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} className='price'>
              </CurrencyFormat>
              <span className='decimals'>{this.state.product.item.price.decimals || ""}</span>
              <Button bsStyle='primary'>Comprar</Button>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <h2>Descripción del producto</h2>
              <p>{this.state.product.item.description}</p>
            </Col>
          </Row>
        </Col>
      )
    }
    return (
      <div></div>
    )
  }
}
