import React from 'react'
import logo from '../images/logo1.png'
import { Jumbotron, Button } from 'react-bootstrap'


const Home = (props) => {
  return(
    <div className="home">
      <Jumbotron className='jumbotron'>
        <h1>Welcome! To Your Health Revolution!</h1>
        <h4>
          Symptoms are signs of disease or injury noticed by the person. <br/>
          Something as small and seemingly insignificant as a cough could be <br/>
          Symptomatic of a larger issue, such as an upper respiratory infection. <br/>
          Never forget your symptoms again, and trust that our certified Doctors <br/>
          will make sure you know what steps to take next. <br/>
      </h4>
      </Jumbotron>

        <img className="homepic" alt="logo" src={logo}/>
      </div>
    )
  }


export default Home
