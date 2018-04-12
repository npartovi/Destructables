import { RECEIVE_SEARCH_RESULTS } from '../actions/article_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.searches;
    default:
      return state;
  }
};

export default SearchReducer;