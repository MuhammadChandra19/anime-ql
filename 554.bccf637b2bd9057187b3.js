"use strict";(self.webpackChunkanime_ql=self.webpackChunkanime_ql||[]).push([[554],{2387:(t,o,r)=>{r.d(o,{Bp:()=>T,BL:()=>j,P4:()=>R,pN:()=>S,Jj:()=>m,bb:()=>x,wI:()=>P,ak:()=>u});var a=r(4942),i=function(t){var o=localStorage.getItem(t);return o?JSON.parse(o):null},e=function(t,o){localStorage.setItem(t,o)};function n(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){(0,a.Z)(t,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))}))}return t}var p=r(2982);function g(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.push.apply(r,a)}return r}function w(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?g(Object(r),!0).forEach((function(o){(0,a.Z)(t,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))}))}return t}var c,s,l=function(){var t=function(){return i("collectionList")||{}},o=function(){return i("collectionNames")||{}},r=function(t){e("collectionList",JSON.stringify(t))},n=function(t){e("collectionNames",JSON.stringify(t))},d=function(t){var r=o();return Object.keys(r).find((function(o){return r[o]===t}))};return{removeCollection:function(a){var i=t(),e=o();delete i[a];var p=d(a);p&&delete e[p],r(i),n(e)},updateCollectionName:function(i,e){var p=t(),g=o(),c=p[i];delete p[i];var s=d(i);s&&(g[s]=e),n(g),r(w(w({},p),{},(0,a.Z)({},e,c)))},pushNewAnimeToCollection:function(o,i){var e=t()||{},n=w(w({},e),{},(0,a.Z)({},o,[].concat((0,p.Z)(e[o]?e[o]:[]),[i])));r(n)},createNewCollection:function(a,i){var e=t(),d=o();e[a]=[],d[i]=a,r(e),n(d)},getCollectionlist:t,getCollectionNameKey:d,getCollectionNames:o,removeAnimeFromCollection:function(o,i){var e=t(),n=e[o].filter((function(t){return t.id!==i}))||[],d=w(w({},e),{},(0,a.Z)({},o,n));r(d)}}}(),b=l.createNewCollection,f=l.getCollectionNameKey,x=l.getCollectionlist,h=l.removeCollection,v=l.pushNewAnimeToCollection,u=l.updateCollectionName,m=l.getCollectionNames,y=l.removeAnimeFromCollection,k=(c=function(){return i("animeStorage")||{}},s=function(t){e("animeStorage",JSON.stringify(t))},{deleteCollectionFromAnimeStorage:function(t,o){var r=c();delete r[o].collectionIds[t],s(r)},addCollectionIdToAnimeStorage:function(t,o){var r,i=c(),e=d(d({},i),{},(0,a.Z)({},t,d(d({},i[t]),{},{collectionIds:d(d({},null!==(r=i[t])&&void 0!==r&&r.collectionIds?i[t].collectionIds:{}),{},(0,a.Z)({},o,!0))})));s(e)},getAnimeStorage:function(t){var o=c();return o?o[t]:{}},deleteCollectionFromAllAnimeStorage:function(t){var o=c(),r=o;Object.keys(o).forEach((function(a){o[a].collectionIds[t]&&delete r[a].collectionIds[t]})),s(r)}}),C=k.addCollectionIdToAnimeStorage,Z=k.deleteCollectionFromAnimeStorage,S=k.getAnimeStorage,O=k.deleteCollectionFromAllAnimeStorage,j=function(t){var o=(new Date).getTime();b(t,o.toString())},T=function(t,o){v(t,o);var r=f(t);r&&C(o.id.toString(),r)},P=function(t,o){var r=f(t);r&&Z(r,o.toString()),y(t,o)},R=function(t){var o=f(t);o&&O(o),h(t)}},7993:(t,o,r)=>{r.d(o,{u:()=>m}),r(7294);var a,i,e,n,d,p,g,w=r(168),c=r(932),s=c.Z.div(a||(a=(0,w.Z)(["",""])),{display:"flex",justifyContent:"center",alignItems:"center",overflowX:"hidden",overflowY:"auto",position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"50",outline:"2px solid transparent",outlineOffset:"2px",":focus":{outline:"2px solid transparent",outlineOffset:"2px"},backgroundColor:"rgba(31, 41, 55, .8)"}),l=c.Z.div(i||(i=(0,w.Z)(["",""])),{position:"relative",width:"auto",marginTop:"1.5rem",marginBottom:"1.5rem",marginLeft:"auto",marginRight:"auto",maxWidth:"48rem"}),b=c.Z.div(e||(e=(0,w.Z)(["",""])),{borderWidth:"0px",borderRadius:"0.5rem","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",position:"relative",display:"flex",flexDirection:"column",width:"100%","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))",outline:"2px solid transparent",outlineOffset:"2px",":focus":{outline:"2px solid transparent",outlineOffset:"2px"}}),f=c.Z.div(n||(n=(0,w.Z)(["",""])),{display:"flex",alignItems:"flex-start",justifyContent:"space-between",padding:"0.5rem",borderBottomWidth:"1px",borderStyle:"solid","--tw-border-opacity":"1",borderColor:"rgba(209, 213, 219, var(--tw-border-opacity))",borderTopLeftRadius:"0.25rem",borderTopRightRadius:"0.25rem"}),x=c.Z.div(d||(d=(0,w.Z)(["",""])),{fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"500"}),h=c.Z.div(p||(p=(0,w.Z)(["","\n  span {\n    text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full\n  }\n"])),{backgroundColor:"rgba(0, 0, 0, 0)",borderWidth:"0px","--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",float:"right",cursor:"pointer"}),v=c.Z.div(g||(g=(0,w.Z)(["",""])),{position:"relative",padding:"1rem",flex:"1 1 auto"}),u=r(917),m=function(t){var o=t.onClose,r=t.title,a=t.children;return(0,u.tZ)(s,null,(0,u.tZ)(l,null,(0,u.tZ)(b,{css:{"@media (min-width: 768px)":{width:"500px"}}},(0,u.tZ)(f,null,(0,u.tZ)(x,null,r),(0,u.tZ)(h,{onClick:o},(0,u.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",css:{height:"1.25rem",width:"1.25rem"},viewBox:"0 0 20 20",fill:"currentColor"},(0,u.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})))),(0,u.tZ)(v,null,a))))}},425:(t,o,r)=>{r.d(o,{BS:()=>k,Gn:()=>m,Wr:()=>S,Z_:()=>j,_P:()=>v,aK:()=>y,g0:()=>C,kR:()=>u,pM:()=>Z,ph:()=>O});var a,i,e,n,d,p,g,w,c,s,l,b,f=r(168),x=r(917),h=r(932),v=h.Z.div(a||(a=(0,f.Z)(["",""])),{width:"100%"}),u=h.Z.div(i||(i=(0,f.Z)(["\n  ","\n\n  > * {\n    margin: 0;\n    width: 100%;\n  }\n"])),{width:"100%",display:"grid",gap:"1.25rem",paddingLeft:"0.25rem",paddingRight:"0.25rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},"@media (min-width: 768px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))",paddingLeft:"0.5rem",paddingRight:"0.5rem"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}),m=h.Z.div(e||(e=(0,f.Z)(["\n  ","\n\n  > * {\n    margin: 0;\n    width: 100%;\n  }\n"])),{cursor:"pointer",textDecoration:"none",overflow:"hidden"}),y=h.Z.div(n||(n=(0,f.Z)(["\n  ","\n\n  > * {\n  margin: 0;\n  width: 100%;\n  }\n\n"])),{cursor:"pointer",textDecoration:"none",borderRadius:"0.5rem",width:"100%",display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"1px","--tw-bg-opacity":"1",backgroundColor:"rgba(249, 250, 251, var(--tw-bg-opacity))",":hover":{"--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},overflow:"hidden"}),k=(h.Z.div(d||(d=(0,f.Z)(["\n  ","\n"])),{padding:"0.5rem"}),h.Z.div(p||(p=(0,f.Z)(["\n  ","\n  img {\n    ","\n    margin: 0 !important;\n  }\n"])),{position:"relative",maxWidth:"100%",paddingBottom:"150%","--tw-bg-opacity":"1",backgroundColor:"rgba(156, 163, 175, var(--tw-bg-opacity))",overflow:"hidden"},{position:"absolute",width:"100%",height:"100%",objectFit:"cover"})),C=((0,x.iv)(g||(g=(0,f.Z)(["\n  ","\n  font-size: 14px;\n  line-height: 21px;\n  margin-top: 10px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n"])),{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms","--tw-text-opacity":"1",color:"rgba(75, 85, 99, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgba(120, 53, 15, var(--tw-text-opacity))"},overflow:"hidden",fontWeight:"500"}),h.Z.button(w||(w=(0,f.Z)(["\n  ","\n"])),{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",position:"absolute",bottom:"0px",zIndex:"10",margin:"0.25rem",display:"inline-block",borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))",fontWeight:"700","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",lineHeight:"1.5",textTransform:"uppercase","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(185, 28, 28, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},":focus":{"--tw-bg-opacity":"1",backgroundColor:"rgba(185, 28, 28, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",outline:"2px solid transparent",outlineOffset:"2px","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)"},":active":{"--tw-bg-opacity":"1",backgroundColor:"rgba(30, 64, 175, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},width:"2.25rem",height:"2.25rem"})),Z=h.Z.div(c||(c=(0,f.Z)(["\n  ","\n  background-position: 50% 35%;\n  background-repeat: no-repeat;\n  background-size: cover;\n"])),{height:"200px",width:"100%","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","@media (min-width: 768px)":{height:"400px"}}),S=h.Z.div(s||(s=(0,f.Z)(["\n  ","\n  > * {\n    margin: 0;\n    width: 100%;\n  }\n"])),{width:"100%",display:"grid",gap:"1.25rem",paddingLeft:"0.25rem",paddingRight:"0.25rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},"@media (min-width: 768px)":{gridTemplateColumns:"210px auto",paddingLeft:"0.5rem",paddingRight:"0.5rem"}}),O=h.Z.div(l||(l=(0,f.Z)(["\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(255,255,255,0.03267244397759106) 84%, rgba(151,151,151,1) 100%);\n"]))),j=h.Z.div(b||(b=(0,f.Z)(["\n  background-position: 50% 35%;\n  background-repeat: no-repeat;\n  background-size: cover;\n"])))},7029:(t,o,r)=>{r.d(o,{A:()=>d,W:()=>p});var a,i,e=r(168),n=r(932),d=n.Z.div(a||(a=(0,e.Z)(["\n  ","\n"])),{fontFamily:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"--tw-bg-opacity":"1",backgroundColor:"rgba(229, 231, 235, var(--tw-bg-opacity))",minHeight:"100vh"}),p=n.Z.div(i||(i=(0,e.Z)(["\n  ","\n"])),{maxWidth:"72rem",marginLeft:"auto",marginRight:"auto",paddingTop:"1.25rem",paddingBottom:"1.25rem",height:"100%"})},7518:(t,o,r)=>{r.d(o,{Lq:()=>i,gr:()=>e,ud:()=>a,zK:()=>n});var a={transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",height:"34px",display:"inline-block",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0.625rem",paddingBottom:"0.625rem","--tw-bg-opacity":"1",backgroundColor:"rgba(37, 99, 235, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"500",fontSize:"0.75rem",lineHeight:"1.25",textTransform:"uppercase",borderRadius:"0.25rem","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(29, 78, 216, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},":focus":{"--tw-bg-opacity":"1",backgroundColor:"rgba(29, 78, 216, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",outline:"2px solid transparent",outlineOffset:"2px","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)"},":active":{"--tw-bg-opacity":"1",backgroundColor:"rgba(30, 64, 175, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}},i={transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",height:"34px",display:"inline-block",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0.625rem",paddingBottom:"0.625rem","--tw-bg-opacity":"1",backgroundColor:"rgba(37, 99, 235, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"500",fontSize:"0.75rem",lineHeight:"1.25",textTransform:"uppercase",borderRadius:"0.25rem","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",":focus":{outline:"2px solid transparent",outlineOffset:"2px","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"},pointerEvents:"none",opacity:"0.6"},e={transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",height:"34px",display:"inline-block",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0.625rem",paddingBottom:"0.625rem","--tw-bg-opacity":"1",backgroundColor:"rgba(245, 158, 11, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"500",fontSize:"0.75rem",lineHeight:"1.25",textTransform:"uppercase",borderRadius:"0.25rem","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(217, 119, 6, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},":focus":{"--tw-bg-opacity":"1",backgroundColor:"rgba(217, 119, 6, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",outline:"2px solid transparent",outlineOffset:"2px","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)"},":active":{"--tw-bg-opacity":"1",backgroundColor:"rgba(180, 83, 9, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}},n={transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",display:"inline-block",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0.625rem",paddingBottom:"0.625rem","--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"500",fontSize:"0.75rem",lineHeight:"1.25",textTransform:"uppercase",borderRadius:"9999px","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(185, 28, 28, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},":focus":{"--tw-bg-opacity":"1",backgroundColor:"rgba(185, 28, 28, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",outline:"2px solid transparent",outlineOffset:"2px","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)"},":active":{"--tw-bg-opacity":"1",backgroundColor:"rgba(153, 27, 27, var(--tw-bg-opacity))","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}}}}]);