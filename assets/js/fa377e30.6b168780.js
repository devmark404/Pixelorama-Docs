"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[431],{4487:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>l});var r=s(4848),a=s(8453);const o={id:"project",title:"Project",sidebar_label:"Project"},i=void 0,n={id:"concepts/project",title:"Project",description:'In Pixelorama, the term "Project" refers to the entire sprite, which contains all of the frames it might have. Each project can be saved as a .pxo file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab.',source:"@site/docs/concepts/project.md",sourceDirName:"concepts",slug:"/concepts/project",permalink:"/Pixelorama-Docs/concepts/project",draft:!1,unlisted:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/concepts/project.md",tags:[],version:"current",lastUpdatedBy:"Emmanouil Papadeas",lastUpdatedAt:1716414509e3,frontMatter:{id:"project",title:"Project",sidebar_label:"Project"},sidebar:"docs",previous:{title:"Layer",permalink:"/Pixelorama-Docs/concepts/layer"},next:{title:"Extension Basics",permalink:"/Pixelorama-Docs/extension_system/extension_basics"}},c={},l=[{value:"Saving a project",id:"saving-a-project",level:2},{value:".pxo files",id:"pxo-files",level:2},{value:"File structure",id:"file-structure",level:3},{value:"ZSTD compression",id:"zstd-compression",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:['In Pixelorama, the term "Project" refers to the entire sprite, which contains all of the frames it might have. Each project can be saved as a ',(0,r.jsx)(t.code,{children:".pxo"})," file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab."]}),"\n",(0,r.jsx)(t.p,{children:"A Project contains the following properties:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A set of frames for animations, along with their duration, animation tags and FPS, as well as multiple layers. Frames and layers intersect and create ",(0,r.jsx)(t.a,{href:"cel",children:"cels"}),", which are the editable images themselves of the project."]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"../user_manual/transforming/#scale",children:"size"})," - width and height - in pixels."]}),"\n",(0,r.jsx)(t.li,{children:"A name."}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"brush",children:"Brushes"})," that are local to that specific project."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../user_manual/user_interface/canvas/#rulers-and-guides",children:"Guides"})," - lines that help you draw."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"saving-a-project",children:"Saving a project"}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"../user_manual/save_and_export/#saving",children:"this page"})," to learn how to save a project."]}),"\n",(0,r.jsx)(t.h2,{id:"pxo-files",children:".pxo files"}),"\n",(0,r.jsx)(t.p,{children:"Pxo files are Pixelorama's custom file format that saves the entire content of the project. It cannot be opened in other image editors."}),"\n",(0,r.jsx)(t.h3,{id:"file-structure",children:"File structure"}),"\n",(0,r.jsxs)(t.p,{children:["The file essentially consists of two lines. The first line is all of the project's metadata, such as project name, size, number of layers, number of frames, tags, ",(0,r.jsx)(t.a,{href:"brush/#project-brushes",children:"project brushes"}),", fps etc. They are stored in JSON form, so they can easily be read by other software."]}),"\n",(0,r.jsxs)(t.p,{children:["The second line contains all of the image data as buffers. First, all of the image data for every ",(0,r.jsx)(t.a,{href:"cel",children:"cel"})," is being stored. It starts from the very first cel, which is equivalent to the bottom-most layer and the first frame, then it continues for every layer from bottom to top and once it reaches the final layer, moves on to the next frame, where it again starts from the bottommost layer and continues saving up to the top. After all of the cel image data has been saved, the image data of the project brushes are saved if the project has any."]}),"\n",(0,r.jsx)(t.p,{children:"So, in order for a software to read the data of a pxo, it first reads the first line as a JSON object, and then it loops through the buffers, which all have the same size as the project size, until it reads all the frames and layers. After that, if there are more buffers, they correspond to the project brushes, the size of which is stored in the JSON object."}),"\n",(0,r.jsx)(t.h3,{id:"zstd-compression",children:"ZSTD compression"}),"\n",(0,r.jsx)(t.p,{children:"During save, you are given the option to select ZSTD compression. If you do, this will reduce your pxo size, but if your project is large and has a lot of content in it, it may take some time to save and load it. Saving projects with ZSTD compression is currently unsupported in the Web version. If you are writing software that supports .pxo files, make sure to detect if the files are compressed first."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>n});var r=s(6540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);