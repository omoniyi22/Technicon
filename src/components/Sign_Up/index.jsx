import {connect} from 'react-redux'
import {LoginAction, RegisterAction} from './../../store/actions/authAction'
import {clearErrors} from './../../store/actions/errorActions'
import {SignUp} from './Sign_Up'

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  isLoading: state.isLoading,
  loading: state.loading.register_load
})

export default connect(mapStateToProps,
{RegisterAction, clearErrors}
)(SignUp)