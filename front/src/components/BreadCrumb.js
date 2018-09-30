import React,{ Component } from 'react'

import { Row, Breadcrumb } from 'react-bootstrap';
import { connect } from 'react-redux';

export class BreadCrumb extends Component {
	constructor(props){
        super(props);
        this.state = {
            categories: {}
        };
    } 

    render(){
        return (
            <Row>
                <Breadcrumb>
                {
                    this.props.categories && this.props.categories.map((category, index) => <Breadcrumb.Item key={index} active={index === this.props.categories.length -1 ? true : false}>{category}</Breadcrumb.Item>)
                }
                </Breadcrumb>
            </Row>
        )
	}
}

const mapStateToProps = state => ({
    categories: state.categories,
});

export default connect(mapStateToProps, null)(BreadCrumb);
