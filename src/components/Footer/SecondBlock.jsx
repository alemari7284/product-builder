import React from 'react'
import NextButton from './NextButton'
import { useSelector, useDispatch } from 'react-redux'
import BackButton from './BackButton'
function SecondBlock() {
  return (
    <div className="secondBlock">
      <NextButton />
      <BackButton />
    </div>
  )
}

export default SecondBlock
