import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ColorOption from './ColorOption'

function Colors() {
  const car = useSelector((state) => state.car)
  return (
    <div className="colorsList">
      <img
        width={'750px'}
        height={'356px'}
        src={car.choice.previewBig}
        alt=""
      />
      <ColorOption key={car.choice.id} />
    </div>
  )
}

export default Colors
