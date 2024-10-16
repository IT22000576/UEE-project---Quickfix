const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Add item to cart
router.post('/cart', async (req, res) => {
    const cart = new Cart(req.body);
    await cart.save();
    res.send(cart);
});

// Get all cart items for a user
router.get('/cart/:userId', async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items');
    res.send(cart);
});

// Update cart (add/remove items)
router.put('/cart/:userId', async (req, res) => {
    const cart = await Cart.findOneAndUpdate(
        { userId: req.params.userId }, 
        { $set: { items: req.body.items } }, 
        { new: true }
    );
    res.send(cart);
});

// Delete cart items
router.delete('/cart/:userId', async (req, res) => {
    const cart = await Cart.findOneAndDelete({ userId: req.params.userId });
    res.send({ message: 'Cart cleared' });
});

module.exports = router;
