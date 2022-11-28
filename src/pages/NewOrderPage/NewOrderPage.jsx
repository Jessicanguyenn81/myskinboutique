import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [menuProducts, setMenuProducts] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();
      categoriesRef.current = [...new Set(products.map(product => product.category.name))]
      setMenuProducts(products);
      setActiveCat(categoriesRef.current[0])
    }
    getProducts();
    async function getCart() {
        const cart = await ordersAPI.getCart()
        setCart(cart)
    }
    getCart();
  }, []);

  /*--- Event Handlers --- */
  async function handleAddToOrder(productId) {
    const cart = await ordersAPI.addProductToCart(productId)
    setCart(cart)
  }
  

  return (
    <main className="NewOrderPage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuProducts={menuProducts.filter(product => product.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail order={cart}/>
    </main>
  );
}