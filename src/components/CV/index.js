import React from 'react'
import { setReady } from '../../store/WindowStore/actions'
import { setTimer, setHints } from '../../store/AchivesStore/actions'
import {
  setAnimation,
  setCurrentPageSection,
} from '../../store/PagesStore/actions'
import { connect } from 'react-redux'

import './cv.scss'

const mapStateToProps = (state) => {
  return {
    isReady: state.scroll.isReady,
    timer: state.achives.timerInterval,
  }
}
const mapDispatchToProps = {
  setReady,
  setAnimation,
  setCurrentPageSection,
  setTimer,
  setHints,
}

class CVComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: null,
    }
  }
  converTimer = (time) => {
    if (time && time > 0) {
      let seconds = (time / 1000).toFixed(1)
      let minutes = (time / (1000 * 60)).toFixed(1)
      let hours = (time / (1000 * 60 * 60)).toFixed(1)
      let days = (time / (1000 * 60 * 60 * 24)).toFixed(1)

      if (seconds < 60) {
        return seconds + ' Sec'
      } else if (minutes < 60) {
        return minutes + ' Min'
      } else if (hours < 24) {
        return hours + ' Hrs'
      } else {
        return days + ' Days'
      }
    } else {
      return null
    }

  }
  componentDidMount() {
    this.setState({
      time: this.converTimer(this.props.timer),
    })
  }

  render() {
    return (
      <div className="cv-intro">
        <div className="cv-description">
          <div className="cv-title">YOU FOUND ALL</div>{this.props.timer}
          <div className="cv-subtitle">Your time: {this.state.time ? this.state.time : 'Ooops!'}</div>
        </div>
        <div className={`cv ${this.state.time ? 'isActive' : ''}`}>
          <div className="photoContainer">
            <div className="photo">

            </div>
            <div className="name"> Nikita Mavrychev </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CVComponent)
