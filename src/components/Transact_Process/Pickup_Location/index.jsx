import { connect } from 'react-redux'

import { Office } from './../../../store/actions/transactionAction'

import PickupLocation from './PickupLocation'
const mapStateToProps = state => ({
  success : state.transact.T_SUCCESS,
  TS1: state.transact.TS1,
  Load: state.transact.Load,
  TS2: state.transact.TS2,
  Code: state.transact.trackingCode,
  err : state.transact.T_ERROR
})
export default connect(
  mapStateToProps, { Office }
)(PickupLocation)