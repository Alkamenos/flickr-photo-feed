import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import * as order from '../constants/OrderOptions';
import * as mode from '../constants/ViewMode';

export default class Controls extends Component {

	render() {
		const { orderBy, viewMode, actions } = this.props;

		return <div className='controls'>
			<button className={classnames('btn btn-success', { 'active': viewMode === mode.LIST })}
					onClick={() => actions.setViewMode(mode.LIST)}>
				<i className='fa fa-th-list'/>
			</button>

			<button className={classnames('btn btn-success', { 'active': viewMode === mode.SMALL })}
					onClick={() => actions.setViewMode(mode.SMALL)}>
				<i className='fa fa-th'/>
			</button>

			<button className={classnames('btn btn-success', { 'active': viewMode === mode.MEDIUM })}
					onClick={() => actions.setViewMode(mode.MEDIUM)}>
				<i className='fa fa-th-large'/>
			</button>

			<button className={classnames('btn btn-success', { 'active': viewMode === mode.BIG })}
					onClick={() => actions.setViewMode(mode.BIG)}>
				<i className='fa fa-stop'/>
			</button>

			<button
				className={classnames('btn btn-primary', { 'active': orderBy === order.DATE_ASC || orderBy === order.DATE_DESC })}
				onClick={() => actions.orderBy(orderBy===order.DATE_ASC? order.DATE_DESC : order.DATE_ASC)}>
				<i className={classnames('fa', { 'fa-sort-numeric-desc': orderBy === order.DATE_DESC }, { 'fa-sort-numeric-asc': orderBy !== order.DATE_DESC })}/> Date
			</button>

			<button
				className={classnames('btn btn-primary', { 'active': orderBy === order.NAME_ASC || orderBy === order.NAME_DESC  })}
				onClick={() => actions.orderBy(orderBy===order.NAME_ASC? order.NAME_DESC : order.NAME_ASC)}>
				<i className={classnames('fa', { 'fa-sort-alpha-desc': orderBy === order.NAME_DESC }, { 'fa-sort-alpha-asc': orderBy !== order.NAME_DESC })}/> Name
			</button>
		</div>
	}
}

Controls.propTypes = {
	actions: PropTypes.object.isRequired,
	orderBy: PropTypes.string.isRequired,
	viewMode: PropTypes.number.isRequired
};
