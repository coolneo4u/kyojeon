import React from 'react';

// const tcd_logo = require("../images/tcdsmall.png");

export default class Footer extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { }
  	}
  	componentDidMount () { }
  	componentWillUnmount () { }

	render () {
		return (
			<div className="footer">
			    <div className='title'>OneMind App, 2017</div>
			</div>
		)
	}
}