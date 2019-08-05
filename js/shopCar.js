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

//购物车商品
$(document).ready(function () {
    goods();
});



//动态创建商品信息
function goods() {
    let arr = [{
            "title": "乒艳礼品拼购专营店",
            "imgsrc": "goods1.jpg",
            "jieshao": "防珍珠锁骨链韩国choker项圈女颈带脖链网红脖子饰品短款颈链项链 1#亮闪闪金色 ",
            "pic": "46.00",
            "kg": "1.00kg",
            "shuoming": "1#亮闪闪金色"
        },
        // {
        //     "title": "乒艳礼品拼购专营店",
        //     "imgsrc": "goods1.jpg",
        //     "jieshao": "防珍珠锁骨链韩国choker项圈女颈带脖链网红脖子饰品短款颈链项链 1#亮闪闪金色 ",
        //     "pic": "46.00",
        //     "kg": "1.00kg",
        //     "shuoming": "1#亮闪闪金色"
        // }
    ];



    for (let i = 0; i < arr.length; i++) {
        let cart_tit = $("<div>");
        cart_tit.attr("class", "cart_tit");
        cart_tit.css({
            padding: "15px 30px",
            height: "25px",
            "border-bottom": "1px solid #dcdcdc",
            "line-height": "25px"
        })
        $(".cart_list").append(cart_tit);

        let checkbox = $("<div>");
        checkbox.attr("class", "checkbox");
        checkbox.css({
            float: "left",
            width: "auto"
        });
        $(".cart_tit").append(checkbox);

        let cheak = $('<input type="checkbox" id="checkId">');
        cheak.css({
            position: "relative",
            display: "inline-block",
            width: "13px",
            height: "13px",
            "margin-right": "20px",
            border: "1px solid #dcdcdc",
            "border-radius": "3px"
        })
        checkbox.append(cheak);

        let vender = $("<a>");
        vender.attr("class", "vender");
        vender.css({
            float: 'left',
            "vertical-align": "middle",
            "font-size": "14px"
        })
        vender.href = "#";
        // vender.html("乒艳礼品拼购专营店");
        vender.html(arr[0].title);
        $(".cart_tit").append(vender);


        let service = $("<a>");
        service.attr("class", "service");
        service.css({
            float: "left",
            margin: "5px 0 4px 3px",
            width: "16px",
            height: "16px",
            background: "url(imgs/sprite.png) 0 -25px"
        });
        service.href = "#";
        $(".cart_tit").append(service);

        let list_wrap = $("<div>");
        list_wrap.attr("class", "list_wrap");
        list_wrap.css({
            padding: "0 30px"
        });
        $(".cart_list").append(list_wrap);

        let cart_item = $("<ul>");
        cart_item.attr("class", "cart_item");
        cart_item.css({
            "border-top": "0",
        })
        $(".list_wrap").append(cart_item);

        let liDom = $("<li>");
        liDom.attr("class", "item");
        liDom.css({
            margin: "0 -30px",
            padding: "0 30px",
            "background-color": "#fff"
        })
        $(".cart_item").append(liDom);

        let cart_prod = $("<div>");
        cart_prod.attr("class", "cart_prod");
        cart_prod.css({
            position: "relative",
            padding: "20px 0 20px 35px",
            "min-height": "75px"
        })
        $(".item").append(cart_prod);

        let cheakDan = $('<input type="checkbox">');
        cheakDan.css({
            left: "0",
            position: "absolute",
            top: "50%",
            "margin-top": "-7px",
            "z-index": "1",
            float: "left"
        })
        $(".cart_prod").append(cheakDan);

        let item_pic = document.createElement("a");
        item_pic.style.cssText = `
        position: relative;
        z-index: 3;
        width:75px;
        height:75px;
        display:block;
        background:red;
        float:left;
        color:#333;
    `;
        item_pic.href = "#";
        $(".cart_prod").append(item_pic);

        let imgDom = document.createElement("img");
        imgDom.src = "imgs/" + arr[0].imgsrc;
        item_pic.append(imgDom);

        let item_tit = document.createElement("a");
        item_tit.style.cssText = `
        float: left;
        width: 260px;
        height: 40px;
        padding-top: 4px;
        padding-left: 20px;
        line-height: 20px;
        overflow: hidden;
        dispaly:block;
        float:left;
        color:#333;
    `;
        // item_tit.innerHTML = "防珍珠锁骨链韩国choker项圈女颈带脖链网红脖子饰品短款颈链项链 1#亮闪闪金色 ";
        item_tit.innerHTML = arr[0].jieshao;
        item_tit.href = "#";
        $(".cart_prod").append(item_tit);

        // 单价及价格标签
        let item_price = $("<div>");
        item_price.attr("class", "item_price");
        item_price.css({
            position: "relative",
            float: "left",
            width: "200px",
            "padding-top": "2px",
            "padding-right": "5px",
            "line-height": "24px",
            "text-align": "right"
        })
        $(".cart_prod").append(item_price);

        let price = $("<p>");
        price.attr("id", "price");
        // price.html("46.00");
        price.html(arr[0].pic);
        $(".item_price").append(price);

        //数量
        let item_num = $("<div>");
        item_num.attr("class", "item_num");
        item_num.css({
            position: "relative",
            float: "left",
            width: "205px"
        })
        $(".cart_prod").append(item_num);

        let num_act = $("<div>");
        num_act.attr("class", "num_act");
        num_act.css({
            float: "right",
            padding: "3px 0",
            width: "80px",
            height: "18px",
            "line-height": "18px",
            border: "1px solid #dfdfdf",
            "border-radius": "2px",
            "background-color": "#fff",
            overflow: "hidden",
        })
        $(".item_num").append(num_act);

        let minus = $('<input type="button" value="-" id="minusId">');
        minus.css({
            color: "#dfdfdf",
            float: "left",
            width: "20px",
            "text-align": "center",
            "font-family": 'Tahoma',
            "font-size": "14px",
            overflow: "hidden",
            outline: "none",
            border: "none",
            "background-color": "#fff"
        })
        $(".num_act").append(minus);

        let item_amount = $("<div>");
        item_amount.attr("class", "item_amount");
        item_amount.css({
            float: "left",
            width: "120px",
            "padding-left": "75px",
            "padding-right": "60px",
            "padding-top": "1px",
            "text-align": "right",
            "line-height": "24px",
            "font-family": 'Tahoma',
            "font-weight": "bold",
            color: "#333"
        })
        $(".cart_prod").append(item_amount);

        let item_a_money = $("<div>");
        item_a_money.attr("class", "item_a_money");
        item_a_money.html("  46.00  ")
        $(".item_amount").append(item_a_money);

        let item_a_weight = $("<div>");
        item_a_weight.attr("class", "item_a_weight");
        item_a_weight.css({
            "line-height": "18px",
            "font-weight": "normal",
            color: "#666"
        })
        // item_a_weight.html("1.00kg");
        item_a_weight.html(arr[0].kg);
        $(".item_amount").append(item_a_weight);

        let item_act = $("<div>");
        item_act.attr("class", "item_act");
        item_act.css({
            position: "relative",
            float: "left",
            width: "80px",
            "padding-top": "2px",
            "line-height": "24px",
            "text-align": "center"
        })
        $(".cart_prod").append(item_act);

        let collect_btn = $("<a>");
        collect_btn.attr("class", "collect_btn");
        collect_btn.css({
            padding: "0 3px",
            width: "20px",
            height: "20px"
        })
        $(".item_act").append(collect_btn);

        let shoucang = $('<img src="imgs/3.gif">')
        shoucang.css({
            width: "20px",
            height: "20px"
        })
        $(".collect_btn").append(shoucang);

        let del_btn = $("<a>");
        del_btn.attr("class", "del_btn");
        del_btn.css({
            padding: "0 3px",
            width: "20px",
            height: "20px"
        })
        $(".item_act").append(del_btn);

        let shanchu = $('<img src="imgs/4.gif">')
        shanchu.css({
            width: "20px",
            height: "20px"
        })
        $(".del_btn").append(shanchu);


        let text = $('<input type="text" value="1" id="numId">');
        text.css({
            float: "left",
            width: "38px",
            height: "18px",
            border: "none",
            "border-left": "1px solid #dfdfdf",
            "border-right": "1px solid #dfdfdf",
            "text-align": "center",
            "line-height": "18px",
            "outline": "none"
        })
        $(".num_act").append(text);

        let add = $('<input type="button" value="+" id="addId">');
        add.css({
            color: "#666",
            float: "left",
            width: "20px",
            "text-align": "center",
            "font-family": 'Tahoma',
            "font-size": "14px",
            overflow: "hidden",
            outline: "none",
            border: "none",
            "background-color": "#fff"
        })
        $(".num_act").append(add);

        let prop_edit = $("<div>");
        prop_edit.attr("class", "prop_edit");
        prop_edit.css({
            top: "65px",
            position: "absolute",
            left: "132px"
        })
        $(".cart_prod").append(prop_edit);

        let prop_server = $("<div>");
        prop_server.attr("class", "prop_server");
        prop_server.css({
            position: "relative",
            float: "left",
            width: "16px",
            height: "16px",
            margin: "3px 3px 0 0",
            "border-radius": "4px",
            "background-color": "#fda55b",
        })
        $(".prop_edit").append(prop_server);

        let seven = $('<img src="imgs/5.gif">');
        seven.css({
            width: "16px",
            height: "16px"
        })
        $(".prop_server").append(seven);

        let prop_txt = $("<div>");
        prop_txt.attr("class", "prop_txt");
        prop_txt.css({
            "margin-left": "21px",
            "min-width": "185px",
            "max-width": "270px",
            height: "20px",
            "padding-left": "5px",
            "padding-right": "10px",
            border: "1px dashed #fff",
            "line-height": "20px",
            cursor: "pointer",
            position: "relative",
            "margin-bottom": "5px",
            "float": "left"
        })
        $(".prop_edit").append(prop_txt);

        let goodname = $("<span>");
        goodname.attr("class", "goodname");
        goodname.css({
            "margin-right": "10px",
            color: "#aaa"
        })
        goodname.html(arr[0].shuoming);
        $(".prop_txt").append(goodname);


        let cart_amount = $("<div>");
        cart_amount.attr("class", "cart_amount");
        cart_amount.css({
            height: "50px",
            "padding-right": "25px",
            "border-top": "1px solid #dcdcdc",
            "border-bottom-left-radius": "5px",
            "border-bottom-right-radius": "5px",
            "background-color": "#fefcfc",
            "text-align": "right"
        });
        $(".cart_list").append(cart_amount);

        let amount = $('<div class="amount">商品总价：</div>');
        amount.css({
            float: "right",
            height: "50px",
            "padding-left": "20px",
            "line-height": "50px"
        })
        $(".cart_amount").append(amount);

        let spanDom = $("<span></span>");
        spanDom.attr("class", "heji");
        spanDom.css({
            color: "#ff5e5e",
            "font-weight": "bold",
            "font-size": "14px",
            "font-family": 'Tahoma'
        })
        spanDom.html("46");
        $(".amount").append(spanDom);
    }

}