import { connect } from 'react-redux';
import ChatDisplay from './ChatDisplay.jsx';
import { userInfo } from '/src/Store/user/selectors';
import { messages, currentRoom } from '/src/Store/chat/selectors';

const mapStateToProps = state => ({
    messages: messages(state),
    currentRoom: currentRoom(state),
    currentUser: userInfo(state).email,
});

export default connect(mapStateToProps)(ChatDisplay);
