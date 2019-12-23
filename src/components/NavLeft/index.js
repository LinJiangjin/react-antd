import React from 'react'
import menuConfig from '../../config/menuConfig.js'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import '../../style/common.less'
import './index.less'
import logo from '../..//resource/assets/logo-ant.svg';

const { SubMenu } = Menu
export default class NavLeft extends React.Component{
	componentWillMount(){
		const menuTreeNode = this.renderMenu(menuConfig)
		this.setState({ menuTreeNode }) //调用this.setState后，render才能正确被渲染
	}
	//菜单渲染
	renderMenu = (data)=>{
		return data.map((item)=>{//遍历递归
			if(item.children){
				return(
					<SubMenu title={item.title} key={item.key}>
						{this.renderMenu(item.children)}
					</SubMenu>
				)
			}
			return <Menu.Item title={item.title} key={item.key}>
				<NavLink to={item.key}>{item.title}</NavLink>
			</Menu.Item>
		})
	}
	render(){
		return(
			<div>
				<div className="logo">
					<img src={logo} alt="" />
					<h1>Imooc MS</h1>
				</div>
				<Menu>
					{this.state.menuTreeNode}
				</Menu>
			</div>
		)
	}
}