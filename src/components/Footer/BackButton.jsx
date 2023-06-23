import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateSection } from '../../SectionSlice'
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
    console.log(choice)
    if (currentSection > 1) {
      const page = sections?.find((el) => el.id == currentSection)
      console.log('page', page)
      setText(page?.textButton)
      console.log(page)
    }
  }, [sections])

  return (
    <div
      className={`backButton ${
        choice.id != -1 && currentSection > 1 ? 'green' : ''
      }`}
      onClick={handleClick}
    >
      <span>{'<'}</span>
    </div>
  )
}

export default BackButton
