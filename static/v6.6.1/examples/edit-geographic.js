(self.webpackChunk=self.webpackChunk||[]).push([[75],{8:function(e,n,o){"use strict";var r=o(3919),s=o(7485),t=o(5356),a=o(9341),c=o(7292),w=o(1625),u=o(640),i=o(1940),f=o(7340),m=o(7842),d=o(710);(0,o(4589).eL)();var g=new i.Z({url:"data/geojson/countries.geojson",format:new r.Z}),l=new w.Z({target:"map",layers:[new m.Z({source:new f.Z}),new d.Z({source:g})],view:new u.ZP({center:[0,0],zoom:2})}),v=new s.Z,y=new t.Z({features:v.getFeatures()}),h=new a.ZP({type:"Polygon",source:g}),j=new c.Z({source:g});var p=document.getElementById("mode");function b(){switch(l.removeInteraction(y),l.removeInteraction(v),l.removeInteraction(h),l.removeInteraction(v),p.value){case"draw":l.addInteraction(h),l.addInteraction(j);break;case"modify":l.addInteraction(v),l.addInteraction(y),l.addInteraction(j)}}p.addEventListener("change",b),b()}},function(e){"use strict";var n;n=8,e(e.s=n)}]);
//# sourceMappingURL=edit-geographic.js.map