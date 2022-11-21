import './LineProduct.css';

export default function LineProduct({ lineProduct, isPaid }) {
  return (
    <div className="LineProduct">
      <div className="flex-ctr-ctr">{lineProduct.product.emoji}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineProduct.product.name}</span>
        <span>{lineProduct.product.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => alert('clicked')}
          >−</button>
        }
        <span>{lineProduct.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => alert('clicked')}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineProduct.extPrice.toFixed(2)}</div>
    </div>
  );
}