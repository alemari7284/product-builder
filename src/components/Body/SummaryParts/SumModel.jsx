import React from 'react'
import { useSelector } from 'react-redux'

function SumModel() {
  const choice = useSelector((state) => state.car.choice)

  return (
    <div className="universalWrapper">
      <h5 className="sTitle">MODEL</h5>
      <img src={choice.preview} alt="" />
      <h6 className="sTitle">{choice.name}</h6>
      <p className="caption">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione
        nulla atque molestias at explicabo aperiam reprehenderit culpa nihil,
        quis totam cupiditate dolores in quisquam magnam inventore nobis, rem
        adipisci eveniet illum.
      </p>
    </div>
  )
}

export default SumModel
