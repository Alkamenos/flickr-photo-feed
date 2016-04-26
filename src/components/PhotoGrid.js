import React, { PropTypes, Component } from 'react';

export default class PhotoGrid extends Component {

	makePhotoGrid() {
		const { photos, actions:{ openFullscreen }, viewMode:columns } = this.props;
		let grid = [];
		let row = [];

		photos.forEach((photo, index) => {
			if ((index + 1) % (columns + 1) == 0) {
				grid.push(
						<div className='row-flex' key={grid.length}>
							{row}
						</div>);
				row = [];

			} else {
				row.push(
						<div key={index} className='photo' onClick={()=>openFullscreen(photo.originalSrc)}>
							<img src={photo.src}/>
						</div>
				)
			}
		});
		return grid;
	}

	render() {
		return <div>{this.makePhotoGrid()}</div>
	}
}

PhotoGrid.propTypes = {
	actions: PropTypes.object.isRequired,
	photos: PropTypes.array.isRequired,
	viewMode: PropTypes.number.isRequired
};
