!function(e,t){function o(){}try{t(e)}catch(n){e.Log={info:o,warn:o,error:o,debug:o}}"undefined"!=typeof KISSY?KISSY.add("tbc/log/0.4.1/index",[],function(){return e.Log}):"undefined"!=typeof define&&define("log",[],function(){return e.Log})}("undefined"!=typeof window?window:this,function(e){function t(t){var o=location.href.indexOf("ks-debug")>-1||location.href.indexOf("log-tools")>-1;o&&(this.console=t&&t.console||e.console)}function o(){function t(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent?e.attachEvent("on"+t,o):e["on"+t]=o}var o=this;if(!e._console){var n=[];_console={log:function(){var e=arguments;n.push(function(t){t.log.apply(t,e)})},iterator:function(e){for(var t,o=0;t=n[o++];)t(e)}}}t(document,"keydown",function(e){var t=e.target,n=t&&t.tagName;!e.metaKey&&!e.ctrlKey||e.shiftKey!==!0||190!==e.keyCode||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n||t.isContentEditable||(e.preventDefault(),o.show())}),location.search.indexOf("log-tools")>-1&&this.show()}function n(e){e=e||{},this.url=e.url||location.host+location.pathname,this.random=Math.random(),this.server="//poc.taobao.com/1.gif?"}function r(t){t=t||{},this.sampling=t.sampling||1e3,this.startTime=t.startTime||e.g_config&&g_config.startTime||+new Date,this.screen=t.screen||screen.width+"x"+screen.height,this.ua=t.ua||navigator.userAgent,this.url=t.url||location.protocol+"//"+location.host+location.pathname+"/log",this.random=Math.random(),this.server=(location>"https"?"//log":"//gm")+".mmstat.com/jstracker.2?"}function i(e){this.group=e,i.loggers[e]=this}function s(e,t){if(e.indexOf)return e.indexOf(t);for(var o=0,n=e.length;n>o;++o)if(e[o]===t)return o;return-1}function l(e){for(var t=1,o=arguments,n=o.length,r=String(e).replace(c,function(e){if("%%"===e)return"%";if(t>=n)return e;switch(e){case"%s":return String(o[t++]);case"%d":return Number(o[t++]);default:return e}}),i=o[t];n>t;i=o[++t])r+=" "+i;return r}t.prototype={receive:function(e){if(this.console){var t=e.level,o=e.message,n=e.group,r="["+n+"] "+o;this.console[t]&&this.console[t](r)}}},o.prototype={isTestEnv:function(){var e=location.host,t=location.href;return e.indexOf("daily")>-1||e.indexOf("pre")>-1||t.indexOf("ks-debug")>-1||t.indexOf("log-tools")>-1}(),promptNum:0,promptId:"log-prompt",promptStyle:"cursor: pointer; position: fixed; _position: absolute; right: 5px; bottom: 5px; z-index: 2147483640;border-radius: 50px;background: rgba(0, 0, 0, 0.7);width: 48px;color: #f00;height: 48px;line-height: 48px;font-size: 24px;text-align: center;",showPrompt:function(){var e=document.getElementById(this.promptId);if(e)e.innerText=++this.promptNum;else{var t=this,o=document.createElement("div");document.body.appendChild(o),o.innerHTML='<div id="'+this.promptId+'" title="\u70b9\u51fb\u67e5\u770b\u9519\u8bef" style="'+this.promptStyle+'">'+ ++this.promptNum+"</div>",o.onclick=function(){o.parentNode.removeChild(o),t.show()}}},receive:function(t){var o=t.level,n=t.message,r=t.group,i=t.date;!this.isTestEnv||"warn"!=o&&"error"!=o||this.showPrompt(),e._console&&_console.log(o,r,n,i)},show:function(){if(_console.show)_console.show();else{_console.show=function(){};var t=document,o=t.head||t.getElementsByTagName("head")[0]||t.documentElement,n=o.getElementsByTagName("base")[0],r=+new Date,i="?"+r,s=t.createElement("link");s.rel="stylesheet",s.href=(e.LOG_TOOLS_CSS||"//g.alicdn.com/tbc/log-tools/index.css")+i,n?o.insertBefore(s,n):o.appendChild(s);var l=t.createElement("script");l.src=(e.LOG_TOOLS_JS||"//g.alicdn.com/tbc/log-tools/index.js")+i,n?o.insertBefore(l,n):o.appendChild(l)}}},n.prototype={receive:function(e){var t=e.level,o=e.message,n=e.group;this.send(this.server+["l="+(t+":"+n),"u="+this.url,"m="+o,"t="+(new Date).valueOf()].join("&"))},send:function(t){var o="__log_img_"+ +new Date,n=e[o]=new Image;n.onload=n.onerror=function(){e[o]=null},n.src=t,n=null}},r.prototype={receive:function(e){this.random*this.sampling>1||this.track(e)},track:function(e){var t=e.level,o=e.message,n=e.group,r={ua:this.ua,msg:o||"",nick:"",file:"",line:0,delay:+new Date-this.startTime,screen:this.screen,scrolltop:document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop||0,url:this.url,category:t+":"+n||"",sampling:this.sampling};try{var i=document.cookie,s=/_nk_=([^;]+)/.exec(i)||/_w_tb_nick=([^;]+)/.exec(i)||/lgc=([^;]+)/.exec(i);s&&(r.nick=s[1])}catch(l){}r.msg=["[u"+r.url+"]","[t"+r.delay+"]","[c"+r.category+"]","[r"+r.sampling+"]"].join("")+r.msg,this.send(this.server+["type=9","id=jstracker","v=0.02","ua="+encodeURIComponent(r.ua),"msg="+encodeURIComponent(r.msg),"nick="+decodeURIComponent(r.nick),"file="+encodeURIComponent(r.file),"line="+r.line,"screen="+r.screen,"scrolltop="+r.scrolltop,"t="+(new Date).valueOf()].join("&"))},send:function(t){var o="__log_img_"+ +new Date,n=e[o]=new Image;n.onload=n.onerror=function(){e[o]=null},n.src=t,n=null}},i.getLogger=function(e){return i.loggers[e]||new i(e)},i.reporters=[],i.loggers={},i.reporter=function(e,t){var o={level:["*"],group:["*"]};t=t||{},t.level||(t.level=o.level),t.group||(t.group=o.group);var n={reporter:e,config:t};return i.reporters.push(n),function(){i.reporters.splice(i.reporters.indexOf(n),1)}},i.prototype.reporter=function(){},i.prototype.log=function(e,t,o){try{for(var n in i.reporters){var r=i.reporters[n],l=r.config,c=r.reporter;if(!(-1===s(l.level,"*")&&-1===s(l.level,e)||-1===s(l.group,"*")&&-1===s(l.group,t)))try{c.receive({level:e,group:t,message:o,date:new Date})}catch(a){}}}catch(a){}};var c=/%[sd%]/g,a=["debug","info","warn","error"];for(var u in a){var p=a[u];i.prototype[p]=function(e){return function(t){t=l.apply(null,arguments),this.log(e,this.group,t)}}(p)}try{i.reporter(new o),i.reporter(new t),i.reporter(new r,{level:["warn","error"]}),i.reporter(new n,{level:["warn","error"]})}catch(d){}e.Log=i});