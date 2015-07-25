$(document).ready(function(){
	$("#navitems li").click(function(){
		$("#navitems li").removeAttr("style");
//		 $(".h3_nva").css("background-position","0 -315px");
		$(this).css("background-position","0 -161px");
	});
	

	
	$(".m_left_item").hover(
		function(){
		$(".m_left_item b").hide();
		$(".i-mc").css("display","block")
	},
		function(){
		$(".m_left_item b").show();
		$(".i-mc").css("display","none")
	});
	
	$("#m_right_1 .m_r .m_t").hover(
		function(){
			$("#m_right_1 .m_r .m_t").css("background-color","#F3F3F3");
			$("#m_right_1 .m_r .curr").removeClass("curr");
			$(this).parent().addClass("curr");
			$(this).css("background-color","#FFFFFF");
		},
		function(){
	})
	
	$("#m_2_hot .d_mt").hover(
		function(){
			$("#m_2_hot .d_mt").css("background-color","#EFEFEF");
			$("#m_2_hot .d_mt").css("color","#333333");
			$(this).css("background-color","#FFFFFF");
			$(this).css("color","#DDCC33");
			var ind= $("#m_2_hot>div").index($(this));
			ind=ind+1;
			$("#m_2_hot .ff_cc").removeClass("curr");
			$("#d"+ind).addClass("curr");
		},function(){
	})
	
	
	$(".m_main .d_mt").hover(
		function(){
			
			$(".m_main .d_mt").css("background-color","#EFEFEF");
			$(this).css("background-color","#FFFFFF");
			$(".m_main .curr").removeClass("curr");
			$(this).parent().addClass("curr");
			
			if(($(this).parent().find(".show_img").html())!=null){
				$(".c_mess .show_img").show();
			}
			else {
				$(".c_mess .show_img").hide();
			}
		},
		function(){
			
		})
		
		
		$(".s_controls span").hover(
			function(){
				$(".clsp span").removeClass("cur");
				$(this).addClass("cur");
				
				var ind= $(this).html();
				$(".dmi").removeClass("curr");
				$(".md_img"+ind).parent().addClass("curr");
			},
			function(){
			
		});
		
		
	
		 $(document).ready(function() { 
			  InterValObj = window.setInterval(SetRemainTime, 1000); //间隔函数，1秒执行 
		}); 
		
		 $(document).ready(function() { 
			  window.setInterval(changeImg, 2000); //间隔函数，1秒执行 
		}); 
});

var num1=0;
function changeImg(){
	num1=num1+1;
	$(".dmi").removeClass("curr");
	$(".md_img"+num1).parent().addClass("curr");
	
	$(".clsp span").removeClass("cur");
	$(".clsp span:nth-child("+num1+")").addClass("cur");
	
	
	if(num1==4){
		num1=0;
	}
}


var SysSecond=3630; 
var InterValObj; 

function SetRemainTime() { 
	  if (SysSecond > 0) { 
	   SysSecond = SysSecond - 1; 
	   var second = Math.floor(SysSecond % 60);             // 计算秒     
	   var minite = Math.floor((SysSecond / 60) % 60);      //计算分 
	   var hour = Math.floor((SysSecond / 3600) % 24);      //计算小时 
	   var day = Math.floor((SysSecond / 3600) / 24);        //计算天 
	 
	   $("#remainTime").html(day + "天" + hour + "小时" + minite + "分" + second + "秒"); 
	   $(".countdown b:nth-child(1)").html(hour);
	   $(".countdown b:nth-child(2)").html(minite);
	   $(".countdown b:nth-child(3)").html(second);
	   
	  } else {//剩余时间小于或等于0的时候，就停止间隔函数 
	   window.clearInterval(InterValObj); 
	   alert("game over...")
	   //这里可以添加倒计时时间为0后需要执行的事件 
	  } 
 } 