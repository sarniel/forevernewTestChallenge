import React from 'react'
import ToppingsItem from './ToppingsItem'
const Toppings = (props) => {
  const saveDataHandler = (newToppingData) => {
    const toppingData = {
      id: Math.random().toString(),
      ...newToppingData,
    }
    props.addOnToppings(toppingData)
  }

  return (
    <div>
      <h2>Pick your Toppings</h2>
      <div className="grid">
        {props.dataPoints.map((topping) => (
          <ToppingsItem
            key={topping.id}
            name={topping.name}
            price={topping.price}
            qty={topping.qty}
            onSaveToppingsData={saveDataHandler}
          ></ToppingsItem>
        ))}
      </div>
    </div>
  )
}

export default Toppings
