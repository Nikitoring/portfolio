import '../drag-drop.scss'
import React, { useEffect, useState } from 'react'

const insideStyle = {
  backgroundColor: "#cccccc",
  opacity: 0.5,
};

const Drop = (props) => {
  const [isOver, setIsOver] = useState(false)
  const dragOver = (ev) => {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = props.dropEffect;
  }
  const drop = (ev) => {
    const droppedItem = ev.dataTransfer.getData('drag-item')
    if (droppedItem) {
      props.onItemDropped(droppedItem)
    }
  }
  const dragEnter = (ev) => {
    ev.dataTransfer.dropEffect = props.dropEffect
    setIsOver(true)
  }
  const dragLeave = () => setIsOver(false)
  return (
    <div
      onDragOver={dragOver}
      onDrop={drop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      style={{width: "100%", height: "100%",display: "flex",flexDirection: "row",flexWrap: "wrap", ...(isOver ? insideStyle : {})}}
    >
      {props.children}
    </div>
  )
}

export default Drop
