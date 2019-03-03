import React, { Component } from 'react';
import './App.css';
import NavigationBar from './containers/NavigationBar'
import Home from './components/Home'
import Login from './containers/Login'
import Doctor from './containers/Doctor'
import Symptoms from './components/Symptoms'
import PatientDash from './components/PatientDash'
import PatientForm from './containers/PatientForm'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      allPatients: [],
      allSymptoms: [],
      email: "",
      password: "",
      currentUser: null

    };


  }

  handleUserSignIn = (e, email, password) => {
    e.preventDefault()
    let data = {patient: {email: email, password: password}}
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
    .then(patient => {
      if (patient.error) {
        alert("Incorrect email or password")
      } else {
        this.setState({currentUser: patient})
      }
    })
}

addNewSymptom = (symptoms) => {
  const symptomscopy = this.state.currentUser.symptoms.slice()
  symptomscopy.push(symptoms)
  this.props.history.push(`/patientdash/${this.state.currentUser.id}`)

  // debugger
  this.setState({
    currentUser: {
      ...this.state.currentUser,
      symptoms: symptomscopy}
  })
}


  handleFormSubmit = (e,info, duration, severity) => {
    e.preventDefault()

    let data = {symptoms: {info: info, duration: duration, severity: severity, patient_id: this.state.currentUser.id} }
    // debugger
    fetch('http://localhost:3000/symptoms', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(symptoms => {
      // debugger
      this.addNewSymptom(symptoms)

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
    console.log('im fetching symptoms')
    fetch('http://localhost:3000/symptoms')
    .then(res => res.json())
    .then(symptomArray => {
      this.setState({
        allSymptoms: symptomArray
      })
    })
  }



  setEmailState = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  setPasswordState = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <NavigationBar
          currentUser={this.state.currentUser}


          />
        <Switch>

          <Route path="/patientdash/:id/form" render={() => {
              return(
                <PatientForm
                  handleSubmit={this.handleFormSubmit}
                  currentUser={this.state.currentUser}
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
                    email={this.state.email}
                    password={this.state.password}
                    setEmail={this.setEmailState}
                    setPassword={this.setPasswordState}
                    handleUserSignIn={this.handleUserSignIn}
                    currentUser={this.state.currentUser}
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
