import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

import Product from '../components/Product';
import { product_pending } from '../components/redux/actionsProduct';

export class ProductContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: {}
        };
    }

    componentDidMount() {
        this.props.show(this.props.match.params.id);
    }

    render() {
        return (
            <Grid>
                <Product product={this.props.product}/>
            </Grid>
        )
    }
}

const stateMapsToProps = state => ({
    product: state.product,
})

const dispatchToProps = dispatch => ({
    show: id => dispatch(product_pending(id, dispatch)),
});

export default connect(stateMapsToProps, dispatchToProps)(ProductContainer)

