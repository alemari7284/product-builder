import React from 'react'
import { useSelector } from 'react-redux'

function SumColor() {
  const choice = useSelector((state) => state.car.choice)
  const cars = useSelector((state) => state.car.pool)
  const myColors = cars.find((obj) => obj.name === choice.name)?.colors || []

  const myColor = myColors.find((obj) => obj.colorName === choice.color)
  return (
    <div className="universalWrapper">
      <h5 className="sTitle">COLOR</h5>
      <div className="colorWrapper">
        <div
          className="colorCircle"
          style={{ backgroundColor: myColor.colorHex }}
        />
        <div>
          {choice.color} - ${choice.price}
        </div>
      </div>
    </div>
  )
}

export default SumColor
