import React from 'react'
import FirstBlock from './FirstBlock'
import './FooterStyle.css'
import { useSelector } from 'react-redux'

function Footer() {
  const myCar = useSelector((state) => state.choice)
  return (
    <div className="footer">
      <FirstBlock />
    </div>
  )
}

export default Footer
