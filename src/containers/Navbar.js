import React from 'react'
import {Link} from 'react-router-dom'


// const NavItem = props => {
//   const pageURI = window.location.pathname+window.location.search
//   const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
//   const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
//   return (
//     <li className={liClassName}>
//       <a href={props.path} className={aClassName}>
//         {props.name}
//         {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
//       </a>
//     </li>
//   );
// }

// class NavDropdown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isToggleOn: false
//     };
//   }
//   showDropdown(e) {
//     e.preventDefault();
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
//   render() {
//     const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
//     return (
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
//           aria-haspopup="true" aria-expanded="false"
//           onClick={(e) => {this.showDropdown(e)}}>
//           {this.props.name}
//         </a>
//         <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
//           {this.props.children}
//         </div>
//       </li>
//     )
//   }
// }

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Symptomatic</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Symptom</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
          </form>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Signup</button>
          </form>
          </div>
        </nav>
    )
  }
}


export default Navbar
// import logo from '../images/SleepingGuy.png';

// <img src={logo} alt="logo" />

// <Link to="#" className="item">Home</Link>
// <Link to="/napsites" className="item">Napsites</Link>
// <Link to="/mynaps" className="item">MyNaps</Link>

// <li className="nav-item dropdown">
//   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Dropdown
//   </a>
//   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//     <NavDropdown name="Dropdown" />
//     <a className="dropdown-item" href="#">Action</a>
//     <a className="dropdown-item" href="#">Another action</a>
//     <div className="dropdown-divider"></div>
//     <a className="dropdown-item" href="#">Something else here</a>
//   </div>
// </li>
