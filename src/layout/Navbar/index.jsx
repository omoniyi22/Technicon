import {connect} from 'react-redux'
import {Navbar} from './Navbar'
import {logOutAction} from './../../store/actions/authAction'
import {nav_in} from './../../store/actions/navSwitch'

const mapStateToProps = state =>({
  auth: state.auth,
})


export default connect(
  mapStateToProps,
  {logOutAction, nav_in}
)(Navbar)
