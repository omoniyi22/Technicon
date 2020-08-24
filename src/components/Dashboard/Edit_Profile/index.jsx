import { connect } from 'react-redux'
import Profile from "./EditProfile";
import { editProfile, clearErr } from './../../../store/actions/profileAction'
import { nav_in } from './../../../store/actions/navSwitch'

const mapStateToProps = state => ({
  profile: state.profile.profile,
  message: state.profile.message,
  err: state.profile.error,
  success: state.profile.success,
  timer: state.profile.timer,


})

export default connect(mapStateToProps,
  { editProfile, clearErr, nav_in }
)(Profile)
