import $ from 'jquery'; 
import React from 'react';

const ilwonsang = require("../images/ilwonsang.png");

export default class NavBar extends React.Component {
	constructor(props) {
	    super(props);
	    //this.state = { 	scrollingLock: false }
  	}

	buttonSelected (event) {
		$(Dispatch).trigger('changeView', event.target.id)
	}

	openContactLink() {
		window.open('');
	}

	render () {
		var class1 = this.props.selectedButton == 1 ? 'active' : ''
		var class2 = this.props.selectedButton == 2 ? 'active' : ''
		var class3 = this.props.selectedButton == 3 ? 'active' : ''
		var class4 = this.props.selectedButton == 4 ? 'active' : ''

		//console.log('selectedButton: ', this.props.selectedButton)
		var navClassNames = ['container-fluid', 'navContainer']
		var loginClassNames = ['login']
		if (this.props.scrollingLock) {
			//console.log("should lock");
			navClassNames.push('navbar-fixed')
		} else {
			loginClassNames.push('hidden')
		}
		var navClassName = navClassNames.join(' ')
		var loginClassName = loginClassNames.join(' ')
		console.log("className: ", navClassName)
		return (
			<div className='contentHeader'>
				<div className="container-fluid header">
					<img className='logo' src={ilwonsang} alt="ilwonsang" height="70" width="70" />
				  <h1 className='logo'>원불교 교전</h1>
				</div>
				<div className="nav-wrapper">
					<div id='navbar' className={navClassName}>
					  <ul className="nav nav-pills">
					      <li className={class1}><a href="#" id='1' onClick={this.buttonSelected.bind(this)} >홈</a></li>
					      <li className={class2}><a href="#" id='2' onClick={this.buttonSelected.bind(this)} >교전</a></li>
					    { true &&
					      <li className={class3}><a href="#" id='3' onClick={this.buttonSelected.bind(this)} >유무념</a></li>
					    }
					      <li className={class4}><a href="#" id='4' onClick={this.openContactLink} >도움말</a></li>
					      <li className={loginClassName}>@test</li>
					  </ul>
					  <hr className="style1" />
					</div>	
				</div>
			</div>
		)
	}
}