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




// 轮播图
window.onload = function () {
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
    let arr1=[
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

    let arr2=['123','124','125','126','127','128','129','130','131'];

    let arr3=['147','152','142','156','132','165','185','158','171'];

    let arr4=['52','96','36','64','12','88','75','92','42'];

    for (let i in imgarr) {
        let liDom = document.createElement("li");
        liDom.style.cssText = `
            width: 210px;
            height: 216px;
            float: left;
            font-size: 14px;
        `;
        $$("#superUlId").appendChild(liDom);

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
        divSpanDom.innerHTML =arr1[i];
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
function  superBrand(){
    let divDom=document.createElement("div");
    divDom.style.cssText=`
        width: 530px;
        height: 100%;
        margin-right: 10px;
        background-color: #fff;
        float: left;
    `;
    $$("#brand").appendChild(divDom);
    
    let common=document.createElement("div");
    common.style.cssText=`
        width: 490px;
        height: 67px;
        margin-left: 19px;
        overflow: hidden;
    `;
    divDom.appendChild(common);

    let a=document.createElement("a");
    a.href="#";
    common.appendChild(a);

    let firstC=document.createElement("span");
    firstC.style.cssText=`
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
    firstC.innerHTML="超级品牌";
    a.appendChild(firstC);

    let lastC=document.createElement("span");
    lastC.style.cssText=`
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
    lastC.innerHTML="&nbsp;/ 超级品牌/精品汇聚";
    a.appendChild(lastC);

    for(let i=0;i<2;i++){
        let m_common=document.createElement("div");
        m_common.style.cssText=`
            width: 490px;
            height: 130px;
            margin-left: 20px;
            position: relative;
        `;
        divDom.appendChild(m_common);
        
        let b=document.createElement("a");
        b.href="#";
        m_common.appendChild(b);

        let bg_img=document.createElement("img");
        bg_img.style.cssText=`
            width: 490px;
            height: 130px;
            position: absolute;
            top: 0px;
            left: 0px;
        `;
        bg_img.src="img/bg1.jpg";
        b.appendChild(bg_img);

        let mc_one=document.createElement("div");
        mc_one.style.cssText=`
            width: 490px;
            height: 130px;
            position: absolute;
            opacity: .4;
            background-color: #000;
        `;
        b.appendChild(mc_one);

        let logo=document.createElement("div");
        logo.style.cssText=`
            width: 50px;
            height: 50px;
            margin-left: 20px;
            margin-top: 40px;
            float: left;
            cursor: pointer;
            position: relative;
        `;
        b.appendChild(logo);

        let logo_img=document.createElement("img");
        logo_img.style.cssText=`
            width: 50px;
            height: 50px;
            border-radius: 50px;
        `;
        logo_img.src="img/logo1.jpg";
        logo.appendChild(logo_img);

        let logo_hover=document.createElement("div");
        logo_hover.style.cssText=`
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

        /* 






        
        给b内创建金龙鱼了
        
        */
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