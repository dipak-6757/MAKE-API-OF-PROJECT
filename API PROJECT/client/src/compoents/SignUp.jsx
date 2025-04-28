import axios from 'axios';
import { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '', email: '', dob: '', role: 'Explorer', location: '', password: '', confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signup', formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message || 'Error during signup');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        width: '300px',
        margin: '40px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '16px' }}>Sign Up</h2>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
        style={{
          padding: '10px',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none',
          marginBottom: '10px'
        }}
      />
      
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
        style={{
          padding: '10px',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none',
          marginBottom: '10px'
        }}
      />

      <input
        name="dob"
        type="date"
        onChange={handleChange}
        required
        style={{
          padding: '10px',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none',
          marginBottom: '10px'
        }}
      />

      <select
        name="role"
        onChange={handleChange}
        style={{
          padding: '10px',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none',
          marginBottom: '10px'
        }}
      >
        <option>Explorer</option>
        <option>Admin</option>
      </select>

      <input
        name="location"
        placeholder="Location"
        onChange={handleChange}
        style={{
          padding: '10px',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none',
          marginBottom: '10px'
        }}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
        style={{
          padding: '10px',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none',
          marginBottom: '10px'
        }}
      />

      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
        required
        style={{
          padding: '10px',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none',
          marginBottom: '20px'
        }}
      />

      <button
        type="submit"
        style={{
          padding: '12px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          fontWeight: 'bold',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        Register
      </button>
    </form>
  );
}

export default SignUp;
