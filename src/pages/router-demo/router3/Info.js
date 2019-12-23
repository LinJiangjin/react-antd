import React from 'react'

export default class Info extends React.Component{
	render(){
		return(
			<div>
				这里是获取动态路由
				这是动态路由的值:  {this.props.match.params.mainId}
			</div>
		)
	}
}