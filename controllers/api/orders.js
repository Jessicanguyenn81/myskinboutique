const Order = require('../../models/order');
// const Product = require('../../models/product');

module.exports = {
    cart,
    addToCart,
    setProductQtyInCart,
    checkout,
  };
  
  // A cart is the unpaid order for a user
  async function cart(req, res) {
    const cart = await Order.getCart(req.user._id)
    res.json(cart)
  }
  
  // Add an product to the cart
  async function addToCart(req, res) {
    
  }
  
  // Updates an product's qty in the cart
  async function setProductQtyInCart(req, res) {
  }
  
  // Update the cart's isPaid property to true
  async function checkout(req, res) {
  
  }