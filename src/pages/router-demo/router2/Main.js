import React from 'react'
import { Link } from 'react-router-dom'

export default class Main extends React.Component{
	render(){
		return(
			<div>
				this is Main
				<Link to="/main/a">跳转子路由</Link>
				<hr/>
				{this.props.children}
			</div>
		)
	}
}