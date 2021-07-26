(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[1],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||c[p]||i;return n?r.createElement(m,o(o({ref:t},h),{},{components:n})):r.createElement(m,o({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8771:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={id:"shading",title:"Shading",sidebar_label:"Shading"},l={unversionedId:"user_manual/shading",id:"user_manual/shading",isDocsHomePage:!1,title:"Shading",description:"Pixelorama's shading tool can be used to easily add lighting and shadows to the artwork. You can use it the same way you use the Pencil or Eraser tools, you mouse press on where the pixels of the sprite where you want to apply the shading. Similar to Pencil and Eraser, you can change the affected area size and brush. As of right now, there are two modes of shading, Simple Shading and Hue Shifting, which you can switch from the tool's options.",source:"@site/docs/user_manual/shading.md",sourceDirName:"user_manual",slug:"/user_manual/shading",permalink:"/Pixelorama-Docs/user_manual/shading",editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/shading.md",version:"current",lastUpdatedBy:"Manolis Papadeas",lastUpdatedAt:1627317535,formattedLastUpdatedAt:"7/26/2021",sidebar_label:"Shading",frontMatter:{id:"shading",title:"Shading",sidebar_label:"Shading"},sidebar:"docs",previous:{title:"Selecting",permalink:"/Pixelorama-Docs/user_manual/selecting"},next:{title:"Transforming",permalink:"/Pixelorama-Docs/user_manual/transforming"}},u=[{value:"Simple Shading",id:"simple-shading",children:[]},{value:"Hue Shifting",id:"hue-shifting",children:[]}],h={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pixelorama's shading tool can be used to easily add lighting and shadows to the artwork. You can use it the same way you use the ",(0,i.kt)("a",{parentName:"p",href:"drawing"},"Pencil or Eraser tools"),", you mouse press on where the pixels of the sprite where you want to apply the shading. Similar to Pencil and Eraser, you can change the affected area size and brush. As of right now, there are two modes of shading, Simple Shading and Hue Shifting, which you can switch from the tool's options."),(0,i.kt)("h2",{id:"simple-shading"},"Simple Shading"),(0,i.kt)("p",null,"This is a fairly straightforward method of shading. You can choose to either lighten or darken the area where you clicked, as well as the shading value. The bigger the number, the more shading will be applied. All it does is simply increase (with lighting) or decrease (with shading) the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," of the pixel's colors, which represents the color's brightness. It essentially just makes the same colors brighter or darker."),(0,i.kt)("h2",{id:"hue-shifting"},"Hue Shifting"),(0,i.kt)("p",null,"Hue Shifting is a bit more complex than Simple Shading. Instead of just shifting the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," of the color, we also shift their ",(0,i.kt)("inlineCode",{parentName:"p"},"Hue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Saturation")," too. When we are brightening the colors, we shift their hue to move towards yellow (limit is set to roughly 60 Hue), we decrease their saturation and increase their value. On the contrary, when we are darkening the colors, their hue shifts towards purple (limit is set to roughly 270 Hue), their saturation increases and value decreases. This is all done automatically by the Shading tool, but you can also configure the amount the Hue, Saturation and Value change from the tool options."))}c.isMDXComponent=!0}}]);