import { connect } from 'react-redux'
import Reach_Out_ID from './ReachOut'
import { Your_ID } from './../../../store/actions/transactionAction'

const mapStateToProps = state => ({
  trackerCode: state.transact.T_SUCCESS,
  auth: state.transact.TS2
})

export default connect(
  mapStateToProps,
  {Your_ID}
)(Reach_Out_ID)