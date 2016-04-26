import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Page from '../components/Page';
import * as PageActions from '../actions/PageActions';

class App extends Component {
	render() {
		const { photofeed, dispatch } = this.props;
		const actions = bindActionCreators(PageActions, dispatch);

		return <div className='container-fluid'>
			<Page photofeed={photofeed} actions={actions} />
		</div>
	}
}

function mapStateToProps(state) {
	return {
		photofeed: state.photofeed
	}
}

export default connect(mapStateToProps)(App)
