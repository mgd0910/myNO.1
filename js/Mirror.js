
class Mirror{

	//构造函数
	constructor(obj,boxDom){
		this.boxDom = boxDom;
		this.mirrorDom = null;
		this.showDom = null;

		let defaultObj = {
			width:100,
			height:100,
			color:"pink",
			opacity:0.3,
			mulitple:3
		}

		for(let key in defaultObj){
			if(obj[key]){
				this[key] = obj[key];
			}else{
				this[key] = defaultObj[key];
			}
		}

		this.render();
		this.addEvent();
	}

	render(){
		// this.boxDom.style.position ="relative";

		//1、放大镜
		this.mirrorDom = document.createElement('div');
		this.mirrorDom.style.cssText=`
			position: absolute;
			width: ${this.width}px;
			height: ${this.height}px;
			background-color: ${this.color};
			opacity:${this.opacity};
			display: block;
		`;		
		this.boxDom.appendChild(this.mirrorDom);

		//2、放大效果
		this.showDom = document.createElement('div');
		this.showDom.style.cssText=`
			position: absolute;
			left:${this.boxDom.offsetWidth+50}px;
			top:0px;
			width: ${this.width*this.mulitple}px;
			height: ${this.height*this.mulitple}px;
			background-image: ${getStyle(this.boxDom,"backgroundImage")};
			background-size: ${this.boxDom.offsetWidth*this.mulitple}px  ${this.boxDom.offsetHeight*this.mulitple}px;
			background-position: 0px 0px;
			display: block;
			z-index:999;
		`;		
		this.showDom.setAttribute("id","showBox");
		this.boxDom.appendChild(this.showDom);

	}

	addEvent(){
		this.boxDom.onmouseover = ()=>{
			this.mirrorDom.style.display = "block";
			this.showDom.style.display = "block";
		}

		this.boxDom.onmouseout = ()=>{
			this.mirrorDom.style.display = "none";
			this.showDom.style.display = "none";
		}

		this.boxDom.onmousemove = (event)=>{
			let evt = event || window.event;
			//1、数据
			//1)、计算数据
			let left1 =evt.pageX-this.boxDom.offsetLeft-this.mirrorDom.offsetWidth/2;
			let top1 =evt.pageY-this.boxDom.offsetTop-this.mirrorDom.offsetHeight/2;

			//2)、边界
			if(left1<0){
				left1=0;
			}else if(left1>this.boxDom.offsetWidth-this.mirrorDom.offsetWidth){
				left1=this.boxDom.offsetWidth-this.mirrorDom.offsetWidth;
			}

			if(top1<0){
				top1=0;
			}else if(top1>this.boxDom.offsetHeight-this.mirrorDom.offsetHeight){
				top1=this.boxDom.offsetHeight-this.mirrorDom.offsetHeight;
			}

			//2、改变外观
			this.mirrorDom.style.left = `${left1}px`;
			this.mirrorDom.style.top = `${top1}px`;

			this.showDom.style.backgroundPosition=`-${this.mulitple*left1}px -${this.mulitple*top1}px`;
		}

	}


}


//功能：获取dom元素的样式属性值
//参数：dom，属性名
//返回值：样式属性值

function getStyle(domObj,attr) {
	if(domObj.currentStyle){//IE
		return domObj.currentStyle[attr];
	}else{//其它主流浏览器
		var cssObj = window.getComputedStyle(domObj);
		return cssObj[attr];
	}
}