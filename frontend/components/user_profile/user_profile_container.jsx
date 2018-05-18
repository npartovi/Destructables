import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchArticles } from '../../actions/article_actions';

const mapStateToProps = (state) => ({
	currentUser: state.sessions.currentUser,
	articles: Object.keys(state.entities.articles).map(id => state.entities.articles[id])
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticles: () => dispatch(fetchArticles()),

});

export default connect (mapStateToProps, mapDispatchToProps)(UserProfile); 