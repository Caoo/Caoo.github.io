(function(){

	var scrollnear = function(options){
		/*
		* 1. 判断是否在附近
		* 2. 保存回调
		*/
		var $el = this.$el = $(options.el);
		var _this = this;
		this.cb = options.cb;
		$(document).on('scroll',function(){
			var nearels = _this.nearels(options.once);
			var len = nearels.length;
			while( len ){
				_this.cb.call(nearels[--len]);
			}
		})

	}

	scrollnear.prototype = {
		nearels : function(once){
			var _this = this;
			var els = [];		
			this.$el.each(function(index,item){
			   item.fired  || _this.isnear(item)  && els.push( item ) && once &&  ( item.fired = true ) ;
			});
			return els;
		},
		isnear : function(el){
			var documentTop = $(document).scrollTop(),
				elTop = $(el).offset().top;
			return ( documentTop - elTop < 500 && elTop - documentTop < 500 ) 
		}
	}

	window.scrollnear = scrollnear;

})()

