import * as StepApiUtil from '../util/step_api_util';


export const RECEIVE_ALL_STEPS = "RECEIVE_ALL_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";



export const fetchAllSteps = (articleId) => (dispatch) => (
	StepApiUtil.fetchSteps(articleId)
		.then(steps => dispatch(receiveAllSteps(steps)))

);


export const fetchStep = stepId => dispatch => (
  StepApiUtil.fetchStep(stepId)
  		.then(step => dispatch(receiveStep(step)))
  
);


export const createStep = step => dispatch => (
  StepApiUtil.createStep(step)
  		.then( step => dispatch(receiveStep(step)))
);




const receiveAllSteps = (steps) => ({
	type: RECEIVE_ALL_STEPS,
	steps
});

const receiveStep = (step) => ({
	type: RECEIVE_STEP,
	step
});

