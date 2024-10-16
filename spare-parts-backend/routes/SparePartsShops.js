const express = require('express');
const router = express.Router();
const SparePartsShop = require('../models/SparePartsShop');

// Add shop
router.post('/shops', async (req, res) => {
    const shop = new SparePartsShop(req.body);
    await shop.save();
    res.send(shop);
});

// Get all shops
router.get('/shops', async (req, res) => {
    const shops = await SparePartsShop.find().populate('spareParts');
    res.send(shops);
});

// Update shop
router.put('/shops/:id', async (req, res) => {
    const shop = await SparePartsShop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(shop);
});

// Delete shop
router.delete('/shops/:id', async (req, res) => {
    await SparePartsShop.findByIdAndDelete(req.params.id);
    res.send({ message: 'Shop deleted' });
});

module.exports = router;
