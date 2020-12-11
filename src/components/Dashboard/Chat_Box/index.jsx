import { ChatBox } from './ChatBox'
import { recieveAllChat, sendChat, recieveErrorMessage, clearChat, recieveAdminChat, recieveClientChat, getAdminChat, getAllChat, getClientChat } from './../../../store/actions/Chat'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  client_chat: state.chat.client_chat,
  admin_chats: state.chat.admin_chat,
  loading: state.chat.loading,
  all_chats: state.chat.all_chat,
  selected: state.device.selected,
  empty: state.device.empty,
  payment_status: state.device.device_receipt.payment_status
})

export default connect(
  mapStateToProps, {
  recieveAdminChat,
  recieveAllChat,
  recieveClientChat,
  getAdminChat,
  getAllChat,
  sendChat,
  getClientChat,
  clearChat,
  recieveErrorMessage
})(ChatBox)