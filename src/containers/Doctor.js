import React from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class Doctor extends React.Component {
  render() {

    return (
      <div>
        <div className="header">
          <h1>Patient List</h1>
        </div>
        <Container className="container-fluid">
        {this.props.patients.map(patient => (
            // <Row>
            //   <Col>
                <Card style={{ width: '25rem' }} className="patientcard">
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
            //   </Col>
            // </Row>

        ))}
        </Container>



      </div>
    )
  }
}

export default Doctor
