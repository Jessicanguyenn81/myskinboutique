require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Product = require('./models/product');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Cleansers', sortOrder: 10},
    {name: 'Moisturizers', sortOrder: 20},
    {name: 'Toners', sortOrder: 30},
    {name: 'Serums', sortOrder: 40},
    {name: 'Eye Care', sortOrder: 50},
    {name: 'Sunscreen', sortOrder: 60},
    {name: 'Masks', sortOrder: 70},
  ]);

  await Product.deleteMany({});
  const products = await Product.create([
    {name: 'La Mer The Cleansing Foam', emoji: '🫧', category: categories[0], price: 95.00},
    {name: 'Tatcha Rice Wash Cleanser', emoji: '🌾', category: categories[0], price: 38.00},
    {name: 'Fresh Soy Cleanser', emoji: '🧼', category: categories[0], price: 43.00},
    {name: 'Tatcha Dewy Skin Cream', emoji: '💦', category: categories[1], price: 82.00},
    {name: 'Drunk Elephant Moisturizer', emoji: '🐘', category: categories[1], price: 68.00},
    {name: 'Kiehls', emoji: '🧴', category: categories[1], price: 35.00},
    {name: 'Farmacy 2% Toner', emoji: '🥒', category: categories[2], price: 31.95},
    {name: 'Biossance BHA Toner', emoji: '🌱', category: categories[2], price: 30.95},
    {name: 'Hyaluronic Acid ', emoji: '✨', category: categories[3], price: 9.95},
    {name: 'Niacinamide 10%', emoji: '🧪', category: categories[3], price: 12.95},
    {name: 'Sk-ll Facial Essence', emoji: '💆🏻‍♀️', category: categories[3], price: 110.00},
    {name: 'OleHenriksen Vitamin C Creme', emoji: '🍊', category: categories[4], price: 42.95},
    {name: 'Glow Recipe Guava Gel Cream', emoji: '🍈', category: categories[4], price: 38.95},
    {name: 'Shideido SPF 50', emoji: '🧴', category: categories[5], price: 29.95},
    {name: 'SuperGoop SPF 40', emoji: '☀️', category: categories[5], price: 40.95},
    {name: 'ILIA Serum SPF 40', emoji: '🌞', category: categories[5], price: 32.95},
    {name: 'Dr. Jart Tinted SPF 40', emoji: '🔆', category: categories[5], price: 23.95},
    {name: 'Dr. Jart Cryo Rubber', emoji: '🧊', category: categories[6], price: 15.95},
    {name: 'Peter Thomas Roth', emoji: '🧖🏻‍♀️', category: categories[6], price: 19.00},
    {name: 'Sk-ll Pitera Treatment Mask', emoji: '💆🏻‍♂️', category: categories[6], price: 139.95},
    {name: 'Summer Fridays Jet Lag', emoji: '✈️', category: categories[6], price: 67.95},
    {name: 'Laneige Water Sleeping Mask', emoji: '🌊', category: categories[6], price: 29.00},
  ]);

  console.log(products)

  process.exit();

})();
