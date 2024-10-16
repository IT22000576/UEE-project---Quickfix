const express = require('express');
const router = express.Router();
const SparePart = require('../models/SparePartItem');

// Add spare part
router.post('/spare-parts', async (req, res) => {
    const part = new SparePart(req.body);
    await part.save();
    res.send(part);
});

// Get all spare parts
router.get('/spare-parts', async (req, res) => {
    const parts = await SparePart.find().populate('availableShops');
    res.send(parts);
});

// Update spare part
router.put('/spare-parts/:id', async (req, res) => {
    const part = await SparePart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(part);
});

// Delete spare part
router.delete('/spare-parts/:id', async (req, res) => {
    await SparePart.findByIdAndDelete(req.params.id);
    res.send({ message: 'Spare part deleted' });
});

module.exports = router;
