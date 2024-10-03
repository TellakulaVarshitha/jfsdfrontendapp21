import React from 'react';
import { Link ,Routes} from 'react-router-dom';
import './Admin_css/adminhome.css'



export default function AdminHome() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <span className="logo-plus">+</span>
          <span className="logo-text">SOUL MEDIC</span>
        </div>
        <div className="nav-buttons">
          <Link to="/viewpatients" className="nav-button">View Patients</Link>
          <Link to="/viewdoctors" className="nav-button">View Doctors</Link>
        </div>
      </nav>

      <div className="admin-homepage">
        <div className="admin-grid">
          <div className="grid-item">
            <img src="images/adddoctor.jpg" alt="Doctors" />
            <p>85</p>
            <h3>Doctors</h3>
          </div>
          <div className="grid-item">
            <img src="images/patients.jpg" alt="Patients" />
            <p>45</p>
            <h3>Patients</h3>
          </div>
          <div className="grid-item">
            <img src="images/appointments.jpg" alt="Appointments" />
            <p>60</p>
            <h3>Appointments</h3>
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/viewpharmacists">
            <img src="images/viewpharmasyst.jpg" alt="View Pharmacists" />
            <h3>View Pharmacists</h3>
          </Link>
          <Link to="/adddoctor">
            <img src="images/adddoctor.jpg" alt="Add Doctor" />
            <h3>Add Doctor</h3>
          </Link>
          <Link to="/addpharmacist">
            <img src="images/addpharmasyst.jpg" alt="Add Pharmacist" />
            <h3>Add Pharmacist</h3>
          </Link>
          <Routes>
       
      </Routes>
        </div>
      </div>
    </div>
  );
}