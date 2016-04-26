import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import * as mode from '../constants/ViewMode';
import PhotoGrid from './PhotoGrid';
import PhotoList from './PhotoList';

export default class Photos extends Component {
	render() {
		const { actions, photos, viewMode } = this.props;

		return <div
				className={classnames('photos', { 'medium': viewMode === mode.MEDIUM, 'big': viewMode === mode.BIG })}>

			{viewMode === mode.LIST ? <PhotoList actions={actions} photos={photos}/> :
					<PhotoGrid actions={actions} photos={photos} viewMode={viewMode}/>}
		</div>
	}
}

Photos.propTypes = {
	photos: PropTypes.array.isRequired,
	viewMode: PropTypes.number.isRequired,
	actions: PropTypes.object.isRequired

};
