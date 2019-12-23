import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
// import axios from '../../axios/index.js'

export default class  Header extends React.Component{
	componentWillMount(){
		this.setState({
			userName: '诺克斯丁'
		})
		setInterval(()=>{
			let sysTime = Util.formateDate(new Date().getTime())
			this.setState({
				sysTime
			})
		},1000)
		// this.getWeatherAPIDate()
	}
	
	// getWeatherAPIDate(){
	// 	let city = '深圳'
	// 	console.log('5555')
	// 	axios.jsonp({
	// 		url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=TdmQ9bKoTn6dHTk0zaBZKqoY7WgN88tL'
	// 	}).then((res)=>{
	// 		console.log('6666')
	// 		if(res.status === 'success'){
	// 			let data = res.results
	// 			console.log(data,'4444')
	// 		}
	// 	})
	// }
	
	render(){
		return(
			<div className="header">
				<Row className="header-top">
					<Col span={24}>
						<span>欢迎, {this.state.userName}</span>
						<a href="#">退出</a>
					</Col>
				</Row>
				<Row className="breadcrumb">
					<Col span={4} className="breadcrumb-title">
						首页
					</Col>
					<Col span={20} className="weather">
						<span>{this.state.sysTime}</span>
					</Col>
				</Row>
			</div>
		)
	}
}