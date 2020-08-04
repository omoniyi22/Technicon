import { connect } from 'react-redux'

import { Office } from './../../../store/actions/transactionAction'

import PickupLocation from './PickupLocation'
const mapStateToProps = state => ({
  success : state.transact.T_SUCCESS,
  TS1: state.transact.TS1,
  Code: state.transact.trackingCode
})
export default connect(
  mapStateToProps, { Office }
)(PickupLocation)