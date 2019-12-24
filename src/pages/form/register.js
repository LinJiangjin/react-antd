import React from 'react'
import { Card,
		 Form,
		 Button,
		 Input,
		 Checkbox,
		 Radio,
		 Select,
		 Switch,
		 DatePicker,
		 TimePicker,
		 Upload,
		 Icon,
		 message,
		 InputNumber} from 'antd'
		 import moment from 'moment'
const FromItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea
class Register extends React.Component{
	
	render(){
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol:{
				xs:24,
				sm:4
			},
			wrapperCol:{
				xs:24,
				sm:12
			}
		}
		const rowObject = {
			minRows:4,
			maxRows:6
		}
		return(
			<div>
				<Card title="注册表单">
					<Form horizontal>
						<FromItem label="用户名" {...formItemLayout}>
							{
							    getFieldDecorator('userName',{
							        initialValue:'',
							        rules:[
							            {
							                required:true,
							                message:'用户名不能为空'
							            }
							        ]
							    })(
							        <Input placeholder="请输入用户名" />
							    )
							}
						</FromItem>
						<FromItem label="密码" {...formItemLayout}>
							{
							    getFieldDecorator('userPwd',{
							        initialValue:'',
							        rules:[
							            {
							                required:true,
							                message:'用户名不能为空'
							            }
							        ]
							    })(
							        <Input placeholder="请输入密码" />
							    )
							}
						</FromItem>
						<FromItem label="性别" {...formItemLayout}>
							{
							    getFieldDecorator('sex',{
							        initialValue:'',
							    })(
							        <RadioGroup>
										<Radio value="1">男</Radio>
										<Radio value="2">女</Radio>
									</RadioGroup>
							    )
							}
						</FromItem>
						<FromItem label="年龄" {...formItemLayout}>
							{
							    getFieldDecorator('age',{
							        initialValue:18,
							    })(
							        <InputNumber />
							    )
							}
						</FromItem>
						<FromItem label="当前状态" {...formItemLayout}>
							{
							    getFieldDecorator('state',{
							        initialValue:"2",
							    })(
							      <Select>
									<Option value="1">闲鱼一条</Option>
									<Option value="2">风华浪子</Option>
									<Option value="3">北大才子</Option>
									<Option value="4">创业</Option>
								  </Select>
							    )
							}
						</FromItem>
						<FromItem label="爱好" {...formItemLayout}>
							{
							    getFieldDecorator('interest',{
							        initialValue:['2','5'],
							    })(
							      <Select mode="multiple">
									<Option value="1">游泳</Option>
									<Option value="2">打篮球</Option>
									<Option value="3">踢足球</Option>
									<Option value="4">跑步</Option>
									<Option value="5">爬山</Option>
									<Option value="6">骑行</Option>
									<Option value="7">桌球</Option>
								  </Select>
							    )
							}
						</FromItem>
						<FromItem label="是否已婚" {...formItemLayout}>
							{
								getFieldDecorator('isMarried',{
									valuePropName: 'checked',
									initialValue: true
								})(
									<Switch></Switch>
								)
							}
						</FromItem>
						<FromItem label="生日" {...formItemLayout}>
							{
								getFieldDecorator('birthday',{
									initialValue: moment('2019-09-09')
								})(
									<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
								)
							}
						</FromItem>
						<FromItem label="联系地址" {...formItemLayout}>
							{
								getFieldDecorator('address',{
									initialValue: '深圳南山区'
								})(
									<TextArea autosize={rowObject}></TextArea>
								)
							}
						</FromItem>
						<FromItem label="早起时间" {...formItemLayout}>
							{
								getFieldDecorator('time',{
									
								})(
									<TimePicker ></TimePicker>
								)
							}
						</FromItem>
					</Form>
				</Card>
			</div>
		)
	}
}
export default Form.create()(Register)