import './OrderDetail.css';
import LineProduct from '../LineProduct/LineProduct';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order }) {
  if (!order) return null;

  const lineProducts = order.lineProducts.map(product =>
    <LineProduct
      lineProduct={product}
      isPaid={order.isPaid}
      key={product._id}
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
                  onClick={() => alert('clicked')}
                  disabled={!lineProducts.length}
                >PLACE ORDER</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="fresh">✨Add To Your Routine!🧖🏼‍♀️🧖🏽‍♀️</div>
        }
      </div>
    </div>
  );
}