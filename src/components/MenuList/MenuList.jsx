import './MenuList.css';
import MenuListProduct from '../MenuListProduct/MenuListProduct';

export default function MenuList({ menuProducts }) {
  const products = menuProducts.map(product =>
    <MenuListProduct
      key={product._id}
      menuProduct={product}
    />
  );
  return (
    <main className="MenuList">
      {products}
    </main>
  );
}