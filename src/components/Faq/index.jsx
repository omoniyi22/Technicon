import {Faq} from './faqs'
import {connect} from 'react-redux'
import {nav_in} from './../../store/actions/navSwitch'

export default connect(null, {nav_in})(Faq)