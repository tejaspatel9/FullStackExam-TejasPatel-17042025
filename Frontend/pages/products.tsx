import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    fetch('http://localhost:5000/api/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <div className="product-header">
        <h1>All Products</h1>
        <div className="product-actions">
          <button onClick={() => router.push('/cart')}>🛒 View Cart</button>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              router.push('/login');
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link href={`/products/${product._id}`}>
              <img src={`http://localhost:5000${product.image}`} alt={product.name} />
            </Link>
            <h2>{product.name}</h2>
            <p><strong>${product.price}</strong></p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
