import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class Doctor extends React.Component {
  render() {

    return (
      <div>
        <div className="header">
          <h1>Patient List</h1>
        </div>
        {this.props.patients.map(patient => (
          <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://www.biography.com/.image/t_share/MTQ1MTQxMDg1NTc0ODAwODY1/brad-pitt---fight-club.jpg" />
          <Card.Body>
          <Card.Title>Name: {patient.name}</Card.Title>
          <Card.Text>
          {patient.age}
          </Card.Text>
          <Link to={`/patientdash/${patient.id}`}>
            <Button variant="primary">Details</Button>
          </Link>
          </Card.Body>
          </Card>

        ))}



      </div>
    )
  }
}

export default Doctor
