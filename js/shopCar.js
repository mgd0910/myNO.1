$(function () {
    $(".hd_topbar_home").hover(function () {
        $(this).css({
            color: "#ff4040"
        });
    }, function () {
        $(this).css({
            color: "#333"
        });
    });

    $(".hd_regist_link").hover(function () {
        $(this).css({
            color: "#ff4040"
        });
    }, function () {
        $(this).css({
            color: "#aaa"
        });
    });

    $(".hd_menu a").hover(function () {
        $(this).css({
            color: "#ff4040"
        });
    }, function () {
        $(this).css({
            color: "#666"
        });
    });

    $("#hd_has_child").hover(function () {
        $(".hd_menu_list").css({
            display: "block"
        });
    }, function () {
        $(".hd_menu_list").css({
            display: "none"
        });
    });

    $(".hd_has_child a").hover(function () {
        $(this).css({
            color: "#ff4040"
        });
    }, function () {
        $(this).css({
            color: "#666"
        });
    });

    $("#hd_has_child-1").hover(function () {
        $(".hd_title").css({
            color: "#ff4040"
        });
        $(".hd_qrcode_bg").css({
            display: "block"
        });
    }, function () {
        $(".hd_qrcode_bg").css({
            display: "none"
        });
        $(".hd_title").css({
            color: "#666"
        });
    });
})


//省市联动
$(function () {
    $("#city_2").citySelect({
        prov: "北京",
        nodata: "none"
    });
})


//动态创建商品信息
$(function () {
    let cart_tit = $("<div>");
    cart_tit.attr("class", "cart_tit");
    cart_tit.css({
        padding: "15px 30px",
        height: "25px",
        "border-bottom": "1px solid #dcdcdc",
        "line-height": "25px"
    })
    $(".cart_list").append(cart_tit);

    let checkbox=$("<div>");
    checkbox.attr("class","checkbox");
    checkbox.css({
        float: "left",
        width: "auto"
    });
    $(".cart_tit").append(checkbox);

    let cheak=$('<input type="checkbox" id="checkId">')
    cheak.css({
        position: "relative",
        display: "inline-block",
        width: "13px",
        height: "13px",
        "margin-right": "20px",
        border: "1px solid #dcdcdc",
        "border-radius": "3px"
    })
    $(".checkbox").append(cheak);

    let vender=$("<a>");
    vender.attr("class", "vender");
    vender.css({
        float: 'left',
        "vertical-align": "middle",
        "font-size": "14px"
    })
    vender.href="#";
    vender.html("乒艳礼品拼购专营店");
    $(".cart_tit").append(vender);

    let service=$("<a>");
    service.attr("class","service");
    service.css({
        float: "left",
        margin: "5px 0 4px 3px",
        width: "16px",
        height: "16px",
        background: "url(../imgs/sprite.png) 0 -25px"
    });
    service.href="#";
    $(".cart_tit").append(service);


    let list_wrap=$("<div>");
    list_wrap.attr("class","list_wrap");
    list_wrap.css({
        padding: "0 30px"
    });
    $(".cart_list").append(list_wrap);

    let cart_amount=$("<div>");
    cart_amount.attr("class","cart_amount");
    cart_amount.css({
        height: "50px",
        "padding-right": "25px",
        "border-top": "1px solid #dcdcdc",
        "border-bottom-left-radius": "5px",
        "border-bottom-right-radius": "5px",
        "background-color": "#fefcfc",
        "text-align":"right"
    });
    $(".cart_list").append(cart_amount);

})