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

/*
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

function MenuItem(_ref) {
	var _ref$isActive = _ref.isActive;
	var isActive = _ref$isActive === undefined ? true : _ref$isActive;

	var style = {
		fontWeight: isActive ? 'bold' : 'normal'
	};
	return React.createElement(
		'li',
		{ style: style, 'data-active': isActive },
		'Menu Item'
	);
}

module.exports = MenuItem;

},{}]},{},[1]);
