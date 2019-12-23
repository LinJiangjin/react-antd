import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component{
	render(){
		return(
			<div>
				<ul style={{ listStyleType: "none", padding: 0 }}>
				    <li>
				        <Link to="/main">Main1</Link>
				    </li>
				    <li>
				        <Link to="/about">about1</Link>
				    </li>
				    <li>
				        <Link to="/topics">topics1</Link>
				    </li>
				</ul>
				<hr />
				{this.props.children}
			</div>
		)
	}
}