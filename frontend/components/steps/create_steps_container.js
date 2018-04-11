import { connect } from 'react-redux';
import StepForm from './steps_container';
import { createStep } from '../../actions/step_action';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
	

});

const mapDispatchToProps = (dispatch) => ({
	createStep: (step) => dispatch(createStep(step))
});


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(StepForm));