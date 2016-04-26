import React, { PropTypes, Component } from 'react';

export default class FullscreenPhoto extends Component {
	handleEscKey(event) {
		if (event.keyCode == 27) {
			this.props.actions.closeFullscreen();
		}
	}

	componentWillMount() {
		document.addEventListener('keydown', this.handleEscKey.bind(this), false);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleEscKey.bind(this), false);
	}

	render() {
		const { actions:{ closeFullscreen }, fullscreenImage } = this.props;

		return <div className='fullscreen-photo' onClick={()=>closeFullscreen()}>
			<button className='btn btn-danger'><i className='fa fa-times-circle fa-2x'/></button>
			<img src={fullscreenImage}/>
		</div>
	}
}

FullscreenPhoto.propTypes = {
	actions: PropTypes.object.isRequired,
	fullscreenImage: PropTypes.string.isRequired
};
