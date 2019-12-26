import React from 'react'
import {Card, Table } from 'antd'
import axios from '../../axios/index'
import Utils from './../../utils/utils'

export default class Basic extends React.Component{
	state={
		dataSource2:[]
	}
	params={
		page:1
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
				sex: '0',
				state:'1',
				interest: '2',
				birthday:'2000-01-01',
				address: '北京市奥林匹克公园',
				time:'09:00'
			},
			{
				id:'2',
				key:2,
				userName: 'lily',
				sex: '0',
				state:'1',
				interest: '3',
				birthday:'2000-01-01',
				address: '北京市奥林匹克公园',
				time:'09:00'
			}
		]
		this.setState({
			dataSource: data
		})
		this.getTableList();
	}
	
	//获取列表数据
	getTableList=()=>{
		let _this = this
		axios.ajax({
			url: '/teble/list',
			data:{
				params:{
					page:this.params.page
				}
			}
		}).then((res)=>{
			this.setState({
				dataSource2: res.data.list,
				pagination: Utils.pagination(res,(current)=>{
					//todo
					_this.params.page = current;
					this.getTableList();
				})
			})
		})
	}
	
	 onSelectChange = selectedRowKeys => {
	    console.log('selectedRowKeys changed: ', selectedRowKeys);
	    this.setState({ selectedRowKeys });
	  };
	
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
				dataIndex:'sex',
				render(sex){
					return sex == 1?'男':'女'
				}
			},
			{
				title:'状态',
				dataIndex:'state'
			},
			{
				title:'爱好',
				dataIndex:'interest',
				render(interest){
					let config ={
						'1': '游泳',
						'2': '打篮球',
						'3': '跑步',
						'4': '踢足球',
						'5': '爬山',
						'6': '骑行',
						'7': '桌球',
						'8': '麦霸'
					}
					return config[interest]
				}
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
		];
		
		 const { selectedRowKeys } = this.state;
		
		const rowSelection = {
		      selectedRowKeys,
		      onChange: this.onSelectChange,
		    };
		
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
				<Card title="双选表格" style={{margin:'10 0'}}>
					<Table 
						columns={columns}
						dataSource={this.state.dataSource2}
						rowKey={record=>record.id}
						rowSelection={rowSelection}
						pagination={this.state.pagination }
					/>
				</Card>
			</div>
		)
	}
}
