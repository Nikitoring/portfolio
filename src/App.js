import './styles/theme.scss'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IntroComponent from './components/Intro'
import CVComponent from './components/CV'

import RoomComponent from './components/Room'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'
import { setReady } from './store/WindowStore/actions'

const store = createStore(rootReducer)

function App(props) {

  useEffect(() => {

    setTimeout(() => {
      store.dispatch(setReady(true))
    }, 3000)
  }, [])
  return (
    <Router>
      <Provider store={store}>
        <main>
          <div className="app">
            <div className="horizont">
              <Route exact path="/" component={IntroComponent} />
            </div>
          </div>
          <Route path="/room" component={RoomComponent} />
          <Route path="/complete" component={CVComponent} />
        </main>
      </Provider>
    </Router>
  )
}

export default App
