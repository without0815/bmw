/**
 * 创建元素
 */

define(function(require, exports) {
	exports.create = function(tagName, attr) {
		var element = null;
		if (typeof tagName === "string") {
			element = document.createElement(tagName);

			if (typeof attr === "object") {
				var keyAttr, keyStyle;
				for (keyAttr in attr) {
					if (keyAttr === "styles"
							&& typeof attr[keyAttr] === "object") {
						// 样式们
						for (keyStyle in attr[keyAttr]) {
							element.style[keyStyle] = attr[keyAttr][keyStyle];

							if (keyStyle === "opacity"
									&& window.innerWidth + "" == "undefined") {
								element.style.filter = "alpha(opacity="
										+ (attr[keyAttr][keyStyle] * 100) + ")";
							}
						}
					} else {
						if (keyAttr === "class") {
							keyAttr = "className";
						}
						element[keyAttr] = attr[keyAttr]
						attr["class"];
					}

				}
			}
		}
		return element;
	};
});



/**
 * 黑色半透明遮罩层
 */
 
define(function(require, exports, module) {
    var elementCreate = require("./elementCreate");
    var overlay = (function() {
        var element = elementCreate.create("div", {
            styles: {
                display: "none",
                width: "100%",
                backgroundColor: "#000",
                opacity: 0.35,
                position: "absolute",
                zIndex: 1,
                left: 0,
                top: 0,
                bottom: 0    
            }
        });
        document.body.appendChild(element);
        
        return {
            display: false, 
            show: function() {
                element.style.display = "block";
                this.display = true;
                return this;
            },
            hide: function() {
                element.style.display = "none";    
                this.display = false;
                return this;
            }
        };    
    })();    
    
    exports.overlay = overlay;
});