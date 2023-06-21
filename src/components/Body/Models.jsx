import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

function Models() {
  const carPool = useSelector((state) => state.pool)
  console.log(carPool)

  return (
    <div className="modelsList">
      {carPool?.length > 0 &&
        carPool.map((el) => <Card key={el.id} car={el} pool={carPool} />)}
    </div>
  )
}

export default Models
