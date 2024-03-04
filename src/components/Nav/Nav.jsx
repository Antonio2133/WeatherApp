import React from 'react'
import Logo from '../../assets/img/weather-app.png'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav_container'>
      <div className="nav_left">
        <img src={Logo} className="logo" alt="Logo"/>    
      </div>
      <div className="nav_rigth">
        <span className="weather_version">Weather App v 1.1.0</span>    
      </div>
    </div>
  )
}

export default Nav