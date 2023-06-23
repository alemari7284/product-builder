import React from 'react'
import { useSelector } from 'react-redux'

function Preview() {
  const choice = useSelector((state) => state.car.choice)

  return (
    <div className="preview">
      {choice.preview && (
        <img width="197px" height="90px" src={choice.preview} alt="car" />
      )}
    </div>
  )
}

export default Preview
