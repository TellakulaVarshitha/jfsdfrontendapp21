import React from 'react'
import '../style.css'
import doctor from './main_images/doctor.png'
import icon1 from './main_images/icon1.png'
import icon2 from './main_images/icon2.png'
import icon3 from './main_images/icon3.png'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="container">
      <div className='first-container'>
    <header className="header">
      <div className="logo">+ SOUL MEDIC
      <p>Multi Specialty Hospital</p>
      </div>
        <div className='login-button'>
      <Link to="/login">Login</Link>
      </div>
    </header>

    <section className="hero">
      <div className='hero-content'>
      <h1>WE DO THE BEST PRACTICE</h1>
      <p>Delivering exceptional healthcare with cutting-edge technology and a patient-first approach.</p>
      </div>
      <img
        className="doctor-image"
        src={doctor} 
        alt="Doctor"
      />
      
      
    </section>
    </div>
    <div className='second-container'>
    <section className="features">
      <div className="feature">
      <img
        className="icon"
        src={icon1} 
        alt="icon"
      />
        <h3>ADVANCED TECHNOLOGY</h3>
      </div>
      <div className="feature">
      <img
        className="icon"
        src={icon2} 
        alt="icon"
      />
        <h3>HEALTHCARE SOLUTIONS</h3>
      </div>
      <div className="feature">
      <img
        className="icon"
        src={icon3} 
        alt="icon"
      />
        <h3>24/7 AVAILABILITY</h3>
      </div>
    </section>
    </div>
  </div>

  )
}
