import OfficeAddress from './OfficeAddress'
import {connect} from 'react-redux'
import {Office} from './../../../store/actions/transactionAction'

const mapStateToProps = state=>({
TS1 : state.transact.TS1

})
export default connect(
mapStateToProps,
{Office}
)(OfficeAddress)  