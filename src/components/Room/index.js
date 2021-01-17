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
  const [previewClasses, setPreview] = useState(' isActive')
  const [classesForRoom, setclassesForRoom] = useState('')
  const [isActiveTimer, setStateTimer] = useState(false)
  const classes = `${pageCurrentSection ? ' isActive' : ''}${
    isAnimation ? ' isAnimating' : ''
  }`
  useEffect(() => {
    // setTimeout(()=> {
    //   if (pageCurrentSection && !isAnimation) {
    //     setPreview(' isActive')
    //   }
    // },500)
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
    console.log(props.history);
    props.history.goBack()
    // props.history.push('/room')
    // this.props.history.pop()
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
            {/* <img src="../../assets/room.svg"></img> */}
          </div>
        </div>
      </div>
    </section>
  )
}
