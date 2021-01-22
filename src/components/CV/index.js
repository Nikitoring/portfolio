import React from 'react'
// import { Link } from 'react-router-dom'
import {setScrollY, setReady} from '../../store/WindowStore/actions'
import {setAnimation, setCurrentPageSection} from '../../store/PagesStore/actions'
import {connect} from 'react-redux'

import '../Intro/intro.scss'


const mapStateToProps= state => {
  return {
    scroll: state.scroll.scrollY,
    isReady: state.scroll.isReady,
    isAnimation: state.pages.isAnimation,
    pageCurrentSection: state.pages.pageCurrentSection
  }
}
const mapDispatchToProps= {
  setScrollY,
  setReady,
  setAnimation,
  setCurrentPageSection
}

class CVComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="intro">
        <div className="description">
          <div className="title">YOU FIND ALL</div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CVComponent)
