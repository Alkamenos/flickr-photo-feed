import React, { PropTypes, Component } from 'react';

export default class PhotoList extends Component {
	render() {
		const { photos, actions:{ openFullscreen } } = this.props;

		return <div>
			{ photos.map((photo, index) => {
				return <div key={index} className='row list-item'>
					<div className='photo col-md-3' onClick={()=>openFullscreen(photo.originalSrc)}>
						<img src={photo.src}/>
					</div>
					<div className='col-md-9'>
						<p className='lead'>{photo.title}</p>
						<p>Published: {new Date(photo.published).toDateString()}</p>
						<p><a href={photo.link}>{photo.link}</a></p>
						<samp>Tags: {photo.tags}</samp>
					</div>
				</div>
			})}
		</div>

	}

}

PhotoList.propTypes = {
	actions: PropTypes.object.isRequired,
	photos: PropTypes.array.isRequired
};
