// // pages/add-product.tsx
// import { useState } from "react";
// import { useRouter } from "next/router";

// const AddProductPage = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     category: "",
//     image: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost:5000/api/products", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: formData.name,
//         price: parseFloat(formData.price),
//         category: formData.category,
//         image: formData.image,
//       }),
//     });

//     if (response.ok) {
//       alert("Product added!");
//       router.push("/"); // Redirect to homepage
//     } else {
//       alert("Failed to add product.");
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Add New Product</h1>
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
//         <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
//         <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
//         <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
//         <input type="text" name="image" placeholder="Image URL" onChange={handleChange} required />
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProductPage;
