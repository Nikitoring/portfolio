import './content.scss'
import React, { useEffect, useState } from 'react'
import TerminalComponent from '../components/Terminal'
import QuestionComponent from '../components/Question'
import DragDropComponent from '../components/DragDrop/index.js'
import { useSelector, useDispatch } from 'react-redux'
const HintContent = (props) => {
  const [stateDialog, setStateDialog] = useState(false)
  const hints = useSelector((state) => state.achives.hints)
  const dispatch = useDispatch()
  useEffect(() => {
    if (props.isChecked) setStateDialog(true)
  }, [setStateDialog, props.isChecked])
  const closeDialog = () => {
    setStateDialog(!stateDialog)
    dispatch({
      type: 'SET_HINTS',
      payload: hints.map((item) => {
        if (item.id === props.id) {
          item.isFound = !item.isFound
        }
        return item
      }),
    })
  }
  return (
    <div
      id={`content-${props.id}`}
      className={`content ${stateDialog ? 'isActive' : ''}`}
    >
      {props.type === 'information' && (
        <div>
          <span
            className="close-button"
            onClick={() => {
              closeDialog()
            }}
          >
            &#10005;
          </span>
          <div className="modalContent">
            <div className="hint-title">{props.content.title}</div>
            <div className="hint-body">{props.content.body}</div>
          </div>
        </div>
      )}
      {props.type === 'terminal' && (
        <TerminalComponent stateDialog={stateDialog} id={props.id} closeDialog={closeDialog} />
      )}
      {props.type === 'dragAndDrop' && <DragDropComponent id={props.id} content={props.content} closeDialog={closeDialog} />}
      {props.type === 'question' && <QuestionComponent id={props.id} content={props.content} closeDialog={closeDialog} />}
    </div>
  )
}

export default HintContent
