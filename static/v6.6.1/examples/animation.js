(self.webpackChunk=self.webpackChunk||[]).push([[1050],{1137:function(t,n,o){"use strict";var e=o(1625),r=o(7340),a=o(7842),i=o(640),c=o(6738),u=o(4589),f=(0,u.mi)([-.12755,51.507222]),s=(0,u.mi)([37.6178,55.7517]),l=(0,u.mi)([28.9744,41.0128]),h=(0,u.mi)([12.5,41.9]),d=(0,u.mi)([7.4458,46.95]),m=new i.ZP({center:l,zoom:6});new e.Z({target:"map",layers:[new a.Z({preload:4,source:new r.Z})],view:m});function M(t){var n=7.5625,o=2.75;return t<1/o?n*t*t:t<2/o?n*(t-=1.5/o)*t+.75:t<2.5/o?n*(t-=2.25/o)*t+.9375:n*(t-=2.625/o)*t+.984375}function g(t){return Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1}function v(t,n){document.getElementById(t).addEventListener("click",n)}function w(t,n){var o=2e3,e=m.getZoom(),r=2,a=!1;function i(t){--r,a||0!==r&&t||(a=!0,n(t))}m.animate({center:t,duration:o},i),m.animate({zoom:e-1,duration:1e3},{zoom:e,duration:1e3},i)}v("rotate-left",(function(){m.animate({rotation:m.getRotation()+Math.PI/2})})),v("rotate-right",(function(){m.animate({rotation:m.getRotation()-Math.PI/2})})),v("rotate-around-rome",(function(){var t=m.getRotation();m.animate({rotation:t+Math.PI,anchor:h,easing:c.YQ},{rotation:t+2*Math.PI,anchor:h,easing:c.Vv})})),v("pan-to-london",(function(){m.animate({center:f,duration:2e3})})),v("elastic-to-moscow",(function(){m.animate({center:s,duration:2e3,easing:g})})),v("bounce-to-istanbul",(function(){m.animate({center:l,duration:2e3,easing:M})})),v("spin-to-rome",(function(){var t=m.getCenter();m.animate({center:[t[0]+(h[0]-t[0])/2,t[1]+(h[1]-t[1])/2],rotation:Math.PI,easing:c.YQ},{center:h,rotation:2*Math.PI,easing:c.Vv})})),v("fly-to-bern",(function(){w(d,(function(){}))})),v("tour",(function(){var t=[f,d,h,s,l],n=-1;!function o(e){e?++n<t.length?setTimeout((function(){w(t[n],o)}),0===n?0:750):alert("Tour complete"):alert("Tour cancelled")}(!0)}))}},function(t){"use strict";var n;n=1137,t(t.s=n)}]);
//# sourceMappingURL=animation.js.map