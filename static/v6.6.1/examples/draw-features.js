(self.webpackChunk=self.webpackChunk||[]).push([[1695],{5075:function(e,n,t){"use strict";var c,o=t(9341),u=t(1625),r=t(640),s=t(7340),i=t(1940),w=t(7842),f=t(710),a=new w.Z({source:new s.Z}),l=new i.Z({wrapX:!1}),m=new f.Z({source:l}),p=new u.Z({layers:[a,m],target:"map",view:new r.ZP({center:[-11e6,46e5],zoom:4})}),d=document.getElementById("type");function v(){"None"!==d.value&&(c=new o.ZP({source:l,type:d.value}),p.addInteraction(c))}d.onchange=function(){p.removeInteraction(c),v()},document.getElementById("undo").addEventListener("click",(function(){c.removeLastPoint()})),v()}},function(e){"use strict";var n;n=5075,e(e.s=n)}]);
//# sourceMappingURL=draw-features.js.map