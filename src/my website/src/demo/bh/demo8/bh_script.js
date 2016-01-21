var g_aData=
[
	'你给世界一个什么姿态，世界将还你一个什么样的人生。',
	'人生苦短，不要计较太多，与其在纷扰中度日如年，不如在舒适中快乐生活。',
	'成熟不是心变老，而是，当眼泪在眼睛里打转时却还保持微笑。人长大了要学会世故，圆滑，一笑遮百丑。',
	'很多事情，之所以最终没有办成，不是能力不足，不是时机不好，而是稍有挫折就产生畏难情绪，然后就不了了之。',
	'永远不要指望别人，只有自己努力的人，才能站得稳。',
	'时光偷走的，永远是你以为的近在咫尺，你眼皮底下看不见的珍贵。',
	'老想活给别人看，难怪你过得那么累。',
	'若是自己没有尽力，就没有资格批评别人不用心。开口抱怨很容易，但是闭嘴努力的人更加值得尊敬。'
];

var g_oTimerHide=null;

window.onload=function ()
{
	var aLi=document.getElementById('content').getElementsByTagName('li');
	
	bindTopic(aLi);
	(function (){
		var oS=document.createElement('script');
			
		oS.type='text/javascript';
		oS.src='http://www.zhinengshe.com/zpi/zns_demo.php?id=3529';
			
		document.body.appendChild(oS);
	})();
};

function bindTopic(aElement)
{
	var i=0;
	
	for(i=0;i<aElement.length;i++)
	{
		aElement[i].znsIndex=i;
		aElement[i].onmouseover=function (ev){showTopic(this.znsIndex, window.event || ev);};
		aElement[i].onmouseout=function (){hideTopic();};
		aElement[i].onmousemove=function (ev)
		{
			var oEvent=window.event || ev;
			setPosition(oEvent.clientX, oEvent.clientY);
		};
	}
}

function showTopic(index, oEvent)
{
	var oTopic=document.getElementById('topic');
	
	if(g_oTimerHide)
	{
		clearTimeout(g_oTimerHide);
	}
	
	oTopic.getElementsByTagName('div')[1].innerHTML=g_aData[index];
	oTopic.style.display='block';
	
	setPosition(oEvent.clientX, oEvent.clientY);
}

function hideTopic()
{
	var oTopic=document.getElementById('topic');
	
	if(g_oTimerHide)
	{
		clearTimeout(g_oTimerHide);
	}
	g_oTimerHide=setTimeout
	(
		function ()
		{
			oTopic.style.display='none';
		},50
	);
}

function setPosition(x, y)
{
	var top=document.body.scrollTop || document.documentElement.scrollTop;
	var left=document.body.scrollLeft || document.documentElement.scrollLeft;
	
	x+=left;
	y+=top;
	
	var oTopic=document.getElementById('topic');
	var l=x+20;
	var t=y-(oTopic.offsetHeight-20);
	var bRight=true;
	var iPageRight=left+document.documentElement.clientWidth;
	
	if(l+oTopic.offsetWidth>iPageRight)
	{
		bRight=false;
		
		l=x-(oTopic.offsetWidth+20);
		oTopic.getElementsByTagName('div')[0].className='adorn_r';
	}
	else
	{
		oTopic.getElementsByTagName('div')[0].className='adorn';
	}
	
	oTopic.style.left=l+'px';
	oTopic.style.top=t+'px';
}