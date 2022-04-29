import React, { useState } from 'react'

const ToppingsItem = (props) => {
  const [toggle, setToggle] = useState(false)

  const AddToppingsHandler = () => {
    setToggle(!toggle)

    const ItemData = {
      name: props.name,
      price: props.price,
      qty: props.price,
      value: '1',
    }
    props.onSaveToppingsData(ItemData)
  }

  return (
    <div
      className={`flex items gap-1 ${toggle ? 'active' : ''}`}
      onClick={AddToppingsHandler}
    >
      <i>[]</i>
      <div data-price={props.price} data-qty={props.qty}>
        {props.name}
      </div>
    </div>
  )
}

export default ToppingsItem
