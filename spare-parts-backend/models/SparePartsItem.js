const mongoose = require('mongoose');
const sparePartsSchema = new mongoose.Schema({
    name: String,
    brand: String,
    availableShops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SparePartsShop' }],
    price: Number
});
module.exports = mongoose.model('SparePart', sparePartsSchema);
