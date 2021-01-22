import React from 'react'
import { Link } from 'react-router-dom'
import {setReady} from '../../store/WindowStore/actions'
import {setAnimation, setCurrentPageSection} from '../../store/PagesStore/actions'
import {connect} from 'react-redux'

import './intro.scss'


const mapStateToProps= state => {
  return {
    isReady: state.scroll.isReady,
    isAnimation: state.pages.isAnimation,
    pageCurrentSection: state.pages.pageCurrentSection
  }
}
const mapDispatchToProps= {
  setReady,
  setAnimation,
  setCurrentPageSection
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
  togglePageHandler = (event) => {
    event.preventDefault();
    const  {pageCurrentSection} = this.props
    this.props.setAnimation(true)
    if (pageCurrentSection) {
      document.body.classList.remove('openPage');
    } else {
      document.body.classList.add('openPage');
    }
    this.props.history.push('/room')
    setTimeout(()=> {
      this.props.setAnimation(false)
      this.props.setCurrentPageSection(!pageCurrentSection)
    },500)
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
          <Link to='/room' onClick={event => this.togglePageHandler(event)}  className={'tipText ' + (this.props.isReady === true ? ' isActive': '')}> Please, press me </Link>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroComponent)
