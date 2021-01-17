import './timer.scss'
import React, {useEffect, useState} from 'react'

export default function TimerComponent(props) {
  const [m, setMinutes] = useState(0)
  const [s, setSeconds] = useState(0)
  const [ms, setMiliseconds] = useState(0)

  useEffect(()=> {
    let interval = null
    if (props.isActiveTimer) {
      interval = setInterval(()=> {
        if (s === 60) {
          setMinutes(m=> m+1)
          setSeconds(0)
        }
        if (ms === 60) {
          setSeconds(s => s+1)
          setMiliseconds(0)
        }
        setMiliseconds(ms => ms+1)
      }, 10);
    }
    return () => clearInterval(interval);
  },[props.isActiveTimer,m,s,ms])
  return (
    <div className={`timer ${props.isActiveTimer ? 'isActive': ''}`}>
      <div className="time-block">
        {m < 10 && 0} {m} : {s < 10 && 0} {s} : {ms}
      </div>
    </div>
  )
}
