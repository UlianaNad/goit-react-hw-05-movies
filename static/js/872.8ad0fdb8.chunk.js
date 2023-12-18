"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[872],{226:function(n,t,e){var r=e(439),a=e(791);t.Z=function(n,t){var e=(0,a.useState)(null),u=(0,r.Z)(e,2),c=u[0],i=u[1],o=(0,a.useState)(null),s=(0,r.Z)(o,2),p=s[0],f=s[1];return(0,a.useEffect)((function(){n(t).then((function(n){return i(n)})).catch((function(n){return f(n.message)}))}),[t,n]),[c,i,{error:p}]}},872:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,a,u,c=e(439),i=e(226),o=e(826),s=(e(791),e(689)),p=e(168),f=e(867),d=f.default.ul(r||(r=(0,p.Z)(["\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex-wrap: wrap;\n"]))),l=f.default.li(a||(a=(0,p.Z)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 5px;\n  border-radius: 10px;\n  font-size: 12px;\n  &:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);\n  }\n"]))),v=f.default.div(u||(u=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 5px;\n"]))),x=e(184),h=function(){var n=(0,s.UO)().movieId,t=(0,i.Z)(o.mo,n),e=(0,c.Z)(t,1)[0];return(0,x.jsx)("div",{children:(0,x.jsx)(d,{children:0!==(null===e||void 0===e?void 0:e.length)?null===e||void 0===e?void 0:e.map((function(n){return(0,x.jsxs)(l,{children:[(0,x.jsx)("p",{children:n.content}),(0,x.jsxs)(v,{children:[(0,x.jsx)("p",{children:n.author}),(0,x.jsx)("p",{children:n.created_at})]})]},n.id)})):(0,x.jsx)("h2",{children:"There is no reviews yet..."})})})}},826:function(n,t,e){e.d(t,{Mc:function(){return s},Yx:function(){return o},ix:function(){return p},mo:function(){return f},xj:function(){return d}});var r=e(861),a=e(757),u=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="fd414160c84010c37fd4e795cc45de31",o=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=872.8ad0fdb8.chunk.js.map