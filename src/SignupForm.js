import React, { useState } from 'react';

function SignupForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validateForm();
      if (Object.keys(errors).length === 0) {
        // Form submission logic goes here
      } else {
        setErrors(errors);
      }
    };
  
    const validateForm = () => {
      const errors = {};
  
      // Validate email
      if (!email) {
        errors.email = 'Email is required';
      }
  
      // Validate name
      if (!name) {
        errors.name = 'Name is required';
      }
  
      // Validate password
      if (!password) {
        errors.password = 'Password is required';
      }
  
      // Validate confirm password
      if (!confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
      } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
  
      return errors;
    };
  
    return (
        <>
        <div className="container">
        <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required value={email}onChange={(e) => setEmail(e.target.value)}/>
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className='form-group'>
        <label for="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required value={name}onChange={(e) => setName(e.target.value)}/>
          {errors.name && <span>{errors.name}</span>}
        </div>
  
        <div className='form-group'>
        <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          {errors.password && <span>{errors.password}</span>}
        </div>
  
        <div className='form-group'>
        <label for="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" required value={confirmPassword}onChange={(e) => setConfirmPassword(e.target.value)}/>
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      </div>
      </>
    );
  }
  
  export default SignupForm;
  