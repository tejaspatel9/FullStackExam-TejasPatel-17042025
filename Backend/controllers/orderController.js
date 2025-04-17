const { getDB } = require('../config/dbMongo');

const placeOrder = async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;

    if (!items || !items.length || !shippingAddress) {
      return res.status(400).json({ message: "Missing order data" });
    }

    const db = getDB();
    const order = {
      userId: req.user.id, // assuming auth middleware adds `user`
      items,
      shippingAddress,
      createdAt: new Date()
    };

    await db.collection("orders").insertOne(order);

    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { placeOrder };
