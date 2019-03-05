import React from 'react'
import { Button, Form, Card, Image } from "react-bootstrap";
import {Redirect} from 'react-router-dom'


class DoctorLogin extends React.Component {

  render() {
    return(

      <div className="doctorlogin">
        <Card style={{width: '60rem'}}>
          <Form
            onSubmit={(e) => {e.preventDefault(); this.props.handleDoctorSignIn(e)}}
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
            {this.props.currentDoctor ? <Redirect to= {`/doctor`} /> : null}
            Submit
            </Button>
          </Form>
        </Card>
      </div>


    )
  }
}

export default DoctorLogin
