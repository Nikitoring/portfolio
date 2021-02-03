import './room.scss'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TimerComponent from '../Timer'
import HealthComponent from '../Health'
import Hotspots from './hotspots'
export default function RoomComponent(props) {
  const isAnimation = useSelector((store) => store.pages.isAnimation)
  const pageCurrentSection = useSelector(
    (store) => store.pages.pageCurrentSection,
  )
  const hints = useSelector((state) => state.achives.hints)
  const health = useSelector((state) => state.health.health)
  const dispatch = useDispatch()
  const [previewClasses, setPreview] = useState(' isActive')
  const [classesForRoom, setclassesForRoom] = useState('')
  const [isActiveTimer, setStateTimer] = useState(false)
  const classes = `${pageCurrentSection ? ' isActive' : ''}${
    isAnimation ? ' isAnimating' : ''
  }`
  useEffect(() => {
      let findHints = hints.filter(hint => hint.isFound === true)

      if (findHints.length === hints.length) {
        dispatch({
          type: 'SET_HINTS',
          payload: hints.map((item) => {
            item.isFound = !item.isFound
            item.isChecked = !item.isChecked
            return item
          })
        })
        setTimeout(()=>{
          props.history.push('/complete')}
        ,3000)
      }
      if (health === 3) {
        dispatch({
          type: 'SET_HINTS',
          payload: hints.map((item) => {
            item.isFound = false
            item.isChecked = false
            return item
          }),
        })
        dispatch({
          type: 'SET_TIMER',
          payload: null
        })
        setTimeout(()=>{
          props.history.push('/complete')}
        ,2000)
      }
  },[dispatch,props.history,hints, health])
  const startRoom = (event) => {
    event.preventDefault()
    setPreview('isHidden')
    document.getElementsByClassName('preview')[0].classList.remove('isActive')
    setclassesForRoom(' isActive')
    setStateTimer(true)
    dispatch({
      type: 'SET_HINTS',
      payload: hints.map((item) => {
        item.isFound = false
        item.isChecked = false
        return item
      })
    })
  }
  const closeRoom = (event) => {
    event.preventDefault()
    props.history.goBack()
    dispatch({
      type: 'SET_HINTS',
      payload: hints.map((item) => {
        item.isFound = false
        item.isChecked = false
        return item
      }),
    })
    dispatch({
      type: 'SET_TIMER',
      payload: null
    })
    dispatch({
      type: 'SET_MISTAKE',
      payload: 0
    })
  }
  return (
    <section className={`page-section${classes}`}>
      {/* <div id='light'></div> */}
      <div className="wrapper">
        <div className="cols">
          <div className={`room ${classesForRoom}`}>

            <div className={`headerContainer ${isActiveTimer ? 'isShow' : ''}`}>
              <TimerComponent isActiveTimer={isActiveTimer} />

              <Link
                  to="/"
                  className="closeBtn"
                  onClick={(event) => closeRoom(event)}
                >&#10005;</Link>
            </div>
            {isActiveTimer && <HealthComponent />}
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
