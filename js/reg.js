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
        $(this).next().css({display:"block",backgroundColor:"#dedede"});
        $(this).next().next().css({display:"block",borderColor:"transparent #dedede transparent transparent"})
    });

    $("#userphone").focus(function (e) { 
        $(this).prev().animate({"left":"-80px"},200);
        $(this).next().css({display:"block",backgroundColor:"#dedede"});
        $(this).next().next().css({display:"block",borderColor:"transparent #dedede transparent transparent"})
    });

    $("#message").focus(function (e) { 
        $(this).prev().animate({"left":"-105px"},200);
        $(this).next().next().css({display:"block",backgroundColor:"#dedede"});
        $(this).next().next().next().css({display:"block",borderColor:"transparent #dedede transparent transparent"})
    });

    $("#userpass").focus(function (e) { 
        $(this).prev().animate({"left":"-90px"},200);
        $(this).next().css({display:"block",backgroundColor:"#dedede"});
        $(this).next().next().css({display:"block",borderColor:"transparent #dedede transparent transparent"})
    });

    $("#checkpass").focus(function (e) { 
        $(this).prev().animate({"left":"-90px"},200);
        $(this).next().css({display:"block",backgroundColor:"#dedede"});
        $(this).next().next().css({display:"block",borderColor:"transparent #dedede transparent transparent"})
    });
})




