import React, { Component } from 'react';
import './App.css';
import NavigationBar from './containers/NavigationBar'
import Home from './components/Home'
import Login from './containers/Login'
import DoctorLogin from './containers/DoctorLogin'
import Doctor from './containers/Doctor'
import PatientDash from './components/PatientDash'
import PatientForm from './containers/PatientForm'
import Signup from './containers/Signup'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      allPatients: [],
      allSymptoms: [],
      email: "",
      password: "",
      currentUser: null,
      currentDoctor: null

    }


  }


  handleUserSignIn = (e, email, password) => {
    e.preventDefault()
    // let data = {patient: {email: email, password: password}}
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

  handleDoctorSignIn = (e, email, password) => {
    e.preventDefault()
    // let data = {patient: {email: email, password: password}}
    fetch('http://localhost:3000/login', {
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
    .then(doctor => {
      if (doctor.error) {
        alert("Incorrect email or password")
      } else {
        this.setState({currentDoctor: doctor})
      }
    })
  }


addNewSymptom = (symptoms) => {
  let allPatientsCopy = JSON.parse(JSON.stringify(this.state.allPatients))
  let currentPatient = allPatientsCopy.find(patient => patient.id === this.state.currentUser.id)
  currentPatient.symptoms.push(symptoms)


  this.setState({
    allPatients: allPatientsCopy
  }

  )
}


  handleFormSubmit = (e,info, duration, severity, patientId) => {
    e.preventDefault()

    let data = {symptoms: {info: info, duration: duration, severity: severity, patient_id: patientId}}
    fetch('http://localhost:3000/symptoms', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(symptoms => {

      this.addNewSymptom(symptoms)

    })
    this.props.history.push(`/patientdash/${patientId}`)
  }


  // addNewPatient = (patients) => {
  //   let allPatientsCopy = JSON.parse(JSON.stringify(this.state.allPatients))
  //   let newPatient = allPatientsCopy.find(patient => patient.id === this.state.newUser.id)
  //   newPatient.push(patients)
  //
  //
  //   this.setState({
  //     allPatients: allPatientsCopy
  //   }
  //
  //   )
  // }


    handleSignupSubmit = (e, {name, email, password, age, weight, sex, height}) => {
      e.preventDefault()

      let data = {patient: {name: name, email: email, password: password, age: age, weight: weight, sex: sex, height: height}}
      fetch('http://localhost:3000/patients', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then((res) => res.json())
      .then(patient => {
debugger
        this.setState({allPatients: [...this.state.allPatients, patient]})

        this.props.history.push(`/patientdash/${patient.id}`)
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
          currentDoctor={this.state.currentDoctor}

          />
        <Switch>

          <Route path="/patientdash/:id/form" render={(props) => {

              return(
                <PatientForm
                  patientId={props.match.params.id}
                  handleSubmit={this.handleFormSubmit}
                  {...props}
                  patients={this.state.allPatients}
                  />
              )
            }} />
          <Route path="/patientdash/:id" render={(props) => {
              return(
                <PatientDash
                  {...props}
                  patients={this.state.allPatients}
                  currentUser={this.state.currentUser}


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

          <Route path="/doctorlogin" render={() => {
                return(
                  <DoctorLogin
                    email={this.state.email}
                    password={this.state.password}
                    setEmail={this.setEmailState}
                    setPassword={this.setPasswordState}
                    handleDoctorSignIn={this.handleDoctorSignIn}
                    currentDoctor={this.state.currentDoctor}
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


            <Route path="/signup" render={() => {
                    return(
                      <Signup
                        email={this.state.email}
                        password={this.state.password}
                        setEmail={this.setEmailState}
                        setPassword={this.setPasswordState}
                        handleSignupSubmit={this.handleSignupSubmit}
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
