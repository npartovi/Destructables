import { connect } from 'react-redux';
import { searchDatabase } from '../../actions/article_actions';
import Search from './search';

const mapStateToProps = (state) => ({
	currentUser: state.sessions.currentUser,
	searches: state.entities.searches
});

const mapDispatchToProps = (dispatch) => ({
	searchDatabase: (query) => dispatch(searchDatabase(query))

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);
