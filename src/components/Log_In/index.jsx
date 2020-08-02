import {connect} from 'react-redux'
import {LoginAction} from './../../store/actions/authAction'
import {clearErrors, returnErrors} from './../../store/actions/errorActions'

import {LogIn} from './Log_In'

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  isLoading: state.isLoading,
  loading: state.loading.login_load
})
export default connect(mapStateToProps,
{LoginAction, clearErrors, returnErrors}
)(LogIn)