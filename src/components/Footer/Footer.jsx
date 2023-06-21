import React from 'react'
import Total from './Total'
import Preview from './Preview'
import './FooterStyle.css'
import { useSelector } from 'react-redux'

function Footer() {
  const myCar = useSelector((state) => state.choice)
  return (
    <div className="footer">
      <Preview />
      <Total />
    </div>
  )
}

export default Footer
