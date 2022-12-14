import './OrderDetail.css';
import LineProduct from '../LineProduct/LineProduct';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineProducts = order.lineProducts.map(product =>
    <LineProduct
      lineProduct={product}
      isPaid={order.isPaid}
      key={product._id}
      handleChangeQty={handleChangeQty}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-product-container flex-ctr-ctr flex-col scroll-y">
        {lineProducts.length ?
          <>
            {lineProducts}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineProducts.length}
                >PLACE ORDER</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="fresh">â¨Add To Your Routine!ð§ð¼ââï¸ð§ð½ââï¸</div>
        }
      </div>
    </div>
  );
}