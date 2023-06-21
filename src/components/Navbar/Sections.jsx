import React from 'react'
import './NavStyle.css'

function Sections() {
  return (
    <nav>
      <ul className="sections_list">
        <li className="sections_tab">Models</li>
        <li className="sections_tab">Colors</li>
        <li className="sections_tab">Accessories</li>
        <li className="sections_tab">Summary</li>
      </ul>
    </nav>
  )
}

export default Sections
