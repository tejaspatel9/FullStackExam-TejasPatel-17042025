const express = require('express');
const cors = require('cors');
const fs = require('fs');
// const path = require('path');
const path = require('path');
const { connectMongo } = require('./config/dbMongo');
require('dotenv').config();
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(cors());
app.use(express.json());

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// 🔹 Serve static images from uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectMongo(); // Connect to MongoDB

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/product'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);


module.exports = app;
