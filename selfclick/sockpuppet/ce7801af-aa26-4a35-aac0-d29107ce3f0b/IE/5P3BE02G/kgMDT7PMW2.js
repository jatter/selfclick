define("kg/tb-nav/2.5.1/lib/menu/index",["util","event-custom"],function(t,e,n){function i(){}var u=t("util"),o=t("event-custom");u.augment(i,o.Target,{show:function(t){this.fire("show",{targetName:t})},hide:function(t){this.fire("hide",{target:t})},subscribe:function(t,e,n){this.on(e,function(e){t===e.targetName&&n&&n(e)})}}),n.exports=new i});define("kg/tb-nav/2.5.1/lib/global/index",[],function(e,n,a){var i=TB.Global;i.versionName="3.1.0",a.exports=i});define("kg/tb-nav/2.5.1/lib/index",["kg/tb-nav/2.5.1/lib/user/index","kg/tb-nav/2.5.1/lib/site-map/index","kg/tb-nav/2.5.1/lib/message/index","kg/tb-nav/2.5.1/lib/cart/index","kg/tb-nav/2.5.1/lib/webww/index","kg/tb-nav/2.5.1/lib/weekend/index","kg/tb-nav/2.5.1/lib/account/index","kg/tb-nav/2.5.1/lib/accessibility/index","kg/tb-nav/2.5.1/lib/responsive/index","kg/tb-nav/2.5.1/lib/footer/index","node","util","kg/tb-nav/2.5.1/lib/region/index","kg/tb-nav/2.5.1/lib/reporter/index"],function(i,e,n){function t(i){var e={user:!0,responsive:!0,cart:!0,webww:!0,weekend:!0,accessibility:!0,account:!0,siteMap:!0,footer:!0,region:!1};i=i||{},i=u.merge(e,i),i.user&&a.init(),i.responsive&&v.init(),i.cart&&s.init(),i.webww&&d.init(),i.region&&m.init(),i.weekend&&(window.g_config&&window.g_config.weekend===!1||l.init()),i.accessibility&&c.init(),i.account&&r.init(),i.siteMap&&g.init(),i.footer&&k.init(),b()}function b(){var i=w(document);i.delegate("mouseenter",".J_Tmsg_Basic",function e(n){o.init(),p.send({category:"message",msg:location.host+location.pathname}),i.undelegate("mouseenter",".J_Tmsg_Basic",e)})}var a=i("kg/tb-nav/2.5.1/lib/user/index"),g=i("kg/tb-nav/2.5.1/lib/site-map/index"),o=i("kg/tb-nav/2.5.1/lib/message/index"),s=i("kg/tb-nav/2.5.1/lib/cart/index"),d=i("kg/tb-nav/2.5.1/lib/webww/index"),l=i("kg/tb-nav/2.5.1/lib/weekend/index"),r=i("kg/tb-nav/2.5.1/lib/account/index"),c=i("kg/tb-nav/2.5.1/lib/accessibility/index"),v=i("kg/tb-nav/2.5.1/lib/responsive/index"),k=i("kg/tb-nav/2.5.1/lib/footer/index"),x=i("node"),w=x.all,u=i("util"),m=i("kg/tb-nav/2.5.1/lib/region/index"),p=i("kg/tb-nav/2.5.1/lib/reporter/index");n.exports=t});