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

/* // lesson 6
function MenuItem( {isActive=false} ) {
	let style = {
		fontWeight: isActive ? 'bold' : 'normal'
	}
	return <li style={style} data-active={isActive}>Menu Item</li>
}
*/


//lesson 7
let MenuItem = React.createClass({
	getDefaultProps: function(){
		return {
			isActive: false,
			message: 'Ooops, not active'	
		}
	},
	getInitialState: function(){
		return {
			subMenuVisible: this.props.isActive
		}
	},
	handleClick: function(){
		this.setState({
	      subMenuVisible: !this.state.subMenuVisible // toggle
	    })
		console.log('click!');
	},
	handleHoverOver: function(){
		this.setState({
			menuHover: true
		})
	},
	handleHoverOut: function(){
		this.setState({
			menuHover: false
		})
	},

	render: function(){
		let style = {
			fontWeight: this.state.subMenuVisible ? 'bold' : 'normal',
			color: this.state.menuHover ? 'green' : this.state.subMenuVisible ? 'gold' : 'darkgrey'
		};
		let subStyle = {
			fontStyle: this.state.subMenuVisible ? 'italic' : 'normal',
			color: this.state.subMenuVisible ? 'lightblue' : 'darkgrey'
		};

		return <li><span style={style} data-active={this.props.isActive.isActive} onClick={this.handleClick} onMouseOver={this.handleHoverOver} onMouseOut={this.handleHoverOut}>
			{/*displayMessage()*/}
			Menu message </span>
			{this.state.subMenuVisible ? (
				<p style={subStyle}>
					Submenu item
				</p>			
				) : false 
			}
		</li>
	}

})




module.exports = MenuItem


