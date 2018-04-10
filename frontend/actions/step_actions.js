import * as StepApiUtil from '../util/step_api_util';


export default const RECEIVE_ALL_STEPS = "RECEIVE_ALL_STEPS";
export default const RECEIVE_STEP = "RECEIVE_STEP";



export const fetchSteps = (articleId) => (dispatch) => (
	StepApiUtil.fetchSteps(articleId)
		.then(steps => dispatch(receiveAllSteps(steps)))

);

export const createStep = (articleId) => (dispatch) => (
	StepApiUtil.createStep(articleId)
		.then(step => receiveStep(step))
);



const receiveAllSteps = ({
	type: RECEIVE_ALL_STEPS,
	steps
});

const receiveStep = ({
	type: RECEIVE_STEP,
	step
});

