import React from 'react'
import { Link } from 'react-router-dom'

export default class Main extends React.Component{
	render(){
		return(
			<div>
				<Link to="/main/text-id">嵌套路由1</Link>
				<br/>
				<Link to="/main/123">嵌套路由2</Link>
				<hr/>
				{this.props.children}
			</div>
		)
	}
}