import * as types from '../constants/chats';
import fetchApi from '../utils/fetch-api';
import { redirect } from './services'

export function fetchMyChats() {
  return (dispatch, getstate) => {
    dispatch({
      type: types.FETCH_MY_CHATS_REQUEST,
    });
    const { token } = getstate().auth;
    fetchApi('chats/my', token)
      .then(json => {
        dispatch({
          type: types.FETCH_MY_CHATS_SUCCESS,
          payload: json,
        })
      })
      .catch(err => dispatch({
        type: types.FETCH_MY_CHATS_FAILURE,
        payload: err,
      }));
  }
};
export function fetchAllChats() {
  return (dispatch, getstate) => {
    dispatch({
      type: types.FETCH_ALL_CHATS_REQUEST,
    })
    const { token } = getstate().auth;

    fetchApi('chats', token)
      .then(json => {
        dispatch({
          type: types.FETCH_ALL_CHATS_SUCCESS,
          payload: json,
        })
      })
      .catch(err => dispatch({
        type: types.FETCH_ALL_CHATS_FAILURE,
        payload: err,
      }));
  }
};
export function fetchChat(chatId) {
  return (dispatch, getstate) => {
    dispatch({
      type: types.FETCH_CHAT_REQUEST,
    })
    const { token } = getstate().auth;

    return fetchApi(`chats/${chatId}`, token)
      .then(json => {
        dispatch({
          type: types.FETCH_CHAT_SUCCESS,
          payload: json,
        });
        return json;
      })
      .catch(err => dispatch({
        type: types.FETCH_CHAT_FAILURE,
        payload: err,
      }));

  }
};

export function setActiveChat(chatId) {
  return (dispatch) => {
    return dispatch(fetchChat(chatId))
      .then(data => {
        if (!data) {
          dispatch(redirect('/chat'))
          return dispatch({
            type: types.UNSET_ACTIVE_CHAT,
          })
        }
        dispatch(redirect(`/chat/${chatId}`));
        return dispatch({
          type: types.SET_ACTIVE_CHAT,
          payload: data,
        })
      })
  }
};
// 5bcf8be03022630e10e61b48
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YmNmODcxYjMwMjI2MzBlMTBlNjFiNDciLCJpYXQiOjE1NDAzMjcxOTUsImV4cCI6MTU0MTE5MTE5NX0.1QHXxPIJRbD1T-ulLnuUlXkzKySrRWxMeZM1Dnaghy0

export function joinChat(chatId) {
  return (dispatch, getstate) => {
    dispatch({
      type: types.JOIN_CHAT_REQUEST,
    })
    const { token } = getstate().auth;

    fetchApi(`chats/${chatId}/join`, token)
      .then(json => {
        dispatch({
          type: types.JOIN_CHAT_SUCCESS,
          payload: json,
        });
      })
      .catch(err => dispatch({
        type: types.JOIN_CHAT_FAILURE,
        payload: err,
      }));
  }
}
export function leaveChat(chatId) {
  return (dispatch, getstate) => {
    dispatch({
      type: types.LEAVE_CHAT_REQUEST,
    })
    const { token } = getstate().auth;

    fetchApi(`chats/${chatId}/leave`, token)
      .then(json => {
        dispatch({
          type: types.LEAVE_CHAT_SUCCESS,
          payload: json,
        });
      })
      .catch(err => dispatch({
        type: types.LEAVE_CHAT_FAILURE,
        payload: err,
      }));
  }
}

export function createChat(chatName) {
  return (dispatch, getstate) => {
    dispatch({
      type: types.CREATE_CHAT_REQUEST,
      data: { title: chatName },
    })
    const { token } = getstate().auth;

    fetchApi(`chats`, token, { method: 'POST' },
      { data: { title: chatName } }
    )
      .then(json => {
        dispatch({
          type: types.CREATE_CHAT_SUCCESS,
          payload: json,
        });
        dispatch(redirect(`/chat/${json.chat._id}`));
        return json.chat;
      })
      .catch(err => dispatch({
        type: types.CREATE_CHAT_FAILURE,
        payload: err,
      }));
  }
}

export function deleteChat(chatId) {
  return (dispatch, getstate) => {
    dispatch({
      type: types.DELETE_CHAT_REQUEST,
    })
    const { token } = getstate().auth;

    fetchApi(`chats${chatId}`, token, { method: 'DELETE' })
      .then(json => {
        dispatch({
          type: types.DELETE_CHAT_SUCCESS,
          payload: json,
        });
        dispatch(redirect('/chat'))
      })
      .catch(err => dispatch({
        type: types.DELETE_CHAT_FAILURE,
        payload: err,
      }));
  }
}

// createChat
// deleteChat

// 5bd611ed75d6f0108c4262d8

// sendMessage
// eidtUser

//+ on change URL - setActChat
