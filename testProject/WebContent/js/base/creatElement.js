/*!
 * @Remark:创建html对象》解析json style数据
 * @Author:yingmm
 * @Date: 2015-06-16
 * @Parameter sample:tagName ="div"
 * @Parameter sample:styleObject = {sytle:{ width: "100%",backgroundColor: "#000"}}
 */
define(function(require,exports,module){
	exports.createEl = function (tagName,styleObject){
		var element = null;
		if(typeof tagName !== "string"){
			return;
		}
		element = document.createElement(tagName);
		element.innerHTML = "This is a test";
		if(typeof styleObject === "object"){
			for ( var keyStyle in styleObject) {
				if("style" === keyStyle && typeof styleObject[keyStyle] ==="object") {
					for(var keyAttr in styleObject[keyStyle]){
						var _key = keyAttr.replace(/_/, "-");
						element.style[_key] = styleObject[keyStyle][keyAttr];
					}
				}
			}
		}else{
			//....
		}
		return element;
	}
});

define("popBox",function(require,exports,module){
	var element = require("./elementCreate");
	
	var defaultStyle={
			style:{
				width:"100%"
			}
	}
	
});



