import * as StepApiUtil from '../util/step_api_util';


export default const RECEIVE_ALL_STEPS = "RECEIVE_ALL_STEPS";
export default const RECEIVE_STEP = "RECEIVE_STEP";



export const fetchAllSteps = (articleId) => (dispatch) => (
	StepApiUtil.fetchSteps(articleId)
		.then(steps => dispatch(receiveAllSteps(steps)))

);


export const fetchStep = stepId => dispatch => (
  StepApiUtil.fetchStep(stepId)
  		.then(step => dispatch(receiveStep(step)))
  
);


export const createStep = step => dispatch => (
  StepsApiUtil.createStep(step)
  		.then( step => dispatch(receiveStep(step)),
);




const receiveAllSteps = ({
	type: RECEIVE_ALL_STEPS,
	steps
});

const receiveStep = ({
	type: RECEIVE_STEP,
	step
});

