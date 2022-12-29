"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[181],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||h[f]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={id:"project",title:"Project",sidebar_label:"Project"},i=void 0,s={unversionedId:"concepts/project",id:"concepts/project",title:"Project",description:'In Pixelorama, the term "Project" refers to the entire sprite, which contains all of the frames it might have. Each project can be saved as a .pxo file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab.',source:"@site/docs/concepts/project.md",sourceDirName:"concepts",slug:"/concepts/project",permalink:"/Pixelorama-Docs/concepts/project",draft:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/concepts/project.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1672325926,formattedLastUpdatedAt:"Dec 29, 2022",frontMatter:{id:"project",title:"Project",sidebar_label:"Project"},sidebar:"docs",previous:{title:"Cel",permalink:"/Pixelorama-Docs/concepts/cel"},next:{title:"Ways to contribute",permalink:"/Pixelorama-Docs/development_and_contributing"}},l={},c=[{value:"Saving a project",id:"saving-a-project",level:2},{value:".pxo files",id:"pxo-files",level:2},{value:"File structure",id:"file-structure",level:3},{value:"ZSTD compression",id:"zstd-compression",level:3}],p={toc:c};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'In Pixelorama, the term "Project" refers to the entire sprite, which contains all of the frames it might have. Each project can be saved as a ',(0,o.kt)("inlineCode",{parentName:"p"},".pxo")," file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab."),(0,o.kt)("p",null,"A Project contains the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A set of frames for animations, along with their duration, animation tags and FPS, as well as multiple layers. Frames and layers intersect and create ",(0,o.kt)("a",{parentName:"li",href:"cel"},"cels"),", which are the editable images themselves of the project."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"../user_manual/transforming/#scale"},"size")," - width and height - in pixels."),(0,o.kt)("li",{parentName:"ul"},"A name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"brush"},"Brushes")," that are local to that specific project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../user_manual/user_interface/canvas/#rulers-and-guides"},"Guides")," - lines that help you draw.")),(0,o.kt)("h2",{id:"saving-a-project"},"Saving a project"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"../user_manual/save_and_export/#saving"},"this page")," to learn how to save a project."),(0,o.kt)("h2",{id:"pxo-files"},".pxo files"),(0,o.kt)("p",null,"Pxo files are Pixelorama's custom file format that saves the entire content of the project. It cannot be opened in other image editors."),(0,o.kt)("h3",{id:"file-structure"},"File structure"),(0,o.kt)("p",null,"The file essentially consists of two lines. The first line is all of the project's metadata, such as project name, size, number of layers, number of frames, tags, ",(0,o.kt)("a",{parentName:"p",href:"brush/#project-brushes"},"project brushes"),", fps etc. They are stored in JSON form, so they can easily be read by other software."),(0,o.kt)("p",null,"The second line contains all of the image data as buffers. First, all of the image data for every ",(0,o.kt)("a",{parentName:"p",href:"cel"},"cel")," is being stored. It starts from the very first cel, which is equivalent to the bottom-most layer and the first frame, then it continues for every layer from bottom to top and once it reaches the final layer, moves on to the next frame, where it again starts from the bottommost layer and continues saving up to the top. After all of the cel image data has been saved, the image data of the project brushes are being saved, if the project has any."),(0,o.kt)("p",null,"So, in order for a software to read the data of a pxo, it first reads the first line as a JSON object, and then it loops through the buffers, which all have the same size as the project size, until it reads all of the number of frames and layers. After that, if there are more buffers, they correspond to the project brushes, the size of which is stored in the JSON object."),(0,o.kt)("h3",{id:"zstd-compression"},"ZSTD compression"),(0,o.kt)("p",null,"During save, you hare given with the option to select ZSTD compression. If you do, this will reduce your pxo size, but if your project is large and has a lot of content in it, it may take some time to save and load it. Saving projects with ZSTD compression is currently unsupported in the Web version. If you are writing software that supports .pxo file, make sure to detect if the files are compressed first."))}h.isMDXComponent=!0}}]);