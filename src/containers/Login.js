import React from 'react'
import { Button, FormGroup, FormControl, FormLabel, Modal, Form, Card } from "react-bootstrap";
import {Route, Switch, Redirect, Link} from 'react-router-dom'


class Login extends React.Component {

  render() {
    return(

      <div>
        <Card style={{width: '60rem'}}>
          <Form
            onSubmit={(e) => {e.preventDefault(); this.props.handleUserSignIn(e)}}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.props.setEmail(e)}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => this.props.setPassword(e)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
            {this.props.currentUser ? <Redirect to= "/" /> : null}
            Submit
            </Button>
          </Form>
        </Card>
      </div>


    )
  }
}

export default Login

      // onSubmit={() => {this.props.onLogIn(this.props.email, this.props.password)}}


// constructor(props) {
//   super(props);
//
//   this.state = {
//     email: "",
//     password: "",
//     show: false,
//   };
// }

// open = () => {
  //     this.setState({show: true});
  //   }
  //
  //   close = () => {
    //       this.setState({show: false});
    //     }
    //
    //     validateForm() {
      //         return this.state.username.length > 0 && this.state.password.length > 0;
      //       }
      //
      //       handleChange = event => {
        //           this.setState({
          //               [event.target.id]: event.target.value
          //             });
          //           }
          //
          //           handleSubmit = event => {
            //               event.preventDefault();
            //             }
            //
            //             render() {
              //                 return (
                //                     <Modal
                //                       {...this.props}
                //                       size="lg"
                //                       aria-labelledby="contained-modal-title-vcenter"
                //                       centered
                //                     >
                //                       <Modal.Header closeButton>
                //                         <Modal.Title id="contained-modal-title-vcenter">
                //                           Modal heading
                //                         </Modal.Title>
                //                       </Modal.Header>
                //                       <Modal.Body>
                //                         <h4>Centered Modal</h4>
                //                         <p>
                //
                //                         <div className="Login">
                //                           <form onSubmit={this.handleSubmit}>
                //                             <FormGroup controlId="username" bsSize="large">
                //                               <FormLabel>Username</FormLabel>
                //                               <FormControl
                //                                 autoFocus
                //                                 type="username"
                //                                 value={this.state.username}
                //                                 onChange={this.handleChange}
                //                               />
                //                             </FormGroup>
                //                             <FormGroup controlId="password" bsSize="large">
                //                               <FormLabel>Password</FormLabel>
                //                               <FormControl
                //                                 value={this.state.password}
                //                                 onChange={this.handleChange}
                //                                 type="password"
                //                               />
                //                             </FormGroup>
                //                             <Button
                //                               block
                //                               bsSize="large"
                //                               disabled={!this.validateForm()}
                //                               type="submit"
                //                             >
                //                               Login
                //                             </Button>
                //                           </form>
                //                         </div>
                //                         </p>
                //                       </Modal.Body>
                //                       <Modal.Footer>
                //                         <Button onClick={this.props.onHide}>Close</Button>
                //                       </Modal.Footer>
                //                     </Modal>
                //                   );
                //                 }
                //                 }
                //
                //
