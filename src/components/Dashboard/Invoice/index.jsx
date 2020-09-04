import { Invoice } from './Invoice'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  device: state.device.device_receipt,
  start_: state.device.start_,
  stop_: state.device.stop_,
  error: state.device.error,
  empty: state.device.empty,
  selected: state.device.selected,
})


export default connect(mapStateToProps)(Invoice)