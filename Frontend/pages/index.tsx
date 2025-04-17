// pages/index.tsx
import Layout from '@/components/Layout';
import Link from 'next/link';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/products';
    }
  }, []);

  return (
    <Layout>
      <h1 className="custom-title">Welcome to Our Store 🛍️</h1>
      <p className="custom-subtext">Discover amazing products at great prices.</p>
      <div className="custom-buttons">
        <Link href="/login"><button className="login-btn">Login</button></Link>
        <Link href="/register"><button className="register-btn">Register</button></Link>
      </div>
    </Layout>
  );
}
