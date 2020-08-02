import {connect} from 'react-redux';
import {Home} from './Home'
import {} from './../../store/actions/authAction'

const mapStateToProps=(state)=>({
  auth: state.auth
})

export default connect(mapStateToProps)(Home)
