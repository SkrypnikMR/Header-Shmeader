import { connect } from 'react-redux';
import ChatListItems from './ChatListItems.jsx';
import { setValue } from '/src/Store/chat/actions';

const mapDispatchToProps = dispatch => ({
    setValue: payload => dispatch(setValue(payload)),
});

export default connect(null, mapDispatchToProps)(ChatListItems);
