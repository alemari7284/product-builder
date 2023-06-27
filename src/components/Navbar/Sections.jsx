import React, { useEffect } from 'react'
import './NavStyle.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateSection } from '../../SectionSlice'
import { launchError } from '../../CarSlice'

function Sections({ sectionName }) {
  let navigate = useNavigate()
  const choice = useSelector((state) => state.car.choice)
  const { currentSection } = useSelector((state) => state.sections)
  const sections = useSelector((state) => state.sections.sections)

  const dispatch = useDispatch()

  useEffect(() => {
    if (currentSection > 0) {
      const page = sections.find((el) => el.id === currentSection)
      navigate(`/${page?.name}`)
    }
  }, [currentSection])

  const handleClick = (e) => {
    if (choice && Object.values(choice).length > 0 && choice.name != '') {
      dispatch(
        launchError({
          error: false,
        }),
      )
      const innerText = e.currentTarget.innerText
      switch (innerText) {
        case 'MODELS':
          dispatch(
            updateSection({
              currentSection: 1,
            }),
          )
          break
        case 'COLORS':
          if (Object.values(choice).length > 0 && choice.id != -1) {
            dispatch(
              updateSection({
                currentSection: 2,
              }),
            )
            break
          } else {
            console.log('select a model first!')
            break
          }
        case 'ACCESSORIES':
          if (Object.values(choice).length > 0 && choice.id != -1) {
            dispatch(
              updateSection({
                currentSection: 3,
              }),
            )
            break
          } else {
            console.log('select a model first!')
            break
          }
        case 'SUMMARY':
          if (Object.values(choice).length > 0 && choice.id != -1) {
            dispatch(
              updateSection({
                currentSection: 4,
              }),
            )
            break
          } else {
            console.log('select a model first!')
            break
          }
      }
    } else {
      dispatch(
        launchError({
          error: true,
        }),
      )
      setTimeout(() => {
        dispatch(
          launchError({
            error: false,
          }),
        )
      }, 2100)
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
