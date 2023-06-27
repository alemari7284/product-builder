import React, { useState } from 'react'
import './ErrorMessage.css'

const ErrorMessage = () => {
  const [showError, setShowError] = useState(false)

  return (
    <div className={'error-container active'}>
      <div className="error-message">Please, select a model first!</div>
    </div>
  )
}

export default ErrorMessage
