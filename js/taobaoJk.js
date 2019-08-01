var oSearchList = document.getElementById('search-list');
var oSearchForm = document.forms['search-form'];
var oSearchContent = oSearchForm.elements['search-content'];

oSearchContent.oninput = function () {
    var sVal = this.value;
    oSearchList.innerHTML = '';
    if(sVal !== '') {
        var oScript = document.createElement('script');
        oScript.src = 'https://suggest.taobao.com/sug?code=utf-8&q=' + sVal + '&_ksTS=1515120676355_323&callback=t&area=c2c&bucketid=15'; 
        document.body.appendChild(oScript);
    };
};


// 声明回调函数
function t(data) {
     console.log(data);
    // console.log(data.result[0][0]);
    data.result.forEach((v) => {
        var oLi = document.createElement('li');
        oLi.innerHTML = v[0];
        oSearchList.appendChild(oLi);
    });
}

