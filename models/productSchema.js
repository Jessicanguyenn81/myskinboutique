const Schema = require('mongoose').Schema

const productSchema = new Schema({
    name: {type: String, required: true },
    emoji: String, 
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    price: {type: Number, required: true, default: 0},
    details: {type: String},
}, {
    timestamps: true
})

module.exports = productSchema