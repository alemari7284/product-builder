import React from 'react'
import './CardStyle.css'
import { useDispatch } from 'react-redux'
import { updateChoice } from '../../CarSlice'

const Card = ({ car, pool }) => {
  const dispatch = useDispatch()

  return (
    // <div id={car.id} className="card">
    <div id={car.id} className="card">
      <h2 className="car-name">{car.name}</h2>
      <img
        className="car-image"
        src={car.colors[0].colorImage}
        alt={car.name}
      />
      <span className="price-text">from {car.initialPrice} $</span>
      <input
        type="radio"
        name="car-selection"
        onChange={() => {
          dispatch(
            updateChoice({
              name: car.name,
            }),
          )
        }}
      />
    </div>
  )
}

export default Card
