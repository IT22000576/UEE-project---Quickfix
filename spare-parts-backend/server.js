const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import routes
const shopRoutes = require('./routes/shops');
const sparePartsRoutes = require('./routes/spareParts');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');
const historyRoutes = require('./routes/history');

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON requests

// Connect to MongoDB
mongoose.connect('mongodb+srv://tharinduherath2426:Therath2426@cluster0.3nubx.mongodb.net/Quickfix', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/shops', shopRoutes);
app.use('/api/spareparts', sparePartsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/history', historyRoutes);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
