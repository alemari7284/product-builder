import React from 'react'
import { useSelector } from 'react-redux'

function Preview() {
  const myImage = useSelector((state) => state.choice.preview)

  return (
    <div className="preview">
      {myImage && <img width="197px" height="90px" src={myImage} alt="car" />}
    </div>
  )
}

export default Preview
