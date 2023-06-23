import React from 'react'
import FirstBlock from './FirstBlock'
import SecondBlock from './SecondBlock'
import './FooterStyle.css'
import { useSelector } from 'react-redux'

function Footer() {
  const myCar = useSelector((state) => state.choice)
  return (
    <div className="footer">
      <FirstBlock />
      <SecondBlock />
    </div>
  )
}

export default Footer
