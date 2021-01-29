import React from 'react'
import { setReady } from '../../store/WindowStore/actions'
import { setTimer, setHints } from '../../store/AchivesStore/actions'
import {setMistake } from '../../store/HealthStore/actions'
import {
  setAnimation,
  setCurrentPageSection
} from '../../store/PagesStore/actions'
import { connect } from 'react-redux'

import './cv.scss'

const mapStateToProps = (state) => {
  return {
    isReady: state.scroll.isReady,
    timer: state.achives.timerInterval,
    health: state.health.health,
  }
}
const mapDispatchToProps = {
  setReady,
  setAnimation,
  setCurrentPageSection,
  setTimer,
  setHints,
  setMistake
}

class CVComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  goToStart = () => {
    this.props.history.replace('/')
    this.props.setMistake({
      type: 'SET_MISTAKE',
      payload: 0
    })
  }
  render() {
    return (
      <div className="cv-intro">
        <div className="cv-description">
          <div className="cv-title">
            Mission {this.props.timer ? 'complete' : 'failed'}
          </div>
          <div className="cv-subtitle">
            Your time: {this.props.timer ? this.props.timer : 'Ooops!'}
          </div>
          {!this.props.timer && <div className="cv-link" onClick={event => this.goToStart(event)}>
            Try again
          </div>}
        </div>
        {this.props.timer && (
          <div className={`cv isActive`}>
            <div className="photoContainer">
              <div className="photo"></div>
              <div className="name"> Nikita Mavrychev </div>
              <div className="cv-information">
                <div className="cv-russia">
                  В детстве был благовоспитанным мальчиком, но познакомился с
                  компьютерами и покатился... Вежлив, правдив, добр. Женат.
                </div>
                <div className="section-wrapper clearfix">
                  <h3 className="section-title">Skills</h3>
                  <ul>
                    <li className="skill-percentage">HTML / HTML5</li>
                    <li className="skill-percentage">
                      CSS / CSS3 / SASS / Bootstrap
                    </li>
                    <li className="skill-percentage">Javascript</li>
                    <li className="skill-percentage">Vue</li>
                    <li className="skill-percentage">Svelte</li>
                    <li className="skill-percentage">React</li>
                  </ul>
                </div>
                <div className="section-wrapper clearfix">
                  <h3 className="section-title">Contacts</h3>
                  <ul>
                    <li className="contact-item">
                      <a
                        className="contact-item git"
                        href="https://github.com/Nikitoring"
                      >
                        github
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        className="contact-item linked"
                        href="https://www.linkedin.com/in/nikita-mavrychev-61a3b91bb/"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        className="contact-item telegram"
                        href="https://t.me/Nikitoring"
                      >
                        telegram
                      </a>
                    </li>
                    <li className="contact-item">
                      <a
                        className="contact-item mail"
                        href="mailto:nikitoring88@gmail.com"
                      >
                        nikitoring88@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {!this.props.timer && (
          <div className={`cv isFake`}>
            <div className="photoContainer">
              <div className="fakeInformation"></div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CVComponent)
