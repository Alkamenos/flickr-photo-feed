import * as type from '../constants/ActionTypes';
import * as flickr from '../constants/Flickr';
import $ from 'jquery';

export function getPhotos(url=flickr.FLICKR_URL) {
	return dispatch => {
		dispatch({
			type: type.GET_PHOTOS_REQUEST
		});

		$.getJSON(url)
			.done(response => {
					let photos = response.items.map((item) => ({
						title: item.title,
						link: item.link,
						src: item.media.m.replace(flickr.SMALL_240, flickr.SMALL_320),
						originalSrc: item.media.m,
						published: Date.parse(item.published), //todo Moment.js?
						tags: item.tags
					}));
					dispatch({
						type: type.GET_PHOTOS_SUCCESS,
						payload: photos
					});
				}
			)
			.fail(response => {
					dispatch({
						type: type.GET_PHOTOS_FAILURE,
						payload: response.error,
						error: true
					});
				}
			)
	}
}

export function orderBy(order){
	return {
		type: type.CHANGE_ORDER_MODE,
		order
	};
}

export function setViewMode(mode){
	return {
		type: type.CHANGE_VIEW_MODE,
		mode
	};
}

export function openFullscreen(url) {
	return {
		type: type.OPEN_FULLSCREEN,
		url
	};
}

export function closeFullscreen() {
	return {
		type: type.CLOSE_FULLSCREEN
	};
}
