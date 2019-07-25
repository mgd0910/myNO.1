window.onload = function () {
    // 轮播图
    new BannerPlayer({
        width: 1920,
        height: 400,
        imgs: ["img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg", "img/banner4.jpg"],
        douWidth: 110,
        douHeight: 40,
        douJianGe: 10,
        douColor: "#fff",
        douHighColor: "#000",
        timeSpace: 1500,
        douIsCircle: false
    }, $$("#bannerId"));

    category();

    newPeople();

    djs();

    superShop();

    superBrand();

    quality();

    pick();

    YouKnow();

    rightEwm();

    souSuo();

    overOrout();
}



function overOrout(){
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
    //搜索框焦点效果
    $$("#keyword").onfocus = function () {
        $$("#searchSuggest").style.cssText = `
            display: block;
        `;
    }
    $$("#keyword").onblur = function () {
        $$("#searchSuggest").style.cssText = `
            display: none;
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

//新人会场
function newPeople() {
    let newMan = document.createElement("a");
    newMan.href = "#";
    $$("#newId").appendChild(newMan);
    let imgMan = document.createElement("img");
    imgMan.src = "img/newman.png";
    newMan.appendChild(imgMan);
}

// 倒计时
function djs() {
    let timego = new Date("2019-10-22 21:00:00");
    let djs = setInterval(function () {
        let timenow = new Date(); //获取当前时间
        let time = timego.getTime() - timenow.getTime(); //时间差的所有毫秒数
        let day = parseInt((time / 1000 / 60 / 60 / 24) % 30)
        let hou = parseInt((time / 1000 / 60 / 60) % 24);
        let min = parseInt((time / 1000 / 60) % 60);
        let sec = parseInt((time / 1000) % 60);
        let minsec = time % 1000;
        $$("#hour").innerHTML = hou;
        $$("#minutes").innerHTML = min;
        $$("#second").innerHTML = sec;
        // document.body.innerHTML = day + "天" + hou + "时" + (min < 10 ? "0" + min : min) + "分" + (sec < 10 ? "0" + ssec : sec) + "秒" + (minsec < 10 ? "00" + minsec : minsec < 100 ? "0" + minsec : minsec) + "毫秒";
    }, 1000)
}

//动态添加超级商品
function superShop() {
    let imgarr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let arr1 = [
        "奥康 Aokang 休闲鞋圆头撞色平底女184332039白/黑37码",
        "飞利浦（PHILIPS）男士电动剃须刀全身水洗干湿双剃剃胡刀胡须刀刮胡刀S9041/12",
        "宝树行 轩尼诗XO第六代1500ml 干邑白兰地 珍藏版礼盒装",
        "【官方旗舰 买1送1】朵拉朵尚补水保湿喷雾300ml+送150ml(男女士爽肤水柔肤化妆保湿薏仁水) 【亮肤补水】薏仁喷雾 300ml",
        "四书五经 （绸面精装全六卷）文白对照",
        "光威（GW） 正品光威路亚竿套装水滴轮枪柄双梢MH调 M调纺车轮直柄海竿抛竿钓鱼竿套装 双梢2.4米枪柄+光威水滴轮+线饵钳控套装",
        "珍爱 洁面湿巾绿茶去油 夏季擦汗面部清洁湿纸巾 3包x80抽",
        "俞兆林5双（买1送1共2盒即10双）袜子男短袜男士船袜春季薄款棉袜低帮运动袜浅口隐形袜潮袜 国期星星船袜5双（买1送1 ） 39-43",
        "美的(Midea)100升单温冷冻冷藏迷你转换冷柜 家用冰柜BD/BC-100KMA（旋律金） BD/BC-100KMA旋律金"
    ];

    let arr2 = ['123', '124', '125', '126', '127', '128', '129', '130', '131'];

    let arr3 = ['147', '152', '142', '156', '132', '165', '185', '158', '171'];

    let arr4 = ['52', '96', '36', '64', '12', '88', '75', '92', '42'];

    let liDoms = [];
    for (let i in imgarr) {
        let liDom = document.createElement("li");
        liDom.style.cssText = `
            width: 210px;
            height: 216px;
            float: left;
            font-size: 14px;
        `;
        $$("#superUlId").appendChild(liDom);
        liDoms.push(liDom);

        //绑定事件
        liDoms[i].onmouseover = function () {
            this.style.transform = "scale(1.1)";
        }
        liDoms[i].onmouseout = function () {
            this.style.transform = "scale(1)";
        }
        // console.log(liDoms);
        let a = document.createElement("a");
        a.style.cssText = `
            width: 100%;
            height: 100%;
            display: block;
            display:inline-block;
            position: relative;
        `;
        a.href = `#${imgarr[i]}`;
        liDom.appendChild(a);

        let imgDom = document.createElement("img");
        imgDom.style.cssText = `
            width: 110px;
            height: 110px;
            position: absolute;
            top: 15px;
            left: 50%;
            margin-left: -55px;
        `;
        imgDom.src = `img/img${imgarr[i]}.jpg`;
        a.appendChild(imgDom);
        let divDom = document.createElement("div");
        divDom.style.cssText = `
            height: 81px;
            width: 150px;
            margin: 0 auto;
            position:absolute;
            top:135px;
            position: relative;
        `;
        a.appendChild(divDom);

        let divSpanDom = document.createElement("div");
        divSpanDom.style.cssText = `
            width: 153px;
            height: 20px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color:#000;
        `;
        divSpanDom.innerHTML = arr1[i];
        divDom.appendChild(divSpanDom);

        let divBarDom = document.createElement("div");
        divBarDom.style.cssText = `
            width: 150px;
            height: 6px;
            margin-top: 10px;
            background-color: #e2e2e2;
            border-radius: 100px;
        `;
        divDom.appendChild(divBarDom);

        let divProgressDom = document.createElement("div");
        divProgressDom.style.cssText = `
            width:${arr4[i]}%;
            height: 100%;
            border-radius: 100px;
            background-color: #d9161d;
            background-image: linear-gradient(-90deg,#d9161d 0%,#f0444d 100%);
        `;
        divBarDom.appendChild(divProgressDom);

        let divConDom = document.createElement("div");
        divConDom.style.cssText = `
            height: 33px;
            padding-top: 12px;
            position: relative;
            overflow: hidden;
            text-align: center;
            line-height:33px;
        `;
        divDom.appendChild(divConDom);

        let divActDom = document.createElement("div");
        divActDom.style.cssText = `
            margin-left: -3px;
            color:red;
            float:left;
            margin-left:30px;
        `;
        divActDom.innerHTML = "￥" + arr2[i];
        divConDom.appendChild(divActDom);

        let divUndDom = document.createElement("div");
        divUndDom.style.cssText = `
            text-decoration: line-through;
            font-size: 12px;
            color: #999;
            font-weight: normal;
            margin-left: 4px;
            float:left;
        `;
        divUndDom.innerHTML = "￥" + arr3[i];
        divConDom.appendChild(divUndDom);
    }
}

//动态添加超级品牌
function superBrand() {

    let arr1 = ["超级品牌", "超级品类"];
    let arr2 = ["&nbsp;/ 超级品牌/精品汇聚", "&nbsp;/ 超级品类/品质甄选"];
    let arr3 = [
        ["bg1.jpg", "bg2.jpg"],
        ["bg3.jpg", "bg4.jpg"]
    ];
    let arr4 = ["logo1.jpg", "logo2.jpg"];
    let arr5 = [
        ["金龙鱼", "蒙牛"],
        ["个人洗护专场", "缤纷水饮专场"]
    ];
    let arr6 = [
        ["低价来袭", "爆款直降"],
        ["精选特惠", "尖货盘点"]
    ];
    let arr7 = [
        [
            ["sp_bg1.jpg", "sp_bg2.jpg", "sp_bg3.jpg"],
            ["sp_bg4.jpg", "sp_bg5.jpg", "sp_bg6.jpg"]
        ],
        [
            ["sp_bg7.jpg", "sp_bg8.jpg", "sp_bg9.jpg"],
            ["sp_bg10.jpg", "sp_bg11.jpg", "sp_bg12.jpg"]
        ]
    ];
    for (let k = 0; k < arr1.length; k++) {
        let divDom = document.createElement("div");
        divDom.style.cssText = `
        width: 530px;
        height: 100%;
        background-color: #fff;
        float: left;
    `;
        $$("#brand").appendChild(divDom);

        let common = document.createElement("div");
        common.style.cssText = `
        width: 490px;
        height: 67px;
        margin-left: 19px;
        overflow: hidden;
    `;
        divDom.appendChild(common);

        let a = document.createElement("a");
        a.href = "#";
        common.appendChild(a);

        let firstC = document.createElement("span");
        firstC.style.cssText = `
        height: 67px;
        text-align: center;
        line-height: 70px;
        font-size: 26px;
        color: #493188;
        margin-right: 7px;
        cursor: pointer;
        max-width: 190px;
        display: inline-block;
        overflow: hidden;
    `;
        firstC.innerHTML = arr1[k];
        a.appendChild(firstC);

        let lastC = document.createElement("span");
        lastC.style.cssText = `
        display: inline-block;
        overflow: hidden;
        max-width: 208px;
        height: 67px;
        line-height: 76px;
        font-size: 16px;
        color: #948ab5;
        color: rgba(69,52,127,0.7);
        cursor: pointer;
    `;
        lastC.innerHTML = arr2[k];
        a.appendChild(lastC);

        for (let i = 0; i < 2; i++) {
            let m_common = document.createElement("div");
            m_common.style.cssText = `
            width: 490px;
            height: 130px;
            margin-left: 20px;
            position: relative;
            margin-top:20px;
        `;
            divDom.appendChild(m_common);

            let b = document.createElement("a");
            b.href = "#";
            m_common.appendChild(b);

            let bg_img = document.createElement("img");
            bg_img.style.cssText = `
            width: 490px;
            height: 130px;
            position: absolute;
            top: 0px;
            left: 0px;
        `;
            bg_img.src = `img/${arr3[k][i]}`;
            b.appendChild(bg_img);

            let mc_one = document.createElement("div");
            mc_one.style.cssText = `
            width: 490px;
            height: 130px;
            position: absolute;
            opacity: .4;
            background-color: #000;
        `;
            b.appendChild(mc_one);

            let logo = document.createElement("div");
            logo.style.cssText = `
            width: 50px;
            height: 50px;
            margin-left: 20px;
            margin-top: 40px;
            float: left;
            cursor: pointer;
            position: relative;
        `;
            b.appendChild(logo);

            let logo_img = document.createElement("img");
            logo_img.style.cssText = `
            width: 50px;
            height: 50px;
            border-radius: 50px;
        `;
            logo_img.src = `img/${arr4[i]}`;
            logo.appendChild(logo_img);

            //给logo绑定事件
            logo_img.onmouseover = function () {
                this.style.opacity = "0.8";
            }
            logo_img.onmouseout = function () {
                this.style.opacity = "1";
            }

            let logo_hover = document.createElement("div");
            logo_hover.style.cssText = `
            position: absolute;
            left: 20px;
            top: 40px;
            width: 50px;
            height: 50px;
            border-radius: 50px;
            background: rgba(255,255,255,0.5);
            display: none;
            z-index: 100;
        `;
            logo.appendChild(logo_hover);

            let pinpai = document.createElement("div");
            pinpai.style.cssText = `
            width: 140px;
            height: 100%;
            float: left;
            position: relative;
        `;
            b.appendChild(pinpai);

            let pb_t = document.createElement("div");
            pb_t.style.cssText = `
            font-size: 18px;
            color: #fff;
            width: 100%;
            text-indent: 20px;
            height: 18px;
            margin-top: 25px;
            font-weight: bold;
            cursor: pointer;
            line-height: 18px;
            overflow: hidden;
        `;
            pb_t.innerHTML = arr5[k][i];
            pinpai.appendChild(pb_t);

            let pb_two = document.createElement("div");
            pb_two.style.cssText = `
            text-indent: 20px;
            color: #fff;
            font-size: 16px;
            margin-top: 8px;
            height: 16px;
            line-height: 16px;
            overflow: hidden;
            width: 120px;
        `;
            pb_two.innerHTML = arr5[k][i];
            pinpai.appendChild(pb_two);

            let brand_jr = document.createElement("div");
            brand_jr.style.cssText = `
            width: 63px;
            height: 23px;
            border: 1px solid #fff;
            border-radius: 100px;
            margin-left: 20px;
            font-size: 14px;
            color: #fff;
            text-indent: 12px;
            line-height: 20px;
            margin-top: 15px;
            box-sizing: border-box;
            cursor: pointer;
        `;
            brand_jr.innerHTML = "进入";
            pinpai.appendChild(brand_jr);

            //绑定划过事件
            brand_jr.onmouseover = function () {
                this.style.backgroundColor = "red";
            }
            brand_jr.onmouseout = function () {
                this.style.backgroundColor = "";
            }

            let jr = document.createElement("i");
            jr.style.cssText = `
            position: relative;
            top: 1px;
            left: 0px;
        `;
            brand_jr.appendChild(jr);
            for (let j = 0; j < 3; j++) {
                let sp_bg = document.createElement("div");
                sp_bg.style.cssText = `
                margin-top: 25px;
                margin-right: 10px;
                float: left;
                width: 80px;
                height: 80px;
                background-color: #fff;
                position: relative;
            `;
                b.appendChild(sp_bg);

                let sp_img = document.createElement("img");
                sp_img.style.cssText = `
                width: 60px;
                height: 60px;
                margin: 10px 10px 10px 10px;
                display: block;
                transition: transform .4s ease;
                cursor: pointer;
            `;
                sp_img.src = `img/${arr7[k][i][j]}`;
                sp_bg.appendChild(sp_img);

                //事件绑定
                sp_img.onmouseover = function () {
                    this.style.transform = "translateX(-5px)";
                }
                sp_img.onmouseout = function () {
                    this.style.transform = "translateX(0px)";
                }
            }
        }
    }
}

// 品质进口
function quality() {
    let arr = ["品质进口", "/ 给你完美生活", "进口休闲零食", "爆款直降", "点击进入", "进口休闲零食", "爆款直降", "点击进入"];
    let arr1 = ["进口饼干", "进口牛奶", "进口水", "进口糖巧", "葡萄酒", "进口油"];
    let arr2 = ["进口饼干", "进口牛奶", "品质洋酒", "进口米面"];
    let arr3 = ["超值满减", "领券满减", "2件立减", "满减优惠"];
    let arr4 = ["con1.jpg", "con2.jpg", "con3.jpg", "con4.jpg"];
    func($$("#con"), arr, arr1, arr2, arr3, arr4);
}

// 甄选新鲜
function pick() {
    let arr = ["品质进口", "/ 给你完美生活", "进口休闲零食", "爆款直降", "点击进入", "进口休闲零食", "爆款直降", "点击进入"];
    let arr1 = ["进口饼干", "进口牛奶", "进口水", "进口糖巧", "葡萄酒", "进口油"];
    let arr2 = ["进口饼干", "进口牛奶", "品质洋酒", "进口米面"];
    let arr3 = ["超值满减", "领券满减", "2件立减", "满减优惠"];
    let arr4 = ["con1.jpg", "con2.jpg", "con3.jpg", "con4.jpg"];
    func($$("#pickId"), arr, arr1, arr2, arr3, arr4);
}

//函数封装
function func(boxId, arr, arr1, arr2, arr3, arr4) {
    let qua_show = document.createElement("div");
    qua_show.style.cssText = `
        width: 899px;
        height: 421px;
        float: left;
    `;
    boxId.appendChild(qua_show);

    let a = document.createElement("a");
    a.style.cssText = `
        height: 67px;
        display: block;
    `;
    a.href = "#";
    qua_show.appendChild(a);

    let spanFirst = document.createElement("span");
    spanFirst.style.cssText = `
        color: #B77347;
        margin-top: 17px;
        height: 35px;
        margin-left: 20px;
        font-size: 26px;
        display: inline-block;
        cursor: pointer;
        max-width: 190px;
        overflow: hidden;
    `;
    spanFirst.innerHTML = arr[0];
    a.appendChild(spanFirst);

    let spanLast = document.createElement("span");
    spanLast.style.cssText = `
        color: rgba(183,115,71,0.7);
        margin-left: 8px;
        font-size: 16px;
        margin-top: 27px;
        height: 21px;
        cursor: pointer;
        display: inline-block;
        max-width: 208px;
        overflow: hidden;
        position: relative;
        top: -3px;
    `;
    spanLast.innerHTML = arr[1];
    a.appendChild(spanLast);

    let show_con = document.createElement("div");
    show_con.style.cssText = `
        width: 900px;
        height: 334px;
        position: relative;
        padding-left: 20px;
    `;
    qua_show.appendChild(show_con);

    let con_left = document.createElement("img");
    con_left.style.cssText = `
        position: relative;
        width: 189px;
        height: 334px;
        float: left;
    `;
    con_left.src = "img/show1.jpg";
    show_con.appendChild(con_left);

    let left_font = document.createElement("div");
    left_font.style.cssText = `
        font-size: 14px;
        color: #fff;
        position: absolute;
        width: 176px;
        height: 90px;
        margin-left: 14px;
        top: 16px;
    `;
    show_con.appendChild(left_font);

    for (let i = 0; i < 6; i++) {
        let b = document.createElement("a");
        b.style.cssText = `
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.61);
            width: 74px;
            height: 23px;
            text-align: center;
            line-height: 23px;
            float: left;
            margin-right: 9px;
            margin-bottom: 9px;
            cursor: pointer;
            color: #fff;
            overflow: hidden;
        `;
        b.href = "#";
        b.innerHTML = arr1[i];
        left_font.appendChild(b);

        //绑定滑动事件
        b.onmouseover = function () {
            this.style.opacity = "0.8";
        }
        b.onmouseout = function () {
            this.style.opacity = "1";
        }
    }

    let righ_font = document.createElement("div");
    righ_font.style.cssText = `
        width: 680px;
        height: 334px;
        float: left;
    `;
    show_con.appendChild(righ_font);

    let c = document.createElement("a");
    c.style.cssText = `
        width: 335px;
        height: 167px;
        position: relative;
        float: left;
        background-color: #faf7f6;
    `;
    c.href = "#";
    righ_font.appendChild(c);

    let p1 = document.createElement("p");
    p1.style.cssText = `
        argin-top: 40px;
        color: #793a11;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 150px;
        margin-left: 30px;
        margin-top:40px;
        font-size: 14px;
    `;
    p1.innerHTML = arr[2];
    c.appendChild(p1);

    let p2 = document.createElement("p");
    p2.style.cssText = `
        color: #b77347;
        margin-top: 5px;
        white-space: nowrap;
        overflow: hidden;   
        text-overflow: ellipsis;
        width: 150px;
        margin-left: 30px;
        font-size: 14px;
    `;
    p2.innerHTML = arr[3];
    c.appendChild(p2);

    let buy_btn = document.createElement("div");
    buy_btn.style.cssText = `
        width: 78px;
        height: 27px;
        text-align: center;
        line-height: 27px;
        margin-top: 15px;
        cursor: pointer;
        overflow: hidden;
        margin-left: 30px;
        font-size: 14px;
        border: 1px solid rgba(228,147,55,0.5);
        color: #e49337;
    `;
    buy_btn.innerHTML = arr[4];
    c.appendChild(buy_btn);

    //划过事件绑定
    buy_btn.onmouseover = function () {
        this.style.backgroundColor = "#fff";
    }
    buy_btn.onmouseout = function () {
        this.style.backgroundColor = "";
    }

    let img1 = document.createElement("img");
    img1.style.cssText = `
        position: absolute;
        width: 110px;
        height: 110px;
        bottom: 20px;
        right: 20px;
        transition: transform .4s ease;
    `;
    img1.src = "img/con1.png";
    c.appendChild(img1);

    //事件绑定
    img1.onmouseover = function () {
        this.style.transform = "translateX(-5px)";
    }
    img1.onmouseout = function () {
        this.style.transform = "translateX(0px)";
    }

    for (let i = 0; i < 4; i++) {
        let d = document.createElement("a");
        d.style.cssText = `
            border-right: 1px solid #f6f6f6;
            float: left;
            position: relative;
            width: 167px;
            height: 167px;
            cursor: pointer;
        `;
        d.href = "#";
        righ_font.appendChild(d);

        let p3 = document.createElement("p");
        p3.style.cssText = `
            margin-left: 15px;
            font-size: 14px;
            verflow: hidden;
            height: 14px;
            width: 102px;
            line-height: 1;
            margin-bottom: 7px;
            color: #333;
            margin-top: 15px;
        `;
        p3.innerHTML = arr2[i];
        d.appendChild(p3);

        let p4 = document.createElement("p");
        p4.style.cssText = `
            color: #999;
            margin-left: 15px;
            font-size: 14px;
            margin-top: -1px;
            overflow: hidden;
            height: 14px;
            width: 102px;
            line-height: 1;
            margin-bottom: 7px;
        `;
        p4.innerHTML = arr3[i];
        d.appendChild(p4);

        let img2 = document.createElement("img");
        img2.style.cssText = `
            position: absolute;
            width: 90px;
            height: 90px;
            bottom: 10px;
            right: 10px;
            margin-top: 15px;
            margin-left: 15px;
            transition: transform .4s ease;
        `;
        img2.src = "img/" + arr4[i];
        d.appendChild(img2);

        img2.onmouseover = function () {
            this.style.transform = "translateX(-5px)";
        }
        img2.onmouseout = function () {
            this.style.transform = "translateX(0px)";
        }
    }

    let d = document.createElement("a");
    d.style.cssText = `
        width: 335px;
        height: 167px;
        position: relative;
        float: left;
        background-color: #faf7f6;
    `;
    d.href = "#";
    righ_font.appendChild(d);

    let p5 = document.createElement("p");
    p5.style.cssText = `
        argin-top: 40px;
        color: #793a11;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 150px;
        margin-left: 30px;
        margin-top:40px;
        font-size: 14px;
    `;
    p5.innerHTML = arr[5];
    d.appendChild(p5);

    let p6 = document.createElement("p");
    p6.style.cssText = `
        color: #b77347;
        margin-top: 5px;
        white-space: nowrap;
        overflow: hidden;   
        text-overflow: ellipsis;
        width: 150px;
        margin-left: 30px;
        font-size: 14px;
    `;
    p6.innerHTML = arr[6];
    d.appendChild(p6);

    let buy_btn1 = document.createElement("div");
    buy_btn1.style.cssText = `
        width: 78px;
        height: 27px;
        text-align: center;
        line-height: 27px;
        margin-top: 15px;
        cursor: pointer;
        overflow: hidden;
        margin-left: 30px;
        font-size: 14px;
        border: 1px solid rgba(228,147,55,0.5);
        color: #e49337;
    `;
    buy_btn1.innerHTML = arr[7];
    d.appendChild(buy_btn1);

    buy_btn1.onmouseover = function () {
        this.style.backgroundColor = "#fff";
    }
    buy_btn1.onmouseout = function () {
        this.style.backgroundColor = "";
    }

    let img3 = document.createElement("img");
    img3.style.cssText = `
        position: absolute;
        width: 110px;
        height: 110px;
        bottom: 20px;
        right: 20px;
        transition: transform .4s ease;
    `;
    img3.src = "img/con1.png";
    d.appendChild(img3);

    img3.onmouseover = function () {
        this.style.transform = "translateX(-5px)";
    }
    img3.onmouseout = function () {
        this.style.transform = "translateX(0px)";
    }

    //轮播图
    let qua_top = document.createElement("div");
    qua_top.style.cssText = `
        width: 170px;
        height: 421px;
        float: left;
        border-left: 1px solid #f6f6f6;
        position: relative;
    `;
    boxId.appendChild(qua_top);
}

// 懂你想要
function YouKnow() {

    let arr = [
        [
            "shop1.jpg",
            "修正祛痘膏送寡肽原液精华祛痘印淡化痘疤痘坑芦荟胶祛痘产品套装男女青春痘粉刺精华面霜 单只装20g",
            "69.9"
        ],
        [
            "shop2.jpg",
            "WIS隐形水润面膜【24片装】补水保湿玻尿酸清洁控油收缩毛孔提亮肤色男女士学生贴化妆品套装",
            "98.0"
        ],
        [
            "shop3.jpg",
            "超媛时尚套装女2019夏季新款韩版衬衫小清新上衣半身裙两件套雪纺衫NRJC321-2#8270 粉色套装 S",
            "125.9"
        ],
        [
            "shop4.jpg",
            "实木 乌檀木整木实木家用防裂抗菌防霉厨房案板切菜水果蔬菜板砧 2-4人40*28*3CM±0.3C",
            "209.0"
        ],
        [
            "shop5.jpg",
            "宝宝帽子夏遮阳帽1-4岁2空顶鸭舌帽薄款3防晒儿童帽子字母棒球帽 白色 适用头围(47-52cm)  参考年龄(1岁半-6",
            "48.0"
        ],
        [
            "shop6.jpg",
            "A-H【品牌直降】2019新款夏百搭配长裙子的晚晚凉鞋仙女风温柔学生网红ins潮平底 棕色 35",
            "89.0"
        ]
    ];
    know(arr);
}

function know(arr) {
    let under_log = document.createElement("div");
    under_log.style.cssText = `
        width: 100%;
        height: 131px;
        position: relative;
    `;
    $$("#floor_knowU").appendChild(under_log);

    let img1 = document.createElement("img");
    img1.style.cssText = `
        width: 390px;
        height: 65px;
        left: 50%;
        margin-left: -195px;
        top: 27px;
        position: absolute;
    `;
    img1.src = "img/know.png";
    under_log.appendChild(img1);

    let p1 = document.createElement("p");
    p1.style.cssText = `
        width: 155px;
        height: 22px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #999;
        letter-spacing: 1px;
        text-align: center;
        position: absolute;
        top: 87px;
        left: 460px;
    `;
    p1.innerHTML = "可能比你自己更懂你";
    under_log.appendChild(p1);


    /* 动态创建商品 */
    let like_list = document.createElement("div");
    like_list.style.cssText = `
        padding-bottom: 0px;
        overflow: hidden;
    `;
    $$("#floor_knowU").appendChild(like_list);

    let ulDom = document.createElement("ul");
    ulDom.style.cssText = `
        margin-right: -18px;
    `;
    like_list.appendChild(ulDom);

    let liDoms = [];
    for (let i = 0; i < arr.length; i++) {
        let liDom = document.createElement("li");
        liDom.style.cssText = `
            width: 168px;
            height: 236px;
            position: relative;
            background-color: #fff;
            float: left;
            margin-right: 10px;
            margin-bottom: 10px;
            position: relative;
            cursor: pointer;
            box-sizing: border-box;
        `;
        ulDom.appendChild(liDom);
        liDoms.push(liDom);

        let pro_pic = document.createElement("div");
        pro_pic.style.cssText = `
            width: 150px;
            height: 150px;
            background-color: #f8f8f8;
            margin-left: 10px;
            margin-top: 10px;
        `;
        liDom.appendChild(pro_pic);

        let img2 = document.createElement("img");
        img2.style.cssText = `
            width: 150px;
            height: 150px;
        `;
        img2.src = `img/${arr[i][0]}`;
        pro_pic.appendChild(img2);

        let p2 = document.createElement("p");
        p2.style.cssText = `
            word-break: break-all;
            width: 150px;
            height: 38px;
            overflow: hidden;
            margin-left: 10px;
            margin-top: 5px;
            font-size: 14px;
            color: #333;
            line-height: 20px;
        `;
        p2.innerHTML = `${arr[i][1]}`;
        liDom.appendChild(p2);

        let p3 = document.createElement("p");
        p3.style.cssText = `
            display: block;
            margin-left: 8px;
            font-size: 14px;
            color: #ff4040;
            font-weight: bold;
            margin-top: 8px;
            float: left;
        `;
        p3.innerHTML = "￥";
        liDom.appendChild(p3);

        let span1 = document.createElement("span");
        span1.style.cssText = `
            font-size: 14px;
            margin-left: -3px;
        `;
        span1.innerHTML = `${arr[i][2]}`;
        p3.appendChild(span1);

        let pro_tag = document.createElement("div");
        pro_tag.style.cssText = `
            float: right;
            margin-top: 4px;
            margin-right: 10px;
        `;
        liDom.appendChild(pro_tag);

        let goods = document.createElement("div");
        goods.style.cssText = `
            width: 30px;
            height: 16px;
            line-height: 16px;
            font-size: 12px;
            text-align: center;
            float: left;
            margin-top: 5px;
            background-color: #fff3fa;
            color: #ff62a1;
            border: 1px solid #ffcce0;
            margin-left: 5px;
        `;
        goods.innerHTML = `满减`;
        pro_tag.appendChild(goods);

        let btn_con = document.createElement("div");
        btn_con.style.cssText = `
            width: 165px;
            height: 74px;
            position: absolute;
            bottom: 0;
            z-index: 805;
            opacity:0.9;
            background-color:#fff;
            display:none;
        `;
        liDom.appendChild(btn_con);

        let sin_gw = document.createElement("div");
        sin_gw.style.cssText = `
            width: 48px;
            height: 48px;
            border-radius: 50%;
            line-height: 48px;
            background: #ff4040;
            position: absolute;
            left: 30px;
            bottom: 15px;
            text-align: left;
            text-indent: 14px;
        `;
        btn_con.appendChild(sin_gw);

        let a1 = document.createElement("a");
        a1.style.cssText = `
            display: block;
            width: 100%;
            height: 100%;
            overflow: hidden;
            color: #fff;
        `;
        a1.href = "#";
        sin_gw.appendChild(a1);

        let img3 = document.createElement("img");
        img3.src = `img/10.gif`;
        a1.appendChild(img3);

        let sin_xs = document.createElement("div");
        sin_xs.style.cssText = `
            width: 48px;
            height: 48px;
            border-radius: 50%;
            text-align: center;
            line-height: 48px;
            background-color: #fff0f0;
            border: 1px solid #ffcdcd;
            font-size: 12px;
            color: #ff4040;
            left: 92px;
            bottom: 15px;
            position: absolute;
            box-sizing: border-box;
        `;
        btn_con.appendChild(sin_xs);

        let a2 = document.createElement("a");
        a2.style.cssText = `
            color: #ff4040;
            display: block;
            width: 100%;
            height: 100%;
            overflow: hidden;
        `;
        a2.href = "#";
        a2.innerHTML = "找相似";
        sin_xs.appendChild(a2);

        let a3 = document.createElement("a");
        a3.style.cssText = `
            width: 168px;
            height: 236px;
            position: absolute;
            outline: 1px solid transparent;
            transition: outline-color .5s;
            z-index: 800;
            top: 0px;
            left: 0px;
            display: inline-block;
        `;



        //事件绑定
        liDoms[i].onmouseover = function () {
            this.style.border = "1px solid red";
            btn_con.style.display = "block";
        }
        liDoms[i].onmouseout = function () {
            this.style.border = "";
            btn_con.style.display = "none";
        }

        sin_gw.onmouseover = function () {
            this.style.backgroundColor = "red";
        }
        sin_gw.onmouseout = function () {
            this.style.backgroundColor = "#ff4040";
        }

        sin_xs.onmouseover = function () {
            this.style.backgroundColor = "#ffcdcd";
        }
        sin_xs.onmouseout = function () {
            this.style.backgroundColor = "#fff0f0";
        }
    }

    let status_dd = document.createElement("div");
    status_dd.style.cssText = `
        width: 100%;
        height: 90px;
        position: relative;
        display: block;
    `;
    $$("#floor_knowU").appendChild(status_dd);

    let line_left = document.createElement("span");
    line_left.style.cssText = `
        position: absolute;
        width: 100px;
        height: 1px;
        background: #e2e2e2;
        left: 355px;
        top: 42px;
    `;
    status_dd.appendChild(line_left);

    let dd_font = document.createElement("span");
    dd_font.style.cssText = `
        font-size: 16px;
        color: #666;
        width: 80px;
        height: 20px;
        display: inline-block;
        position: absolute;
        left: 495px;
        top: 30px;
    `;
    dd_font.innerHTML = "已经到底啦";
    status_dd.appendChild(dd_font);

    let line_right = document.createElement("span");
    line_right.style.cssText = `
        position: absolute;
        width: 100px;
        height: 1px;
        background: #e2e2e2;
        top: 42px;
        left: 605px;
    `;
    status_dd.appendChild(line_right);
}

//动态创建右侧二维码
function rightEwm() {
    let happy_summer = document.createElement("div");
    happy_summer.style.cssText = `
        position: fixed;
        top: 156px;
        width: 100px;
        height:175px;
        left: 50%;
        margin-left: 540px;
        z-index: 10000;
        display:none;
    `;
    document.body.appendChild(happy_summer);

    window.onscroll=function() {
        if (document.documentElement.scrollTop>=1000) {
            happy_summer.style.display="block";
        }
        if (document.documentElement.scrollTop<=100) {
            happy_summer.style.display="none";
        }

        if (document.documentElement.scrollTop>=700) {
            $$("#sousuoId").style.display="block";
        }
        if (document.documentElement.scrollTop<=700) {
             $$("#sousuoId").style.display="none";
        }
    };

    let happy_bott = document.createElement("div");
    happy_bott.style.cssText = `
        background-color: #fff;
        font-size: 14px;
        color: #333;
        text-align: center;
        line-height: 14px;
    `;
    happy_summer.appendChild(happy_bott);

    let down_app = document.createElement("p");
    down_app.style.cssText = `
        height: 30px;
        line-height: 34px;
        letter-spacing: 1px;
    `;
    down_app.innerHTML = "下载APP";
    happy_bott.appendChild(down_app);

    let happy_ewm = document.createElement("img");
    happy_ewm.style.cssText = `
        width: 76px;
        cursor: pointer;
    `;
    happy_ewm.src = `img/down1.jpg`;
    happy_bott.appendChild(happy_ewm);

    let h_logo = document.createElement("img");
    h_logo.style.cssText = `
        width: 100px;
    `;
    h_logo.src = `img/down2.jpg`;
    happy_bott.appendChild(h_logo);

    let h_gwc = document.createElement("a");
    h_gwc.style.cssText = `
        width: 100%;
        height: 40px;
        background-color: #fff;
        border-top: 1px solid #f0f0f0;
        font-size: 14px;
        cursor: pointer;
        position: relative;
        display: block;
        text-align: center;
        line-height: 40px;
        color:#333;
    `;
    h_gwc.href = "#";
    happy_summer.appendChild(h_gwc);

    let img1 = document.createElement("img");
    img1.style.cssText = `

    `;
    img1.src = `img/11.gif`;
    h_gwc.appendChild(img1);

    let spanDom = document.createElement("span");
    spanDom.style.cssText = `
    
    `;
    spanDom.innerHTML = "&nbsp;购物车";
    h_gwc.appendChild(spanDom);

    let hd_c = document.createElement("u");
    hd_c.style.cssText = `
        position: absolute;
        z-index: 601;
        top: 2px;
        right: 2px;
        min-width: 12px;
        height: 18px;
        padding: 0 3px;
        border-radius: 10px;
        background: #ff4040;
        color: #fff;
        font-family: Tahoma;
        font-size: 12px;
        text-decoration: none;
        line-height: 17px;
        text-align: center;
        display:none;
    `;
    h_gwc.appendChild(hd_c);

    let h_zd = document.createElement("div");
    h_zd.style.cssText = `
        font-size: 14px;
        width: 100%;
        height: 30px;
        text-align: center;
        line-height: 29px;
        background-color: #444;
        color: #fff;
        font-family: Tahoma;
        cursor: pointer;
        display: block;
    `;
    h_zd.innerHTML = "TOP&nbsp;"
    happy_summer.appendChild(h_zd);
    //回到顶部
    h_zd.onclick=function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop != 0) {
            document.documentElement.scrollTop = 0;
        }
    };

    let img2 = document.createElement("img");
    img2.src = `img/12.gif`;
    h_zd.appendChild(img2);

}

//滑动搜索框
function souSuo(){
    let divDom=document.createElement("div");
    divDom.style.cssText=`
        width: 1070px;
        height: 60px;
        margin:0 auto;
    `;
    $$("#sousuoId").appendChild(divDom);

    let a1=document.createElement("a");
    a1.style.cssText=`
        display: block;
        width: 150px;
        height: 60px;
        float: left;
        margin-right: 70px;
    `;
    a1.href="#";
    divDom.appendChild(a1);

    let img1=document.createElement("img");
    img1.style.cssText=`
        width: 150px;
        height: 60px;
    `;
    img1.src="img/3.jpg";
    a1.appendChild(img1);

    let divdom2=document.createElement("div")
    divdom2.style.cssText=`
        width:510px;
        height:40px;
        border-radius: 100px;
        float: left;
        margin: 10px 0 0 0;
        position: relative;
        padding: 2px;
        background-color: #ff4040;
    `;
    divDom.appendChild(divdom2);

    inputDom=document.createElement("input");
    inputDom.style.cssText=`
        width: 406px;
        height: 41px;
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
        background-color: #fff;
        float: left;
        outline: 0 none;
        border: 0 none;
        padding-left: 32px;
        font-size: 14px;
        color: #333;
        line-height: 36px;
    `;
    divdom2.appendChild(inputDom);

    let button=document.createElement("button");
    button.style.cssText=`
        float: left;
        height: 36px;
        border: 0 none;
        background-color: #ff4040;
        text-align: center;
        line-height: 36px;
        color: #fff;
        cursor: pointer;
        outline: 0;
    `;
    divdom2.appendChild(button);

    let img2=document.createElement("img")
    img2.style.cssText=`
        margin-left:15px;
    `;
    img2.src=`img/13.gif`;
    button.appendChild(img2);

    let divdom3=document.createElement("div");
    divdom3.style.cssText=`
        width:122px;
        height:44px;
        float: right;
        position: relative;
        top: 0;
        right: 0;
        margin-top: 10px;
        border-radius:22px;
        text-align: center;
        line-height:44px;
        border:1px solid #000;
    `;
    divDom.appendChild(divdom3);

    let img3=document.createElement("img");
    img3.style.cssText=`
        display: inline-block;
    `;
    img3.src="img/2.jpg";
    divdom3.appendChild(img3);

    let spanDom=document.createElement("span");
    spanDom.style.cssText=`
        margin-left:10px;
    `;
    spanDom.innerHTML="购物车";
    divdom3.appendChild(spanDom);
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

