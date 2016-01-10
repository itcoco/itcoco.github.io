// JavaScript Document

window.onload=function(){
	var btnbox=document.getElementById('btnbox');
		var boxlist=document.getElementById('boxlist');
		var list_div=boxlist.getElementsByTagName('div');
		var btn=btnbox.getElementsByTagName('a');
	
	var aHeader=document.getElementById('header_l_u');
	var aLi=aHeader.getElementsByTagName('li');
	
	var asoldier=document.getElementById('soldier_left');
	var aSli=asoldier.getElementsByTagName('li');
	var aSdiv=asoldier.getElementsByTagName('div');
	
	var od_c_t=document.getElementById('d_c_t');
	var aNan=document.getElementById('nan_1');
	var aNli=aNan.getElementsByTagName('li');
	var aNdiv=od_c_t.getElementsByTagName('div');
	
	var od_c_b=document.getElementById('d_c_b');
	var aMan=document.getElementById('nan_2');
	var aMli=aMan.getElementsByTagName('li');
	var aMdiv=od_c_b.getElementsByTagName('div');
	
	var od_r_b=document.getElementById('d_r_b');
	var aKli=od_r_b.getElementsByTagName('li');
	var aKdiv=od_r_b.getElementsByTagName('div');
	
	var list=document.getElementById('list');
	var nLi=list.getElementsByTagName('li');
	
	for(var i=0; i<btn.length; i++){
		btn[i].index=i;
		btn[i].onmouseover=function(){
			for(var i=0; i<btn.length;i++){
				btn[i].className='';
				list_div[i].className='showbox';
			}
				list_div[this.index].className='showbox show';
				this.className='active'+this.index;
			};
		}
	
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
				this.className='fl  active';
		};
		aLi[i].onmouseout=function(){
				this.className='fl';
		};
	}
	
	for(var i=0;i<aSli.length;i++)
	{
		aSli[i].index=i;
		aSli[i].onmouseover=function(){
			for(var i=0;i<aSli.length;i++)
			{
				aSdiv[i].style.display='none';
			}
			aSdiv[this.index].style.display='block';
		};
	}
	
	for( var i=0;i<aNli.length-1;i++){
		aNli[i].index=i;
		aNli[i].onmouseover=function(){
			for( var i=0;i<aNli.length-1;i++)
			{
				aNli[i].style.background='';
				aNli[i].children[0].style.color='#a295b7';
				aNdiv[i].className='referral clearfix';
			}
			this.style.background='#322b3c';
			this.children[0].style.color='#fff';
			aNdiv[this.index].className='referral clearfix nav_active';
		};
	}
	
	for(var i=0; i<aMli.length-1;i++){
		aMli[i].index=i;
		aMli[i].onmouseover=function(){
			for(var i=0; i<aMli.length-1;i++){
				aMli[i].style.background='';
				aMli[i].children[0].style.color='#a295b7';
				aMdiv[i].className='referral clearfix';
			}
		 this.style.background='#322b3c';
		 this.children[0].style.color='#fff';
		 aMdiv[this.index].className='referral clearfix nav_active';
		}
	}
	
	for(var i=0;i<aKli.length-1;i++){
		aKli[i].index=i;
		aKli[i].onmouseover=function(){
			for(var i=0;i<aKli.length-1;i++){
				aKli[i].style.background='';
				aKli[i].children[0].style.color='#a295b7';
				aKdiv[i].style.display='none';
			}
			this.style.background='#322b3c';
			this.children[0].style.color='#fff';
			aKdiv[this.index].style.display='block';
		}
	}
	
	for(var i=0;i<nLi.length;i++){
		nLi[i].onmouseover=function(){
			for(var i=0;i<nLi.length;i++){
				nLi[i].className='';
			}
			this.className='adult';
		}
	}
	
	
};