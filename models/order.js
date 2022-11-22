const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema')


const lineProductSchema = new Schema({
    qty: {type: Number, default: 1 },
    product: productSchema
}, {
    timestamps: true,
    //whatever virtuals we add will be in our lineProductSchema
    toJSON: { virtuals: true }
})

//this virtual multiplys the qty and price for extended Price
lineProductSchema.virtual('extPrice').get(function() {
    return this.qty * this.product.price
})

const orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref:'User', required: true},
    lineProducts: [lineProductSchema],
    isPaid: {type: Boolean, default: false},
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

orderSchema.virtual('orderTotal').get(function() {
    return this.lineProducts.reduce((total, product) => total + product.extPrice, 0)
})

orderSchema.virtual('totalQty').get(function() {
    return this.lineProducts.reduce((total, product) => total + product.qty, 0)
})

orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase()
})

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        //this is the updated version of the cart
        { user: userId },
        //this creates the cart for you if it doesn't exist
        { upsert: true, new: true }
    );
}

module.exports = mongoose.model('Order', orderSchema)