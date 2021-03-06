import { connect } from 'react-redux'
import { SideBar } from './SideBar'
import { logOutAction } from './../../store/actions/authAction'

const mapStateToProps = state => ({
  auth: state.auth,
  pix: state.profile.profile_pix,
  profile : state.profile.profile,

})

export default connect(
  mapStateToProps,
  { logOutAction }
)(SideBar)