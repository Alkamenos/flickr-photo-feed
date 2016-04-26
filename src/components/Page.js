import React, { PropTypes, Component } from 'react';
import Photos from './Photos';
import Controls from './Controls';

export default class Page extends Component {
	componentDidMount() {
		this.props.actions.getPhotos();
	}

	render() {
		const { photofeed, actions } = this.props;
		const photos = photofeed.photos;

		return <div className='row'>
			<Controls actions={actions} orderBy={photofeed.orderBy} viewMode={photofeed.viewMode}/>

			{ photos.error ? Page.showError(photos.error) : '' }
			{ photos.fetching ? Page.showLoading() : <Photos photos={photos.data} viewMode={photofeed.viewMode}/> }
		</div>
	}

	static showLoading() {
		return <p>Loading...</p>
	}

	static showError() {
		return <p className='error'> Something went wrong... :(</p>
	}
}

Page.propTypes = {
	photofeed: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};
