$(function(){
    $(".hd_topbar_home").hover(function () {
            $(this).css({color:"#ff4040"});
        }, function () {
            $(this).css({color:"#333"});
        }
    );

    $(".hd_regist_link").hover(function () {
        $(this).css({color:"#ff4040"});
        }, function () {
            $(this).css({color:"#aaa"});
        }
    );

    $(".hd_menu a").hover(function () {
        $(this).css({color:"#ff4040"});
        }, function () {
            $(this).css({color:"#666"});
        }
    );

    $("#hd_has_child").hover(function () {
        $(".hd_menu_list").css({display:"block"});
        }, function () {
            $(".hd_menu_list").css({display:"none"});
        }
    );

    $(".hd_has_child a").hover(function () {
        $(this).css({color:"#ff4040"});
        }, function () {
            $(this).css({color:"#666"});
        }
    );

    $("#hd_has_child-1").hover(function () {
        $(".hd_title").css({color:"#ff4040"});
        $(".hd_qrcode_bg").css({display:"block"});
        }, function () {
            $(".hd_qrcode_bg").css({display:"none"});
            $(".hd_title").css({color:"#666"});
        }
    );
})

