"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[887],{226:function(n,t,e){var r=e(439),a=e(791);t.Z=function(n,t){var e=(0,a.useState)(null),i=(0,r.Z)(e,2),c=i[0],o=i[1],u=(0,a.useState)(null),s=(0,r.Z)(u,2),p=s[0],d=s[1];return(0,a.useEffect)((function(){n(t).then((function(n){return o(n)})).catch((function(n){return d(n.message)}))}),[t,n]),[c,o,{error:p}]}},887:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,i,c,o=e(439),u=e(265),s=e(226),p=e(826),d=(e(791),e(689)),f=e(87),x=e(168),l=e(867),h=l.default.ul(r||(r=(0,x.Z)(["\n  padding: 10px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n"]))),v=(l.default.div(a||(a=(0,x.Z)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 5px;\n  border-radius: 10px;\n  height: 350px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n\n  &:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  }\n"]))),l.default.img(i||(i=(0,x.Z)(["\n  object-fit: cover;\n  height: 250px;\n  width: 180px;\n  border-radius: 10px;\n  margin-bottom: 15px;\n"]))),l.default.p(c||(c=(0,x.Z)(["\n  text-align: center;\n  color: teal;\n  font-weight: 600;\n  font-size: 20px;\n  margin: 5px;\n"]))),e(184)),g=function(){var n=(0,s.Z)(p.Yx),t=(0,o.Z)(n,1)[0],e=(0,d.TH)();return(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Trending today"}),(0,v.jsx)(h,{children:null===t||void 0===t?void 0:t.map((function(n){return(0,v.jsx)("li",{children:(0,v.jsx)(f.rU,{state:{from:e},to:"movies/".concat(n.id.toString()),children:(0,v.jsx)(u.Z,{movie:n})})},n.id)}))})]})}},265:function(n,t,e){e.d(t,{Z:function(){return x}});e(791);var r,a,i,c=e(184),o=function(){return(0,c.jsx)("div",{children:"Image is coming soon..."})},u=e(168),s=e(867),p=s.default.div(r||(r=(0,u.Z)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 5px;\n  border-radius: 10px;\n  height: 350px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n\n  &:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);\n  }\n"]))),d=s.default.img(a||(a=(0,u.Z)(["\n  object-fit: cover;\n  height: 250px;\n  width: 180px;\n  border-radius: 10px;\n  margin-bottom: 15px;\n"]))),f=s.default.p(i||(i=(0,u.Z)(["\n  text-align: center;\n  color: teal;\n  font-weight: 600;\n  font-size: 20px;\n  margin: 5px;\n"]))),x=function(n){var t=n.movie;return(0,c.jsxs)(p,{children:[(0,c.jsx)(f,{children:t.original_title}),null!==t.poster_path?(0,c.jsx)(d,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.tagline}):(0,c.jsx)(o,{})]})}},826:function(n,t,e){e.d(t,{Mc:function(){return s},Yx:function(){return u},ix:function(){return p},mo:function(){return d},xj:function(){return f}});var r=e(861),a=e(757),i=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="fd414160c84010c37fd4e795cc45de31",u=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=887.8cb636f0.chunk.js.map