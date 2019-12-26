import JsonP from 'jsonp'
import axios from 'axios'
import {Modal} from 'antd'

export default class Axios{
	static jsonp(options){
		return new Promise((resolve, reject)=>{
			JsonP(options.url,{
				param:'callback'
			},function(err,response){
				//to do
				//这个封装是做天气预报的,百度天气预告API服务被禁用，无法测试
			})
		})
	}
	
	//封装GET接口
	static ajax(options){
		return new Promise((resolve, reject)=>{
			let baseApi = "https://www.easy-mock.com/mock/5e031b60a1d7626ba6e63c9d/imockapi"
			axios({
				url: options.url,
				method:'get',
				baseURL: baseApi,
				timeout:5000,
				params:(options.data && options.data.params) || ''
			}).then((response)=>{
				console.log(response)
				if(response.status == 200){
					let res = response.data;
					if(res){
						resolve(res)
					}else{
						Modal.info({
							title:'提示',
							content:res.data.msg
						})
					}
				}else{
					reject(response.data)
				}
			})
		})
	}
}