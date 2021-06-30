import { connect } from 'react-redux';
import ChatList from './ChatList.jsx';
import { rooms, filterByRoomName } from '/src/Store/chat/selectors';

const mapStateToProps = state => ({ rooms: rooms(state), filterByRoomName: filterByRoomName(state) });

export default connect(mapStateToProps)(ChatList);
