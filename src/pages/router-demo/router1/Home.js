import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topics from './Topics'

export default class Home extends React.Component{
	render(){
		return(
			<HashRouter>
				<div>
					<ul style={{ listStyleType: "none", padding: 0 }}>
					    <li>
					        <Link to="/">Main</Link>
					    </li>
					    <li>
					        <Link to="/about">about</Link>
					    </li>
					    <li>
					        <Link to="/topics">topics</Link>
					    </li>
					</ul>
					<hr />
					<Route exact={true}  path="/" component={Main}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/topics" component={Topics}></Route>
				</div>
			</HashRouter>
		)
	}
}