import {combineReducers} from 'redux'
import {scrollReducer} from './WindowStore/reducers'
import {pagesReducers} from './PagesStore/reducers'
import {achivesReducers} from './AchivesStore/reducers'
import {healthReducers} from './HealthStore/reducers'
export default combineReducers({
  scroll:scrollReducer,
  pages: pagesReducers,
  achives:achivesReducers,
  health: healthReducers
})