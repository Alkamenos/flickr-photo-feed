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

		if (photos.error) {
			return <p className='error'> Something went wrong... :(</p>

		} else if (photos.fetching) {
			return <p>Loading...</p>

		} else if (photoFeed.fullscreen) {
			return <div>
				<FullscreenPhoto actions={actions} fullscreenImage={photoFeed.fullscreenImage}/>
			</div>
		}

		return <div>
			<Controls actions={actions} orderBy={photoFeed.orderBy} viewMode={photoFeed.viewMode}/>
			<Photos photos={photos.data} viewMode={photoFeed.viewMode} actions={actions}/>
		</div>
	}
}

Page.propTypes = {
	photoFeed: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};
