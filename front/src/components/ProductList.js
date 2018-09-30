import React, { Component } from 'react';

import { connect } from 'react-redux';
import queryString from 'query-string';
import { Grid } from 'react-bootstrap';

import ProductCard from './ProductCard';
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
            <Grid>
            {
            this.props.products.map(product => <ProductCard key={product.id} product={product}/>)
            }
            </Grid>
        )
    }
}

const stateMapsToProps = state => ({
    products: state.products,
    categories: state.categories,
})

const dispatchToProps = dispatch => ({
    search: query => dispatch(search_pending(query, dispatch)),
});

export default connect(stateMapsToProps, dispatchToProps)(ProductList)
