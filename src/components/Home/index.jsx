import {connect} from 'react-redux';
import {Home} from './Home'
import {nav_in} from './../../store/actions/navSwitch'

const mapStateToProps=(state)=>({
  auth: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {nav_in})(Home)
