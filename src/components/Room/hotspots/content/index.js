import './content.scss'
import React, { useEffect, useState } from 'react'

const HintContent = (props) => {
  const [stateDialog, setStateDialog] = useState(false)

  useEffect(() => {
    if (props.isChecked) setStateDialog(true)
  },[setStateDialog,props.isChecked])
  return (
    <div>
      <div id={`content-${props.id}`} className={`content ${stateDialog ? 'isActive' : ''}`}>
        <div >
          <span className="close-button" onClick={() => {setStateDialog(!stateDialog)}}>
            X
          </span>
        </div>
        <div className="title">
          {props.title}
        </div>
        <div className="body">{props.body}</div>
      </div>
    </div>
  )
}

export default HintContent