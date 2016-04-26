import React, { PropTypes, Component } from 'react';
import Photos from './Photos';
import Controls from './Controls';
import FullscreenPhoto from './PhotoFullscreen';

export default class Page extends Component {

	componentDidMount() {
		this.props.actions.getPhotos();
	}

	render() {
		const { photoFeed, actions } = this.props;
		const photos = photoFeed.photos;


		return <div>
			{!photoFeed.fullscreen ?
					<div className='row'>
						<Controls actions={actions} orderBy={photoFeed.orderBy} viewMode={photoFeed.viewMode}/>

						{ photos.error ? Page.showError(photos.error) : '' }
						{ photos.fetching ? Page.showLoading() :
								<Photos photos={photos.data} viewMode={photoFeed.viewMode} actions={actions}/> }
					</div> : <FullscreenPhoto actions={actions} fullscreenImage={photoFeed.fullscreenImage}/>
			}
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
	photoFeed: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};
