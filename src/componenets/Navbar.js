import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.TextAbout}</Link>
        </li>
      </ul>
      <div className="d-flex">
        <div className='bg-primary rounded mx-2'onClick={()=>{props.ToggleMode('primary')}} style ={{height:'30px', width:'30px',cursor:'pointer'}}> </div> 
        <div className='bg-danger rounded mx-2'onClick={()=>{props.ToggleMode('danger')}} style ={{height:'30px', width:'30px',cursor:'pointer'}}> </div> 
        <div className='bg-success rounded mx-2'onClick={()=>{props.ToggleMode('success')}} style ={{height:'30px', width:'30px',cursor:'pointer'}}> </div> 
        <div className='bg-warning rounded mx-2'onClick={()=>{props.ToggleMode('warning')}} style ={{height:'30px', width:'30px',cursor:'pointer'}}> </div>  
      </div>
      <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'} mx-3`}>
      <input className="form-check-input" onClick={()=>{props.ToggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = { 
    title:PropTypes.string.isRequired,
    TextAbout:PropTypes.string,
}
Navbar.defaultProps = { 
    title:'set title here',
    TextAbout: 'Text About here'
}
