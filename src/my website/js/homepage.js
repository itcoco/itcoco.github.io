// JavaScript Document

window.onload=function(){
	
	//首页消失
	var oMask=document.getElementById('mask');
	var oAnimate=document.getElementById('animate');
	setTimeout(function (){
		oMask.style.display='none';	
	},2000);
	(function(){
		var oNav=document.getElementById('nav');
		var aBtn=oNav.getElementsByTagName('a');
			
			//用cookie
			/*var n=getCookie('index');
			if (getCookie('index')) {
				for(var i=0;i<aBtn.length;i++)
				{
					aBtn[i].className='';
				}
				aBtn[getCookie('index')].className="active";
			}
			else{
			   var aBtn=oNav.getElementsByTagName('a');	    
				aBtn[0].className="active";	    
			}*/
			/*for(var i=0;i<aBtn.length;i++)
			{
				aBtn[i].className='';
			};
			aBtn[0].className='active';*/
		
			/*for(var i=0;i<aBtn.length;i++)
			{
				(function(index){
					
					aBtn[index].onclick=function()
					{
						for(var i=0;i<aBtn.length;i++)
						{
							aBtn[i].className='';
						};
						this.className='active';
						//存cookie
						addCookie('index',index,10);
					}
				})(i)	
			};*/
	
	})();
	
	//选项卡
	;(function(){
		var oBox=document.getElementById('box');
		var oOl=document.getElementById('ol1');
		var oUl=document.getElementById('ul1');
		var aBtn=oUl.getElementsByTagName('li');
		var aLi=oOl.getElementsByTagName('li');
		var now=0;
		for(var i=0;i<aBtn.length;i++)
		{
			(function(index){
				aBtn[i].onmouseover=function(){
					now=index;
					tab();
				};
			})(i)
		}
		//下一个
		var oNext=document.getElementById('next')
		oNext.onclick=next;
		oNext.onmouseover=function(){
			
			this.className='active';
		};
		oNext.onmouseout=function(){
			
			this.className='';
		};
		
		//上一个
		var oPrev=document.getElementById('prev');
		oPrev.onclick=function(){
			now--;
			if(now==-1)
			{
				now=8;
			}
			
			tab();
		};
		oPrev.onmouseover=function(){
			
			this.className='active';
		};
		oPrev.onmouseout=function(){
			
			this.className='';
		};
		//往右边滚动播放
		var timer=setInterval(next,2000);
		
		oBox.onmouseover=function()
		{
			clearInterval(timer);	
		}
		
		oBox.onmouseout=function()
		{
			timer=setInterval(next,2000);	
		}	
		//重用
		function tab()
		{
			for(var i=0;i<aBtn.length;i++)
			{
				aBtn[i].className='';
				aLi[i].className='';
			}
			aBtn[now].className='active';
			aLi[now].className='active';
		};
		function next()
		{
			now++;
			if(now>8)
			{
				now=0;
			}
			tab();
			
		};
	})();
};