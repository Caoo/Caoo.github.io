
var sourselist = ['/public/images/banner1.jpg'];
var shouping = new loading(sourselist);

shouping.load()
	.done(
		function(){
			setTimeout(function(){
	    		$('.loading-animation')
	    			.addClass('loading-end');
	    			setTimeout(function(){
	    				$('.loading-animation').remove();
	    			},500)
				},100)
		});

$(function(){
	new scrollnear({
		el :　'.percentage',
		cb : runningPercentage,
		once : true
	});


	function App () {
		this.init();
	}
	App.prototype = {
		init:function(){
			this.getDom();
			this.setListener();
		},
		getDom:function(){
			this.flashBtns = $('.flash-btn');
			this.buttonBox = $('.button-line');
			this.flash = $('.flash');
			this.flashTarget = $('.flash-target');;
		},
		setListener:function(){
			var _this = this;
			this.buttonBox.on('click','.flash-btn',function(){
				var index = $(this).index();
				var siblings = $(this).siblings();
				siblings.removeClass('target');
				$(this).addClass('target');
				_this.switchFlash(index);			
			})
		},
		switchFlash:function(index){
			this.flash.css('right',index*100+'%')		
		}
	};

	new App();

	function BannerFlash() {
		this.init();
	}

	BannerFlash.prototype = {
		init:function () {
			this.getDom();
			this.initData();
			this.setListener();
			this.initAni();
		},
		getDom:function(){
			this.flashBox = $('.banner');
			this.banners = $('.banner-inner');
			this.btn  = $('.banner-inner-btn')
		},
		initData : function () {
			this.selectedIndex = 0;
			this.indexRang = this.banners.length;
			this.animation = null;
			this.timeQue = null;
		},
		setListener:function () {
			var _this = this;
			this.btn.on('click',function () {
				_this.selectedIndex = $(this).index();
				_this.selectBanner( );
			} )
		},
		initAni:function () {
			var _this = this;
			this.animation =  setInterval(function () {
				_this.selectedIndex++;
				_this.selectedIndex === _this.indexRang && (_this.selectedIndex = 0);
				_this.switchBanner();
			},3500)
		},
		selectBanner:function (  ) {
			clearInterval( this.animation );
			clearTimeout( this.timeQue );
			this.switchBanner();
			var _this = this;
			this.timeQue = setTimeout( function(){
					_this.initAni();
				} , 3000
			);
		},
		switchBanner:function () {
			var index = this.selectedIndex;
			this.btn.removeClass('banner-btn-target');
			this.banners.removeClass('banner-inner-target');
			this.banners.eq(index).addClass('banner-inner-target');
			this.btn.eq(index).addClass('banner-btn-target');
		}

	};

	new BannerFlash()

});