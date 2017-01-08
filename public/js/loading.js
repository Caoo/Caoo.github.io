var loading = (function(){

	var toLoadList,
		success = [],
		faild = [],
		loading = function(list){
			toLoadList = list;
		};

	loading.prototype = {
		load:function(){
			/*  */
			var len = toLoadList.length,
				index = len,
				done = 0;

			while(index){
				var img = new Image();
				img.onload = function(){
					if(++done === len){
						success.forEach(function(cb){
							cb.call(this)
						})
					}
				}.bind(this);
				img.onerror = function(){
					alert('error');
					this.onload = null;
				}
				img.src = toLoadList[--index];
			}

			return this;
		},
		add:function(todolist){
			todolist = todolist.concat(todolist)
			return this;
		},
		done:function(cb){
			success.push(cb);
			return this;
		},
		reject:function(cb){
			reject.push(cb);
			return this;
		},
		timeout:function(){
			return this;
		}
	}

	return loading;

})()
