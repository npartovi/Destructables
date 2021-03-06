import { RECEIVE_ALL_STEPS, RECEIVE_STEP } from "../actions/step_actions";
import { RECEIVE_ARTICLE } from "../actions/article_actions";
import { merge } from 'lodash';

const StepsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_STEPS:
      return Object.assign({}, state, action.steps);
    case RECEIVE_STEP:
      return Object.assign({}, state, {[action.step.id]: action.step});
    case RECEIVE_ARTICLE:
      return merge({}, state, action.payload.article.steps);
    default:
      return state;
  }
};


export default StepsReducer