import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

function Models() {
  const carPool = useSelector((state) => state.car.pool)
  const choice = useSelector((state) => state.car.choice)
  const error = useSelector((state) => state.car.error)

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <>
      <div className={`modelsList`}>
        {carPool?.length > 0 &&
          carPool.map((el) => (
            <Card selected={choice.id} key={el.id} car={el} pool={carPool} />
          ))}
      </div>
      {error && <ErrorMessage />}
    </>
  )
}

export default Models
