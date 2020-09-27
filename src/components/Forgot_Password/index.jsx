import { Forgot_Password } from './Forgot_Password'
import { withRouter } from 'react-router'
import { nav_out } from './../../store/actions/navSwitch'
import { sendTokenToEmail, clearError } from './../../store/actions/forgotPasswordAction'
import { connect } from 'react-redux'
const mapStateToProps = state => ({
  loading: state.forgotPassword.loading,
  sent: state.forgotPassword.sent,
  fail: state.forgotPassword.fail,
  error: state.forgotPassword.error
})

export default withRouter(connect(mapStateToProps, { nav_out, sendTokenToEmail, clearError })(Forgot_Password))