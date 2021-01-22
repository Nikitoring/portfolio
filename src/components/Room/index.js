import './room.scss'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TimerComponent from '../Timer'
import Hotspots from './hotspots'
export default function RoomComponent(props) {
  const isAnimation = useSelector((store) => store.pages.isAnimation)
  const pageCurrentSection = useSelector(
    (store) => store.pages.pageCurrentSection,
  )
  const hints = useSelector((state) => state.achives.hints)
  const [previewClasses, setPreview] = useState(' isActive')
  const [classesForRoom, setclassesForRoom] = useState('')
  const [isActiveTimer, setStateTimer] = useState(false)
  const classes = `${pageCurrentSection ? ' isActive' : ''}${
    isAnimation ? ' isAnimating' : ''
  }`
  useEffect(() => {
    setTimeout(()=> {
      let findHints = hints.filter(hint => hint.isChecked === true)
      if (findHints.length === hints.length) {
        props.history.push('/complete')
      }
    },7000)
  })
  const startRoom = (event) => {
    event.preventDefault()
    setPreview('isHidden')
    document.getElementsByClassName('preview')[0].classList.remove('isActive')
    setclassesForRoom(' isActive')
    setStateTimer(true)
  }
  const closeRoom = (event) => {
    event.preventDefault()
    props.history.goBack()
  }
  return (
    <section className={`page-section${classes}`}>
      <div className="wrapper">
        <div className="cols">
          <div className={`room ${classesForRoom}`}>

            <div className={`headerContainer ${isActiveTimer ? 'isShow' : ''}`}>
              <TimerComponent isActiveTimer={isActiveTimer} />
              <Link
                  to="/"
                  className="closeBtn"
                  onClick={(event) => closeRoom(event)}
                >x</Link>
            </div>
            <div className={`roomContainer ${isActiveTimer ? 'isShow' : ''}`}>
            <Hotspots  isActive={isActiveTimer}/>
            </div>

            <div className={`preview ${previewClasses}`}>
              <span>You need to find hints about this person in the room </span>
              <div className="controlBtn">
                <div className="btnAgree" onClick={(event) => startRoom(event)}>
                  Start
                </div>
                <Link
                  to="/"
                  className="btnCancel"
                  onClick={(event) => closeRoom(event)}
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
