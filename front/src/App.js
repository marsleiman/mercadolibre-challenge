import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import { Row, Grid, Col } from 'react-bootstrap';

import BreadCrumb from './components/BreadCrumb';
import ProductList from './components/ProductList';
import SearchBox from './components/SearchBox';
import ProductContainer from './container/ProductContainer';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <SearchBox/>
                </header>
                <Grid>
                    <Row>
                        <Col xs={10} xsOffset={1} >
                            <BreadCrumb/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1} >
                            <Switch>
                                <Route path='/items/:id' component={ProductContainer} />
                                <Route path='/items' component={ProductList} />
                            </Switch>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
