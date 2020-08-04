import { connect } from 'react-redux'

import { Office } from './../../../store/actions/transactionAction'

import PickupLocation from './PickupLocation'
const mapStateToProps = state => ({
  TS1: state.transact.TS1
})
export default connect(
  mapStateToProps, { Office }
)(PickupLocation)