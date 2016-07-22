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


function MenuItem( {isActive=false} ) {
	let style = {
		fontWeight: isActive ? 'bold' : 'normal'
	}
	return <li style={style} data-active={isActive}>Menu Item</li>
}


module.exports = MenuItem