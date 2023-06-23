import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateChoice } from '../../CarSlice'
import images from '../../imageExporter'

function ColorOption() {
  const choice = useSelector((state) => state.car.choice)
  const cars = useSelector((state) => state.car.pool)
  const dispatch = useDispatch()

  const myColors = cars.find((obj) => obj.name === choice.name)?.colors || []

  const handleClick = (color) => {
    dispatch(
      updateChoice({
        previousState: choice,

        color: color,
        previewBig: images[color],
      }),
    )
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
              onClick={() => handleClick(el.colorName)}
            />
          )
        })}
    </div>
  )
}

export default ColorOption
