import React, { useState } from 'react'; 
import { Link} from 'react-router-dom'; 
import './Signup.css'

export default function SignUp() {
  

  // Simulated list of registered users (acting as a temporary database)
  const [users, setUsers] = useState([]);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    address: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });

  // Message state
  const [message, setMessage] = useState('');

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled and passwords match
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    // Check if the email is already registered
    const existingUser = users.find(user => user.email === formData.email);
    if (existingUser) {
      setMessage('Account with this email already exists');
      return;
    }

    // Add new user to the users list
    const newUser = { ...formData };
    setUsers([...users, newUser]); // Update the users list

    // Success message and reset form
    setMessage('Registration successful!');
    setFormData({
      name: '',
      phone: '',
      dob: '',
      address: '',
      email: '',
      gender: '',
      password: '',
      confirmPassword: '',
    });

    
  };

  return (
    <div>
    <nav className="navbar">
      <div className="logo">
        <span className="logo-plus">+</span> 
        <span className="logo-text">SOUL MEDIC</span>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
      </div>
    </nav>
    
    <div className="signup-container">
      <div className="signup-form">
        {message && <p className="message">{message}</p>} {/* Display message */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>DOB</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <div className="form-button">
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}