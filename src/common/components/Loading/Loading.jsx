import React from 'react';
require('./loading.css');
export default class Loading extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="load"></div>
		);
	}
}