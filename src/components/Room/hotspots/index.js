import './hotspots.scss'
import React, { useEffect, useState } from 'react'
import InputHot from './input'
const Hotspots = (props) => {
  const hotspots = [
    {
      id: 1,
      label: ''
    },
    {
      id: 2,
      label: ''
    },
    {
      id: 3,
      label: ''
    },
    {
      id: 4,
      label: ''
    },
    {
      id: 5,
      label: ''
    },
    {
      id: 6,
      label: ''
    },
    {
      id: 7,
      label: ''
    }
  ]
  const listHotspots = hotspots.map(item => <InputHot key={item.id} id={item.id} label={item.label} />)
  return (
    <div className={`roomImg ${props.isActive ? 'isShow' : ''}`}>
      {listHotspots}
    </div>
  )
}

export default Hotspots