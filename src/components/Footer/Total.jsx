import React from 'react'
import { useSelector } from 'react-redux'

function Total() {
  const choice = useSelector((state) => state.car.choice)

  return (
    // <div className={`total ${choice.id != -1 ? 'mounted' : ''}`}>
    <div className="total">
      <span style={{ color: 'grey', fontSize: '1rem' }}>Total</span>
      <span style={{ fontSize: '2rem' }}>
        ${choice.price ? choice.price : 0}
      </span>
    </div>
  )
}

export default Total
