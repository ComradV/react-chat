import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChatPage from '../components/ChatPage';
import { fetchMyChats, fetchAllChats, setActiveChat, createChat, leaveChat, deleteChat } from '../actions/chats'
import * as fromChats from '../reducers/chats';
import * as fromState from '../reducers';

const mapStateToProps = state => {
  const activeChat = fromChats.getById(state.chats, state.activeId);
  return {
    isAuthenticated: state.auth.isAuthenticated,
    chats: {
      active: activeChat,
      my: fromChats.getByIds(state.chats, state.chats.myIds),
      all: fromChats.getByIds(state.chats, state.chats.allIds),
    },
    currentUser: {
      ...state.auth.user,
      isMember: fromState.isMember(state, activeChat),
      isCreator: fromState.isCreator(state, activeChat),
      isChatMember: fromState.isChatMember(state, activeChat),
    }
    //myChat: (fromAuth.getUserId(state.auth) === fromChats.getCurrentChatCreatorId(state.chats)),
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMyChats,
  fetchAllChats,
  setActiveChat,
  createChat,
  leaveChat,
  deleteChat
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage)
