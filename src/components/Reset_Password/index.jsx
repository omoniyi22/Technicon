import { withRouter } from 'react-router'
import { nav_out } from './../../store/actions/navSwitch'
import { sendTokenToEmail, clearError, SetToken } from './../../store/actions/passwordResetAction'
import { connect } from 'react-redux'
import ResetPassword from './resetPassword'

const mapStateToProps = state => ({
  loading: state.reset_password.loading,
  sent: state.reset_password.sent,
  fail: state.reset_password.fail,
  error: state.reset_password.error
})

export default withRouter(connect(mapStateToProps, { nav_out, sendTokenToEmail, clearError, SetToken })(ResetPassword))
