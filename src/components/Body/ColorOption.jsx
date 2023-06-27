import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateChoice, updatePrice } from '../../CarSlice'
import images from '../../imageExporter'

function ColorOption() {
  const choice = useSelector((state) => state.car.choice)
  const cars = useSelector((state) => state.car.pool)
  const dispatch = useDispatch()

  const myColors = cars.find((obj) => obj.name === choice.name)?.colors || []

  const handleClick = (color, price) => {
    const originalPrice = cars.find((obj) => obj.name === choice.name)
      .initialPrice

    console.log(originalPrice)
    if (color !== choice.color) {
      dispatch(
        updateChoice({
          previousState: choice,
          color: color,
          previewBig: images[color],
          price:
            originalPrice +
            price +
            choice.accessories.reduce((acc, current) => current.price + acc, 0),
        }),
      )
    } else {
      dispatch(
        updateChoice({
          previousState: choice,
          color: color,
          previewBig: images[color],
        }),
      )
    }
  }

  return (
    <div className="colorOption">
      {myColors &&
        myColors.map((el) => {
          return (
            <div
              id={el.colorName}
              key={el.colorName}
              className={`colorCircle ${
                el.colorName == choice.color && 'active'
              }`}
              style={{ backgroundColor: el.colorHex }}
              onClick={() => handleClick(el.colorName, el.colorPrice)}
            />
          )
        })}
    </div>
  )
}

export default ColorOption
