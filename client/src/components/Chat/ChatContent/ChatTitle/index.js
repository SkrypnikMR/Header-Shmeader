import { connect } from 'react-redux';
import ChatTitle from './ChatTitle.jsx';
import { currentRoom } from '/src/Store/chat/selectors';

const mapStateToProps = state => ({ currentRoom: currentRoom(state).room_name });

export default connect(mapStateToProps)(ChatTitle);
