import './MenuListProduct.css';

export default function MenuListProduct({ menuProduct, handleAddToOrder }) {
  return (
    <div className="MenuListProduct">
      <div className="emoji flex-ctr-ctr">{menuProduct.emoji}</div>
      <div className="name">{menuProduct.name}</div>
      <div className="buy">
        <span>${menuProduct.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuProduct._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}