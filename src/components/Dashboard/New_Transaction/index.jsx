import {connect} from 'react-redux'
import NewTransaction from './New_Transaction'
import {transactStart} from './../../../store/actions/transactionAction'


export default connect(null, {transactStart})(NewTransaction)