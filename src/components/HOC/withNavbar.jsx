import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { useSelector } from 'react-redux'

const withNavbar = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Navbar sectionName={WrappedComponent.name} />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    )
  }
}

export default withNavbar
