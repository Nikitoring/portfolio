import './health.scss'
import React from 'react'
import { useSelector } from 'react-redux'

const HealthComponent = (props) => {
  const sherlocks = [1,2,3]
  const health = useSelector((state) => state.health.health)
  return (
    <ul className="healthBlock">
      {sherlocks.map(item => <li key={item} id={item} className={`sherlockOne ${item > sherlocks.length - health ? 'isLost': ''}`}></li>)}
    </ul>
  )
}

export default HealthComponent