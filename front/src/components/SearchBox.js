import React, { Component } from 'react'

import { Row, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { search_pending, search_clear } from './redux/actions';
import { product_clear} from './redux/actionsProduct';

import logo from './../static/logo.png';
import icSearch from './../static/ic_Search.png';

export class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.handleQuerySearch = this.handleQuerySearch.bind(this);
        this.state = {
            query : ''
        };
    }

    handleQuerySearch(event){
        this.setState({query : event.target.value});
    }

    search = (evt) => {
        evt.preventDefault();
        const { query } = this.state;
        this.props.clear();
        this.props.clearProduct();
        this.props.search(query);
        this.props.history.push('/items/?search='+query)
    }

	goHome = (evt) => {
		this.setState({
			query : ""
		});
        this.props.clear();
        this.props.clearProduct();
		this.props.history.push('/');
	}

  render() {
    return (
        <Row>
            <Col xs={2} md={1} mdOffset={1}>
                <img src={logo} alt='MercadoLibre' className='logo' onClick={event => this.goHome(event)} />
            </Col>
            <Col xs={10} md={10}>
                <form action='/items/' method='get'>
                    <input
                        type='text'
                        name='search'
                        value={this.state.query}
                        onChange={this.handleQuerySearch}
                        placeholder='Nunca dejes de buscar'
                    />
                    <button type='submit' onClick={evt => this.search(evt)}>
                        <img src={icSearch} alt='Search' className='icon-search'/>
                    </button>
                </form>
            </Col>
        </Row>
    )
  }

}

const dispatchToProps = dispatch => {
	return {
        search: query => dispatch(search_pending(query, dispatch)),
        clear : () => dispatch(search_clear(dispatch)),
        clearProduct : () => dispatch(product_clear(dispatch))
	};
};

export default withRouter(connect(null, dispatchToProps)(SearchBox));
