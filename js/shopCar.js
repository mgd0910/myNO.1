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
    let arr = [
        {
            "title": "乒艳礼品拼购专营店",
            "imgsrc": "imgs/goods1.jpg",
            "jieshao": "防珍珠锁骨链韩国choker项圈女颈带脖链网红脖子饰品短款颈链项链 1#亮闪闪金色 ",
            "pic": "   46.00    ",
            "kg": "1.00kg",
            "shuoming": "1#亮闪闪金色"
        },
        {
            "title": "自营",
            "imgsrc": "imgs/goods2.jpg",
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
        dp.html(arr[i].title);
        shop_name.append(dp);

        let shopChoice = $('<input type="checkbox" class="shopChoice">');
        let num = `shop_${i}`;
        shopChoice.attr("id",num)
        all_check.append(shopChoice);

        let shop = $("<label>");
        shop.attr({"class":"shop","for":num});
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

        let son_check = $('<input type="checkbox" class="son_check">');
        let numb=`checkbox_${i+2}`;
        son_check.attr("id",numb);
        list_chk.append(son_check);

        let label1 = $('<label>');
        label1.attr("for",numb)
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
        img1.src = arr[i].imgsrc;
        a1.append(img1);

        let list_text = $("<div>");
        list_text.attr("class", "list_text");
        list_con.append(list_text);

        let a2 = $("<a>");
        a2.attr("href", "#");
        a2.html(arr[i].jieshao);
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
        price.html("￥" + arr[i].pic);
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
        sum_price.html(arr[i].pic);
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


/**
 * 购物车选择与计算函数
 */

$(function () {

    //全局的checkbox选中和未选中的样式
    var $allCheckbox = $('input[type="checkbox"]'), //全局的全部checkbox
        $wholeChexbox = $('.whole_check'),
        $cartBox = $('.cartBox'), //每个商铺盒子
        $shopCheckbox = $('.shopChoice'), //每个商铺的checkbox
        $sonCheckBox = $('.son_check'); //每个商铺下的商品的checkbox
        $allCheckbox.click(function () {
            if ($(this).is(':checked')) {
                $(this).next('label').addClass('mark');
            } else {
                $(this).next('label').removeClass('mark')
            }
        });

    //===============================================全局全选与单个商品的关系================================
    $wholeChexbox.click(function () {
        var $checkboxs = $cartBox.find('input[type="checkbox"]');
        if ($(this).is(':checked')) {
            $checkboxs.prop("checked", true);
            $checkboxs.next('label').addClass('mark');
        } else {
            $checkboxs.prop("checked", false);
            $checkboxs.next('label').removeClass('mark');
        }
        totalMoney();
    });


    $sonCheckBox.each(function () {
        $(this).click(function () {
            if ($(this).is(':checked')) {
                //判断：所有单个商品是否勾选
                var len = $sonCheckBox.length;
                var num = 0;
                $sonCheckBox.each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $wholeChexbox.prop("checked", true);
                    $wholeChexbox.next('label').addClass('mark');
                }
            } else {
                //单个商品取消勾选，全局全选取消勾选
                $wholeChexbox.prop("checked", false);
                $wholeChexbox.next('label').removeClass('mark');
            }
        })
    })

    //=======================================每个店铺checkbox与全选checkbox的关系/每个店铺与其下商品样式的变化===================================================

    //店铺有一个未选中，全局全选按钮取消对勾，若店铺全选中，则全局全选按钮打对勾。
    $shopCheckbox.each(function () {
        $(this).click(function () {
            if ($(this).is(':checked')) {
                //判断：店铺全选中，则全局全选按钮打对勾。
                var len = $shopCheckbox.length;
                var num = 0;
                $shopCheckbox.each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $wholeChexbox.prop("checked", true);
                    $wholeChexbox.next('label').addClass('mark');
                }

                //店铺下的checkbox选中状态
                $(this).parents('.cartBox').find('.son_check').prop("checked", true);
                $(this).parents('.cartBox').find('.son_check').next('label').addClass('mark');
            } else {
                //否则，全局全选按钮取消对勾
                $wholeChexbox.prop("checked", false);
                $wholeChexbox.next('label').removeClass('mark');

                //店铺下的checkbox选中状态
                $(this).parents('.cartBox').find('.son_check').prop("checked", false);
                $(this).parents('.cartBox').find('.son_check').next('label').removeClass('mark');
            }
            totalMoney();
        });
    });


    //========================================每个店铺checkbox与其下商品的checkbox的关系======================================================

    //店铺$sonChecks有一个未选中，店铺全选按钮取消选中，若全都选中，则全选打对勾
    $cartBox.each(function () {
        var $this = $(this);
        var $sonChecks = $this.find('.son_check');
        $sonChecks.each(function () {
            $(this).click(function () {
                if ($(this).is(':checked')) {
                    //判断：如果所有的$sonChecks都选中则店铺全选打对勾！
                    var len = $sonChecks.length;
                    var num = 0;
                    $sonChecks.each(function () {
                        if ($(this).is(':checked')) {
                            num++;
                        }
                    });
                    if (num == len) {
                        $(this).parents('.cartBox').find('.shopChoice').prop("checked", true);
                        $(this).parents('.cartBox').find('.shopChoice').next('label').addClass('mark');
                    }

                } else {
                    //否则，店铺全选取消
                    $(this).parents('.cartBox').find('.shopChoice').prop("checked", false);
                    $(this).parents('.cartBox').find('.shopChoice').next('label').removeClass('mark');
                }
                totalMoney();
            });
        });
    });


    //=================================================商品数量==============================================
    var $plus = $('.plus'),
        $reduce = $('.reduce'),
        $all_sum = $('.sum');
    $plus.click(function () {
        var $inputVal = $(this).prev('input'),
            $count = parseInt($inputVal.val()) + 1,
            $obj = $(this).parents('.amount_box').find('.reduce'),
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.price').html(), //单价
            $priceTotal = $count * parseInt($price.substring(1));
        $inputVal.val($count);
        $priceTotalObj.html('￥' + $priceTotal);
        if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
            $obj.removeClass('reSty');
        }
        totalMoney();
    });

    $reduce.click(function () {
        var $inputVal = $(this).next('input'),
            $count = parseInt($inputVal.val()) - 1,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.price').html(), //单价
            $priceTotal = $count * parseInt($price.substring(1));
        if ($inputVal.val() > 1) {
            $inputVal.val($count);
            $priceTotalObj.html('￥' + $priceTotal);
        }
        if ($inputVal.val() == 1 && !$(this).hasClass('reSty')) {
            $(this).addClass('reSty');
        }
        totalMoney();
    });

    $all_sum.keyup(function () {
        var $count = 0,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.price').html(), //单价
            $priceTotal = 0;
        if ($(this).val() == '') {
            $(this).val('1');
        }
        $(this).val($(this).val().replace(/\D|^0/g, ''));
        $count = $(this).val();
        $priceTotal = $count * parseInt($price.substring(1));
        $(this).attr('value', $count);
        $priceTotalObj.html('￥' + $priceTotal);
        totalMoney();
    })

    //======================================移除商品========================================

    var $order_lists = null;
    var $order_content = '';
    $('.delBtn').click(function () {
        $order_lists = $(this).parents('.order_lists');
        $order_content = $order_lists.parents('.order_content');
        $('.model_bg').fadeIn(300);
        $('.my_model').fadeIn(300);
    });

    //关闭模态框
    $('.closeModel').click(function () {
        closeM();
    });
    $('.dialog-close').click(function () {
        closeM();
    });

    function closeM() {
        $('.model_bg').fadeOut(300);
        $('.my_model').fadeOut(300);
    }
    //确定按钮，移除商品
    $('.dialog-sure').click(function () {
        $order_lists.remove();
        if ($order_content.html().trim() == null || $order_content.html().trim().length == 0) {
            $order_content.parents('.cartBox').remove();
        }
        closeM();
        $sonCheckBox = $('.son_check');
        totalMoney();
    })

    //======================================总计==========================================

    function totalMoney() {
        var total_money = 0;
        var total_count = 0;
        var calBtn = $('.calBtn a');
        $sonCheckBox.each(function () {
            if ($(this).is(':checked')) {
                var goods = parseInt($(this).parents('.order_lists').find('.sum_price').html().substring(1));
                var num = parseInt($(this).parents('.order_lists').find('.sum').val());
                total_money += goods;
                total_count += num;
            }
        });
        $('.total_text').html('￥' + total_money);
        $('.piece_num').html(total_count);

        // console.log(total_money,total_count);

        if (total_money != 0 && total_count != 0) {
            if (!calBtn.hasClass('btn_sty')) {
                calBtn.addClass('btn_sty');
            }
        } else {
            if (calBtn.hasClass('btn_sty')) {
                calBtn.removeClass('btn_sty');
            }
        }
    }
});


