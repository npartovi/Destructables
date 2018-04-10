import { connect } from 'react-redux';
import StepForm from './steps_container';
import { createStep } from '../../actions/step_action';

const mapStateToProps = (state, ownProps) => ({
	steps: state.entities.steps,
	articleId: ownProps.articleId
});

const mapDispatchToProps = (dispatch) => ({
	createStep: (step) => dispatch(createStep(step))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StepForm);