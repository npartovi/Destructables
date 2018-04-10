import { connect } from 'react-redux';
import StepForm from './steps_container';
import { createStep } from '../../actions/step_action';

const mapStateToProps = (state) => ({
	steps: state.entities.steps

});

const mapDispatchToProps = (dispatch) => ({
	createStep: (step,articleId) => dispatch(createStep(step, articleId))


});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StepForm)