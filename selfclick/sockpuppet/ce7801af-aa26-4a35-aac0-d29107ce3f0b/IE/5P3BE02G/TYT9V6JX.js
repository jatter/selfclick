window.batSamplingFile="//fragment.tmall.com/seller/detailbatsampling",window.batTrack=window.batTrack||function(){},window.codeTrack=function(){try{window.batTrack.apply(this,arguments)}catch(e){}},function(e,a){if(window.getTmDetector=function(){var e={"deviceType":"pc","getOSInfo":function(){},"getExpolerInfo":function(){}};return navigator.userAgent.toLowerCase().indexOf("pad")>0?e.deviceType="pad":e.deviceType="pc",e},window.chrome){var i=a.getElementsByTagName("html")[0],t=i.className.split(" ");t.push("browser-Chromium"),i.className=t.join(" ")}}(KISSY,document),function(e){function a(e){var a;return e(function(e){a="function"==typeof a?a(e):e}),function(e){a=a===undefined?e:e(a)}}function i(e){var a,i,t,n=[];return function(o,l){return 0===l||l||(l=1),1&l&&!i&&(i=!0,e(function(e){for(a=e;t=n.shift();)t&&t.apply(null,[a])})),a!==undefined?(o&&o.apply(null,[a]),a):(2&l||o&&n.push(o),a)}}var t=window,n=document,o=g_config.assetsHost=g_config.assetsHost||"//assets.alicdn.com",l=-1!=o.indexOf(".daily."),r=l?"//g-assets.daily.taobao.net":"//g.alicdn.com",s=t.TShop={};e.mix(s,{"preload":a,"createLoader":i,"init":function(a,i){a=a||{},s.initPackage(),codeTrack("app.init"),e.startsWith(location.href,"https://")?codeTrack("macro.performance:detailhttps","page.shangxin.init"):codeTrack("macro.performance:detail","page.shangxin.init");var n=e.unparam(t.location.search.substring(1));for(var o in n)/^[\w\d]+$/.test(o)&&n[o]&&codeTrack("app.urlParam","app.init",{"group":o});t._jstErrTimeout&&t.clearTimeout(t._jstErrTimeout),s.initTest(function(){s.initEnv(a,function(){s.initDectector(i)})})},"initTest":function(e){var a,i=/\btest=([0-9a-zA-Z,:\/\(\)\.]+)/,n=t._TM_Tester={"waitCount":0,"onStart":function(){delete n.onStart,e()},"root":r+"/tm/detail/test/"};if(a=i.exec(location.hash)||i.exec(location.search)){if(a=a[1].split(":"),a[1]){var o=/^(glb?)(?:\(([^\)]+)\))?$/.exec(a[0]);if(o)switch(o[1]){case"gl":n.root="//gitlab.alibaba-inc.com/tm/detail/raw/"+(o[2]||"master")+"/test/";break;case"glb":n.root="//gitlab.alibaba-inc.com/tm/detail-b/raw/"+(o[2]||"master")+"/test/"}a[0]=a[1]}a=a[0].split(",");for(var l=0;l<a.length;l++)n.waitCount++,document.write('<script src="'+n.root+a[l]+'.js"><\/script>')}n.waitCount?setTimeout(function(){n.onStart&&n.onStart()},2048):n.onStart&&n.onStart()},"initPackage":function(){for(var a,i,n,l=document.scripts||document.getElementsByTagName("script"),d=/.+\/tm\/detail(?:-b)?\/([^\/]+)\//,m=l.length-1;m>=0;m--){var c,u=l[m].src,p=u.indexOf("??");if(p>=0){c=u.substring(p+2).split(",");var g=u.substring(0,p);for(n=c.length-1;n>=0;n--)c[n]=g+c[n]}else c=[u];for(n=c.length-1;n>=0;n--){var f=d.exec(c[n]);if(f){a=f[0],i=s._appVersion=f[1];break}}if(a)break}i&&(g_config.malldetailAssetsVersion&&g_config.malldetailAssetsVersion!=i&&/^\d+(\.\d+)+$/.test(g_config.malldetailAssetsVersion)&&(a=a.replace(i,g_config.malldetailAssetsVersion)),window._jstErrCat=(window._jstErrCat||"")+"_v"+i);var h="1.3.76";window.trackVersionDetailModel="detail-"+h,e.config({"combine":!0,"tag":(e.Config.tag||"")+"_"+g_config.t,"group":"tm","packages":[{"name":"kg","base":"//g.alicdn.com/kg/","ignorePackageNameInUri":!0},{"name":"detail-model","path":r+"/tm/detail-model/"+h,"charset":"utf-8","group":"tm","ignorePackageNameInUri":!0,"debug":!0},{"name":"malldetail","path":a,"group":"tm","ignorePackageNameInUri":!0,"debug":!0},{"name":"bid-module","tag":"20140304_"+g_config.t,"path":o+"/apps/auctionplatform/","charset":"gbk"},{"name":"sd/data_sufei","base":r+"/sd/data_sufei/1.3.6/sufei","ignorePackageNameInUri":!0,"charset":"utf-8"},{"name":"fushi","path":r+"/mui/fushi-sizehelper/3.0.1","charset":"utf-8","ignorePackageNameInUri":!0,"combine":!1,"debug":!0},{"name":"wl4detail","path":r+"/cn/wl4detail/1.0.3/","ignorePackageNameInUri":!0,"debug":!0},{"name":"mui/datalazyload","path":r+"/mui/datalazyload/3.2.1/","ignorePackageNameInUri":!0,"debug":!0},{"name":"mui/reserve-3c","debug":!0,"ignorePackageNameInUri":!0,"version":"3.0.3","path":"//g.alicdn.com/mui/reserve-3c/3.0.3/"},{"name":"mui/token","debug":!0,"ignorePackageNameInUri":!0,"version":"3.0.2","path":"//g.alicdn.com/mui/token/3.0.2/"},{"name":"mui/hk-cert","version":"3.0.7","path":"//g.alicdn.com/mui/hk-cert/3.0.7/","group":"tm","ignorePackageNameInUri":!0,"debug":!0},{"name":"mui/flipsnap","version":"3.0.1","path":"//g.alicdn.com/mui/flipsnap/3.0.1/","group":"tm","ignorePackageNameInUri":!0,"debug":!0},{"name":"mui/kissy-polyfill","debug":!0,"group":"tm","ignorePackageNameInUri":!0,"path":"//g.alicdn.com/mui/kissy-polyfill/4.0.12/","version":"4.0.12"},{"name":"mui/babel-polyfill","debug":!0,"group":"tm","ignorePackageNameInUri":!0,"path":"//g.alicdn.com/mui/babel-polyfill/6.2.6/","version":"6.2.6"},{"name":"mui/mtb-windvane","debug":!0,"group":"tm","ignorePackageNameInUri":!0,"path":"//g.alicdn.com/mui/mtb-windvane/4.0.3/","version":"4.0.3"},{"name":"mui/mtop","debug":!0,"group":"tm","ignorePackageNameInUri":!0,"path":"//g.alicdn.com/mui/mtop/4.1.1/","version":"4.1.1"},{"name":"mui/bat","debug":!0,"group":"tm","ignorePackageNameInUri":!0,"path":"//g.alicdn.com/mui/bat/4.0.18/","version":"4.0.18"}],"modules":{"mui/mtop/index":{"requires":["mui/mtb-windvane/","mui/babel-polyfill/"]},"mui/mtop/storage-middleware":{"requires":["mui/babel-polyfill/"]},"mui/reserve-3c/index":{"requires":["event","node","base","io"]},"mui/reserve/mods/token":{"requires":["io","promise"]},"mui/address/sup.css":{"path":"mui/address/3.1.4/sup.css"},"mui/address/sec":{"path":r+"/mui/address/3.1.4/sec.js"},"mui/address/sup":{"requires":["event","dom","base","mui/address/sec","mui/address/sup.css"],"path":"mui/address/3.1.4/sup.js"},"mui/address/queryAreaInfo":{"path":r+"/mui/address/3.1.4/queryAreaInfo.js"},"tmalllx":{"path":function(){return r+"/mtb/app-laxin/0.1.5/tmalllx.min.js"}()},"mui/loading/1.0.1/loading.css":{"path":r+"/mui/loading/1.0.1/loading.css"},"wl4detail/wlroute":{"requires":["node","io","xtemplate","overlay","event","wl4detail/wlroute.css"]},"mui/hk-cert/index-pc":{"requires":["dom","event","kg/slide/2.0.2/index","mui/hk-cert/index-pc.css"]},"mui/hk-cert/index-pc.xtpl":{"requires":["mui/xtemplate/runtime"]},"mui/hk-cert/index.xtpl":{"requires":["mui/xtemplate/runtime"]}}}),t.TMShop||(window.trackTagShop="detail-async",e.config({"packages":[{"name":"shop","path":r+"/tm/shop/"+(g_config.shopVersion||"daily/3.1.32"),"charset":"utf-8","group":"tm","ignorePackageNameInUri":!0,"debug":!0}]})),e.version<"1.40"&&(/iPhone|iPad|iPod|iTouch/i.test(navigator.userAgent)&&function(){function e(t,n,o){var l,r,s,d,m=t;if(!t)return m;if(t[i])return o[t[i]].destination;if("object"==typeof t){var c=t.constructor;a.inArray(c,[Boolean,String,Number,Date,RegExp])?m=new c(t.valueOf()):(l=a.isArray(t))?m=n?a.filter(t,n):t.concat():(r=a.isPlainObject(t))&&(m={}),t[i]=d=a.guid("c"),o[d]={"destination":m,"input":t}}if(l)for(var u=0;u<m.length;u++)m[u]=e(m[u],n,o);else if(r)for(s in t)s===i||n&&n.call(t,t[s],s,t)===FALSE||(m[s]=e(t[s],n,o));return m}var a=KISSY,i="__~ks_cloned";a.clone=function(t,n){var o={},l=e(t,n,o);return a.each(o,function(e){if(e=e.input,e[i])try{delete e[i]}catch(a){e[i]=void 0}}),o=null,l}}(),e.config("modules",{"io":{"alias":["ajax"]}})),e.config({"modules":{"datalazyload":{"alias":["mui/datalazyload/index"]}}}),e.add("datalazyload",function(e,a){return a},{"requires":["mui/datalazyload/index"]})},"initEnv":function(a,i){var n=t.TMShop?["shop/head/main/"]:["shop/app","shop/page/detail-mdv"];e.use(a.js1||["io","base","cookie","mui/datalazyload/webp","mui/datalazyload/index","mui/bat/index","dom","event","node","kg/xtemplate/3.3.3/runtime","detail-model/product","detail-model/model","malldetail/main/baseDetail","malldetail/main/productDetail","malldetail/common/template","malldetail/common/util","malldetail/sku/buylink","malldetail/sku/cartlink","malldetail/sku/action","malldetail/sku/editEntry","malldetail/sku/focus","malldetail/sku/indices","malldetail/sku/freight","malldetail/sku/freight.tpl","malldetail/sku/metaLeft","malldetail/sku/paymethods","malldetail/sku/promoBanner","malldetail/sku/price","malldetail/sku/productPromotion","malldetail/sku/productPromotion.tpl","malldetail/sku/shopPromotion","malldetail/sku/shopPromotion.tpl","malldetail/sku/meta","malldetail/sku/propertyHandler","malldetail/sku/main","malldetail/sku/shiptime","malldetail/sku/skuAmount","malldetail/sku/stock","malldetail/sku/address","malldetail/sku/thumbViewer","malldetail/view/main","malldetail/sku/padadapte","malldetail/recommend/skuRight","shop/dc/global/","shop/dc/header/"],function(){e.use(a.js2||["malldetail/common/imagezoom","switchable","flash","shop/dc/headArchive/","shop/dc/left/","shop/dc/topRight/","shop/dc/bottomRight/","shop/dc/footer/","malldetail/other/eventroute","malldetail/other/init","malldetail/other/itemDesc","malldetail/other/mainBody","malldetail/sku/skuMsg","malldetail/tabbar/tabbar"].concat(n))}),i&&i()},"poc":function(){},"afterWinLoad":i(a(function(a){var i=n.addEventListener?"addEventListener":"attachEvent",o=n.addEventListener?"":"on";t[i](o+"load",function(){setTimeout(function(){a(1),a=function(){}},0)},!1),e.ready(function(){setTimeout(function(){a(1),a=function(){}},4096)})})),"onProduct":i(a(function(i){var t=a(function(a){var i;s.setConfig=function(a){i=i?e.mix(i,a,undefined,undefined,!0):a,codeTrack("data.config.set","app.init")},s.Setup=function(t){e.mix(t,i,undefined,undefined,!0),i=t,a&&a(t),codeTrack("data.config.load","app.init")}});s.initModel=function(e){e.addAttr("config",{"load":function(e){t(function(a){e(a)})}}),i(e)}})),"detector":getTmDetector&&window.getTmDetector(),"initDectector":function(e){"pad"==s.detector.deviceType&&(document.getElementsByTagName("html")[0].className+=" pad-1204-768"),e&&e()}})}(KISSY);TShop.init({},function(){codeTrack("page.itemDetail.init","app.init"),KISSY.use("detail-model/product,malldetail/main/productDetail",function(e,t,a){var n=t.instance();TShop.initModel(n),a.init({"product":n},function(){n.onLoad(["config","bucketId"],function(t,a){t&&t.detail&&t.detail.isHiddenShopAction&&(e.use("dom",function(e,t){t.get(".tm-shopAction")&&t.remove(".tm-shopAction")}),e.getScript("//g.alicdn.com/tm/brandsite/??seed.js,init.js?t="+TShop.t(),{"success":function(){TBS.init(),codeTrack("page.brandsite.head","page.itemDetail.show")}}))})}),codeTrack("page.itemDetail.show","page.itemDetail.init")})});