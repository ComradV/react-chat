import * as types from '../constants/chats';
import fetchApi from '../utils/fetch-api';
import { redirect } from './services'

export function fetchMyChats(){
  return (dispatch, getstate) => {
    dispatch({
      type: types.FETCH_MY_CHATS_REQUEST,
    });
    const {token} = getstate().auth;
    fetchApi('chats', token)
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
export function fetchAllChats(){
  return (dispatch, getstate) => {
    dispatch({
      type: types.FETCH_ALL_CHATS_REQUEST,
    })
    const {token} = getstate().auth;

    fetchApi('chats', token)
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
export function fetchChat(chatId){
  return (dispatch, getstate) => {
    dispatch({
      type: types.FETCH_CHAT_REQUEST,
    })
    const {token} = getstate().auth;

    fetchApi(`chats/${chatId}`, token)
      .then(json => {
        dispatch({
          type: types.FETCH_MY_CHATS_SUCCESS,
          payload: json,
        });
        return json;
      })
      .catch(err => dispatch({
        type: types.FETCH_MY_CHATS_FAILURE,
        payload: err,
      }));

  }
};

export function setActiveChat(chatId){
  return (dispatch) => {
    dispatch(fetchChat(chatId))
      .then(data => {
        if(!data){
          dispatch(redirect('/chat'))
          return dispatch({
            type: types.UNSET_ACTIVE_CHAT,
          })
        }
        dispatch({
          type: types.SET_ACTIVE_CHAT,
          payload: data,
        })
      })
  }
};

// joinChat
// leaveChat
// createChat
// deleteChat

// sendMessage
// eidtUser

//+ on change URL - setActChat
