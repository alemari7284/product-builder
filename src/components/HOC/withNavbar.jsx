import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

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
