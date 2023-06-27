import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SecundaryFooter from '../Footer/SecundaryFooter'
import SecundaryNavbar from '../Navbar/SecundaryNavbar'
const withNavbar = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <div>
          <SecundaryNavbar />
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
