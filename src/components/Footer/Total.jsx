import React from 'react'
import { useSelector } from 'react-redux'

function Total() {
  const price = useSelector((state) => state.choice.price)
  return (
    <div className="total">
      <span style={{ color: 'grey', fontSize: '1rem' }}>Total</span>
      <span style={{ fontSize: '2rem' }}>${price ? price : 0}</span>
    </div>
  )
}

export default Total
