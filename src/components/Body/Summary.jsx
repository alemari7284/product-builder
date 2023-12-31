import React from 'react'
import { useSelector } from 'react-redux'
import SumModel from './SummaryParts/SumModel'
import SumColor from './SummaryParts/SumColor'
import SumAcc from './SummaryParts/SumAcc'

function Summary() {
  const choice = useSelector((state) => state.car.choice)
  const cars = useSelector((state) => state.car.pool)
  const myColors = cars.find((obj) => obj.name === choice.name)?.colors || []

  const myColor = myColors.find((obj) => obj.colorName === choice.color)

  return (
    <div className="summary">
      <SumModel />
      <SumColor />
      <SumAcc />
    </div>
  )
}

export default Summary
