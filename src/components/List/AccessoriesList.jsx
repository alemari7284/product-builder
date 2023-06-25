import React from 'react'
import Checkbox from './Checkbox'
import { useSelector, useDispatch } from 'react-redux'

function AccessoriesList() {
  const id = useSelector((state) => state.car.choice.id - 1)
  const accessories = useSelector((state) => state.car.pool[id].accessories)
  let chosenOptionals = useSelector((state) => state.car.choice.accessories)

  return (
    <div className="accessoriesList">
      {accessories &&
        accessories.map((element, id) => (
          <Checkbox
            key={id}
            id={id}
            title={element.title}
            price={element.price}
          />
        ))}
    </div>
  )
}

export default AccessoriesList
