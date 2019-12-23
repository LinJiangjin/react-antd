import React from 'react'
import { Card,Button } from 'antd'
import './index.less'

export default class Buttons extends React.Component{
	state={
		loading:true
	}
	handleCloseLoading = () => {
		this.setState({
			loading:!this.state.loading
		})
	}
	
	render(){
		return(
			<div>
				<Card title="基础按钮">
					<Button type="primary">Imooc</Button>
					<Button>Imooc</Button>
					<Button type="dashed">Imooc</Button>
					<Button type="danger">Imooc</Button>
					<Button type="disabled">Imooc</Button>
				</Card>
				<Card title="图形按钮">
					<Button icon="plus"type="primary">创建</Button>
					<Button icon="edit">编辑</Button>
					<Button type="danger" icon="delete">删除</Button>
					<Button shape="circle" icon="search"></Button>
					<Button shape="primary" icon="search">搜索</Button>
					<Button icon="download">下载 </Button>
				</Card>
				<Card title="Loading按钮">
					<Button loading={this.state.loading} type="primary">确定</Button>
					<Button type="primary" shape="circle" loading={this.state.loading}></Button>
					<Button loading={this.state.loading}>点击加载</Button>
					<Button shape="primary" onClick={this.handleCloseLoading}>关闭</Button>
				</Card>
			</div>
		)
	}
}