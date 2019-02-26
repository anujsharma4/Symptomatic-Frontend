import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import Home from './components/Home'
import Login from './containers/Login'
import Doctor from './containers/Doctor'
import PatientDash from './components/PatientDash'
import {Route, Switch} from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends Component {
  state={
    allPatients: [],

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

  onSelectPatient = (event) => {
    let id = parseInt(event.target.dataset.patientId)
    let newPatient = this.state.allPatients.find(patient => patient.id === id)

    this.setState({
      selectedPatient: newPatient
    })
  }

  setSelectedPatient = (patient) => {
    if (!this.state.myPatients.includes(patient)){
      this.setState({
        myPatients: [...this.state.myPatients, patient]
      })
    }
  }

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
        <Navbar />
        <Switch>

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






          <Route component={Home} />

        </Switch>





      </div>
    );
  }
}

export default withRouter(App);
