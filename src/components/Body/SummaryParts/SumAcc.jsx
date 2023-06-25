import React from 'react'
import { useSelector } from 'react-redux'

function SumAcc() {
  const choice = useSelector((state) => state.car.choice)

  return (
    <div className="universalWrapper">
      <div className="accList">
        <h5>ACCESSORIES</h5>
        <ul>
          {choice.accessories && choice.accessories.length > 0
            ? choice.accessories.map((opt) => <li>{opt.optional}</li>)
            : 'No Accessories selected'}
        </ul>
      </div>
    </div>
  )
}

export default SumAcc
