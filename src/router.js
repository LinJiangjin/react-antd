import React from 'react'
import {HashRouter, Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './Admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loadings'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import Basic from './pages/table/basic'
import NoMatch from './pages/noMatch'

export default class IRouter extends React.Component{
	
	render(){
		return(
			<HashRouter>
				<App>
					<Route path="/login" component={Login} />
					<Route path="/admin" render={()=>
						<Admin>
							<Switch>
								<Route path="/admin/ui/buttons" component={Buttons} />
								<Route path="/admin/ui/modals" component={Modals} />
								<Route path="/admin/ui/loadings" component={Loading} />
								<Route path="/admin/form/login" component={FormLogin} />
								<Route path="/admin/form/reg" component={FormRegister} />
								<Route path="/admin/table/basic" component={Basic} />
								<Route component={NoMatch} />
							</Switch>
						</Admin>
					} />
					<Route path="/order/detail"  component={Login}/>
				</App>
			</HashRouter>
		)
	}
} 