import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home'
import SignUp from './Signup';
import AddDoctor from '../Admin/AddDoctor'
import ViewDoctors from '../Admin/ViewDoctors'
import AdminHome from '../Admin/AdminHome'



export default function Routing() {
  return (
    <div>

<Routes>
<Route path='/' element={<Home/>} exact/>
<Route path='/login' element={<Login/>} exact/>
<Route path='/signup' element={<SignUp/>} exact/>
<Route path='/adminhome' element={<AdminHome/>} exact/>
<Route path='/adddoctor' element={<AddDoctor/>} />
<Route path='/viewdoctors' element={<ViewDoctors/>} />
</Routes>




        </div>
  )
}

