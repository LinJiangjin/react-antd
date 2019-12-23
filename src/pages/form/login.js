import React from 'react'
import { Cart , Form, Input, Button } from 'antd'

const FormItem = From.Item
export default class FromLogin extends React.Component{
	
	render(){
		return (
			<div>
				<Cart title="登陆行内表单">
					<Form>
						<Form layout="inline">
							<FormItem>
								<Input placeholder="请出入用户名"/>
							</FormItem>
							<FormItem>
								<Input placeholder="请输入密码"/>
							</FormItem>
							<FormItem>
								<Button placeholder="请出入用户名"/>
							</FormItem>
						</Form>
					</Form>
				</Cart>
			</div>
		)
	}
}
