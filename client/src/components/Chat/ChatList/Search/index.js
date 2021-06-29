import Search from './Search.jsx';
import { connect } from 'react-redux';
import { filterValue } from '/src/Store/chat/selectors';
import { setValue } from '/src/Store/chat/actions';

const mapStateToProps = state => ({
    filterValue: filterValue(state),
});
const mapDispatchToProps = dispatch => ({
    setValue: payload => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
