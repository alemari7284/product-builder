import React from 'react'
import FirstBlock from './FirstBlock'
import SecondBlock from './SecondBlock'
import './FooterStyle.css'
import { useSelector } from 'react-redux'

function Footer() {
  return (
    <div className="footer">
      <FirstBlock />
      <SecondBlock />
    </div>
  )
}

export default Footer
