import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUsername }) {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', loginData);
      localStorage.setItem('token', res.data.token);
      setUsername(res.data.username);
      alert('Login Successful!');
      navigate('/');
    } catch (err) {
      alert(err.response.data.message || 'Error during login');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        width: '300px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '16px' }}>Login</h2>

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
          marginBottom: '10px',
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
          marginBottom: '20px',
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
        Login
      </button>
    </form>
  );
}

export default Login;
