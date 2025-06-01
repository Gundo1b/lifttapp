'use client';

import { useState } from 'react';

export default function page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // TODO: connect with Supabase auth
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    alert(`Logging in with email: ${email}`);
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '100px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h2>Login</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email</label><br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          required
        />

        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          required
        />

        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
          Login
        </button>
      </form>

      <p style={{ marginTop: '15px' }}>
        Don't have an account?{' '}
        <a href="/register" style={{ color: '#007bff' }}>Register here</a>
      </p>
    </div>
  );
}
