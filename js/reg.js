/* 
头部和底部的js文件，划过显示和变色效果
*/
$(function(){
    $(".help_wrap").mouseover(function () { 
        $(".help_ul").css("display","block");
    });

    $(".help_wrap").mouseout(function () { 
        $(".help_ul").css("display","none");
    });

    $(".help_ul li a").mouseover(function () { 
        $(this).css("color","#ff4040");
    });

    $(".help_ul li a").mouseout(function () { 
        $(this).css("color","#000");
    });

    $("#simplefooter a").mouseover(function () { 
        $(this).css("color","#ff4040");
    });

    $("#simplefooter a").mouseout(function () { 
        $(this).css("color","#000");
    });
})


/* 
表单输入效果,隐藏，移动，显示
*/


$(function(){
    $("#username").focus(function (e) { 
        $(this).prev().animate({"left":"-80px"},200);
        $(this).next().css({display:"block",backgroundColor:"#fff4d7"});
        $(this).next().next().css({display:"block",borderColor:"transparent #fff4d7 transparent transparent"})
    });
})
/* 
$(function(){
    //用户名
    $("#userName").focus(function (e) { 
        $(this).siblings().animate({"left":"-55px"},200);
        $("#li1Id .regist_tips").css({display:"block"});
    });
    //手机号
    $("#phone").focus(function (e) { 
        $(this).siblings().animate({"left":"-55px"},200);
        $("#li2Id .regist_tips").css({display:"block"});
    });
    // 获取验证码
    $("#getYzmId").click(function (e) { 
        $("#validCodeDiv").css({display:"block"});
    });
    //图片验证码
    $("#validCode").focus(function (e) { 
        $(this).siblings().animate({"left":"-55px"},200);
    });
    //短信验证码
    $("#validPhoneCode").focus(function (e) { 
        $(this).siblings().animate({"left":"-75px"},200);
    });
    //密码
    $("#password").focus(function (e) { 
        $(this).siblings().animate({"left":"-65px"},200);
        $("#li3Id .regist_tips").css({display:"block"});
    });
    //重复密码
    $("#password2").focus(function (e) { 
        $(this).siblings().animate({"left":"-65px"},200);
        $("#li4Id .regist_tips").css({display:"block"});
    });
}) */



/* 注册验证信息 
    前端验证
    后端验证

function regSave() {
    //一、验证前端是否全部通过
    let isCheckAll = true;
    for (var i = 0; i < arr.length; i++) {
        if (!check(inputs[i].value, arr[i])) {
            isCheckAll = false;
            break;
        }
    }

    if (isCheckAll && checkpass()) {

    } else {
        alert("请仔细查看所有信息是否正确");
        return false;
    }

    //1、创建对象
    let xhr = new XMLHttpRequest();

    //2、设置请求参数
    xhr.open("post", "regSave.php", true);

    //3、设置回调函数 
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.responseText == 1) {
                // $$("#msg").innerHTML = "亲，恭喜您，注册成功！跳转到登录页面";
                confirm("亲，恭喜您，注册成功！请登录");
                if(confirm("亲，恭喜您，注册成功！请登录")==true){
                    window.location.href="login.html";
                }
            } else {
                // $$("#msg").innerHTML = "亲，不好意思，注册失败！请重新输入内容";
                confirm("亲，不好意思，注册失败！请重新输入内容");
                if(confirm("亲，不好意思，注册失败！请重新输入内容")==true){
                    window.location.href="reg.html";
                }
            }
        }
    }
    //4、发送请求
    //post请求，与get请求有两个地方不同：
    //1)、设置请求头
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //2)、把发送的数据作为send函数的参数
    // let sexs = document.getElementsByName("sex");
    // if (sexs[0].checked == true) {
    //     var sex = sexs[0].value;
    // } else {
    //     var sex = sexs[1].value;
    // }

    let sendstr =`username=${$$("#userName").value}&userphone=${$$("#phone").value}&userpass=${$$("#password").value}`;
    xhr.send(sendstr);
}

var arr = ["username", "userphone", "userpass"];
var errs = ["用户名错误", "电话号码错误", "密码错误"];

$$("#userName").onblur = function () {
    //一、先做前端验证
    if (!check(this.value, arr[0])) {
        // this.nextElementSibling.innerHTML = "×";
        $("#li1Id .tips_words").html("请输入合法用法户名");
        $("#li1Id .y_same_item").css({border: "1px solid #ff4040"});
        return;
    }

    //二、后端验证

    //发送ajax请求
    //1、创建对象
    let xhr = new XMLHttpRequest();
    console.log("new完了：" + xhr.readyState);
    //2、设置请求参数
    let sendstr = "username=" + this.value;
    xhr.open("get", "checkuser.php?" + sendstr, true);
    console.log("open完了：" + xhr.readyState);

    //3、设置回调函数
    xhr.onreadystatechange = () => {
        console.log("onreadystatechange:" + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.responseText == 1) {
                // this.nextElementSibling.style.color = "red";
                // this.nextElementSibling.innerHTML = "不好意思，该用户名被人用了";
                $("#li1Id .y_same_item").css({border:"1px solid #ff4040"});
                $("#li1Id .tips_words").html("不好意思，该用户名被人用了");
            } else {
                // this.nextElementSibling.style.color = "green";
                // this.nextElementSibling.innerHTML = "√";
                $("#li1Id .regist_tips").css({display:"none"});
                $(".regist_right").css({display:"block"});
            }
        }
    }
    //4、发送请求
    xhr.send();
}

let inputs = $$(".txt");
for (let i = 1; i < inputs.length; i++) {
    inputs[i].onblur = function () {
        if (check(this.value, arr[i])) {
            // this.nextElementSibling.innerHTML = "√";
            
        } else {
            // this.nextElementSibling.innerHTML = "×";
            // $("#title").innerHTML = errs[i];
        }
    }
}


function checkAll() {
    let isCheckAll = true;
    for (var i = 0; i < arr.length; i++) {
        if (!check(inputs[i].value, arr[i])) {
            isCheckAll = false;
            break;
        }
    }

    if (!isCheckAll) {
        alert("请仔细查看所有信息是否正确");
        return false;
    }
}

function checkpass() {
    return $$("#password2").value == $$("#password").value;
}

//重复密码的验证
//重复密码的验证
$$("#password2").onblur = function () {
    if (!checkpass()) {
        this.nextElementSibling.innerHTML = "×";
    } else {
        this.nextElementSibling.innerHTML = "√";
    }
}

function $$(str) {
    if (str.charAt(0) == "#") {
        return document.getElementById(str.substring(1));
    } else if (str.charAt(0) == ".") {
        return document.getElementsByClassName(str.substring(1));
    } else {
        return document.getElementsByTagName(str);
    }
}

*/