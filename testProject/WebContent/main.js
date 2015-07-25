/*!
 * sea.js menu Javascript Library
 *
 * @Author yingmm  2015-06-14T01:07:24
 */
define("seajs_menu",[],function(require,exports,module){
	
	//var $ = require("jquery");
	
	//$("#ajax").colorbox({contentWidth:"300px", contentHeight:"195px"});

	//$(".left_menu ul li a").trigger("myClick",{});
	$(".left_menu ul li>a").bind("click", function() {
		var menu_dl= $(".left_menu dl");
		for (var i = 0; i < menu_dl.length; i++) {
			if($($(menu_dl[i])).css("display")=="block")
			$($(menu_dl[i])).slideDown(250,function(){ $(this).hide()});
		}
		$(".left_menu ul li a").removeClass("menu_open");
		$(this).addClass("menu_open").parent().find("dl").slideDown("slow");
	});

	$(".left_menu dl dd").bind("click", function() {
		$(".left_menu dl dd").removeClass("cur_true");
		$(this).addClass("cur_true");
		//$(".right_content").html($(this).html());
		$(".right_content").load($(this).attr("opt-url"));
	});

	var menu_fn = {
		init : function() {
			
		},
		menu_click : function() {
			
		}
	}
	
})



define(function(require,exports,module){
	
	var $ = require("jquery");
	require("seajs_menu");
	
	var proWin;
	var result={};
	
	var defaultopt = {
		title : 'win',
		width : 600,
		height : 300,
		style:{},
		success:function(){},
		error:function(){}
	}
		
	var winfn={
			initWin:function(prototype){
				//初始化窗体信息 
				setprototype(prototype);
				result=exports.getprototype();
				return result;
			},	
			closeWin:function(){
				//关闭窗体
			}
	}
	
	exports.getprototype=function(){
		//逻辑处理
		return result;
	}
	var setprototype=function(prototype){
		//逻辑处理
		result = $.extend(defaultopt, prototype);
	}
	
	window.$winfn = $.fn.winfn=winfn;
	
})


