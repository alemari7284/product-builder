import React from 'react'
import './CardStyle.css'
import { useDispatch } from 'react-redux'
import { updateChoice } from '../../CarSlice'

const Card = ({ car, pool }) => {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    const radio = e.currentTarget.querySelector('input[type="radio"]')
    if (radio) {
      radio.checked = true
      radio.click()
    }
  }

  return (
    // <div id={car.id} className="card">
    <div id={car.id} className="card" onClick={handleClick}>
      <span className="car-name">{car.name}</span>
      <img
        className="car-image"
        src={car.colors[0].colorImage}
        alt={car.name}
      />
      <span className="price-text">from {car.initialPrice} $</span>
      <input
        type="radio"
        name="car-selection"
        onClick={() => {
          dispatch(
            updateChoice({
              name: car.name,
              price: car.initialPrice,
              preview: car.colors[0].colorImage,
              color: car.colors[0].colorName,
            }),
          )
        }}
      />
    </div>
  )
}

export default Card
