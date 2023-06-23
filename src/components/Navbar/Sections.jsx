import React from 'react'
import './NavStyle.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateSection } from '../../CarSlice'

function Sections({ sectionName }) {
  let navigate = useNavigate()
  const choice = useSelector((state) => state.choice)

  const dispatch = useDispatch()

  const handleClick = (e) => {
    const innerText = e.currentTarget.innerText
    switch (innerText) {
      case 'MODELS':
        navigate('/')
        dispatch(
          updateSection({
            nextSection: 'Colors',
          }),
        )
        break
      case 'COLORS':
        if (Object.values(choice).length > 0 && choice.id != -1) {
          navigate('/colors')
          dispatch(
            updateSection({
              nextSection: 'Accessories',
            }),
          )
          break
        } else {
          console.log('select a model first!')
          break
        }
      case 'ACCESSORIES':
        if (Object.values(choice).length > 0 && choice.id != -1) {
          navigate('/accessories')
          dispatch(
            updateSection({
              nextSection: 'Summary',
            }),
          )
          break
        } else {
          console.log('select a model first!')
          break
        }
      case 'SUMMARY':
        if (Object.values(choice).length > 0 && choice.id != -1) {
          navigate('/summary')
          dispatch(
            updateSection({
              nextSection: 'Buy now',
            }),
          )
          break
        } else {
          console.log('select a model first!')
          break
        }
    }
  }

  return (
    <nav>
      <ul className="sections_list">
        <li
          onClick={handleClick}
          className={`${
            sectionName == 'Models' ? 'sections_tab--selected' : 'sections_tab'
          } `}
        >
          Models
        </li>
        <li
          onClick={handleClick}
          className={`${
            sectionName == 'Colors' ? 'sections_tab--selected' : 'sections_tab'
          } `}
        >
          Colors
        </li>
        <li
          onClick={handleClick}
          className={`${
            sectionName == 'Accessories'
              ? 'sections_tab--selected'
              : 'sections_tab'
          } `}
        >
          Accessories
        </li>
        <li
          onClick={handleClick}
          className={`${
            sectionName == 'Summary' ? 'sections_tab--selected' : 'sections_tab'
          } `}
        >
          Summary
        </li>
      </ul>
    </nav>
  )
}

export default Sections
