import {connect} from 'react-redux'
import {UserProfile} from './UserProfile'
const mapStateToProps =state=>({
  auth: state.auth,
  profile : state.profile.profile
})

export default connect(mapStateToProps)(UserProfile)
// export {UserProfile as default} from './UserProfile.jsx'