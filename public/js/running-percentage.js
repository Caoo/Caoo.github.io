var runningPercentage = function(){
	
	var numContainer = $(this).find('.percen-num');
	var ani = setInterval(function(){
		num = numContainer.text();
		num === '100' ? ( clearInterval(ani) && ( ani = null ) ): numContainer.text(++num);
	})
}