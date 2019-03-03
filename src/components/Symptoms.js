import React from 'react'
import {Card, Table} from 'react-bootstrap'


class Symptoms extends React.Component {
  render() {

    return (


      <Card.Body>
        <Card.Text className="justify">
          <h3>Symptoms: </h3>
            <Table striped bordered hover size="sm">

                <thead>
                  <tr>
                    <th> Info: </th>
                    <th> Date: </th>
                    <th> Severity: </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.symptoms.map((symptom) => (
                  <tr key={symptom.id}>
                    <td> {symptom.info} </td>
                    <td> {symptom.duration} </td>
                    <td> {symptom.severity} </td>
                  </tr>
                  ))}
                </tbody>

            </Table>

        </Card.Text>
      </Card.Body>

        )
      }
  }


export default Symptoms
