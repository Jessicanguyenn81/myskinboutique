import './OrderListProduct.css';

export default function OrderListProduct({ order, isSelected, setSelectedOrder }) {
  return (
    <div
      className={`OrderListProduct${isSelected ? ' selected' : ''}`}
      onClick={() => setSelectedOrder(order)}
    >
      <div>
        <div>Order Id: <span className="smaller">{order.orderId}</span></div>
        <div className="smaller">{new Date(order.createdAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        <div>${order.orderTotal.toFixed(2)}</div>
        <div className="smaller">{order.totalQty} Product{order.totalQty > 1 && 's'}</div>
      </div>
    </div>
  );
}