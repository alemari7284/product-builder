import React from 'react'
import Sections from './Sections'

function Navbar({ sectionName }) {
  return (
    <div className="navbar">
      <div className="homeTitle">Product Builder</div>
      <Sections sectionName={sectionName} />
    </div>
  )
}

export default Navbar
