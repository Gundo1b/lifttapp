'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('passenger'); // default role passenger
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !phone || !email || !password || !role) {
      setError('Please fill in all fields');
      return;
    }

    // TODO: Integrate Supabase registration here

    // For now, simulate registration success:
    alert(`Registered as ${role}: ${name}`);

    // Redirect based on role:
    if (role === 'passenger') {
      router.push('/dashboard/rides');  // Passenger sees rides
    } else {
      router.push('/dashboard/passengers');  // Driver sees passengers
    }
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
      <h2>Register</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Full Name</label><br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          required
        />

        <label htmlFor="phone">Phone Number</label><br />
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          required
        />

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

        <label>Role</label><br />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        >
          <option value="passenger">Passenger</option>
          <option value="driver">Driver</option>
        </select>

        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
          Register
        </button>
      </form>

      <p style={{ marginTop: '15px' }}>
        Already have an account?{' '}
        <a href="/login" style={{ color: '#007bff' }}>Login here</a>
      </p>
    </div>
  );
}
