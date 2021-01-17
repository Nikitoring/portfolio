import './hotspots.scss'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import InputHot from './input'
const Hotspots = (props) => {
  const hotspots =  useSelector(state => state.achives.hints)
  const listHotspots = hotspots.map(item => <InputHot key={item.id} id={item.id} label={item.label} isChecked={item.isChecked} />)
  return (
    <div className={`roomImg ${props.isActive ? 'isShow' : ''}`}>
      {listHotspots}
    </div>
  )
}

export default Hotspots