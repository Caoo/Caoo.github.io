var loading=function(){var n,t=[],r=function(t){n=t};return r.prototype={load:function(){for(var r=n.length,o=r,i=0;o;){var u=new Image;u.onload=function(){++i===r&&t.forEach(function(n){n.call(this)})}.bind(this),u.onerror=function(){alert("error"),this.onload=null},u.src=n[--o]}return this},add:function(n){return n=n.concat(n),this},done:function(n){return t.push(n),this},reject:function(n){return reject.push(n),this},timeout:function(){return this}},r}();