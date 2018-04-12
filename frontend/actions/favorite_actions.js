import * as FavoriteApiUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";


export const createFavorite = (articleId) => dispatch => (
	FavoriteApiUtil.createFavorite(articleId)
		.then( favorite => dispatch(receiveFavorite(favorite)))
);

export const deleteFavorite = (favoriteId) => dispatch => (
	FavoriteApiUtil.deleteFavorite(articleId)
		.then(favorite => dispatch(removeFavorite(favorite)))
);



const receiveFavorite = (favorite) => ({
	type: RECEIVE_FAVORITE,
	favorite

});

const removeFavorite = (favorite) => ({
	type: DELETE_FAVORITE,
	favorite

});