import '../drag-drop.scss'
import React, { useEffect, useState } from 'react'

const draggingStyle = {
  opacity: 0.25,
}

const Drag = (props) => {
  const [isDragging, setIsDragging] = useState(false)
  const startDrag = (ev) => {
    ev.dataTransfer.setData('drag-item', props.dataItem)
  }
  const dragEnd = () => setIsDragging(false)
  return (
    <div
      style={isDragging ? draggingStyle : {}}
      className="dragBox"
      draggable
      onDragStart={startDrag}
      onDragEnd={dragEnd}
    >
      {props.children}
    </div>
  )
}

export default Drag
