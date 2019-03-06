import React from 'react'
import {Redirect} from 'react-router-dom'
import {Form, Button, Card} from 'react-bootstrap'


class PatientForm extends React.Component {
  state={
    info: '',
    duration: '',
    severity: ''
  }

  handleOnChange = (e) => {
    // debugger
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {info, duration, severity} = this.state
    return (

      <div className="form">
        <Card style={{width: '60rem'}}>
          <Form className="patientForm" onSubmit={(e) => this.props.handleSubmit(e, info, duration, severity, this.props.patientId)}>
            <Form.Group controlId="symptom">
              <Form.Label>Symptoms:</Form.Label>
              <Form.Control name="info" onChange={this.handleOnChange} as="textarea" rows="3" placeholder="Diarrhea, fever, pain, etc..."/>
            </Form.Group>
            <Form.Group controlId="duration">
              <Form.Label>Date:</Form.Label>
              <Form.Control name="duration" onChange={this.handleOnChange} type="date" placeholder="MM/DD/YYYY" />
            </Form.Group>
            <Form.Group controlId="severity">
              <Form.Label>Severity</Form.Label>
              <Form.Control name="severity" onChange={this.handleOnChange} as="select">
                <option>N/A</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Form.Control>
            </Form.Group>

              <Button variant="primary" type="submit">
                Log Symptoms
              </Button>

          </Form>
        </Card>
      </div>
    );
  }
}

export default PatientForm;





// <div>
// <h2>Log Symptom</h2>
// <form className="eventForm" onSubmit={this.handleSubmit}>
// <div>
// <label htmlFor="event_type">
// <strong>Type:</strong>
// <input type="text" id="event_type" name="event_type" />
// </label>
// </div>
// <div>
// <label htmlFor="event_date">
// <strong>Date:</strong>
// <input type="text" id="event_date" name="event_date" />
// </label>
// </div>
// <div>
// <label htmlFor="title">
// <strong>Title:</strong>
// <textarea cols="30" rows="10" id="title" name="title" />
// </label>
// </div>
// <div>
// <label htmlFor="speaker">
// <strong>Speakers:</strong>
// <input type="text" id="speaker" name="speaker" />
// </label>
// </div>
// <div>
// <label htmlFor="host">
// <strong>Hosts:</strong>
// <input type="text" id="host" name="host" />
// </label>
// </div>
// <div>
// <label htmlFor="published">
// <strong>Publish:</strong>
// <input type="checkbox" id="published" name="published" />
// </label>
// </div>
// <div className="form-actions">
// <button type="submit">Save</button>
// </div>
// </form>
// </div>
