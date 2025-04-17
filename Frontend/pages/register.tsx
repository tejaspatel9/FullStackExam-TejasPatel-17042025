import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';


export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.message === 'User registered successfully') {
      window.location.href = '/login';
    }

    setMsg(data.message || 'Registration complete!');
  };

  return (
    <Layout>
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p>{msg}</p>
        <p className="register-link">
          Already have an account?{' '}
          <Link href="/login">
            Login here
          </Link>
        </p>
      </div>
    </Layout>
  );
}
