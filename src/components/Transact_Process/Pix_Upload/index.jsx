import Pix_Upload from './pix_upload'
import { connect } from 'react-redux'

const mapSatateToProps = state => ({
  pixtures: state.transact.picture
})
export default connect(mapSatateToProps, {})(Pix_Upload)