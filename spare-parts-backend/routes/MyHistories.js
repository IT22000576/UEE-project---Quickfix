const express = require('express');
const router = express.Router();
const History = require('../models/MyHistory');

// View history (completed orders)
router.get('/history/:userId', async (req, res) => {
    const history = await History.find({ userId: req.params.userId }).populate('order');
    res.send(history);
});

module.exports = router;
