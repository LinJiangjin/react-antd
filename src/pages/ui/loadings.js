import React from 'react'
import { Card,Button, Spin, Icon, Alert } from 'antd'
import './index.less'

export default class Loading extends React.Component{
	
	render(){
		return(
			<div>
				<Card title="Spin用法" class="card-wrap">
					<Spin />
				</Card>
			</div>
		)
	}
}