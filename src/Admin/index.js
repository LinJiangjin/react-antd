import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavLeft from '../components/NavLeft'
import '../style/common.less'
import Home from '../pages/home/index.js'
import {
	Row,
	Col
} from 'antd';

export default class Admin extends React.Component{
	render(){
		return(
			<Row className="container">
				<Col span={3} className="nav-left">
					<NavLeft />
				</Col>
				<Col span={21} className="main">
					<Header />
					<Row className="content">
						{/* <Home /> */}
						{this.props.children}
					</Row>
					<Footer />
				</Col>
			</Row>
		)
	}
}