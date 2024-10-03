import React, { useState } from 'react';
import { useNavigate ,Link,Route,Routes} from 'react-router-dom';  // useNavigate is used to redirect after form submission
import ViewDoctors from './ViewDoctors';
import DoctorNavBar from './DoctorNavBar';
import './Admin_css/adddoctor.css'
export default function DoctorManagement({ addDoctor }) {
  const [doctorData, setDoctorData] = useState({
    name: '',
    specialization: '',
    gender: '',
    email: '',
    linkedin: '',
    contact: '',
    image: null,
  });

  const navigate = useNavigate();  // Hook for programmatic navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setDoctorData((prevData) => ({
      ...prevData,
      image: e.target.files[0],  // Store the uploaded image
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoctor(doctorData);  // Call the addDoctor function passed as props

    // Reset form after submission
    setDoctorData({
      name: '',
      specialization: '',
      gender: '',
      email: '',
      linkedin: '',
      contact: '',
      image: null,
    });

    // Navigate to the ViewDoctors page
    navigate('/ViewDoctors');
  };

  return (
    <div>
       
       <nav className="navbar">
        <div className="logo">
          <span className="logo-plus">+</span>
          <span className="logo-text">SOUL MEDIC</span>
        </div>
        <div className="nav-links">
          
          <Link to="/viewdoctors" className="nav-link">ViewDoctors</Link>
          <Link to="/" className="nav-link">adminhome</Link>
        </div>
      </nav>
      
      <h1>Add Doctor</h1>
      <form onSubmit={handleSubmit}>
      <label>Name</label>
        <input
          type="text"
          name="name"
          value={doctorData.name}
          onChange={handleChange}
         
          required
        />
        <label>Specialization</label>
        <input
          type="text"
          name="specialization"
          value={doctorData.specialization}
          onChange={handleChange}
         
          required
        />
         <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={doctorData.gender}
          onChange={handleChange}
          
          required
        />
         <label>Email</label>
        <input
          type="email"
          name="email"
          value={doctorData.email}
          onChange={handleChange}
          
          required
        />
         <label>LinkedIn URL</label>
        <input
          type="text"
          name="linkedin"
          value={doctorData.linkedin}
          onChange={handleChange}
          
          required
        />
         <label>Contact</label>
        <input
          type="text"
          name="contact"
          value={doctorData.contact}
          onChange={handleChange}
          
          required
        />
        <label>Upload Image</label>
         <small className="file-hint">* .pdf, .png formats accepted</small>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          required
        />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
}