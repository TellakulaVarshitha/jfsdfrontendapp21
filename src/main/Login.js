import React, { useState } from 'react';

import { Link } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can implement login logic here
    console.log('Login details:', { email, password });
  };

  return (
    <div className="container">
      <div className="first-container">
        <header className="header">
          <div className="logo">
            + SOUL MEDIC
            <p>Multi Specialty Hospital</p>
          </div>
        </header>

        <section className="hero">
          <div className="hero-content">
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
              <button type="submit" className="login-button">
                Login
              </button>
              <p>Dont have an account??</p>
              <Link to="/signup">Signup</Link>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
