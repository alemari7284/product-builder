import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { updateSection } from '../../SectionSlice'
import { useNavigate } from 'react-router-dom'
import { launchError } from '../../CarSlice'
import { useSelector, useDispatch } from 'react-redux'
import './SecundaryFooter.css'

function SecundaryFooter() {
  const dispatch = useDispatch()
  const choice = useSelector((state) => state.car.choice)
  const navigate = useNavigate()

  const sections = useSelector((state) => state.sections.sections)
  const { currentSection } = useSelector((state) => state.sections)

  const renderButtonSectionModels = () => {
    if (currentSection === 0) {
      return (
        <Link onClick={handleNextClick} className="fullButton">
          {sections[currentSection].name} {'Colors >'}
        </Link>
      )
    } else {
      return (
        <>
          <Link onClick={handleBackClick} className="halfButton grey">
            {currentSection === 1
              ? 'Models'
              : sections[currentSection - 1].name}
          </Link>
          <Link onClick={handleNextClick} className="halfButton">
            {currentSection < 3 ? sections[currentSection + 1].name : 'buy now'}
            {}
          </Link>
        </>
      )
    }
  }

  const handleBackClick = () => {
    let secId = currentSection
    console.log('SEC ID', secId)
    if (currentSection > 0) {
      secId -= 1
      dispatch(
        updateSection({
          currentSection: secId,
        }),
      )
      const page = sections.find((el) => el.id == secId)
      console.log(page)
      navigate(`/${page.name}`)
    }
  }

  const handleNextClick = () => {
    if (currentSection < 3) {
      if (choice.id != -1) {
        let secId = currentSection
        secId += 1

        dispatch(
          updateSection({
            currentSection: secId,
          }),
        )

        const page = sections.find((el) => el.id == secId)
        navigate(`/${page.name}`)
      } else {
        dispatch(
          launchError({
            error: true,
          }),
        )
        setTimeout(() => {
          dispatch(
            launchError({
              error: false,
            }),
          )
        }, 2100)
      }
    }
  }

  return (
    <footer
      className={`sec-footer ${currentSection === 0 ? 'orange' : ''} ${
        choice.id != -1 ? 'sec-dis' : ''
      }`}
    >
      {renderButtonSectionModels()}
    </footer>
  )
}

export default SecundaryFooter
