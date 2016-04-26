import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Page from '../components/Page';
import * as PageActions from '../actions/PageActions';

class App extends Component {
	render() {
		const { photoFeed, dispatch } = this.props;
		const actions = bindActionCreators(PageActions, dispatch);

		return <div className='container-fluid'>
			<Page photoFeed={photoFeed} actions={actions}/>
		</div>
	}
}

function mapStateToProps(state) {
	return {
		photoFeed: state.photoFeed
	}
}

export default connect(mapStateToProps)(App)
