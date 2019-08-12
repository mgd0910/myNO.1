
//功能：ajax交互
//参数：
//请求地址
//请求方式
//请求参数（前端发给后端的数据，键值对的字符串形式，如：username=jzm&userpass=123）
//是否异步

//返回值：无

function ajax1811(url,method,param,isAsync,func){
	//1、创建对象
	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	let urlAndParam = url;
	if(method.toLowerCase()=="get"){
		urlAndParam += "?"+param;
	}
	xhr.open(method,urlAndParam,isAsync);

	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func&&func(xhr.responseText);
		}
	}

	//4、发送请求
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}else{
		xhr.send();	
	}
}


//功能：ajax交互
//参数：
//请求地址
//请求方式
//请求参数（前端发给后端的数据，键值对的字符串形式，如：username=jzm&userpass=123）
//是否异步

//返回值：无

function ajax1811ByObjAndDefault(obj){
	//默认值
	let defaultObj = {
		url:"#",
		method:"get",
		param:"",
		isAsync:true,
		func:null
	};

	let endObj = {};
	for(let key in defaultObj){//循环json对象
		if(obj[key]==undefined){
			endObj[key]=defaultObj[key];
		}else{
			endObj[key]= obj[key];
		}
	}

	//1、创建对象
	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	let urlAndParam = endObj.url;
	if(endObj.method.toLowerCase()=="get"){
		urlAndParam += "?"+endObj.param;
	}
	xhr.open(endObj.method,urlAndParam,endObj.isAsync);

	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			endObj.func&&endObj.func(xhr.responseText);
		}
	}

	//4、发送请求
	if(endObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(endObj.param);
	}else{
		xhr.send();	
	}
}



//功能：ajax交互
//参数：
//请求地址
//请求方式
//请求参数（前端发给后端的数据，键值对的字符串形式，如：username=jzm&userpass=123）
//是否异步

//返回值：无

function ajaxPromise(obj){
	//默认值
	let defaultObj = {
		url:"#",
		method:"get",
		param:"",
		isAsync:true
	};
	  

	let endObj = {};
	for(let key in defaultObj){//循环json对象
		if(obj[key]==undefined){
			endObj[key]=defaultObj[key];
		}else{
			endObj[key]= obj[key];
		}
	}

	//1、创建对象
	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	let urlAndParam = endObj.url;
	if(endObj.method.toLowerCase()=="get"){
		urlAndParam += "?"+endObj.param;
	}
	xhr.open(endObj.method,urlAndParam,endObj.isAsync);

	let p = new Promise(function(resolve,reject){
		//3、设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					resolve&&resolve(xhr.responseText);
				}else{
					reject&&reject(xhr.statusText);
				}
			} 
		}
	});

	//4、发送请求
	if(endObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(endObj.param);
	}else{
		xhr.send();	
	}
	return p;
}