(self.webpackChunk=self.webpackChunk||[]).push([[4432],{6722:function(e,r,n){"use strict";var t,a=n(6900),o=n(1625),i=n(640),s=n(5659),l=n(5367),u=n(6363),c=n(2864),w=n(7389),f=n(6806),d=n(6620),g=n(1940),v=n(2157),m=n(5848),h=n(7485),k=n(710),y=n(7842),b=n(6666),p=new s.Z({color:"rgba(255, 153, 0, 0.8)"}),M=new l.Z({color:"rgba(255, 204, 0, 0.2)",width:1}),x=new s.Z({color:"#fff"}),_=new l.Z({color:"rgba(0, 0, 0, 0.6)",width:3}),q=new s.Z({color:"rgba(255, 255, 255, 0.01)"});function z(e){var r=e.get("name"),n=5+20*(parseFloat(r.substr(2))-5);return new u.ZP({geometry:e.getGeometry(),image:new c.Z({radius1:n,radius2:3,points:5,angle:Math.PI,fill:p,stroke:M})})}var E,F=null;F=new k.Z({source:new d.Z({distance:40,source:new g.Z({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new a.ZP({extractStyles:!1})})}),style:function(e,r){r!=E&&(!function(e){t=0;for(var r,n,a=F.getSource().getFeatures(),o=a.length-1;o>=0;--o){var i,s=(r=a[o]).get("features"),l=(0,b.lJ)(),u=void 0;for(u=0,i=s.length;u<i;++u)(0,b.l7)(l,s[u].getGeometry().getExtent());t=Math.max(t,i),n=.25*((0,b.dz)(l)+(0,b.Cr)(l))/e,r.set("radius",n)}}(r),E=r);var n=e.get("features").length;return n>1?new u.ZP({image:new w.Z({radius:e.get("radius"),fill:new s.Z({color:[255,153,0,Math.min(.8,.4+n/t)]})}),text:new f.Z({text:n.toString(),fill:x,stroke:_})}):z(e.get("features")[0])}});var S=new y.Z({source:new v.Z({layer:"toner"})});new o.Z({layers:[S,F],interactions:(0,m.ce)().extend([new h.Z({condition:function(e){return"pointermove"==e.type||"singleclick"==e.type},style:function(e){for(var r,n=[new u.ZP({image:new w.Z({radius:e.get("radius"),fill:q})})],t=e.get("features"),a=t.length-1;a>=0;--a)r=t[a],n.push(z(r));return n}})]),target:"map",view:new i.ZP({center:[0,0],zoom:2})})}},function(e){"use strict";var r;r=6722,e(e.s=r)}]);
//# sourceMappingURL=earthquake-clusters.js.map