import * as types from '../constants'

export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.SIGNUP_REQUEST
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
    if (!token) {
      return dispatch({
        type: types.RECIEVE_AUTH_FAILURE,
        payload: {errtype: 22}
      })
    }
    dispatch({
      type: types.RECIEVE_AUTH_REQUEST
    })
  return fetch('http://localhost:8001/v1/users/me', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          return json;
        }
        throw new Error(json.message)
      })
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

