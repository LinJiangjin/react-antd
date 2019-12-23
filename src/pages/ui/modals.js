import React from 'react'
import { Card,Button, Modal } from 'antd'
import './index.less'
import './modal.less'

export default class Mldals extends React.Component{
	
	state = {
		showModal1:false,
		showModal2:false,
		showModal3:false,
		showModal4:false
	}
	
	handleOpen = (type) => {
		this.setState({
			[type]:true //使用中括号控制变量
		})
	}
	handleConform = (type) => {
		Modal[type]({
			tutle:'确认',
			content: '学习了吗？',
			onOk(){
				console.log('ok')
			},
			onCancel(){
				console.log('cancel')
			}
		})
		
	}
	render(){
		return(
			<div>
				<Card title="基础模态框" className="card-wrap">
					<Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
					<Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
					<Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
				</Card>
				<Card title="信息确认框" className="card-wrap">
					<Button type="primary" onClick={()=>this.handleConform('confirm')}>Confirm</Button>
					<Button type="primary" onClick={()=>this.handleConform('success')}>success</Button>
					<Button type="primary" onClick={()=>this.handleConform('success')}>success</Button>
				</Card>
				<Modal title="React" visible={this.state.showModal1} onCancel={()=>{
					this.setState({
						showModal1:false
					})
				}}>
					<p>学些React弹框</p>
				</Modal>
				<Modal 
					title="React" 
					visible={this.state.showModal2} 
					onCancel={()=>{
						this.setState({
							showModal2:false
						})
					}}
					okText="好的"
					cancelText="算了">
					<p>学些React自定义页脚弹框</p>
				</Modal>
				<Modal
					title="React" 
					style={{top:20}}
					visible={this.state.showModal3} 
					onCancel={()=>{
						this.setState({
							showModal3:false
						})
					}}>
					<p>离顶部20px</p>
				</Modal>
			</div>
		)
	}
}