import React, { useState } from 'react'
import './App.css'
import CustomerForm from './components/CustomerForm'
import Toppings from './components/Toppings/Toppings'
import OrderSummary from './components/OrderSummary/OrderSummary'

const DUMMY_TOPPINGS = [
  {
    id: 1,
    name: 'Anchovy',
    price: 20,
    qty: 30,
  },
  {
    id: 2,
    name: 'Mozzarella',
    price: 10,
    qty: 30,
  },
  {
    id: 3,
    name: 'Bacon',
    price: 15,
    qty: 30,
  },
  {
    id: 4,
    name: 'Basil',
    price: 15,
    qty: 30,
  },
  {
    id: 5,
    name: 'Chilli',
    price: 6,
    qty: 30,
  },
  {
    id: 6,
    name: 'Mushroom',
    price: 25,
    qty: 30,
  },
  {
    id: 7,
    name: 'Olive',
    price: 12,
    qty: 30,
  },
  {
    id: 8,
    name: 'Onion',
    price: 11,
    qty: 30,
  },
  {
    id: 9,
    name: 'Pepper',
    price: 30,
    qty: 30,
  },
]

const DUMMY_SUMMARY = []

function App() {
  const [summary, setSummary] = useState(DUMMY_SUMMARY)

  const addToppingsHandler = (summary) => {
    setSummary((prevSummary) => {
      return [summary, ...prevSummary]
    })
  }

  const removeToppingsHandler = () => {}

  return (
    <div className="App">
      <CustomerForm />
      <Toppings
        dataPoints={DUMMY_TOPPINGS}
        addOnToppings={addToppingsHandler}
      />
      <OrderSummary onSaveSummary={addToppingsHandler} items={summary} />
    </div>
  )
}

export default App
