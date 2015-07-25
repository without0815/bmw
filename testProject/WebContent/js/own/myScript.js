/* $.get("https://www.baidu.com/")
		.done(function(){ alert("$.get succeeded"); })
		.fail(function(){ alert("$.get failed!"); }); */

$(function() {
	
	$("#ajax").colorbox({contentWidth:"300px", contentHeight:"195px"});
	
	var defaultopt = {
		title : 'win',
		width : 600,
		height : 300,
	}

	$.extend(defaultopt, {
		width : 200,
		height : 200
	});

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
		$.ajax({
		  url: $(this).attr("opt-url"),
		  cache: false,
		  success: function(html){
		    $(".right_content").append(html);
		  }
		});
	});

	var menu_fn = {
		init : function() {

		},
		menu_click : function() {

		}
	}
})

