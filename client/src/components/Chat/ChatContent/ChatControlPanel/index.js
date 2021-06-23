import { connect } from 'react-redux';
import ChatControlPanel from './ChatControlPanel.jsx';
import { setValue, sendNewMessage } from '../../../../Store/user/actions';
import { newMessage, takeSocket, userInfo } from '../../../../Store/user/selectors';

const mapStateToProps = state => ({
    messageInputValue: newMessage(state),
    socket: takeSocket(state),
    author: userInfo(state).email,
});

const mapDispatchToProps = dispatch => ({
    onChangeInput: payload => dispatch(setValue(payload)),
    sendNewMessage: () => dispatch(sendNewMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatControlPanel);
