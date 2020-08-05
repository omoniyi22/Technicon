import { connect } from 'react-redux'
import Thank_You from './ThankYou'
import { Close_Transact } from './../../../store/actions/transactionAction'

const mapStateToProps = state => ({
  TS3: state.transact.TS3,
})

export default connect(mapStateToProps, { Close_Transact })(Thank_You)

