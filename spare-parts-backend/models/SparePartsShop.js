const mongoose = require('mongoose');
const sparePartsShopSchema = new mongoose.Schema({
    shopName: String,
    shopAddress: String,
    shopLogo: String,
    shopMotto: String,
    shopPicture: String,
    spareParts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SparePart' }]
});
module.exports = mongoose.model('SparePartsShop', sparePartsShopSchema);
