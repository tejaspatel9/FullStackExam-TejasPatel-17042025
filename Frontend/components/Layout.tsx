// components/Layout.tsx
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="custom-header">
        🛒 My E-Commerce
      </header>

      <main className="custom-main">
        {children}
      </main>

      <footer className="custom-footer">
        © {new Date().getFullYear()} My E-Commerce Store. All rights reserved.
      </footer>
    </>
  );
}
