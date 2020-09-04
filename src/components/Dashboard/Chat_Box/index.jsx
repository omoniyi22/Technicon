import { ChatBox } from './ChatBox'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  selected: state.device.selected,
  empty: state.device.empty,
})

export default connect(mapStateToProps)(ChatBox)