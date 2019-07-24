//匀速运动的封装
//参数：
//dom对象:domObj
//属性名:attr
//起始位置:startValue
//结束位置:endValue
//步长:step
//方向:direction
//时间间隔:timeSpace
//返回值：定时器编号
function move01(domObj, attr, startValue, endValue, step, direction, timeSpace) {
    var currValue = startValue;//刚开始时，初始值就是当前值
    var myTimer = setInterval(() => {
        //一、改变数据
        //1.数据修改
        currValue = currValue + direction * step;
        //2.边界判断
        if (direction == 1 ? currValue >= endValue : currValue <= endValue) {
            currValue = endValue;
            window.clearInterval(myTimer);
        }

        //显示
        if (attr == "opacity") {
            domObj.style[attr] = currValue;
        } else {
            domObj.style[attr] = currValue + "px";
        }
    }, timeSpace);
    return myTimer;
}


//匀速运动的封装
//参数：
//dom对象:domObj
//属性名:attr
//结束位置:endValue
//时长:timeLong
//返回值：定时器编号

// move02($("box"),"left",600,2000);
function move02(domObj, attr, endValue, timeLong) {
    var startValue = parseFloat(getStyle(domObj, attr));
    var direction = endValue > startValue ? 1 : -1;

    //已知路程（200），时长（2000）
    var timeSpace = 10;//运动较为平滑

    var step = Math.abs(endValue - startValue) / (timeLong / timeSpace)//步长=路程/步数；步数=时长/时间间隔
    move01(domObj, attr, startValue, endValue, step, direction, timeSpace);
}



//两个dom元素的淡入和淡出
//参数：
//domObjIn
//domObjOut
//时长timeLong

function fadeInOut(domObjIn, domObjOut, timeLong) {
    var currOpacity = 0//初始透明度为0
    var step = 1 / (timeLong / 10);//步长=1/（时长/时间间隔）
    var myTimer = setInterval(() => {
        //一、改变数据
        //1.数据计算
        currOpacity += step;
        //2.边界处理
        if (currOpacity >= 1) {
            currOpacity = 1;
            clearInterval(myTimer);
        }

        //二、改变外观
        domObjIn.style.opacity = currOpacity;
        domObjOut.style.opacity = 1 - currOpacity;
    }, 10);
}



//多属性运动的封装
//参数：
//dom对象
//样式属性名和结束值（json对象）
//时长

//返回值：定时器编号

// moveObj($("box"),{"left":500,"top":400,"width":300},2000);

function moveObj(domObj, attrObj, timeLong) {
    // // attr={"left":500,"top":400,"width":300}
    // var startValue=parseFloat(getStyle(domObj.attr));
    // var startValueObj = { "left": 500, "top": 400, "width": 300 }


    //计算所有属性的起始值
    var startValueObj = {};
    for (let key in attrObj) {
        startValueObj[key] = parseFloat(getStyle(domObj, key));
    }


    // var direction = endValue>startValue?1:-1;
    //计算每个属性的方向
    var directionObj = {};
    for (let key in attrObj) {
        directionObj[key] = attrObj[key] > startValueObj[key] ? 1 : -1;
    }

    //已知路程（200），时长（2000），
    var timeSpace = 10; //为了平滑

    // var step = Math.abs(endValue-startValue)/(timeLong/timeSpace) // 路程/步数 ;
    //计算每个属性的步长
    var setpObj = {};
    for (let key in attrObj) {
        setpObj[key] = Math.abs(attrObj[key] - startValueObj[key]) / (timeLong / timeSpace)
    }



    // var currValue = startValue;//当前值的初值是startValue
    //给每个属性的当前值赋值。
    var currValueObj = {};
    for (let key in attrObj) {
        currValueObj[key] = startValueObj[key];
    }

    var myTimer = setInterval(function () {
        //一、改变数据
        //1.改变参数
        // currValue=currValue+direction*step;
        for (let key in attrObj) {
            currValueObj[key] = currValueObj[key] + directionObj[key] * setpObj[key]
        }

        //2.边界判断
        var isEnd = false;
        // if (direction == 1 ? currValue >= endValue : currValue <= endValue) {
        //     currValue = endValue;
        //     window.clearInterval(myTimer);
        // }
        for (let key in attrObj) {
            if (directionObj[key] == 1 ? currValueObj[key] >= attrObj[key] : currValueObj[key] <= attrObj[key]) {
                currValueObj[key] = attrObj[key];
                isEnd = true;
            }
        }
        if (isEnd) {
            window.clearInterval(myTimer);
        }

        //二、改外观
        for (let key in attrObj) {
            if (key == "opacity") {
                domObj.style[key] = currValueObj[key];
            } else {
                domObj.style[key] = currValueObj[key] + "px";
            }
        }
    }, timeSpace);
    return myTimer;
}