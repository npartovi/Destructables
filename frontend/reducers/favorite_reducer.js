import merge from 'lodash/merge';

import { RECEIVE_FAVORITE, DELETE_FAVORITE } from '../actions/favorite_action';



const FavoriteReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type){
		default:
			return state;
	}



}