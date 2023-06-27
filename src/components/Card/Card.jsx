import React from 'react'
import './CardStyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateChoice, launchError } from '../../CarSlice'
import checked from '../../assets/cd-icon-check.svg'

const Card = ({ car, selected }) => {
  const dispatch = useDispatch()
  const choice = useSelector((state) => state.car.choice)

  const handleClick = () => {
    dispatch(
      updateChoice({
        previousState: choice,
        id: car.id,
        name: car.name,
        accessories: [],
        price: car.initialPrice,
        preview: car.colors[0].colorImage,
        previewBig: car.colors[0].colorImage,
        color: car.colors[0].colorName,
      }),
    )
  }

  return (
    <div
      className={`card ${selected == car.id ? 'card--selected' : ''}`}
      onClick={handleClick}
    >
      <span className="car-name">{car.name}</span>
      <img
        className="car-image"
        src={car.colors[0].colorImage}
        alt={car.name}
      />
      <span className="price-text">from {car.initialPrice} $</span>
      <div className={`radioButton ${selected == car.id ? 'green' : ''}`}>
        <img src={checked} alt="" />
      </div>
    </div>
  )
}

export default Card
