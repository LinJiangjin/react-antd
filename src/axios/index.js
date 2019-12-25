import JsonP from 'jsonp'
import axios from 'axios'
import Modal from 'antd'

export default class Axios{
	static jsonp(options){
		return new Promise((resolve, reject)=>{
			JsonP(options.url,{
				param:'callback'
			},function(err,response){
				//to do
				//app服务被禁用，无法测试
			})
		})
	}
	
	//封装GET接口
	static ajax(options){
		return new Promise((resolve, reject)=>{
			aixos({
				usl: options.url,
				method:'get',
				baseURl: baseApi,
				timeout:5000,
				params:(options.data && options.data.params) || ''
			}).then((response)=>{
				if(response.status == '200'){
					let res = response.data;
					if(res.code == '0'){
						resolve(res)
					}else{
						Modal.info({
							title:'提示',
							content:res.data.msg
						})
					}
				}else{
					reject(response.dadta)
				}
			})
		})
	}
}