import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateSection } from '../../SectionSlice'
import { updateAccessories } from '../../CarSlice'
import { useNavigate } from 'react-router-dom'

function BackButton() {
  const sections = useSelector((state) => state.sections.sections)
  const { currentSection } = useSelector((state) => state.sections)
  const choice = useSelector((state) => state.car.choice)
  const [text, setText] = useState('colors')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    let secId = currentSection
    if (currentSection > 1) {
      secId -= 1
      console.log(secId)

      dispatch(
        updateSection({
          currentSection: secId,
        }),
      )
      const page = sections.find((el) => el.id == secId)
      navigate(`/${page.name}`)
    }
  }

  useEffect(() => {
    if (currentSection > 1) {
      const page = sections?.find((el) => el.id == currentSection)
      setText(page?.textButton)
    }
  }, [sections])

  return (
    <>
      {currentSection > 1 && (
        <div className={'backButton'} onClick={handleClick}>
          <span>{'<'}</span>
        </div>
      )}
    </>
  )
}

export default BackButton
