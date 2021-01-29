import './drag-drop.scss'
import React, { useEffect, useState } from 'react'
import Drag from './components/Drag.js'
import Drop from './components/Drop.js'

import { useSelector, useDispatch } from 'react-redux'
const DragDropComponent = (props) => {
  const { content, closeDialog } = props
  const checkString = 'HeaderLeftSidebarMainRightSidebarFooter'
  const [dropElements, setDropElements] = useState([])
  const [check, setCheck] = useState(null)
  const itemDropped = (item) => setDropElements([...dropElements, item])
  const dispatch = useDispatch()
  const health = useSelector((state) => state.health.health)
  const dragElements = ['Header', 'Footer', 'Main', 'LeftSidebar', 'RightSidebar']

  useEffect(() => {
    if (dropElements && dropElements.length === 5) {
      if (dropElements.join('') === checkString) {
        setCheck(<div className="rightChoice">Right choice!</div>)
      } else {
        setCheck(<div className="badChoice">
        You missed!<div>You lost one sherlok</div>
      </div>)
              dispatch({
                type: 'SET_MISTAKE',
                payload: health + 1,
              })
      }
    }
  }, [dropElements,health,dispatch])

  return (
    <div>
      <div className="modalContent">
        <div className="hint-title">{content.title}</div>
        <div className="hint-body">{content.body}</div>
        <div className="draDropContainer">
          {dragElements.map(item => (
          <Drag key={item} dataItem={item}>
            <div>{item}</div>
          </Drag>
          ))}
        </div>
        <div className="draDropLayout">
          <Drop onItemDropped={itemDropped} dropEffect="link">
          {dropElements.map(item => (
                    <div key={item} className={`dragContainer${item}`}>
                        {item}
                    </div>
                ))}
          </Drop>
        </div>
        {check && (
          <div className="choiceModal">
            <span
              className="close-button"
              onClick={() => {
                closeDialog()
              }}
            >
              &#10005;
            </span>
            {check}
          </div>
        )}
      </div>
    </div>
  )
}

export default DragDropComponent
