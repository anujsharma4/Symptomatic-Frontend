import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Button,ListGroup, ListGroupItem} from 'react-bootstrap'

class PatientDash extends React.Component {
  render() {
    console.log('im going to render a patient page')
      const patientId = parseInt(this.props.match.params.id)
      const patient = this.props.patients.find(patient => patient.id === patientId)
    return (
      this.props.patients.length > 0 ?
        <div>
          <Card style={{width: '70rem'}}>
            <Card.Img variant="top" src="https://www.biography.com/.image/t_share/MTQ1MTQxMDg1NTc0ODAwODY1/brad-pitt---fight-club.jpg" />
            <Card.Body>
              <Card.Title>Name: {patient.name}</Card.Title>
              <Card.Text>
              Symptoms:

              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Age: {patient.age}</ListGroupItem>
              <ListGroupItem>Weight: {patient.weight}</ListGroupItem>
              <ListGroupItem>Sex: {patient.sex}</ListGroupItem>
              <ListGroupItem>Height: {patient.height}</ListGroupItem>
              <ListGroupItem>Email: {patient.email}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        :
        null
    )
}
}

export default PatientDash
