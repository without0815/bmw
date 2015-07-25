function showli(t){
	alert(t.innerHTML);
}


$(function(){
	updateEndTime();
	});
	// 倒计时函数
	function updateEndTime()
	{
	 var date = new Date();
	 var time = date.getTime()/ 1000;  // 当前时间距1970年1月1日之间的秒数
	 
	$(".timeleft_label").each(function(i){
	 
	var endTime  =this.getAttribute("end"); // 结束时间秒数
	 
	var lag = (endTime - time) // 当前时间和结束时间之间的秒数
	  if(lag > 0)
	  {
	   var second = Math.floor(lag % 60);    
	   var minite = Math.floor((lag / 60) % 60);
	   var hour = Math.floor((lag / 3600) % 24);
	   var day = Math.floor((lag / 3600) / 24);
	   $(this).html("剩余时间:</span><span class=\"day\">"+day+"</span>天 <span class=\"hour\">"+hour+"</span>小时 <span class=\"minute\">"+minite+"</span>分 <span class=\"second\">"+second+"</span>秒");
	  }
	  else
	   $(this).html("团购已经结束啦！");
	});
	 setTimeout("updateEndTime()",1000);
	}

