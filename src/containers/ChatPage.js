import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ChatPage from '../components/ChatPage';
import {fetchMyChats, fetchAllChats, setActiveChat, createChat} from '../actions/chats'
import * as fromChats from '../reducers/chats';

const mapStateToProps = state =>({
  chats: fromChats.getByIds(state.chats, state.chats.allIds),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMyChats, 
  fetchAllChats, 
  setActiveChat,
  createChat,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage)
