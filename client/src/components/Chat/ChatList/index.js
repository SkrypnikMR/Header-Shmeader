import { connect } from 'react-redux';
import ChatList from './ChatList.jsx';
import { rooms, filterValue } from '/src/Store/chat/selectors';

const mapStateToProps = state => ({ rooms: rooms(state), filterValue: filterValue(state) });

export default connect(mapStateToProps)(ChatList);
