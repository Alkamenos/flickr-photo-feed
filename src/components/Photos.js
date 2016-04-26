import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import * as mode from '../constants/ViewMode';

export default class Photos extends Component {
	render() {
		const { photos, viewMode } = this.props;
		return <div className={classnames('photos', { 'medium': viewMode === mode.MEDIUM, 'big': viewMode === mode.BIG })}>
			{ viewMode === mode.LIST ? Photos.showPhotoList(photos) : Photos.showPhotoGrid(photos, viewMode)}
		</div>
	}

	static showPhotoGrid(photos, col) {
		let grid = [];
		let row = [];
		photos.forEach((photo, index) => {

			if ((index + 1) % (col + 1) == 0) {
				grid.push(
					<div className='row' key={grid.length}>
						{row}
					</div>);
				row = [];

			} else {
				row.push(
					<div key={index} className='photo'>
						<p><img src={photo.src}/></p>
					</div>
				)

			}
		});

		return grid;
	}

	static showPhotoList(photos) {
		return photos.map((photo, index) => {
			return <div key={index} className='row list-item'>
				<div className='photo col-md-3'>
					<img src={photo.src}/>
				</div>
				<div className='col-md-9'>
					<p className='lead'>{photo.title}</p>
					<p>Published: {new Date(photo.published).toDateString()}</p>
					<p><a href={photo.link}>{photo.link}</a></p>
					<samp>Tags: {photo.tags}</samp>
				</div>
			</div>
		})
	}
}

Photos.propTypes = {
	photos: PropTypes.array.isRequired,
	viewMode: PropTypes.number.isRequired

};