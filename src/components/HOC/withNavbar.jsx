import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SecundaryFooter from '../Footer/SecundaryFooter'

const withNavbar = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <div>
          <Navbar sectionName={WrappedComponent.name} />
          <WrappedComponent {...props} />
          <Footer />
          <SecundaryFooter />
        </div>
      </>
    )
  }
}

export default withNavbar
