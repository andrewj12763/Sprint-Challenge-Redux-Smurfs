/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import { FETCHING_SMURFS, SUCCESS, ERROR, ADDING_SMURF, DELETING_SMURF} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function reducer (state = initialState, action) {
  console.log('reducer', action)
  switch(action.type) {
    case FETCHING_SMURFS:
    return {
      ...state,
      fetchingSmurfs: true,
      error: null
    }
    case SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      error: null
    }
    case ERROR:
    return {
      ...state,
      error: action.payload
    }
    case ADDING_SMURF:
    return {
      ...state,
      addingSmurf: true,
      error: null
    }
    case DELETING_SMURF:
    return {
      ...state,
      deletingSmurf: true,
      error: null
    }
  default:
    return state
  }
}

export default reducer 