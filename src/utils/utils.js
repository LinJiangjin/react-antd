export default {
	formateDate(time){
		if(!time) return '';
		let date = new Date(time)
		return date.getFullYear()+ '-' + (date.getMonth()+1)+"-"+date.getDate() +" "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	},
	
	pagination(data,callback){
		console.log(data.data.page,data.data.page_size,data.data.total_count)
		return{
			onChange: (current)=>{
				callback(current)
			},
			current:data.data.page,
			pageSize:data.data.page_size,
			total:data.data.total_count,
			showTotal:()=>{
				return `共${data.data.total_count}条`
			}
		}
	}
}