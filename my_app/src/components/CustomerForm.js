import React from 'react'

const CustomerForm = () => {
  return (
    <div>
      <h2>Enter Your Detail</h2>
      <form action="">
        <fieldset>
          <div className="grid">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="">Confirm Email</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="">address</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">postcode</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Contact Number</label>
              <input type="text" />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default CustomerForm
