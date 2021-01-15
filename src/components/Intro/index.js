import React from 'react'
import {setScrollY, setReady} from '../../store/WindowStore/actions'
import {connect} from 'react-redux'

import './intro.scss'


const mapStateToProps= state => {
  return {
    scroll: state.scroll.scrollY,
    isReady: state.scroll.isReady
  }
}
const mapDispatchToProps= {
  setScrollY,
  setReady
}

class IntroComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ['H', 'e', 'l', 'l', 'o'].map((char, key) => {
        return (
          <span key={key} className="title-char">
            {char}
          </span>
        )
      }),
      subTitle: 'who is here?',
    }
  }

  render() {
    return (
      <div className="intro">
        <div className="description">
          <div className="title">{this.state.title}</div>
          <div className="subtitle fadeIn">{this.state.subTitle}</div>
        </div>
        <div className="sherlok fadeIn"></div>
        <div className={'tip '+ (this.props.isReady === false ? ' isHidden' : '')}>
          <span  className={'tipText ' + (this.props.isReady === true ? ' isActive': '')}> Please, press me </span>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroComponent)
