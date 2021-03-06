import * as types from '../constants/chats';
import { combineReducers } from 'redux';

const initialState = {
  activeId: '',
  allIds: [],
  myIds: [],
  byIds: {},
};

const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_CHAT:
    case types.CREATE_CHAT_SUCCESS:
    case types.JOIN_CHAT_SUCCESS:
      return action.payload.chat._id;
    case types.UNSET_ACTIVE_CHAT:
    case types.LEAVE_CHAT_SUCCESS:
    case types.DELETE_CHAT_SUCCESS:
      return '';
    default:
      return state;
  }

}
const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case types.CREATE_CHAT_SUCCESS:
      return [...state, getChatId(action.payload.chat)]
    case types.DELETE_CHAT_SUCCESS:
      const deletedChatId = getChatId(action.payload.chat);
      return state.filter(chat => getChatId(chat) !== deletedChatId);
    default:
      return state;
  }

}
const myIds = (state = initialState.myIds, action) => {
  switch (action.type) {
    case types.FETCH_MY_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case types.JOIN_CHAT_SUCCESS:
    case types.CREATE_CHAT_SUCCESS:
      return [...state, getChatId(action.payload.chat)]
    case types.LEAVE_CHAT_SUCCESS:
    case types.DELETE_CHAT_SUCCESS:
      const leavedChatId = getChatId(action.payload.chat);
      return state.filter(chat => getChatId(chat) !== leavedChatId);
    default:
      return state;
  }

}
const byIds = (state = initialState.byIds, action) => {
  switch (action.type ) {
    case types.FETCH_ALL_CHATS_SUCCESS:
    case types.FETCH_MY_CHATS_SUCCESS:
    return {
      ...state,
      ...action.payload.chats.reduce((byId, chat) =>
      ({ ...byId, [chat._id]: chat })
      , {})
    }
    case types.CREATE_CHAT_SUCCESS:
      return {
        ...state,
        [getChatId(action.payload.chat)]: action.payload.chat,
      }
    case types.DELETE_CHAT_SUCCESS:
      const deletedChatId = getChatId(action.payload.chat);
      const newState = {...state};
      delete newState[deletedChatId];
      return newState;
    default:
      return state;
  }

}
export default combineReducers({
  activeId,
  allIds,
  myIds,
  byIds
});

export const getChatId = chat => chat._id;
export const getByIds = (state, ids) => {
  // console.log(ids);
  // console.log('state');
  // console.log(state);

  return ids.map(id => state.byIds[id])
};
export const getById = (state, id) => state[id];
export const getCurrentChatCreatorId = (state) => {
  return state.activeId?
    state.byIds[state.activeId].creator._id:
    '';
}