import React, { PropTypes, Component } from 'react';

export default class PhotoList extends Component {

	makePhotoList() {
		const { photos, actions:{ openFullscreen } } = this.props;

		return photos.map((photo, index) => {
			return <div key={index} className='row-flex list-item'>
				<div className='photo col-xs-7 col-sm-3 col-md-4' onClick={()=>openFullscreen(photo.originalSrc)}>
					<img src={photo.src}/>
				</div>
				<div className='col-xs-5 col-sm-9 col-md-8'>
					<h2 className='lead'>{photo.title}</h2>
					<h4>Published: {new Date(photo.published).toDateString()}</h4>
					<p><a href={photo.link}>{photo.link}</a></p>
					<samp>Tags: {photo.tags}</samp>
				</div>
			</div>
		})
	}

	render() {
		return <div>{this.makePhotoList()}</div>
	}
}

PhotoList.propTypes = {
	actions: PropTypes.object.isRequired,
	photos: PropTypes.array.isRequired
};
