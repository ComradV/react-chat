import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { signup, login } from '../actions'
import Authorization from '../components/Authorization';

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authorization)
