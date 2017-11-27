window.onload=function(){
    var speed=10;
    picScroll = document.getElementById('picScroll');
    picScroll1 = document.getElementById("picScroll1");
    var ID=setInterval(changeToLeft,speed);
    picScroll.onmouseover=function(){
	    clearInterval(ID);
	}
	picScroll.onmouseout=function(){
		ID=setInterval(changeToLeft,speed);
	}
};
function changeToLeft(){
	if (picScroll.scrollLeft>=(picScroll1.offsetWidth)){
          picScroll.scrollLeft = 0;
    }
    else{
    	picScroll.scrollLeft+=1;
    }
} 