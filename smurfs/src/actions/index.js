import axios from 'axios'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GET_SMURF_START = 'GET_SMURF_START'
export const GET_SMURF_SUCCESS = 'GET_SMURG_SUCCESS'
export const GET_SMURF_FAIL = 'GET_SMURF_FAIL'

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL'

export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL'
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const handleGetSmurf = () => dispatch => {
  dispatch({ type: GET_SMURF_START })
  axios
    .get('http://localhost:3333/smurfs')
    .then( res => dispatch({ type: GET_SMURF_SUCCESS, payload: res.data}))
    .catch( err => dispatch({ type: GET_SMURF_FAIL, payload: err }))
}

export const handleAddSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START })
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then( res => dispatch({ type: ADD_SMURF_SUCCESS, payload: smurf }))
    .catch( err => dispatch({ type: ADD_SMURF_FAIL, payload: err }))
}

export const handleDeleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START })
  axios
    .delete(`http://localhost:3333/smurfs/${id}`, { params: id })
    .then( res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: id }))
    .catch( err => dispatch({ type: DELETE_SMURF_FAIL, payload: err }))
}