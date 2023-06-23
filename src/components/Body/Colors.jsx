import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ColorOption from './ColorOption'

function Colors() {
  const state = useSelector((state) => state)
  return (
    <div className="colorsList">
      <img
        width={'750px'}
        height={'356px'}
        src={state.choice.previewBig}
        alt=""
      />
      <ColorOption key={state.choice.id} />
    </div>
  )
}

export default Colors
