import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom'; 



import './Admin_css/adddoctor.css'

export default function AddDoctor({ addDoctor }) {
  const [doctorData, setDoctorData] = useState({
    name: '',
    specialization: '',
    gender: '',
    email: '',
    linkedin: '',
    contact: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setDoctorData({
      ...doctorData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the doctor data to the addDoctor function
    addDoctor(doctorData);
    // Clear the form data after submission if needed
    setDoctorData({
      name: '',
      specialization: '',
      gender: '',
      email: '',
      linkedin: '',
      contact: '',
      image: null,
    });
    navigate('/viewdoctors'); // Redirect to the ViewDoctors page after submission
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
          <Link to="/adminhome" className="nav-link">adminhome</Link>
        </div>
      </nav>
     
      
    <div className="add-doctors-page">
      <div className="form-container">
        <h1 className="form-title">Add Doctors</h1>
        <form onSubmit={handleSubmit}>
          {/* Form Inputs */}
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={doctorData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Specialization</label>
            <input type="text" name="specialization" value={doctorData.specialization} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <input type="text" name="gender" value={doctorData.gender} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={doctorData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>LinkedIn URL</label>
            <input type="text" name="linkedin" value={doctorData.linkedin} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input type="text" name="contact" value={doctorData.contact} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Upload Image</label>
            <input type="file" name="image" onChange={handleImageChange} />
            <small className="file-hint">* .pdf, .png formats accepted</small>
          </div>
          <button type="submit" className="add-button">Add</button>
        </form>
      </div>
    </div>
    </div>
  );
}