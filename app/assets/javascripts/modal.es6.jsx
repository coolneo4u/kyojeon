import $ from 'jquery'; 
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class LoadingView extends React.Component {
	constructor (props) {
		super (props)
		this.state={loading: false}
	}

	componentDidMount () {
		$(Dispatch).on('presentLoadingView', function(f) {
            console.log('from modal presenting!!!!!!!!')
            this.setState({loading: true}, this.setLoading(true))
        }.bind(this))

        $(Dispatch).on('dismissLoadingView', function(f) {
            this.setState({loading: false}, this.setLoading(false))
        }.bind(this))
	}

	componentDidUpdate () {

	}

	setLoading(loading) {
		//$(Dispatch).trigger('setLoading', loading)
	}

	componentWillUnmount () {
		$(Dispatch).off('presentLoadingView');		
		$(Dispatch).off('dismissLoadingView');
	}

	render () {
		if (this.state.loading) {
			return (
				<ReactCSSTransitionGroup transitionName='modal-anim' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					<div className='backdrop' />
					<div className="loader" />
				</ReactCSSTransitionGroup>
			)
		} else {
			return <ReactCSSTransitionGroup transitionName='modal-anim' transitionEnterTimeout={500} transitionLeaveTimeout={300} />;
		}
	}
}
