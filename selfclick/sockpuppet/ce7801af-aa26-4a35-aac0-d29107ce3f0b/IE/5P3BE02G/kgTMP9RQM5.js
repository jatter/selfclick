define("kg/component/6.0.9/control/xtpl/view",["kg/xtemplate/4.3.0/runtime"],function(e,a,n){"use strict";var t=e("kg/xtemplate/4.3.0/runtime");n.exports=function(){var e=new t(function(e){function a(e,a,n){var t=e.data;e.affix;a.data+="\n ",o.line=4;var r=t;return a=a.writeEscaped(r),a.data+="\n",a}function n(e,a,n){var t=e.data,l=e.affix;a.data+="\n ",o.line=9;var i=(r=l.xindex)!==n?r:(r=t.xindex)!==n?r:e.resolveLooseUp(["xindex"]);a=a.writeEscaped(i),a.data+='="';var s=t;return a=a.writeEscaped(s),a.data+='"\n',a}function t(e,a,n){var t=e.data,l=e.affix;a.data+="\n ",o.line=14;var i=(r=l.xindex)!==n?r:(r=t.xindex)!==n?r:e.resolveLooseUp(["xindex"]);a=a.writeEscaped(i),a.data+=":";var s=t;return a=a.writeEscaped(s),a.data+=";\n",a}var r,l=this,i=l.root,s=l.buffer,d=l.scope,o=(l.runtime,l.name,l.pos),c=d.data,v=d.affix,p=i.nativeCommands,f=i.utils,x=f.callFn,u=(f.callDataFn,f.callCommand,p.range,p["void"],p.foreach,p.forin,p.each);p["with"],p["if"],p.set,p.include,p.parse,p.extend,p.block,p.macro,p["debugger"];s.data+='<div id="';var m=(r=v.id)!==e?r:(r=c.id)!==e?r:d.resolveLooseUp(["id"]);s=s.writeEscaped(m),s.data+='"\n class="',o.line=2;var w;w=x(l,d,{},s,["getBaseCssClasses"]);var g=w;s=s.writeEscaped(g),s.data+="\n",o.line=3,o.line=3;var C=(r=v.elCls)!==e?r:(r=c.elCls)!==e?r:d.resolveLooseUp(["elCls"]);s=u.call(l,d,{params:[C],fn:a},s),s.data+='\n"\n\n',o.line=8,o.line=8;var E=(r=v.elAttrs)!==e?r:(r=c.elAttrs)!==e?r:d.resolveLooseUp(["elAttrs"]);s=u.call(l,d,{params:[E],fn:n},s),s.data+='\n\nstyle="\n',o.line=13,o.line=13;var L=(r=v.elStyle)!==e?r:(r=c.elStyle)!==e?r:d.resolveLooseUp(["elStyle"]);return s=u.call(l,d,{params:[L],fn:t},s),s.data+='\n">',s});return e.render.apply(e,arguments)}});KISSY.add("kg/kmd-adapter/0.1.5/feature",[],function(e,a,t,d){d.exports=e.Features});define("kg/component/6.0.9/extension/content-box/xtpl/view-render",["./view"],function(e,t,n){"use strict";n.exports=e("./view")});