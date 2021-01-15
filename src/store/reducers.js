import {combineReducers} from 'redux'
import {scrollReducer} from './WindowStore/reducers'
import {pagesReducers} from './PagesStore/reducers'
export default combineReducers({
  scroll:scrollReducer,
  pages: pagesReducers
})