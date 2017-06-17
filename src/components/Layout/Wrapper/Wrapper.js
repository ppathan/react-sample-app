import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import TopNav from '../TopNav.js';
import LeftNav from '../LeftNav/LeftNav.js';
import Footer from '../Footer.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Wrapper.css';

class Layout extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Grid fluid>
          <Row className="content">
            <Col xs={3} md={2}>
              <LeftNav />
            </Col>
            <Col xs={15} md={10}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
        <Footer inverse/>
      </div>
    );
  }
}

export default Layout;