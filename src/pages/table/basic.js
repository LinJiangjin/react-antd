import React from 'react'
import {Card, Table } from 'antd'

export default class Basic extends React.Component{
	state={
		dataSource2:[]
	}
	componentDidMount(){
		const data = [
			{
				id:'0',
				key:0,
				userName: 'jack',
				sex: '1',
				state:'1',
				interest: '1',
				birthday:'2000-01-01',
				address: '北京市奥林匹克公园',
				time:'09:00'
			},
			{
				id:'1',
				key:1,
				userName: 'tom',
				sex: '1',
				state:'1',
				interest: '1',
				birthday:'2000-01-01',
				address: '北京市奥林匹克公园',
				time:'09:00'
			},
			{
				id:'2',
				key:2,
				userName: 'lily',
				sex: '1',
				state:'1',
				interest: '1',
				birthday:'2000-01-01',
				address: '北京市奥林匹克公园',
				time:'09:00'
			}
		]
		this.setState({
			dataSource: data
		})
	}
	
	render(){
		
		const columns = [
			{
				title:'id',
				dataIndex:'id'
			},
			{
				title:'用户名',
				dataIndex:'userName'
			},
			{
				title:'性别',
				dataIndex:'sex'
			},
			{
				title:'状态',
				dataIndex:'status'
			},
			{
				title:'爱好',
				dataIndex:'interest'
			},
			{
				title:'生日',
				dataIndex:'birthday'
			},
			{
				title:'地址',
				dataIndex:'address'
			},
			{
				title:'早起时间',
				dataIndex:'time'
			}
		]
		return(
			<div>
				<Card title="基础表格">
					<Table 
						columns={columns}
						dataSource={this.state.dataSource}
						rowKey={record=>record.id}
					/>
				</Card>
				<Card title="动态数据表格" style={{margin:'10 0'}}>
					<Table 
						columns={columns}
						dataSource={this.state.dataSource2}
						rowKey={record=>record.id}
					/>
				</Card>
			</div>
		)
	}
}