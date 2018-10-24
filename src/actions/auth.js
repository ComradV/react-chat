import * as types from '../constants/auth';
import fetchApi from '../utils/fetch-api';

export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.SIGNUP_REQUEST
    })

    return fetchApi('signup','' ,{ method: 'POST' }, {username, password})
       .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }
        localStorage.setItem('token', json.token);

        dispatch({
          type: types.SIGNUP_SUCCESS,
          payload: json,
        })
      })
      .catch(err => dispatch({
        type: types.SIGNUP_FAILURE,
        payload: err,
      }));
  }
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_REQUEST
    })

    return fetchApi('login','' ,{ method: 'POST' }, {username, password})
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }
        localStorage.setItem('token', json.token);

        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: json,
        })
      })
      .catch(err => dispatch({
        type: types.LOGIN_FAILURE,
        payload: err,
      }));
  }
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: types.LOGOUT_REQUEST
    })
  }
}

export function recieveAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: types.RECIEVE_AUTH_REQUEST
    })
    if (!token) {
      return dispatch({
        type: types.RECIEVE_AUTH_FAILURE,
        payload: {errtype: 22}
      })
    }
  return fetchApi('users/me',token)
      .then(json => {
        dispatch({
          type: types.RECIEVE_AUTH_SUCCESS,
          payload: json,
        })
      })
      .catch(err => dispatch({
        type: types.RECIEVE_AUTH_FAILURE,
        payload: err,
      }));
  }
}

