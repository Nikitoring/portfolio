import './styles/theme.scss'
import React, { useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import IntroComponent from './components/Intro'
import CVComponent from './components/CV'

import RoomComponent from './components/Room'
import { useDispatch } from 'react-redux'


function App(props) {
  const dispatch = useDispatch()
  useEffect(() => {

    setTimeout(() => {
      dispatch({
        type:'IS_REARY',
        payload: true
      })
    }, 3000)
  },[dispatch])
  return (
    <Router>
      <main>
        <div className="app">
          <div className="horizont">
            <Route exact path="/" component={IntroComponent} />
          </div>
        </div>
        <Route path="/room" component={RoomComponent} />
        <Route path="/complete" component={CVComponent} />
      </main>
    </Router>
  )
}

export default App
