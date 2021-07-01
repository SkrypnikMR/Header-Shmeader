import { connect } from 'react-redux';
import ChatListItems from './ChatListItems.jsx';
import { setValue, readAllMessagesInRoom } from '/src/Store/chat/actions';

const mapDispatchToProps = dispatch => ({
    setValue: payload => dispatch(setValue(payload)),
    readAllMessagesInRoom: payload => dispatch(readAllMessagesInRoom(payload)),
});

export default connect(null, mapDispatchToProps)(ChatListItems);
