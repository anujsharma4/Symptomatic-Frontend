import React, { Component } from 'react';
import './App.css';
import NavigationBar from './containers/NavigationBar'
import Home from './components/Home'
import Login from './containers/Login'
import Doctor from './containers/Doctor'
import PatientDash from './components/PatientDash'
import PatientForm from './containers/PatientForm'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      allPatients: [],

    };


  }

  handleUserSignIn = (e) => {
  fetch('http://localhost:3000/signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      email: this.state.email,
      password: this.state.password
    })
  })
  .then(res => res.json())
  .then(player => {
    if (player === null) {
      alert("Username/password combination does not exist!")
    } else {
      this.setState({
        current_user: player
      })
    }
  })
}


  handleFormSubmit (e,info, duration, severity){
    e.preventDefault()
    let data = {symptoms: {info: info, duration: duration, severity: severity} }
    // debugger
    fetch('http://localhost:3000/symptoms', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((symptom) =>{
      this.addNewSymptom(symptom)
    })
  }


  componentDidMount(){
    console.log('im fetching patients')
    fetch('http://localhost:3000/patients')
    .then(res => res.json())
    .then(patientArray => {
      this.setState({
        allPatients: patientArray
      })
    })
  }

  addNewSymptom(newSymptom) {

  }
  //
  // onSelectPatient = (event) => {
  //   let id = parseInt(event.target.dataset.patientId)
  //   let newPatient = this.state.allPatients.find(patient => patient.id === id)
  //
  //   this.setState({
  //     selectedPatient: newPatient
  //   })
  // }
  //
  // setSelectedPatient = (patient) => {
  //   if (!this.state.myPatients.includes(patient)){
  //     this.setState({
  //       myPatients: [...this.state.myPatients, patient]
  //     })
  //   }
  // }

  // handleRemovePatient = (patientObj) => {
  //   let copyOfMyNaps = [...this.state.myNaps]
  //   let index = copyOfMyNaps.findIndex(nap => nap === napObj)
  //   copyOfMyNaps.splice(index, 1)
  //   this.setState({
  //     myNaps: copyOfMyNaps
  //   })
  // }


  render() {
    return (
      <div className="App">
        <NavigationBar


          />
        <Switch>

          <Route path="/patientdash/:id/form" render={() => {
              return(
                <PatientForm
                  handleSubmit={this.handleFormSubmit}

                  />
              )
            }} />
          <Route path="/patientdash/:id" render={(props) => {
              return(
                <PatientDash
                  {...props}
                  patients={this.state.allPatients}

                />
              )
            }} />



          <Route path="/doctor" render={() => {
              return(
                <Doctor
                  patients={this.state.allPatients}

                />
              )
            }} />


          <Route path="/login" render={() => {
                return(
                  <Login

                  />
                )
              }} />






          <Route component={Home} />

        </Switch>





      </div>
    );
  }
}

export default withRouter(App);
