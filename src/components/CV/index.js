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
  }

  render() {
    return (
      <div className="cv-intro">
        <div className="cv-description">
          <div className="cv-title">Mission complited</div>
          <div className="cv-subtitle">
            Your time: {this.props.timer ? this.props.timer : 'Ooops!'}
          </div>
        </div>
        <div className={`cv ${this.props.timer ? 'isActive' : ''}`}>
          <div className="photoContainer">
            <div className="photo"></div>
            <div className="name"> Nikita Mavrychev </div>
            <div className="cv-information">
              <div className="cv-russia">В детстве был благовоспитанным мальчиком, но познакомился с
              компьютерами и покатился... Вежлив, правдив, добр. Женат.</div>
              <div class="section-wrapper">
                <h3 class="section-title">Skills</h3>
                <ul>
                  <li class="skill-percentage">HTML / HTML5</li>
                  <li class="skill-percentage">CSS / CSS3 / SASS / Bootstrap</li>
                  <li class="skill-percentage">Javascript</li>
                  <li class="skill-percentage">Vue</li>
                  <li class="skill-percentage">Svelte</li>
                  <li class="skill-percentage">React</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CVComponent)
