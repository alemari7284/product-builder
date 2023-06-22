import React from 'react'
import './NavStyle.css'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Sections({ sectionName }) {
  const modelsRef = useRef(null)
  const colorsRef = useRef(null)
  const accessoriesRef = useRef(null)
  const summaryRef = useRef(null)

  let navigate = useNavigate()

  const resetBorders = () => {
    modelsRef.current.classList.remove('sections_tab--selected')
    colorsRef.current.classList.remove('sections_tab--selected')
    accessoriesRef.current.classList.remove('sections_tab--selected')
    summaryRef.current.classList.remove('sections_tab--selected')
  }

  const handleClick = (e) => {
    const innerText = e.currentTarget.innerText
    switch (innerText) {
      case 'MODELS':
        navigate('/')
        break
      case 'COLORS':
        navigate('/colors')
        break
      case 'ACCESSORIES':
        navigate('/accessories')
        break
      case 'SUMMARY':
        navigate('/summary')
        break
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
