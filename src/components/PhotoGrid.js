import React, { PropTypes, Component } from 'react';

export default class PhotoGrid extends Component {
	render() {
		const { photos, actions:{ openFullscreen }, viewMode:columns } = this.props;
		let grid = [];
		let row = [];
		photos.forEach((photo, index) => {
			if ((index + 1) % (columns + 1) == 0) {
				grid.push(
					<div className='row' key={grid.length}>
						{row}
					</div>);
				row = [];

			} else {
				row.push(
					<div key={index} className='photo' onClick={()=>openFullscreen(photo.originalSrc)}>
						<p><img src={photo.src}/></p>
					</div>
				)
			}
		});

		return <div>{grid}</div>
	}
}

PhotoGrid.propTypes = {
	actions: PropTypes.object.isRequired,
	photos: PropTypes.array.isRequired,
	viewMode: PropTypes.number.isRequired
};
