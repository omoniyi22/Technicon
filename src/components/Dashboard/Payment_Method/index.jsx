import { PaymentMethod } from './PaymentMethod'
import { connect } from 'react-redux'
import { payAction } from '../../../store/actions/deviceAction'
import { withRouter } from 'react-router'

const mapStateToProps = state => ({
  response: state.payment.response,
  loading: state.payment.loading,
  device: state.device.device_receipt,
  start_: state.device.start_,
  stop_: state.device.stop_,
  error: state.device.error,
  empty: state.device.empty,
  selected: state.device.selected,
  payment_status: state.device.device_receipt.payment_status
})

export default withRouter(connect(mapStateToProps, { pay: payAction })(PaymentMethod))