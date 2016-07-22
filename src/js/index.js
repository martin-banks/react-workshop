
// lesson 3c
const state = {
	menu: {
		first: 'Menu item 1',
		second: 'Menu item 2'
	}
}
const MenuItem = require('./menu-item')


function Menu() {
	//return React.createElement('ul', null, MenuItem(state))
	return <ul><MenuItem/><MenuItem isActive={true}/></ul>
}

ReactDOM.render(
	Menu(), document.getElementById('app')
)