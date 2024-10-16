const express = require('express');
const router = express.Router();
const Order = require('../models/MyOrder');

// Place an order (move from cart to orders)
router.post('/orders', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.send(order);
});

// Get all orders for a user
router.get('/orders/:userId', async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId });
    res.send(orders);
});

// Update order status (e.g., mark as history)
router.put('/orders/:orderId', async (req, res) => {
    const order = await Order.findByIdAndUpdate(
        req.params.orderId,
        { $set: { orderStatus: req.body.orderStatus } },
        { new: true }
    );
    res.send(order);
});

module.exports = router;
