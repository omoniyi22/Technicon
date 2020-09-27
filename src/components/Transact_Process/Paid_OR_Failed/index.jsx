import { withRouter } from 'react-router-dom'
import { okayAction } from "./../../../store/actions/deviceAction"
import { Result } from './Result'
import { connect } from 'react-redux'
const mapStateToProps = state => ({
  error : state.payment.error,
  response: state.payment.response,
  loading: state.payment.loading
})

export default withRouter(connect(mapStateToProps, { okay: okayAction })(Result))