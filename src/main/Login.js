import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Login details:', { email, password });
  };

  return (
    <div className="login-page">
      

      <section className="login-section">
        <div className="login-content">
          <h1>Login to Your Account</h1>
          <p>Please enter your credentials to continue</p>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
            <p className="signup-prompt">Don't have an account?</p>
            <Link to="/signup" className="signup-link">Signup</Link>
          </form>
        </div>
      </section>
    </div>
  );
}
