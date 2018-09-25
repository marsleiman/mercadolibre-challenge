import React, { Component } from 'react'

import {Media, Button} from 'react-bootstrap';
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
          <Media className='product-view'>
            <Media.Left>
              <img width={680} height={680} src={this.state.product.item.picture} alt='thumbnail' className='picture'/>
            </Media.Left>
            <Media.Body>
              <span className='new'>Nuevo - 234 vendidos</span>
              <h1 className='product-title'>{this.state.product.item.title}</h1>
              <Media.Heading>
                <CurrencyFormat value={this.state.product.item.price.amount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '}></CurrencyFormat>
                <span className='decimals'>{this.state.product.item.price.decimals || ""}</span>
              </Media.Heading>


              <Button bsStyle='primary'>Comprar</Button>
            </Media.Body>
            <div className='description'>
              <h2>Descripción del producto</h2>
              <p>{this.state.product.item.description}</p>
            </div>
          </Media>
      )
    }
    return (
      <div></div>
    )
  }
}
