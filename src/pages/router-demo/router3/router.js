import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Main from '../router3/Main'
import About from '../router1/About'
import Topics from '../router1/Topics'
import Home from './Home'
import Info from './Info'
import NoMatch from './NoMatch'


export default class IRoute extends React.Component{
	render(){
		return(
			<Router>
				<Home>
					<Switch>
						<Route path="/main" render={()=>
							<Main>
								<div>this is sub child </div>
								<Route path="/main/:mainId" component={Info}></Route>
							</Main>
						}></Route>
						<Route path="/about" component={About}></Route>
						<Route path="/topics" component={Topics}></Route>
						<Route component={NoMatch}></Route>
					</Switch>
				</Home>
			</Router>
		)
	}
}