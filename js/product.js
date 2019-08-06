$(document).ready(function () {
    category();
    overOrout();
    mirror();
});


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


function mirror() {
    let imgarr = [
        "imgs/Good1.jpg",
        "imgs/Good2.jpg",
        "imgs/Good3.jpg",
        "imgs/Good4.jpg",
        "imgs/Good5.jpg",
        "imgs/Good6.jpg",
        "imgs/Good7.jpg",
        "imgs/Good8.jpg"
    ];

    $("#jqzoom").css({
        "background": "url(imgs/Good1.jpg) no-repeat",
        "background-size": "400px 400px"
    });

    for (let i = 1; i <= imgarr.length; i++) {
        let bDom = document.createElement("b");
        $(".mBox").append(bDom);

        let imgDom = document.createElement("img");
        imgDom.src = imgarr[i - 1];
        bDom.append(imgDom);
        bDom.onclick = () =>{
            $("#jqzoom").css({
                "background-image": "url(imgs/Good" + i + ".jpg)",
                "background-repeat":" no-repeat",
                "background-size": "400px 400px"
            });
            $("#showBox").css({
                "background-image": "url(imgs/Good" + i + ".jpg)",
                "background-repeat":" no-repeat",
                "background-position":" 0px 0px"
            });
            $("#showBox").style.backgroundSize=`${$$("#jqzoom").offsetWidth*3}px ${$$("#jqzoom").offsetHeight*3}px`;
        }
    }

    new Mirror({
        mulitple: 3,
        width: 180,
        height: 150
    }, $$("#jqzoom"));
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