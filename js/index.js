// JavaScript Document

window.onload=function(){
	var oDiv=document.querySelector('.clock');

	var oH=document.querySelector('.clock .hour');
	var oM=document.querySelector('.clock .min');
	var oS=document.querySelector('.clock .sec');

	//画刻度
	var N=60;
	for(var i=0; i<N; i++){
		var oSpan=document.createElement('span');

		if(i%5==0){
			oSpan.className='bs';

			var n= i/5==0 ? 12 : i/5;

			oSpan.innerHTML='<strong>'+n+'</strong>';
			oSpan.children[0].style.transform='rotate('+-i*6+'deg)';
		}else{
			oSpan.className='scale';
		}

		oSpan.style.transform='rotate('+6*i+'deg)';
		oDiv.appendChild(oSpan);
	}

	function tick(){
		var oDate=new Date();
		var h=oDate.getHours();
		var m=oDate.getMinutes();
		var s=oDate.getSeconds();
		var ms=oDate.getMilliseconds();

		oH.style.transform='rotate('+(h*30+m/60*30)+'deg)';
		oM.style.transform='rotate('+(m*6+s/60*6)+'deg)';
		oS.style.transform='rotate('+(s*6+ms/1000*6)+'deg)';
	}
	tick();
	setInterval(tick,30);
	//点击
	oDiv.onmouseover=function(){
		
		this.title='可以轻轻拖动时钟到任意位置,点击可进行自由落体运动。';
	};
	oDiv.onclick=function(){
		var iSpeedX=5;
		var iSpeedY=8;
		var timer=null;
		duangMove();
		function duangMove(){
			timer=setInterval(function(){
				iSpeedY+=3;

				var l=oDiv.offsetLeft+iSpeedX;
				var t=oDiv.offsetTop+iSpeedY;

				if(t>=document.documentElement.clientHeight-oDiv.offsetHeight){
					t=document.documentElement.clientHeight-oDiv.offsetHeight;
					iSpeedY*=-0.8;
					iSpeedX*=0.8;
				}
				if(t<=0){
					t=0;
					iSpeedY*=-0.8;
					iSpeedX*=0.8;
				}
				if(l>=document.documentElement.clientWidth-oDiv.offsetWidth){
					l=document.documentElement.clientWidth-oDiv.offsetWidth;
					iSpeedX*=-0.8;
					iSpeedY*=0.8;
				}
				if(l<=0){
					l=0;
					iSpeedX*=-0.8;
					iSpeedY*=0.8;
				}

				oDiv.style.left=l+'px';
				oDiv.style.top=t+'px';

				if(Math.abs(iSpeedX)<1)iSpeedX=0;
				if(Math.abs(iSpeedY)<1)iSpeedY=0;

				if(iSpeedX==0 && iSpeedY==0 && t==document.documentElement.clientHeight-oDiv.offsetHeight){
					clearInterval(timer);
				}
			},30);
		}
		
	}
	//以下拖拽
	
	oDiv.onmousedown=function(ev){
		var oEvent=ev || event;
		var disX=oEvent.clientX-oDiv.offsetLeft;
		var disY=oEvent.clientY-oDiv.offsetTop;
		document.onmousemove=function(ev){
			var oEvent=ev || event;
			var l=oEvent.clientX-disX;
			var t=oEvent.clientY-disY;
			if(l<=0)
			{
				l=0;
			}
			if(t<=0)
			{
				t=0;
			}
			var r=document.documentElement.clientWidth-oDiv.offsetWidth;
			var b=document.documentElement.clientHeight-oDiv.offsetHeight;
			if(l>=r)
			{
				l=r;
			}
			if(t>=b)
			{
				t=b;
			}
			oDiv.style.left=l+'px';
			oDiv.style.top=t+'px';
		};

		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		};
		return false;
	};
	;(function(){
		var oLogin=document.getElementById('login');
		oLogin.onmousedown=function(){
			this.style.boxShadow='none';
			this.style.color='blue';
			
		};
		oLogin.onmouseup=function(){
			this.style.boxShadow='5px 5px 5px 1px #000';
			this.style.color='#333';
			
		};
	})()
	//头部导航
	var oHead_nav=document.getElementById('head_nav');
	var aHli=oHead_nav.children;
	var  oHbox=aHli[aHli.length-1];
	
	var m=0;
	
	for(var i=0;i<aHli.length-1;i++)
	{
			aHli[i].index=i;
			aHli[i].onmouseover=function(){
				startMove(oHbox,this.offsetLeft);	
			};
			aHli[i].onmouseout=function(){
				startMove(oHbox,m*aHli[0].offsetWidth);	
			};
			aHli[i].onclick=function(){
				m=this.index;	
			};
	};
	;(function(global){
    var iSpeed=0;
    var left=0;
    var timer=null;

    global.startMove=function(obj,iTarget){
			clearInterval(timer);
			timer=setInterval(function(){
				iSpeed+=(iTarget-left)/5;
				iSpeed*=0.7;
	
				left+=iSpeed;
				obj.style.left=left+'px';
	
				if(Math.round(iSpeed)==0 && Math.round(left)==iTarget){
					clearInterval(timer);
				}
			},30);
		}
	})(window);
	
};