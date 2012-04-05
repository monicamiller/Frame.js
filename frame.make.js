/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/
(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){a.finished_listeners[c]()}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g()}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){d=null;I(b)}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){e.ready_listeners[a]()}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){j()}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j++]()}catch(err){}continue}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.unshift(d,1);[].splice.apply(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);

/* Frame.js (Javascript Job Manager)
	v1. (c) Bishop Zareh
	MIT License
*/
(function(global){

	global.Frame = function(a, b){
		var args = _makeArray(arguments);
		if (a instanceof Array){ 
			for(var v in a) { args[0] = a[v]; Frame.apply(null, args); }; 
		} else {
			switch(typeof a){
				case 'string': Frame.lib.apply(null, args); break;
				case 'number': Frame.soon.apply(null, _rewrap.apply(null, args)); break;
				case 'function': Frame.soon.apply(null, args);  break;
				case 'undefined': Frame.next.apply(null, args);  break; 
				default: 
					args.unshift('Unidentified input: '); 
					Frame.error.apply(null, args); 
					return false; 
				break;
			}
		}
		return true;
	}

	var Fn = global.Frame;
	var no = function(){}; 
	var _makeArray = function(a) { return Array.prototype.slice.call(a, 0); }
	var _rewrap = function(){ 
		var props = _makeArray(arguments),
			delay = props.shift(),
			fn = props.shift();
		props.unshift(function(){
			var args = _makeArray(arguments);
			setTimeout(function() { 
				fn.apply(null, args);
			}, delay); 
		});
		return props;
	}

	var _libs = [];
	Fn.LAB = $LAB;
	Fn.libs = 
	Fn.library = function(){ return _libs; }; 
	Fn.lib =
	Fn.load = function(a, b){  
		var args = _makeArray(arguments);
		var _loaded = false;
		for(var v in _libs){ if (_libs[v] === a) { _loaded = true; } }
		if (!_loaded) {
			Fn(function(){ 
				$LAB.script(a).wait( function(){ 
					_libs.push(a); 
					if (typeof b == 'function') {
						args[0] = Fn.next; 
						b.apply(null, args); 
					} else { Fn(); } 
				});
			}); 
		} else { 
			if (typeof b == 'function') { b(function(){}, a); }
		}
	} 
	
	var _keeper = false, 
		_timer	= false, 
		_speed	= false,
		_speeds	= []; 	
	Fn.running               = false;
	Fn.last                  = false;
	Fn.useTimeout            = true;
	Fn.overrideTimeoutLength = false;
	Fn.initialTimeout        = 250;
	Fn.testDuration          = 1000;
	Fn.machineSpeed          = 3; 
	Fn.timeout               = Fn.initialTimeout * Fn.machineSpeed;
	Fn.keeperSteps           = 5;
	Fn.keeperDuration        = Fn.timeout / Fn.keeperSteps;
	
	Fn.resetTimeout = function(){
		Fn.timeout = (Fn.overrideTimeoutLength) 
			? Fn.overrideTimeoutLength 
			: Fn.initialTimeout * Fn.machineSpeed;
		Fn.keeperDuration = Fn.timeout / Fn.keeperSteps;
		return Fn.timeout;
	}

	// Machine Speed Test
	Fn.speedTest = function (a){
		var _ticks = 1;
		var _ticker = setInterval(function(){ _ticks++; }, 1);
		setTimeout(function(){
			_ticker = clearInterval(_ticker); _ticker = false;
			Fn.machineSpeed = Math.ceil(Fn.testDuration/_ticks);
			if (Fn.machineSpeed < 1) { Fn.machineSpeed = 1; }
			Fn.resetTimeout();
			if (typeof a === 'function') { a.apply(Fn, _makeArray(arguments).splice(1)) }
		}, Fn.testDuration);
		return 'Speed Test running...';
	}

	Fn.report = no;

	var _start = function(){
		Fn.running = true; 
		_speeds.push(_speed);
		_speed = 0; 
		_clear();
		_timer = setInterval(function(){_speed++;}, 1);
		_keeper = setInterval(function(){
			if (_speed > Fn.timeout){
				Fn();
			}
		}, Fn.keeperDuration );
	}
	var _stop = function(){
		_clear();
		Fn.running = false; 
	}
	var _clear = function(){
		_keeper = clearInterval(_keeper); _keeper = false; 
		_timer = clearInterval(_timer); _timer = false;
	}

	var _queue = [],
		_qArgs = [],
		_later = [],
		_lArgs = [];

	Fn.queue = function(){ return _queue.concat(_later); } 
	Fn.args = function(){ return _qArgs.concat(_lArgs); } 
	Fn.len = 
	Fn.count = function(){ return (_queue.length + _later.length); } 

	Fn.soon = function(a){ 
		var args = _makeArray(arguments);
		if (typeof a === 'number') { return Fn.apply(null, args); } 
		else if (typeof a ==='function'){ 
			_qArgs.push(args.splice(1));
			return _queue.push(a); 
		} 
		return false;
	}

	Fn.now = function(a){ 
		var args = _makeArray(arguments);
		if (typeof a === 'number') { return Fn.now.apply(null, _rewrap.apply(null, args)); } 
		else if(typeof a ==='function'){ 
			_qArgs.unshift(args.splice(1));
			return _queue.unshift(a); 
		}
		return false;
	}

	Fn.later = function(a){ 
		var args = _makeArray(arguments);
		if (typeof a === 'number') { return Fn.later.apply(null, _rewrap.apply(null, args)); } 
		else if(typeof a ==='function'){ 
			_lArgs.push(args.splice(1));
			return _later.push(a); 			
		}
		return false;
	} 

	Fn.next = function(a){ 
		var args = _makeArray(arguments);
		if(_queue.length > 0){
			Fn.last = _qArgs.shift();
			Fn.last.unshift( _queue.shift() ); 
			Fn.last = Fn.last.concat(args); 
			return _run.apply(null, Fn.last);
		} else if (_later.length > 0){
			Fn.last = _lArgs.shift();
			Fn.last.unshift( _later.shift() ); 
			Fn.last = Fn.last.concat(args); 
			return _run.apply(null, Fn.last);
		} else {
			_stop();
			return false;
		}
	} 
	
	Fn.begin =
	Fn.start =
	Fn.init = function(){ 
		if (Fn.running === false){ Fn.next(); return true; } 
		else { return false; }
	};

	var _run = function(fn){ 
		var args = _makeArray(arguments);
		if (typeof fn === 'function') { 
			_start();
			try { 
				args[0] = Fn.next; 
	 			return fn.apply(null, args);
	 		} catch(e) {
	 			_clear();
	 			Fn(); 
	 		}
	 		return true;
		} else {
			_stop(); 
			return false;
		}
	} 

	Fn.debug = 0;
	Fn.errors = [];
	Fn.stack = [];
	Fn.log = no;
	Fn.title = no; 
	Fn.error = no;

	Fn.resetTimeout();
	Fn.later(function(){
		Fn.speedTest(Fn.next);
	});

})(this);