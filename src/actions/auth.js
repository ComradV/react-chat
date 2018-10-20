import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../constants'

export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST
    })

    return fetch('http://localhost:8001/v1/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          return json;
        }
        throw new Error(json.message)
      })
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }
        localStorage.setItem('token', json.token);

        dispatch({
          type: SIGNUP_SUCCESS,
          payload: json,
        })
      })
      .catch(err => dispatch({
        type: SIGNUP_FAILURE,
        payload: err,
      }));
  }
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    })

    return fetch('http://localhost:8001/v1/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          return json;
        }
        throw new Error(json.message)
      })
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }
        localStorage.setItem('token', json.token);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: json,
        })
      })
      .catch(err => dispatch({
        type: LOGIN_FAILURE,
        payload: err,
      }));
  }
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_REQUEST
    })
  }
}

