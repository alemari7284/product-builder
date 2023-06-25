import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateSection } from '../../SectionSlice'
import { useNavigate } from 'react-router-dom'
import { updateChoice } from '../../CarSlice'

function NextButton() {
  const sections = useSelector((state) => state.sections.sections)
  const { currentSection } = useSelector((state) => state.sections)
  const [text, setText] = useState('colors')
  const choice = useSelector((state) => state.car.choice)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    let secId = currentSection
    currentSection == 0 ? (secId += 2) : (secId += 1)

    dispatch(
      updateSection({
        currentSection: secId,
      }),
    )

    const page = sections.find((el) => el.id == secId)
    navigate(`/${page.name}`)
  }

  useEffect(() => {
    if (currentSection > 0) {
      const page = sections?.find((el) => el.id == currentSection)
      setText(page?.textButton)
      if (currentSection == 3) {
        dispatch(
          updateChoice({
            previousState: choice,
            preview: choice.previewBig,
          }),
        )
      }
    }
  }, [currentSection])

  return (
    <div
      className={`nextButton ${
        choice.id != -1 && Object.values(choice).length > 0 ? 'green' : ''
      }`}
      onClick={handleClick}
    >
      <span>{text}</span>
      <span>{'>'}</span>
    </div>
  )
}

export default NextButton
