import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import BreadCrumb from './components/BreadCrumb';
import Product from './components/Product';
import ProductList from './components/ProductList';
import SearchBox from './components/SearchBox';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <SearchBox/>
        </header>
        <main className='container'>
          <Col xs={10} xsOffset={1} >
            <Row>
              <BreadCrumb/>
            </Row>
            <Row>
                <Switch>
                  <Route path='/items/:id' component={Product} />
                  <Route path='/items' render={(props) => <ProductList {...props}/>} />
                </Switch>
            </Row>
          </Col>
        </main>
      </div>
    );
  }
}

export default App;
