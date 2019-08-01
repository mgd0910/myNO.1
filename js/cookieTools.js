//保存cookie
// 参数：
//键，值，有效期（单位：天）
//返回值：无
function saveCookie(key,value,daycount){
    let d=new Date();
    let num=d.getDate()+daycount;
    d.setDate(num);
    document.cookie=`${key}=${value};expires=${d.toGMTString()}`;
}

//获取cookie
//参数
//键
//返回值：值

function getCookie(key){
    var str=document.cookie;

    let arr=str.split("; ");
    for(let i in arr){
        if(arr[i].startsWith(key+"=")){
            let[,value]=arr[i].split("=");
            return value;
        }
    }
}
