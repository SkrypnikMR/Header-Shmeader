import { connect } from 'react-redux';
import ChatList from './ChatList.jsx';
import { rooms } from '/src/Store/chat/selectors';

const mapStateToProps = state => ({ rooms: rooms(state) });

export default connect(mapStateToProps)(ChatList);
