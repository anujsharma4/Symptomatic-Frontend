import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import logo from '../images/icon.png'
import {Navbar, Nav, Button, ButtonToolbar}  from 'react-bootstrap'

class NavigationBar extends React.Component {


  render() {
    return (

      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="https://www.webmd.com/">

            <img src={logo} style={{width:30, height: 30}} />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Link to={'/'}><Button variant="light">Home</Button></Link>
            {this.props.currentUser ? <Nav.Link href="#link">Dashboard</Nav.Link> : null}
          </Nav>
          <ButtonToolbar>
            {this.props.currentUser ?
              <Button variant="outline-success" href="/login">Logout</Button>
              :
              <div>
              <Button variant="outline-success" href="/login">Patient Login</Button>
              <Button variant="outline-success" href="/doctorlogin">Doctor Login</Button>
              </div>
            }
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
