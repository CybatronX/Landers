	// Disable Right Click
		var message="";function clickIE(){if(document.all)return message,!1}function clickNS(a){if(document.layers||document.getElementById&&!document.all)if(2==a.which||3==a.which)return message,!1}document.layers||0<=navigator.userAgent.indexOf("Opera")?(document.captureEvents(Event.MOUSEDOWN),document.onmousedown=clickNS):(document.onmouseup=clickNS,document.oncontextmenu=clickIE);
		document.oncontextmenu=new Function("return false");

	// Vibrate
		navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate;navigator.vibrate([1E3,500,1E3,500,1E3,500,1E3,500,1E3]);
		// Comment to fold it

	// Query String
	    var parseQueryString=function(a){var d={},c,b,e;a=a.split("&");b=0;for(e=a.length;b<e;b++)c=a[b].split("="),d[c[0]]=c[1];return d};
	    var queryString = decodeURIComponent(window.location.search);
	    queryString = queryString.substring(1);
	    var queryParams = parseQueryString(queryString);