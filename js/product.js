
$(document).ready(function () {
    category();
    overOrout();
    ajax();
    addOrreduce();
    addShop();
});

function ajax(){
    let localStorageStr=localStorage.getItem("shopId");
    console.log(localStorageStr);
    $.get("getGoodsInfo.php", {
        "goodsId":localStorageStr
    },
        function (data) {
            mirror(data);
            change(data);
        },
        "json"
    );
}

function overOrout() {
    //搜索框划过效果
    $$("#keyword").onmouseover = function () {
        this.style.cssText = `
        border :1px solid  #ff4040;
        background-color: #fff;

    `;
    }

    $$("#keyword").onmouseout = function () {
        this.style.cssText = `
        border :1px solid black;
        background-color: #fcfcfc;
    `;
    }
    $$("#categoriesId").onmousemove = function () {
        $$("#listId").style.cssText = `display:block`;
    }
    $$("#categoriesId").onmouseout = function () {
        $$("#listId").style.cssText = `display:none`;
    }
    $$("#listId").onmousemove = function () {
        this.style.cssText = `display:block`;
    }
    $$("#listId").onmouseout = function () {
        this.style.cssText = `display:none`;
    }
}

//动态添加盒子
function category() {

    let arr1 = ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"];
    let arr2 = ["乳品生鲜", "饼干糕点", "酒水饮料", "休闲零食", "糖果巧克力", "粮油调味", "咖啡冲饮", "麦片冲饮", "母婴玩具", "美妆个护", "家居清洁"];

    let item = document.createElement("div");
    item.style.cssText = `
        display: inline-block;
        float: left;
        width: 155px;
        padding-left: 22px;
        margin: 30px 0;
        border-right: 1px solid #e9e9e9;
    `;
    $$("#listId").appendChild(item);

    let inner = document.createElement("div");
    inner.style.cssText = `top: -6px;`;
    item.appendChild(inner);

    let title = document.createElement("p");
    title.style.cssText = `
        font-size: 14px;
        line-height: 19px;
        padding-bottom: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
    `;
    inner.appendChild(title);

    let b = document.createElement("a");
    b.style.cssText = `
        font-size:16px;
        color:#000;
    `;
    b.href = "#";
    b.innerHTML = "全球进口";
    title.appendChild(b);
    b.onmousemove = function () {
        b.style.cssText = `
            color:#ff4040;
            font-size:16px;
        `;
    }
    b.onmouseout = function () {
        b.style.cssText = `
            color:#000;
            font-size:16px;
        `;
    }


    let ulDom = document.createElement("ul");
    inner.appendChild(ulDom);
    let liDoms = [];
    for (let i = 0; i < 11; i++) {
        let liDom = document.createElement("li");
        liDom.style.cssText = `
            float: left;
            width: 50%;
            display: inline-block;
            line-height: 16px;
            margin-bottom: 8px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 16px;
        `;
        ulDom.appendChild(liDom);
        let a = document.createElement("a");
        a.style.cssText = `
            font-size:12px;
            color:#000;
        `;
        a.href = arr1[i];
        a.innerHTML = arr2[i];
        a.onmousemove = function () {
            a.style.cssText = `
            color:#ff4040;
            font-size:12px;
        `;
        }
        a.onmouseout = function () {
            a.style.cssText = `
                color:#000;
                font-size:12px;
            `;
        }
        liDom.appendChild(a);
        liDoms.push(liDom);

    }
}

//左侧盒子
function mirror(data) {
    console.log(data);
    // let imgarr = [
    //     "imgs/Good1.jpg",
    //     "imgs/Good2.jpg",
    //     "imgs/Good3.jpg",
    //     "imgs/Good4.jpg",
    //     "imgs/Good5.jpg",
    //     "imgs/Good6.jpg",
    //     "imgs/Good7.jpg",
    //     "imgs/Good8.jpg"
    // ];

    $("#jqzoom").css({
        "background": "url("+data.goodsImg+") no-repeat",
        "background-size": "400px 400px"
    });

    for (let i = 1; i <= 8; i++) {
        let bDom = $("<b>");
        $(".mBox").append(bDom);

        let imgDom = document.createElement("img");
        // var a=data[`beiyong${i}`];
        // console.log(a);
        imgDom.src =data[`beiyong${i+2}`];
        bDom.append(imgDom);
        bDom.click(function (e) { 
            $("#jqzoom").css({
                "background-image": "url("+imgDom.src+")",
                "background-repeat": " no-repeat",
                "background-size": "400px 400px"
            });
            $("#showBox").css({
                "background-image": "url("+imgDom.src+")",
                "background-repeat": " no-repeat",
                "background-position": " 0px 0px",
                "background-size": "1200px 1200px"
            });
            bDom.attr("class", "cur");
            bDom.siblings().attr("class", " ");
            
        });
    }

    $("#productMainName").html(data.goodsDesc);
    $("#current_price").html("￥"+data.goodsPrice);

    new Mirror({
        mulitple: 3,
        width: 180,
        height: 150
    }, $$("#jqzoom"));

   
    //图片预览小图移动效果,页面加载时触发
    $(function () {
        var tempLength = 0; //临时变量,当前移动的长度
        var viewNum = 4; //设置每次显示图片的个数量
        var moveNum = 2; //每次移动的数量
        var moveTime = 300; //移动速度,毫秒
        var scrollDiv = $(".mBox"); //进行移动动画的容器
        var scrollItems = $(".mBox b"); //移动容器里的集合
        var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
        var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度
        // console.log(scrollItems.length);  
        //下一张
        $("#cBtnR").bind("click", function () {
            if (tempLength < countLength) {
                if ((countLength - tempLength) > moveLength) {
                    scrollDiv.animate({
                        left: "-=" + moveLength + "px"
                    }, moveTime);
                    tempLength += moveLength;
                } else {
                    scrollDiv.animate({
                        left: "-=" + (countLength - tempLength) + "px"
                    }, moveTime);
                    tempLength += (countLength - tempLength);
                }
            }
        });
        //上一张
        $("#cBtnF").bind("click", function () {
            if (tempLength > 0) {
                if (tempLength > moveLength) {
                    scrollDiv.animate({
                        left: "+=" + moveLength + "px"
                    }, moveTime);
                    tempLength -= moveLength;
                } else {
                    scrollDiv.animate({
                        left: "+=" + tempLength + "px"
                    }, moveTime);
                    tempLength = 0;
                }
            }
        });
    });
}


//选择
function change(data){
    for(let i=0;i<4;i++){
        let item=$("<div>");
        item.attr("class","item");
        $(".dd").append(item);

        item.click(function (e) { 
            item.attr("class","item selected");
            item.siblings().attr("class","item");
        });

        let b=$("<b>");
        item.append(b);

       

        let a=document.createElement("a");
        a.href="#";
        item.append(a);
        
        let img=document.createElement("img");
        img.src=`${data["beiyong11"]}`;
        a.append(img);

        let p=document.createElement("p");
        p.innerHTML=data.beiyong12;
        a.append(p);
    }
}

// 加减按钮
function addOrreduce(){
    let count=parseInt($("#product_amount").val())
    $(".add").click(function (e) { 
        count=count+1;
        $("#product_amount").val(count);
    });

    $(".reduce").click(function (e) { 
        count=count-1;
        if(count<=1){
            count=1;
        }
        $("#product_amount").val(count);
    });
}

//加入购物车 
function addShop(){
    let localStorageStr=localStorage.getItem("shopId");
    let count=parseInt($("#product_amount").val())
    console.log(count);
    $("#addCart").click(function (e) { 
        $.get("addShoppingCart.php", {
            "vipName":"mgd12345",
            "goodsId":localStorageStr,
            "goodsCount":count
        },
            function (data) {
                console.log(data);
            },
            "json"
        );
        location.href="shopCar.html";
    });
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

