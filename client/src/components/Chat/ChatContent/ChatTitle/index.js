import { connect } from 'react-redux';
import ChatTitle from './ChatTitle.jsx';
import { currentRoomName } from '/src/Store/chat/selectors';

const mapStateToProps = state => ({ currentRoomName: currentRoomName(state) });

export default connect(mapStateToProps)(ChatTitle);
