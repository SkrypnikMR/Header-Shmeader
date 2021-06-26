import { withRouter } from 'react-router';
import HeaderControlPanel from './HeaderControlPanel.jsx';
import { connect } from 'react-redux';
import { setValue } from '/src/Store/user/actions';
import { userThemeMode } from '/src/Store/user/selectors';

const mapStateToProps = state => ({ themeMode: userThemeMode(state) });
const mapDispatchToProps = dispatch => ({
    setValue: payload => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderControlPanel));
