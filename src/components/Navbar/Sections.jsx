import React from 'react'
import './NavStyle.css'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Sections() {
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
        // resetBorders()
        // modelsRef.current.classList.add('sections_tab--selected')
        navigate('/')
        break
      case 'COLORS':
        // resetBorders()
        // colorsRef.current.classList.add('sections_tab--selected')
        navigate('/colors')
        break
      case 'ACCESSORIES':
        // resetBorders()
        // accessoriesRef.current.classList.add('sections_tab--selected')
        navigate('/accessories')
        break
      case 'SUMMARY':
        // resetBorders()
        // summaryRef.current.classList.add('sections_tab--selected')
        navigate('/summary')
        break
    }
  }

  return (
    <nav>
      <ul className="sections_list">
        <li ref={modelsRef} onClick={handleClick} className="sections_tab">
          Models
        </li>
        <li ref={colorsRef} onClick={handleClick} className="sections_tab">
          Colors
        </li>
        <li ref={accessoriesRef} onClick={handleClick} className="sections_tab">
          Accessories
        </li>
        <li ref={summaryRef} onClick={handleClick} className="sections_tab">
          Summary
        </li>
      </ul>
    </nav>
  )
}

export default Sections
