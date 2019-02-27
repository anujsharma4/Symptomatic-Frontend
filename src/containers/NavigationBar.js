import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import {Navbar, Nav, Form, FormControl, Button, ButtonToolbar, NavItem}  from 'react-bootstrap'

class NavigationBar extends React.Component {



  render() {
    return (

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="https://www.webmd.com/">Symptomatic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Dashboard</Nav.Link>
          </Nav>
          <ButtonToolbar>
            <Button variant="outline-success" href="/login">Login</Button>
            <Button variant="outline-success">Signup</Button>
          </ButtonToolbar>
        </Navbar.Collapse>
      </Navbar>



    )
  }
}


export default NavigationBar
// constructor(props, context) {
//   super(props, context);
//
//   this.state = {
//     show: false,
//   };
//
//   this.handleShow = () => {
//     this.setState({ show: true });
//   };
//
//   this.handleHide = () => {
//     this.setState({ show: false });
//   };
// }
