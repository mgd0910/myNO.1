//功能：获取dom元素的样式属性值
//参数：dom，属性名
//返回值：样式属性值
function getStyle(domObj, attr) {
    if (domObj.currentStyle) {//IE
        return domObj.currentStyle[attr];
    } else {//其它主流浏览器
        var cssObj = window.getComputedStyle(domObj);
        return cssObj[attr];
    }
}