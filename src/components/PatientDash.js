import React from 'react'
import {Link} from 'react-router-dom'
import Symptoms from './Symptoms'
import {Card, Button, ListGroup, ListGroupItem, Table} from 'react-bootstrap'

class PatientDash extends React.Component {

  render() {
    console.log('im going to render a patient page')
      const patientId = parseInt(this.props.match.params.id)
      const patient = this.props.patients.find(patient => patient.id === patientId)
    return (
      this.props.patients.length > 0 ?

        <div className="patient">
          <Card style={{width: '70rem'}}>
            <Card.Img variant="top" src="https://www.biography.com/.image/t_share/MTQ1MTQxMDg1NTc0ODAwODY1/brad-pitt---fight-club.jpg" />
            <Card.Title>Name: {patient.name}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroupItem><h4>Age: {patient.age}</h4></ListGroupItem>
              <ListGroupItem><h4>Weight: {patient.weight}</h4></ListGroupItem>
              <ListGroupItem><h4>Sex: {patient.sex}</h4></ListGroupItem>
              <ListGroupItem><h4>Height: {patient.height}</h4></ListGroupItem>
              <ListGroupItem><h4>Email: {patient.email}</h4></ListGroupItem>
            </ListGroup>
              <Symptoms
                symptoms={patient.symptoms}
              />
            <Card.Body>
              <Link to={`/patientdash/${patient.id}/form`}>
                <Button variant="primary">Log Symptom</Button>
              </Link>
              <Link to="./PatientForm">
                <Button variant="primary">Notify Medical Professional</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        :
        null
    )
}
}

export default PatientDash



// {patient.symptoms.map((symptom, index) => (
//   <div> <br/>
//     <p>
//       Info: {symptom.info} <br/>
//       Date: {symptom.duration} <br/>
//       Severity: {symptom.severity} <br/>
//     </p>
//   </div>
//   ))}
