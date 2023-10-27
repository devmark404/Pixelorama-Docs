"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=n,u=f["".concat(i,".").concat(m)]||f[m]||d[m]||l;return r?a.createElement(u,o(o({ref:t},p),{},{components:r})):a.createElement(u,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6867:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={id:"cel",title:"Cel",sidebar_label:"Cel"},o=void 0,c={unversionedId:"concepts/cel",id:"concepts/cel",title:"Cel",description:'In Pixelorama, the term "Cel" (from celluloid) refers to the intersection of frames and layers of the project. Basically, every frame in a project has as many cels as there are layers. You could think of frames as a collection of cels, for every layer. So for example, if the project has 3 frames and 4 layers, each frame would have 4 cels, making the total cels 3 x 4 = 12.',source:"@site/docs/concepts/cel.md",sourceDirName:"concepts",slug:"/concepts/cel",permalink:"/Pixelorama-Docs/concepts/cel",draft:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/concepts/cel.md",tags:[],version:"current",lastUpdatedBy:"Emmanouil Papadeas",lastUpdatedAt:1698447019,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"cel",title:"Cel",sidebar_label:"Cel"},sidebar:"docs",previous:{title:"Brush",permalink:"/Pixelorama-Docs/concepts/brush"},next:{title:"Project",permalink:"/Pixelorama-Docs/concepts/project"}},i={},s=[{value:"Linked cels",id:"linked-cels",level:2}],p={toc:s};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'In Pixelorama, the term "Cel" (from ',(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Cel"},"celluloid"),") refers to the intersection of frames and layers of the project. Basically, every frame in a project has as many cels as there are layers. You could think of frames as a collection of cels, for every layer. So for example, if the project has 3 frames and 4 layers, each frame would have 4 cels, making the total cels 3 x 4 = 12."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Timeline Cels",src:r(7623).Z,width:"1547",height:"617"})),(0,n.kt)("p",null,"Cels can be found in the timeline. They are the square buttons you can click to edit. You can select/deselect multiple by holding the ",(0,n.kt)("kbd",null,"Control")," key and left-clicking individual cels, or hold the ",(0,n.kt)("kbd",null,"Shift")," key and left-click a cel to also select all of the cels between the one that was clicked and the one that has been selected last."),(0,n.kt)("h2",{id:"linked-cels"},"Linked cels"),(0,n.kt)("p",null,"You can also right-click cels to link them together. Linked cels share the same image data, meaning that if you make changes to one linked cel, the changes are shared with all other linked cels. Keep in mind that, as of right now, linked cels are layer-local. You cannot have cels linked that belong to different layers, only different frames. Linked cels are marked with a green outline."))}d.isMDXComponent=!0},7623:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/timeline_cels-0898fdec9fee247933df1fe7cf819616.png"}}]);