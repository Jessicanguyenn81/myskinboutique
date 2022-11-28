import './MenuList.css';
import MenuListProduct from '../MenuListProduct/MenuListProduct';

export default function MenuList({ menuProducts, handleAddToOrder }) {
  const products = menuProducts.map(product =>
    <MenuListProduct
      key={product._id}
      menuProduct={product}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      {products}
    </main>
  );
}