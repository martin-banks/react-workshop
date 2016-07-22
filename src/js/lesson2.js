document.querySelector('#app').innerHTML = 'Hello world'
/* lesson 2
ReactDOM.render(
	React.createElement('span', null, 'Hello, react!'),
	document.getElementById('app')
)
*/


// lesson 3a
ReactDOM.render(
	React.createElement('span', null,
		React.createElement('i', null, 'Hello'),
		', react!'
	),
	document.getElementById('app')
)

// lesson 3b
ReactDOM.render(
	React.createElement('ul', null, // create ul
		React.createElement('li', null, // create li in ul
			React.createElement('i', null, 'Hello'), // i tag with text inside
			', react!' //continue text outside of i tag
		),// end li element
		React.createElement('li', null, // second li
			'And hello ',
			React.createElement('b', null, 'again') // b tag in second li
		) // end second li
	),// end ul
	document.getElementById('app')
)
