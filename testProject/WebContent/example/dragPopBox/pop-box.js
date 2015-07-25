
define(function(require,exports,module){
	
	var creatElement=require('../../js/base/creatElement'),
	styleJson =require('../../js/data/styleJson');
	
	
	(function(window){
		
		var popBox={};
		
		var version = "";
		
		
		popBox.fn=popBox.prototype=function(){
			
			this.init=function(){
				
				var pop_boxId = ""||"pop_box";
				

				var popBox_obj= popBox.creatediv(pop_boxId);
				popBox_obj.moveable = false;
				popBox.initPopBox($("#Popup"));
				popBox.initMask($("#Mask"));
				//popBox.fn.getPid(pop_boxId);
				
				$("#"+pop_boxId).find(".close").bind("click",function(){
					$("#"+pop_boxId).remove();
				})
				
				$(window).resize(function() {
					popBox.initPopBox($("#Popup"));
					popBox.initMask($("#Mask"));
				});
				
				
				$("#top_move").mousedown(function(e){
					
					$pb.fn.defaultVal.moveable = true ;
					var popBoxObj =$("#"+$pb.fn.defaultVal.popBox);
					
					var winWidth = $pb.fn.win.clientW();
					var winHeight = $pb.fn.win.clientH();
					
					
					var movetoX=e.clientX - parseInt($(popBoxObj).css("left"));
					var movetoY=e.clientY - parseInt($(popBoxObj).css("top"));
					
					$(document).mousemove(function(e) {
						if (!$pb.fn.defaultVal.moveable) return;
						e = window.event ? window.event : e;
						//$(popBoxObj).css("left", e.clientX - movetoX);
						//$(popBoxObj).css("top", e.clientY - movetoY);
						
						//鼠标在当前框中的位置//鼠标到window的距离减去但前窗口到window的距离
						var maxWidth=winWidth-$(popBoxObj)[0].offsetWidth;
						var maxHeight=winHeight-$(popBoxObj)[0].offsetHeight;
					
						if(maxHeight>e.clientY - movetoY&&maxWidth>e.clientX - movetoX){
							if((e.clientX - movetoX>0&&e.clientY - movetoY>0)){
								$(popBoxObj).css("left", e.clientX - movetoX);
								$(popBoxObj).css("top", e.clientY - movetoY);
							}else if(e.clientX - movetoX>0){
								$(popBoxObj).css("left", e.clientX - movetoX);
								$(popBoxObj).css("top", 0);
							}else if(e.clientY - movetoY>0){
								$(popBoxObj).css("left", 0);
								$(popBoxObj).css("top", e.clientY - movetoY);	
							}
						}else {
							if(maxHeight<=e.clientY - movetoY&&maxWidth<=e.clientX - movetoX){
								$(popBoxObj).css("top", maxHeight);
								$(popBoxObj).css("left", maxWidth);
							}else if(maxHeight<=e.clientY - movetoY){
								var left_=e.clientX - movetoX<=0?0:e.clientX - movetoX;
								$(popBoxObj).css("left", left_);
								$(popBoxObj).css("top", maxHeight);
							}else if(maxWidth<=e.clientX - 	movetoX){
								var top_=e.clientY - movetoY<=0?0:e.clientY - movetoY;
								$(popBoxObj).css("left", maxWidth);
								$(popBoxObj).css("top", top_);
							}else{
								$(popBoxObj).css("left", e.clientX - movetoX);
								$(popBoxObj).css("top", e.clientY - movetoY);
							}
						}
					});
						
				});
				
				$(document).mouseup(function(){
					$pb.fn.defaultVal.moveable = false ;
				})
			}
			
			this.destroy=function(){
				$(init.popBox_pro.defaultVal.pid).remove();
			}
			
		}
		
		popBox.fn.defaultVal={
				pid:"pop_box",
				popBox:"Popup",
				moveable:false
		}
		
//		popBox.fn.pid=""||"pop_box";
//		popBox.fn.moveable= false;
		
		
		
		//popBox.fn.moveable=false;
		
		popBox.fn.getPid=function(pop_boxId){
			return pop_boxId||popBox.fn.defaultVal.pid;
		}
		
		
		popBox.fn.win={
				clientW:function(){
					return window.innerWidth ? window.innerWidth
							: document.body.clientWidth;//浏览器当前窗口的宽度
				},
				clientH:function(){
					return window.innerHeight ? window.innerHeight
							: document.body.clientHeight;//浏览器当前窗口的高度
				}
		};
		
		popBox.fn.initPopBox=popBox.initPopBox=function(selecter){
			$(selecter).css({
				"top":($pb.fn.win.clientH()-parseInt($(selecter).css("height"))) / 2,
				"left":($pb.fn.win.clientW()-parseInt($(selecter).css("width"))) / 2
			})
		};
		popBox.fn.initMask=popBox.initMask=function(selecter){
			$(selecter).css({
				"top" : 0,
				"left" : 0,
				"width" : $pb.fn.win.clientW(),
				"height" : $pb.fn.win.clientH()
			}).fadeIn(200);
		};
		
		
		popBox.fn.creatediv=popBox.creatediv=function(pId){
			
			
			var div_blocked="<div id=\"Mask\"></div>";
			
			//var div_popBox="<div id=\"Popup\" class=\"border-radius box-shadow\">";
			var div_popBox="<div id=\"top_move\" class=\"top border-radius-top\">";
			div_popBox+="		<span class=\"close\" title=\"close\">X</span> <span class=\"title\" title=\"popBox\">popBox</span>";
			div_popBox+="	</div>";
			div_popBox+="	<div class=\"main\">content</div>";
			div_popBox+="	<div class=\"footer border-radius-bottom\">";
			div_popBox+="		<input type=\"button\" value=\"Close\" title=\"close box\" class=\"close border-radius box-shadow\">";
			div_popBox+="	</div>";
			//div_popBox+="</div>";
			
			
			//laster outside div=(id=pId)
			var popBoxParent = creatElement.createEl("div",$.extend(styleJson,{
			    style: {
			        width: "100%",	
			        min_width: "750px"
			    }
			}));
			
			//popBox  object div=(id=Popup)
		    var	popBoxObj = creatElement.createEl("div",$.extend(styleJson,{
			    style: {
//			        width:"800px",
//			        height:"600px"
			    }
			}));
		    popBoxObj.id = "Popup";
		    popBoxObj.className= "border-radius box-shadow";
		    popBoxObj.innerHTML = div_popBox;
		    
		    
		    //popBox title object div=()
		    
		    
		    
		    popBoxParent.id= pId;
		    popBoxParent.innerHTML=div_blocked;
		    popBoxParent.appendChild(popBoxObj);
//		    popBoxParent.id= pId;
//		    popBoxParent.innerHTML=div_blocked+div_popBox;
			document.body.appendChild(popBoxParent);
			return popBoxParent;
		}
		
		
		window.$pb  = popBox ;
		
	})(window)
	
})
