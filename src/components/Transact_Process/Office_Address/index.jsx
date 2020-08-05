import OfficeAddress from './OfficeAddress'
import {connect} from 'react-redux'
import {Office} from './../../../store/actions/transactionAction'

const mapStateToProps = state=>({
  success : state.transact.T_SUCCESS,
  TS1: state.transact.TS1,
  Load: state.transact.Load

})
export default connect(
mapStateToProps,
{Office}
)(OfficeAddress)  