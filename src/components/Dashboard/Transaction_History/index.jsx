import { connect } from 'react-redux'
import { AllComplaint } from './../../../store/actions/transactionAction'
import TransactionHistory from './TransactionHistory.jsx'
import { getReciept } from './../../../store/actions/deviceAction'

const mapStateToProps = state => ({
  all: state.transact.allTransact,
  load: state.transact.all_loading
})
export default connect(
  mapStateToProps, {
  AllComplaint,
  getReciept
}
)(TransactionHistory)