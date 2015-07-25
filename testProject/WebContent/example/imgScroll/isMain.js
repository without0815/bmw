
define(function(require,exports,module){
	
	var creatElement=require('../../js/base/creatElement'),
	styleJson =require('../../js/data/styleJson');
	
	
	var default_style={
			
	}
	
	
	var  fn_scrollImg={
			marquee:function(){
				
			},
			scrollImg:function(colee,colee1,colee2){
				var speed = 30;
				colee2.innerHTML = colee1.innerHTML; 
				
				var MyMar1 = setInterval(function(){
					if (colee2.offsetTop - colee.scrollTop <= 0) {
						colee.scrollTop -= colee1.offsetHeight; 
					} else {
						colee.scrollTop++
					}
				}, speed);
				
				colee.onmouseover = function() {
					clearInterval(MyMar1)
				}
				colee.onmouseout = function() {
					MyMar1 = setInterval(function(){
						if (colee2.offsetTop - colee.scrollTop <= 0) {
							colee.scrollTop -= colee1.offsetHeight; 
						} else {
							colee.scrollTop++
						}
					}, speed)
				}
			}
	}
	exports.fn_scrollImg=fn_scrollImg;
	
});
