import './NewOrderPage.css';
import { useEffect, useState, useRef } from 'react'
import * as productsAPI from '../../utilities/products-api'
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
    const [menuProducts, setMenuProducts] = useState([])
    const [activeCat, setActiveCat] = useState('')
    const categoriesRef = useRef([])
    
    useEffect(function() {
        (async function() {
            const products = await productsAPI.getAll()
            categoriesRef.current = [...new Set(products.map(product => product.category.name))]
            setMenuProducts(products)
            setActiveCat(categoriesRef.current[0])
        })()
    }, [])


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
            />
         <OrderDetail />
        </main>
    );
  }