import React from 'react'
import OrderItem from './OrderItem'
const OrderSummary = (props) => {
  const getTotalPrice = (newPrice) => {}

  return (
    <div>
      <h2>Order Summary</h2>
      <div className="">
        {props.items.map((summary) => (
          <OrderItem
            key={summary.id}
            name={summary.name}
            value={summary.value}
            price={summary.price}
            qty={summary.qty}
            getTotalPrice={getTotalPrice}
          />
        ))}
      </div>
      <div className="total">
        <div className="ml-auto table">$</div>
      </div>
      <button className="btn-primary">Place Order</button>
    </div>
  )
}

export default OrderSummary
