import * as order from '../constants/OrderOptions';
import * as mode from '../constants/ViewMode';
import * as type from '../constants/ActionTypes';
import * as flickr from '../constants/Flickr';

const initialState = {
	photos: {
		data: [],
		fetching: false,
		error: ''
	},
	orderBy: '',
	viewMode: mode.MEDIUM

};

export default function photofeed(state = initialState, action) {

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
									src: photo.originalSrc//.replace(flickr.SMALL_240, flickr.SMALL_150)
								};

							case mode.SMALL:
								return {
									...photo,
									src: photo.originalSrc
								};

							case mode.MEDIUM:
								return {
									...photo,
									src: photo.originalSrc.replace(flickr.SMALL_240, flickr.SMALL_320)
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
					data: state.photos.data.sort((a, b)=> {
						switch (action.order) {
							case order.DATE_ASC:
								return a.published < b.published;

							case order.DATE_DESC:
								return a.published >= b.published;

							case order.NAME_ASC:
								return a.title < b.title;

							case order.NAME_DESC:
								return a.title >= b.title;

							default:
								return false
						}
					})
				}
			};

		default:
			return state;
	}

}
