import $ from 'jquery'; 
import React from 'react';
import {render} from 'react-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import HomePage from './homepage.es6.jsx'
import Kyojeon from './kyojeon.es6.jsx'
import NavBar from './navbar.es6.jsx'
import Footer from './footer.es6.jsx'
import LoadingView from './modal.es6.jsx'

require('../stylesheets/application.sass')

self.Dispatch = {};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedButton: 1,
			booklist: [],
			scrollingLock: false
		}
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount () {
		$(Dispatch).on('changeView', function(event, button_id) {
			//console.log('called: ', button_id)
			this.setState({selectedButton: button_id})
		}.bind(this))

		$.getJSON('api/booklist', (response) => {
			console.log('Booklist: ', response)
			this.setState({booklist: response}, ()=> {
				this.forceUpdate()
			})
		})

		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount () {
		$(Dispatch).off('changeView')
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
	  if (window.scrollY > 99) {	 
	    if (!this.state.scrollingLock) {
	    	console.log("should lock");	
	    	this.setState({ scrollingLock: true });
	    } 
	  } else if (window.scrollY < 99) {
	    if (this.state.scrollingLock) {
	    	console.log("not locked" );
	    	this.setState({ scrollingLock: false });
	    }
	  }
	}

	render() {
		var currentView = ''
		switch(true) {
			case (this.state.selectedButton == 1):
				currentView = <HomePage />
				break;
			case (this.state.selectedButton == 2):
				currentView = <Kyojeon booklist={this.state.booklist} />
				break;
			default:
				currentView = <HomePage />
		}

		return (
			<div className='appContent'>
				<NavBar scrollingLock={this.state.scrollingLock} emp={this.state.emp} selectedButton={this.state.selectedButton} />
				{currentView}
				<Footer />
				<LoadingView />
			</div>
		)
	}
}

render(<App/>, document.getElementById('app'));