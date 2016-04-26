import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import * as mode from '../constants/ViewMode';
import PhotoGrid from './PhotoGrid';
import PhotoList from './PhotoList';

export default class Photos extends Component {
	render() {
		const { actions, photos, viewMode } = this.props;
		const style = classnames('photos container-fluid', {
			'small': viewMode === mode.SMALL,
			'medium': viewMode === mode.MEDIUM,
			'big': viewMode === mode.BIG
		});
		if (viewMode === mode.LIST) {
			return <div
					className={style}>
				<PhotoList actions={actions} photos={photos}/>
			</div>
		}

		return <div
				className={style}>
			<PhotoGrid actions={actions} photos={photos} viewMode={viewMode}/>
		</div>
	}
}

Photos.propTypes = {
	photos: PropTypes.array.isRequired,
	viewMode: PropTypes.number.isRequired,
	actions: PropTypes.object.isRequired
};
