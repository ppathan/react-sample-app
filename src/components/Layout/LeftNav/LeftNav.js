import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem,  Grid, Sidebar } from 'react-bootstrap';

import './LeftNav.css';

class LeftNav extends Component {
  render() {
    return (
      <Nav bsStyle="pills" stacked className="sidebar">
        <NavItem href="#/dashboard">Dashboard</NavItem>
        <NavItem href="#/devices">Devices</NavItem>
        <NavItem href="#/configuration">Configuration</NavItem>
      </Nav>
    );
  }
}

export default LeftNav;