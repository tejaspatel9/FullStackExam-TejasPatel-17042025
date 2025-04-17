import { useState } from 'react';
import Layout from '@/components/Layout';
// import '@/styles/login.css'; // Import external login CSS
import Link from 'next/link'; // Make sure this is imported


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user._id)
      setMsg('Login successful!');
      window.location.href = '/products';
    } else {
      setMsg(data.message || 'Login failed.');
    }
  };

  return (
    <Layout>
      <div className="login-container">
        <h1>Login</h1>
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
          <button type="submit">Login</button>
        </form>
        <p>{msg}</p>
        <p className="register-link">
  Don't have an account?{' '}
  <Link href="/register">
    Register now
  </Link>
</p>
      </div>
    </Layout>
  );
}
