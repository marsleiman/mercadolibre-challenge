import React, { Component } from 'react';

import queryString from 'query-string';
import {Media} from 'react-bootstrap';

import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { search_pending } from './redux/actions';

export class ProductList  extends Component {
  constructor(props){
    super(props);
    this.state = {
        products: [],
        categories : []
    };
  }

  componentDidMount(){
    const query = queryString.parse(this.props.location.search);
    if(!query.search){
      return null;
    }
    this.props.search(query.search);
  }

  render() {
    return (
          <Media.List>
          {
            this.props.products && this.props.products.map(product => <ProductCard key={product.id} product={product}/>)
          }
          </Media.List>
    )
  }
}

const stateMapsToProps = state => ({
  products: state.items,
  categories: state.categories,
})

const dispatchToProps = dispatch => ({
  search: query => dispatch(search_pending(query, dispatch)),
});

export default connect(stateMapsToProps, dispatchToProps)(ProductList)
