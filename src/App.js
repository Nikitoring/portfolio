import './styles/theme.scss'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IntroComponent from './components/Intro'

import RoomComponent from './components/Room'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'
import { setScrollY, setReady } from './store/WindowStore/actions'

const store = createStore(rootReducer)

function App(props) {
  const [scrollY] = useState(store.getState().scroll.scrollY)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [horizonSpace] = useState('100vh')
  useEffect(() => {
    window.addEventListener('scroll', handleIndexScroll)
    setTimeout(() => {
      store.dispatch(setReady(true))
    }, 3000)
  })
  const handleIndexScroll = () => {
    const currentY = window.scrollY
    setScrollY(currentY)
    store.dispatch(setScrollY(currentY))
    setHasScrolled(hasScrolled || window.scrollY > 15)
  }
  return (
    <Router>
      <Provider store={store}>
        <main>
          <div className="app" style={{ '--scrollY': scrollY + 'px' }}>
            <div className="horizont">
              <Route exact path="/" component={IntroComponent} />
            </div>
          </div>
          {/* <div
            className="horizontSpace"
            style={{ '--marginTop': horizonSpace }}
          ></div> */}
          <Route path="/room" component={RoomComponent} />
        </main>
      </Provider>
    </Router>
  )
}

export default App
