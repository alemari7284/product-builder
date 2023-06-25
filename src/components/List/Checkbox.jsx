import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAccessories } from '../../CarSlice'
import iconCheck from '../../assets/cd-icon-check.svg'

function Checkbox({ id, title, price }) {
  const choice = useSelector((state) => state.car.choice)
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const myChoice = choice.accessories.find((obj) => {
      return obj.optional == title
    })
    setChecked(myChoice)
  }, [choice.accessories])

  const handleClick = (e) => {
    let optional = e.currentTarget.children[0].innerText
    let price = parseInt(e.currentTarget.children[1].innerText.substring('1'))

    dispatch(
      updateAccessories({
        optional,
        price,
      }),
    )
  }

  return (
    <div
      id={id}
      onClick={handleClick}
      className={`checkBox ${checked ? 'checkBox-selected' : ''}`}
    >
      <span>{title}</span>
      <div className="priceCheck">
        <span>${price}</span>
        <div className={`check ${checked ? 'green' : ''}`}>
          <img src={iconCheck} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Checkbox
