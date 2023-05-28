// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/dom-class dojo/on ../../utils/ObjectUtil esri/dijit/geoenrichment/utils/DomUtil".split(" "),function(q,m,h,r,u,t,x){var d=Object.assign({},x);d.select=function(a){return d.addTag(a,"selected")};d.unselect=function(a){return d.removeTag(a,"selected")};d.floatStart=function(a){return d.addTag(a,"esriMapsAnalystXFloatStart")};d.floatEnd=function(a){return d.addTag(a,"esriMapsAnalystXFloatEnd")};d.addSpacer=function(a,c){a=q.create("div",
{"class":"esriMapsAnalystXSpacer",innerHTML:"\x26nbsp;"},a);if(c)d[c](a);return a};d.getAndUpdateNumber=function(a,c){if(!a)return NaN;var e=a.get&&a.set;void 0===c&&(c=0);var b=t.parseNumber(e?a.get("value"):a.value,c);isNaN(b)||(e?a.set("value",t.formatNumber(b,c)):a.value=t.formatNumber(b,c));return b};d.getAndUpdateString=function(a){if(!a)return null;if(a.get&&a.set){var c=a.get("value").trim();a.set("value",c)}else c=a.value.trim(),a.value=c;return c};d.getScreenScaleFactor=function(){return d.getTextBox("",
{style:"width: 72pt; height: 72pt"}).w/96};d.positionAtCenter=function(a,c){if(a&&c){var e=m.position(a);c=m.position(c);e.w&&e.h&&c.w&&c.h&&h.set(a,{left:(c.w-e.w)/2+"px",top:(c.h-e.h)/2+"px"})}};d.showAroundOverlay=function(a,c){c=c||{};d.removeAroundOverlay(a);var e={w:"width",h:"height",l:"left",t:"top",r:"right",b:"bottom"},b=m.position(a);if(c.viewPortContainer){var f=m.position(c.viewPortContainer),n=b.x,g=b.y;b.x=Math.max(b.x,f.x);b.w-=b.x-n;b.y=Math.max(b.y,f.y);b.h-=b.y-g;b.w=Math.min(b.w,
f.x+f.w-b.x);b.h=Math.min(b.h,f.y+f.h-b.y)}a.__aroundOverlays=(c.placeInNode?[{l:0,t:-b.y,w:b.w,h:b.y},{l:b.w,t:-b.y,w:document.body.clientWidth-(b.x+b.w),h:document.body.clientHeight},{l:0,t:b.h,w:b.w,h:document.body.clientHeight-(b.y+b.h)},{l:-b.x,t:-b.y,w:b.x,h:document.body.clientHeight}]:[{l:b.x,t:0,w:b.w,h:b.y},{w:document.body.clientWidth-(b.x+b.w),r:0,t:0,b:0},{l:b.x,h:document.body.clientHeight-(b.y+b.h),w:b.w,b:0},{l:0,t:0,w:b.x,b:0}]).map(function(k){var v=q.create("div",{"class":c.overlayClass||
"esriMapsAnalystXNodeAroundOverlay"},c.placeInNode?a:document.body),w={position:"absolute"},p;for(p in e)void 0!==k[p]&&(w[e[p]]=Math.round(k[p])+"px");h.set(v,w);return v});b=function(){d.removeAroundOverlay(a)};c.removeOnClick&&(a.__aroundOverlaysRemoveHandle=u.once(document.body,"click",b));a.__aroundOverlaysResizeHandle=u(window,"resize",function(){d.showAroundOverlay(a,c)});var l;a.__aroundOverlaysSetIntervalHandle=setInterval(function(){if(l){var k=m.position(a);k.x==l.x&&k.y==l.y&&k.w==l.w&&
k.h==l.h||d.showAroundOverlay(a,c)}else l=m.position(a)},50);return{remove:b}};d.removeAroundOverlay=function(a){a.__aroundOverlays&&a.__aroundOverlays.forEach(function(c){q.destroy(c)});delete a.__aroundOverlays;a.__aroundOverlaysRemoveHandle&&a.__aroundOverlaysRemoveHandle.remove();delete a.__aroundOverlaysRemoveHandle;a.__aroundOverlaysResizeHandle&&a.__aroundOverlaysResizeHandle.remove();delete a.__aroundOverlaysResizeHandle;clearInterval(a.__aroundOverlaysSetIntervalHandle);delete a.__aroundOverlaysSetIntervalHandle};
d.getDocumentStyleDeclaration=function(a){function c(f){try{var n=f.rules||f.cssRules}catch(l){n=null}if(n)for(f=0;f<n.length;f++){var g=n[f];if(g.styleSheet){if(g=c(g.styleSheet))return g}else if(g.selectorText==a)return g.style}}for(var e=0;e<document.styleSheets.length;e++){var b=c(document.styleSheets[e]);if(b)return b}return null};d.getNodeFontFamily=function(a){return(a=h.get(a,"fontFamily")||h.getComputedStyle(a)["font-family"])?a.replace(/'|"/g,"").split(",")[0]:a};d.getNodeFontSize=function(a){return h.toPixelValue(a,
h.get(a,"fontSize"))};d.listenToNodeAdded=function(a,c,e){if(d.isNodeInLayout(a))c();else{a.__listenToNodeAddedHandle&&a.__listenToNodeAddedHandle.remove();var b=setInterval(function(){d.isNodeInLayout(a)&&(a.__listenToNodeAddedHandle&&a.__listenToNodeAddedHandle.remove(),c())},e||100);a.__listenToNodeAddedHandle={remove:function(){clearInterval(b);delete a.__listenToNodeAddedHandle}};return a.__listenToNodeAddedHandle}};d.isNodeVisible=function(a){return d.isChildOf(a,document.body,function(c){return!r.contains(c,
"dijitHidden")&&"hidden"!=h.get(c,"visibility")})};d.enableHyperlink=function(a,c){c?r.replace(a,"esriMapsAnalystXLink","esriMapsAnalystXLinkDisabled"):r.replace(a,"esriMapsAnalystXLinkDisabled","esriMapsAnalystXLink")};return d});