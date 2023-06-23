import React from 'react'
import { useSelector } from 'react-redux'

function NextButton() {
  const nextSection = useSelector((state) => state.nextSection)
  const choice = useSelector((state) => state.choice)

  return (
    <div
      className={`nextButton ${
        Object.values(choice).length > 0 ? 'green' : ''
      }`}
    >
      <span>{nextSection}</span>
      <span>{'>'}</span>
    </div>
  )
}

export default NextButton
