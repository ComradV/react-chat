import { combineReducers } from 'redux';
import auth from './auth';
import chats from './chats';

export default combineReducers({
  auth,
  chats
})

export const isCreator = (state, chat) => (
  chat && state.auth.user._id === chat.creator._id
)
export const isMember = () => false;
export const isChatMember = () => false;
