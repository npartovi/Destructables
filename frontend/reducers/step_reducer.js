import { RECEIVE_ALL_STEPS, RECEIVE_STEP } from "../actions/step_actions";


const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_STEPS:
      return Object.assign({}, state, action.steps);
    case RECEIVE_STEP:
      return Object.asssign({}, state, {[action.step.id]: action.step});
    case RECEIVE_ARTICLE:
      return merge({}, action.payload.article.steps);
    default:
      return state;
  }
};


export default step_reducer