import React, { PropTypes, Component } from 'react';

export default class PhotoGrid extends Component {

	makePhotoGrid() {
		const { photos, actions:{ openFullscreen }, viewMode:columns } = this.props;
		const rowTemplate = row=> <div className='row-flex' key={grid.length}> {row}</div>;
		const photoTemplate = ({index, photo, openFullscreen})=>
				<div key={index} className='photo' onClick={()=>openFullscreen(photo.originalSrc)}><img
						src={photo.src}/></div>;
		let grid = [];
		let row = [];

		photos.forEach((photo, index) => {
			row.push(photoTemplate({index, photo, openFullscreen}));

			if ((index + 1) % (columns) == 0) {
				console.log('row', row);
				grid.push(rowTemplate(row));
				row = [];

			}
		});

		grid.push(rowTemplate(row));
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
