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
    {name: 'La Mer The Cleansing Foam', emoji: '🫧', category: categories[0], price: 95.00, details: 'A gentle cleanser that purifies even delicate, sensitive skin, drawing out impurities and excess oil, leaving skin soft, hydrated, and healthy looking.'},
    {name: 'Tatcha Rice Wash Cleanser', emoji: '🌾', category: categories[0], price: 38.00, details: 'A PH-neutral, daily cream cleanser that gently washes away impurities without stripping skin—leaving it hydrated, feeling soft, and looking luminous.'},
    {name: 'Fresh Soy Cleanser', emoji: '🧼', category: categories[0], price: 43.00, details: 'A universal face wash that is proven to maintain skin pH while also cleansing, softening, and hydrating all skin types and tones.'},
    {name: 'Tatcha Dewy Skin Cream', emoji: '💦', category: categories[1], price: 82.00, details: 'A rich cream that feeds skin with plumping hydration and antioxidant-packed Japanese purple rice for a dewy, healthy glow.'},
    {name: 'Drunk Elephant Moisturizer', emoji: '🐘', category: categories[1], price: 68.00, details: 'A protein moisturizer that combines signal peptides, growth factors, amino acids, and pygmy waterlily to visibly improve skins tone, texture, and firmness.'},
    {name: 'Kiehls Ultra Moisturizing Cream', emoji: '🧴', category: categories[1], price: 35.00, details: 'A fragrance-free moisturizing cream, formulated with squalane, that provides up to 24 hours of ultra-lightweight hydration.'},
    {name: 'Farmacy 2% Toner', emoji: '🥒', category: categories[2], price: 31.95, details: 'An alcohol-free, 2% BHA toner that deeply exfoliates, unclogs pores and controls oil without over-stripping skin.'},
    {name: 'Biossance BHA Toner', emoji: '🌱', category: categories[2], price: 30.95, details: 'An alcohol-free dynamic toning solution packed with naturally derived AHA and BHAs that visibly tightens pores, clarifies, purifies, and hydrates all at once.'},
    {name: 'Hyaluronic Acid ', emoji: '✨', category: categories[3], price: 9.95, details: 'A hydrating formula with ultra-pure, vegan hyaluronic acid.'},
    {name: 'Niacinamide 10%', emoji: '🧪', category: categories[3], price: 12.95, details: 'A high-strength vitamin-and-mineral blemish formula with 10 percent pure niacinamide and one percent zinc PCA.'},
    {name: 'Sk-ll Facial Essence', emoji: '💆🏻‍♀️', category: categories[3], price: 110.00, details: 'A powerful treatment to visibly soften texture, reduce the appearance of dark spots and fine lines due to dryness, even the look of skins tone, and enhance visible radiance.'},
    {name: 'OleHenriksen Vitamin C Creme', emoji: '🍊', category: categories[4], price: 42.95, details: 'A bestselling vitamin C eye cream that visibly brightens, diminishes dark circles and crows feet, and improves concealer application and wear.'},
    {name: 'Glow Recipe Guava Gel Cream', emoji: '🍈', category: categories[4], price: 38.95, details: 'A potent yet gentle, visibly brightening eye cream to reduce the look of dark circles, hydrate, and depuff the entire eye area with 10 percent encapsulated vitamin C complex, niacinamide blend, and peptides.'},
    {name: 'Shiseido SPF 50', emoji: '🧴', category: categories[5], price: 29.95, details: 'An invisible, broad-spectrum SPF 50+ sunscreen with a protective veil that can become more effective in water, sweat, and heat.'},
    {name: 'SuperGoop SPF 40', emoji: '☀️', category: categories[5], price: 40.95, details: 'A hydrating, makeup-gripping primer with SPF 40 and blue-light protection that has a pearlescent finish to leave skin luminous with a instant glow.'},
    {name: 'ILIA Serum SPF 40', emoji: '🌞', category: categories[5], price: 32.95, details: 'An award-winning tinted serum with light, dewy coverage, mineral SPF, and active levels of skincare ingredients.'},
    {name: 'Dr. Jart Tinted SPF 40', emoji: '🔆', category: categories[5], price: 23.95, details: 'A multitasking, niacinamide-powered cream with a natural-looking finish that hydrates, conceals, and protects.' },
    {name: 'Dr. Jart Cryo Rubber', emoji: '🧊', category: categories[6], price: 15.95, details: 'A two-step, at-home kit designed to deliver active ingredients to ensure maximum skincare benefits.'},
    {name: 'Peter Thomas Roth', emoji: '🧖🏻‍♀️', category: categories[6], price: 19.00, details: 'A fluffy-light 30% Hyaluronic Acid Complex cream with Pentavitin®, a breakthrough ingredient that provides hydration for up to 72 hours.*'},
    {name: 'Sk-ll Pitera Treatment Mask', emoji: '💆🏻‍♂️', category: categories[6], price: 139.95, details: 'A cult-favorite sheet mask that immerses your skin in intense hydration.'},
    {name: 'Summer Fridays Jet Lag', emoji: '✈️', category: categories[6], price: 67.95, details: 'An enhanced, fragrance-free formula that nourishes, hydrates, and calms your skin with niacinamide, glycerin, hyaluronic acid, and antioxidants.'},
    {name: 'Laneige Water Sleeping Mask', emoji: '🌊', category: categories[6], price: 29.00, details: 'A bestselling overnight Water Sleeping Mask that is formulated with squalane and Probiotic-Derived Complex for hyper-hydrating results.'},
  ]);

  console.log(products)

  process.exit();

})();
