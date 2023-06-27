import React from 'react'
import { useSelector } from 'react-redux'
import './SecundaryNavbar.css'

const SecundaryNavbar = () => {
  const sections = useSelector((state) => state.sections.sections)
  const currentSection = useSelector((state) => state.sections.currentSection)

  return (
    <nav className="secundary-navbar">
      <div className="secundary-navbar-left">
        {sections[currentSection].secundaryTitle}
      </div>
      <div className="secundary-navbar-right">
        Step {currentSection + 1} of 4
      </div>
    </nav>
  )
}

export default SecundaryNavbar
