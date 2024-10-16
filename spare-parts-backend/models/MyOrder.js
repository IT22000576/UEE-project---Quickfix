const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    orderStatus: { type: String, enum: ['active', 'history'], default: 'active' },
    orderDate: { type: Date, default: Date.now },
    orderDetails: [{
        sparePartName: String,
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'SparePartsShop' },
        brand: String
    }],
    orderPayment: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Order', orderSchema);
