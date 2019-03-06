import React from 'react'
import { Button, Form, Card, Image } from "react-bootstrap";
import {Redirect} from 'react-router-dom'


class Signup extends React.Component {

  state={
    name: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    sex: "",
    height: "",
    newUser:null
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(

      <div className="login">
        <Card style={{width: '60rem'}}>
          <Form
            onSubmit={(e) => {this.props.handleSignupSubmit(e, this.state)}}
          >
          <Form.Group controlId="formBasicFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="name" type="name" placeholder="Enter Full Name" onChange={this.handleOnChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicAge">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control name="age" type="date" placeholder="MM/DD/YYYY" onChange={this.handleOnChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicWeight">
            <Form.Label>Weight (lbs)</Form.Label>
            <Form.Control name="weight" type="number" placeholder="Enter Weight" onChange={this.handleOnChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicSex">
            <Form.Label>Sex</Form.Label>
            <Form.Control name="sex" type="text" placeholder="Enter Sexual Orientation" onChange={this.handleOnChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicHeight">
            <Form.Label>Height</Form.Label>
            <Form.Control name="height" type="text" placeholder="Enter Height (ex. 5.9)" onChange={this.handleOnChange}/>
          </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleOnChange}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleOnChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
            {this.props.currentUser ? <Redirect to= {`/patientdash/${this.props.currentUser.id}`} /> : null}
            Register
            </Button>
          </Form>
        </Card>
      </div>


    )
  }
}

export default Signup
