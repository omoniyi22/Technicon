import {connect} from "react-redux"
import {About} from './About'
import {nav_in} from './../../store/actions/navSwitch'

export default connect(null, {nav_in})(About)