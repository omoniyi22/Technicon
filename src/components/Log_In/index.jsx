
import {connect} from 'react-redux'
import {LoginAction} from './../../store/actions/authAction'
import {clearErrors, returnErrors} from './../../store/actions/errorActions'
import {nav_out} from './../../store/actions/navSwitch'
import LogIn from './login'

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  isLoading: state.isLoading,
  loading: state.loading.login_load
})
export default connect(mapStateToProps,
{LoginAction, clearErrors, returnErrors, nav_out}
)(LogIn)