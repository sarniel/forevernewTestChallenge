import React, { useState, useEffect } from 'react'
const OrderItem = (props) => {
  const [count, setCount] = useState(1)

  const decrementHandler = () => {
    setCount(count - 1)
  }
  const incrementHandler = () => {
    setCount(count + 1)
  }

  let totalPrice = count * props.price

  const savePrice = {
    price: totalPrice,
  }

  props.getTotalPrice(savePrice)

  return (
    <div className="flex gap-1 pb-1">
      <button onClick={decrementHandler}>-</button>
      <div>{count}</div>
      <button onClick={incrementHandler}>+</button>
      <div>{props.name}</div>
      <div className="ml-auto">${totalPrice}</div>
    </div>
  )
}

export default OrderItem
