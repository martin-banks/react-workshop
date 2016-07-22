(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// lesson 3c
var state = {
	menu: {
		first: 'Menu item 1',
		second: 'Menu item 2'
	}
};
var MenuItem = require('./menu-item');

function Menu() {
	//return React.createElement('ul', null, MenuItem(state))
	return React.createElement(
		'ul',
		null,
		React.createElement(MenuItem, null),
		React.createElement(MenuItem, { isActive: true })
	);
}

ReactDOM.render(Menu(), document.getElementById('app'));

},{"./menu-item":2}],2:[function(require,module,exports){
'use strict';

var /*
    function MenuItem(state) {
    	var keys = Object.keys(state.menu)
    	return keys.map(v=>{
    		return React.createElement('li', null, state.menu[v])
    	})
    }
    */

/*
function MenuItem(){
	return <li>Menu item</li>
}
*/

/*
function MenuItem(props){
	let style = {
		fontWeight: props.isActive ? 'bold' : 'normal'
	}
	return <li style={style}>Menu Item</li>
}
*/

/* // lesson 6
function MenuItem( {isActive=false} ) {
	let style = {
		fontWeight: isActive ? 'bold' : 'normal'
	}
	return <li style={style} data-active={isActive}>Menu Item</li>
}
*/

//lesson 7
MenuItem = React.createClass({
	displayName: 'MenuItem',

	getDefaultProps: function getDefaultProps() {
		return {
			isActive: false,
			message: 'Ooops, not active'
		};
	},
	getInitialState: function getInitialState() {
		return {
			subMenuVisible: this.props.isActive
		};
	},
	handleClick: function handleClick() {
		this.setState({
			subMenuVisible: !this.state.subMenuVisible // toggle
		});
		console.log('click!');
	},
	handleHoverOver: function handleHoverOver() {
		this.setState({
			menuHover: true
		});
	},
	handleHoverOut: function handleHoverOut() {
		this.setState({
			menuHover: false
		});
	},

	render: function render() {
		var style = {
			fontWeight: this.state.subMenuVisible ? 'bold' : 'normal',
			color: this.state.menuHover ? 'green' : this.state.subMenuVisible ? 'gold' : 'darkgrey'
		};
		var subStyle = {
			fontStyle: this.state.subMenuVisible ? 'italic' : 'normal',
			color: this.state.subMenuVisible ? 'lightblue' : 'darkgrey'
		};

		return React.createElement(
			'li',
			null,
			React.createElement(
				'span',
				{ style: style, 'data-active': this.props.isActive.isActive, onClick: this.handleClick, onMouseOver: this.handleHoverOver, onMouseOut: this.handleHoverOut },
				'Menu message '
			),
			this.state.subMenuVisible ? React.createElement(
				'p',
				{ style: subStyle },
				'Submenu item'
			) : false
		);
	}

});

module.exports = MenuItem;

},{}]},{},[1]);
