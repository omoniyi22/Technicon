import { Invoice } from './Invoice'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  payment_status: state.device.device_receipt.payment_status,
  device: state.device.device_receipt,
  start_: state.device.start_,
  stop_: state.device.stop_,
  error: state.device.error,
  empty: state.device.empty,
  selected: state.device.selected,
  payment_status: state.device.device_receipt.payment_status
})


export default connect(mapStateToProps)(Invoice)