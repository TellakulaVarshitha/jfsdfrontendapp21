import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home'
import SignUp from './Signup';
import AddDoctor from '../Admin/AddDoctor'
import ViewDoctors from '../Admin/ViewDoctors'
import AdminHome from '../Admin/AdminHome'
import Services from './Services'
import { Link } from 'react-router-dom';
import '../style.css'



export default function Routing() {
  return (
    <div>
   <div className='header-container'>
  <header className="app-header">
    <div className="app-logo">
      + SOUL MEDIC
      <p className="tagline">Multi Specialty Hospital</p>
    </div>
    <div className='nav-bar'>
      <Link to="/">Home</Link> 
      <Link to="/services">Services</Link> 
      <Link to="/login">Login</Link>
    </div>
  </header>
</div>

<Routes>
<Route path='/' element={<Home/>} exact/>
<Route path='/services' element={<Services/>} exact/>
<Route path='/login' element={<Login/>} exact/>
<Route path='/signup' element={<SignUp/>} exact/>
<Route path='/adminhome' element={<AdminHome/>} exact/>
<Route path='/adddoctor' element={<AddDoctor/>} />
<Route path='/viewdoctors' element={<ViewDoctors/>} />
</Routes>




        </div>
  )
}

