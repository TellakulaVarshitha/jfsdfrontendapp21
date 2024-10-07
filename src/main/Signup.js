import React, { useState } from 'react'; 
import '../style.css'
export default function SignUp() {
  
  const [users, setUsers] = useState([]);
  
  
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

  
  const [message, setMessage] = useState('');

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    
    const existingUser = users.find(user => user.email === formData.email);
    if (existingUser) {
      setMessage('Account with this email already exists');
      return;
    }

    
    const newUser = { ...formData };
    setUsers([...users, newUser]); 

    
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
   
      <div className="signup-section">
        <div className="signup-wrapper">
          {message && <p className="notification-message">{message}</p>} {/* Display message */}
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-field">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label>Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label>DOB</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <div className="form-actions">
              <button type="submit">Signup</button>
            </div>
          </form>
        </div>
      </div>
    
  );
}
