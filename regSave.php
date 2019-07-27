<?php
    header("Content-type:text/html;charset=utf-8");
    
    //1.从前端接收传来的数据
    $username=$_POST['username'];//接收到用户名
    $userphone=$_POST['userphone'];//接收到手机号
    $userpass=$_POST['userpass'];//接收到密码
    //2.保存
    // 1).建立连接
    $conn=mysql_connect('localhost','root','root');
    if(!$conn){
        die('连接失败');
    }
    //2).选择数据库
    mysql_select_db('mydb1905',$conn);
    //3).执行SQL语句
    $sqlstr="insert into user values('$username','$userphone','$userpass')";
	$result = mysql_query($sqlstr);
    //4).关闭数据库
    mysql_close($conn);
    //3.响应
    if($result==1){
       echo 1;
    }else{
        echo 0;
    }
?>