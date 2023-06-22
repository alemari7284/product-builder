import React from 'react'
import './CardStyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateChoice } from '../../CarSlice'
import checked from '../../assets/cd-icon-check.svg'

const Card = ({ car, pool, selected }) => {
  const dispatch = useDispatch()
  const choice = useSelector((state) => state.choice)

  const handleClick = () => {
    dispatch(
      updateChoice({
        previousState: choice,
        id: car.id,
        name: car.name,
        price: car.initialPrice,
        preview: car.colors[0].colorImage,
        color: car.colors[0].colorName,
      }),
    )
  }

  return (
    <div
      className={`card ${
        selected == car.id && !choice.unselect ? 'card--selected' : ''
      }`}
      onClick={handleClick}
    >
      <span className="car-name">{car.name}</span>
      <img
        className="car-image"
        src={car.colors[0].colorImage}
        alt={car.name}
      />
      <span className="price-text">from {car.initialPrice} $</span>
      <div
        className={`radioButton ${
          selected == car.id && !choice.unselect ? 'green' : ''
        }`}
      >
        <img src={checked} alt="" />
      </div>
    </div>
  )
}

export default Card
