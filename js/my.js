$(function(){
	$("#container").bind("DOMNodeInserted",function(e){
            var tempCount = 0;
	    $("#container .smnoprint").siblings().each(function(){
	    	tempCount++;
	    	if(tempCount==2||tempCount==3){
	    		$(this).remove();
				console.log("this------over---to rm 腾讯地图水印")
	    	}
	    });
	});
});