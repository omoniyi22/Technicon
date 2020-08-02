import {connect} from 'react-redux'
import {Navbar} from './Navbar'
import {logOutAction} from './../../store/actions/authAction'

const mapStateToProps = state =>({
  auth: state.auth,
})


export default connect(
  mapStateToProps,
  {logOutAction}
)(Navbar)
