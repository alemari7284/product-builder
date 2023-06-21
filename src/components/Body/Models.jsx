import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

function Models() {
  const carPool = useSelector((state) => state.pool)
  const choice = useSelector((state) => state.choice)

  return (
    <div className={`modelsList`}>
      {carPool?.length > 0 &&
        carPool.map((el) => (
          <Card selected={choice.id} key={el.id} car={el} pool={carPool} />
        ))}
    </div>
  )
}

export default Models
