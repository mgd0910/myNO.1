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
        {
            "title": "自营",
            "imgsrc": "goods2.jpg",
            "jieshao": "    范思哲(VERSACE)晶钻女用香水 30ml (又名：范思哲(VERSACE)晶钻女士香水 30ml 香氛) 持久自然 ",
            "pic": "   349.00    ",
            "kg": "0.16kg",
            "shuoming": "晶钻30ml"
        },
        {
            "title": "自营",
            "imgsrc": "goods2.jpg",
            "jieshao": "    范思哲(VERSACE)晶钻女用香水 30ml (又名：范思哲(VERSACE)晶钻女士香水 30ml 香氛) 持久自然 ",
            "pic": "   349.00    ",
            "kg": "0.16kg",
            "shuoming": "晶钻30ml"
        }
    ];

    for (let i = 0; i < arr.length; i++) {
        let cartBox = $("<div>");
        cartBox.attr("class", "cartBox");
        $("#goodsId").append(cartBox);

        let shop_info = $("<div>");
        shop_info.attr("class", "shop_info");
        cartBox.append(shop_info);

        let all_check = $("<div>");
        all_check.attr("class", "all_check");
        shop_info.append(all_check);

        let shop_name = $("<div>");
        shop_name.attr("class", "shop_name");
        shop_name.html("店铺:");
        shop_info.append(shop_name);

        let dp = $("<a>");
        dp.attr("href", "#");
        dp.html(arr[0].title);
        shop_name.append(dp);

        let shopChoice = $('<input type="checkbox" id="shop_a" class="shopChoice">');
        all_check.append(shopChoice);

        let shop = $("<label>");
        shop.attr("class", "shop");
        all_check.append(shop);


        let order_content = $("<div>");
        order_content.attr("class", "order_content");
        cartBox.append(order_content);

        let order_lists = $("<ul>");
        order_lists.attr("class", "order_lists");
        order_content.append(order_lists);

        let list_chk = $("<li>");
        list_chk.attr("class", "list_chk");
        order_lists.append(list_chk);

        let son_check = $('<input type="checkbox" id="checkbox_2" class="son_check">');
        list_chk.append(son_check);

        let label1 = $('<label for="checkbox_2"></label>');
        list_chk.append(label1);



        let list_con = $("<li>");
        list_con.attr("class", "list_con");
        order_lists.append(list_con);

        let list_img = $("<div>");
        list_img.attr("class", "list_img");
        list_con.append(list_img);

        let a1 = $("<a>");
        a1.attr("href", "#");
        list_img.append(a1);

        let img1 = document.createElement("img");
        img1.src = "imgs/" + arr[0].imgsrc;
        a1.append(img1);

        let list_text = $("<div>");
        list_text.attr("class", "list_text");
        list_con.append(list_text);

        let a2 = $("<a>");
        a2.attr("href", "#");
        a2.html(arr[0].jieshao);
        list_text.append(a2);

        let list_info = $("<li>");
        list_info.attr("class", "list_info");
        order_lists.append(list_info);

        let p1 = $("<p>");
        p1.html("规格：默认");
        list_info.append(p1);

        let p2 = $("<p>");
        p2.html(arr[0].shuoming);
        list_info.append(p2);

        let list_price = $("<li>");
        list_price.attr("class", "list_price");
        order_lists.append(list_price);

        let price = $("<p>");
        price.attr("class", "price");
        price.html("￥" + arr[0].pic);
        list_price.append(price);

        let list_amount = $("<li>");
        list_amount.attr("class", "list_amount");
        order_lists.append(list_amount);

        let amount_box = $("<div>");
        amount_box.attr("class", "amount_box");
        list_amount.append(amount_box);

        let reduce = $("<a>");
        reduce.attr({
            "class": "reduce",
            "href": "#"
        });
        reduce.html("-")
        amount_box.append(reduce);

        let sum = $('<input type="text" value="1" class="sum">');
        amount_box.append(sum);

        let plus = $("<a>");
        plus.attr({
            "class": "plus",
            "href": "#"
        });
        plus.html("+")
        amount_box.append(plus);

        let list_sum = $("<li>");
        list_sum.attr("class", "list_sum");
        order_lists.append(list_sum);

        let sum_price = $("<p>");
        sum_price.attr("class", "sum_price");
        sum_price.html("￥46.00");
        list_sum.append(sum_price);


        let list_op = $("<li>");
        list_op.attr("class", "list_op");
        order_lists.append(list_op);

        let del = $("<p>");
        del.attr("class", "del");
        list_op.append(del);

        let delBtn = $("<a>");
        delBtn.attr({
            "class": "delBtn",
            "href": "#"
        });
        delBtn.html("移除商品");
        del.append(delBtn);
    }
}



/* //全选或者取消
jQuery.fn.extend({
    checkAll: function (isChecked) {
        this.attr("checked", isChecked);
    }
});

$(function () {
    $("#checkAll").click(function () {
        $(".cart_list :checkbox").checkAll(this.checked);
        $("#checkOutBar :checkbox").checkAll(this.checked);
    });
    $("#checkOutBar :checkbox").click(function () {
        $(".cart_list :checkbox").checkAll(this.checked);
        $("#checkAll").checkAll(this.checked);
    });
}); */