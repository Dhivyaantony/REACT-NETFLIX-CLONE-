import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner'
import './log.css';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Password validation (minimum 6 characters)
    const passwordRegex = /^.{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate a successful login (replace with your actual login code)
      const successfulLogin = true;

      if (successfulLogin) {
        // Navigate to the Navbar component
        navigate('/main');
      } else {
        alert('Invalid username or password');
      }
    }
  };

  return (
    
    <div className="login-container">
      <div className='log'>
      <img src="netflix-logo.png" alt="Netflix Logo" className="logo" />
    </div>
      <form className="login-form" onSubmit={handleSubmit}>
        
        <h2>Login to Netflix</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
          <span className="error">{errors.email}</span>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
          <span className="error">{errors.password}</span>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;