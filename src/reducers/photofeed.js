import * as order from '../constants/OrderOptions';
import * as mode from '../constants/ViewMode';
import * as type from '../constants/ActionTypes';
import * as flickr from '../constants/Flickr';

import _orderBy from 'lodash/orderBy';


const initialState = {
	photos: {
		data: [],
		fetching: false,
		error: ''
	},
	orderBy: '',
	viewMode: mode.MEDIUM,
	fullscreen: false,
	fullscreenImage: ''
};

export default function photoFeed(state = initialState, action) {
	switch (action.type) {
		case type.GET_PHOTOS_REQUEST:
			return {
				...state,
				photos: {
					...state.photos,
					fetching: true,
					error: ''
				}
			};

		case type.GET_PHOTOS_SUCCESS:
			return {
				...state,
				photos: {
					...state.photos,
					data: action.payload,
					fetching: false,
					error: ''
				}
			};

		case type.GET_PHOTOS_FAIL:
			return {
				...state,
				photos: {
					...state.photos,
					error: action.payload.message,
					fetching: false
				}
			};

		case type.CHANGE_VIEW_MODE:
			return {
				...state,
				viewMode: action.mode,
				photos: {
					...state.photos,
					data: state.photos.data.map((photo)=> {
						switch (action.mode) {
							case mode.LIST:
								return {
									...photo,
									src: photo.originalSrc.replace(flickr.SMALL_240, flickr.MEDIUM_500)
								};

							case mode.SMALL:
								return {
									...photo,
									src: photo.originalSrc.replace(flickr.SMALL_240, flickr.SMALL_320)
								};

							case mode.MEDIUM:
								return {
									...photo,
									src: photo.originalSrc.replace(flickr.SMALL_240, flickr.MEDIUM_500)
								};

							case mode.BIG:
								return {
									...photo,
									src: photo.originalSrc.replace(flickr.SMALL_240, flickr.MEDIUM_640)
								};

							default:
								return photo;
						}
					})
				}
			};

		case type.CHANGE_ORDER_MODE:
			return {
				...state,
				orderBy: action.order,
				photos: {
					...state.photos,
					data: orderPhotos(state.photos.data, action.order)
				}
			};

		case type.OPEN_FULLSCREEN:
			return {
				...state,
				fullscreen: true,
				fullscreenImage: action.url.replace(flickr.SMALL_240, flickr.LARGE_1024)
			};

		case type.CLOSE_FULLSCREEN:
			return {
				...state,
				fullscreen: false,
				fullscreenImage: ''
			};

		default:
			return state;
	}
}

function orderPhotos(data, orderBy) {
	switch (orderBy) {
		case order.DATE_ASC:
			return _orderBy(data, 'published', 'asc');

		case order.DATE_DESC:
			return _orderBy(data, 'published', 'desc');

		case order.NAME_ASC:
			return _orderBy(data, 'title', 'asc');

		case order.NAME_DESC:
			return _orderBy(data, 'title', 'desc');

		default:
			return data
	}

}
