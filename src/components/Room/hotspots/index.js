import './hotspots.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import InputHot from './input'
import HintContent from './content'
const Hotspots = (props) => {
  const hotspots =  useSelector(state => state.achives.hints)
  const listHotspots = hotspots.map(item => <InputHot key={item.id} id={item.id} label={item.label} isChecked={item.isChecked} />)
  const listHintContent = hotspots.map(item => <HintContent key={item.id} id={item.id} title={item.content.title} body={item.content.body} isChecked={item.isChecked} />)
  return (
    <div className={`roomImg ${props.isActive ? 'isShow' : ''}`}>
      {listHotspots}
      {listHintContent}
    </div>
  )
}

export default Hotspots