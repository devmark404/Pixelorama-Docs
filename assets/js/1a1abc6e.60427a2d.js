"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[333],{1742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(4848),s=n(8453);const i={id:"layer",title:"Layer",sidebar_label:"Layer"},a=void 0,l={id:"concepts/layer",title:"Layer",description:"An artwork in Pixelorama can be consisted by several layers, giving you better control over different parts of the image, by allowing you to edit these parts without affecting any other part of the image. Layers are stacked on top of each other, which means that bottom layers are being drawn behind top layers. You can edit them in the timeline. Each layer consists of a cels, the number of which depends on the number of frames that the project has.",source:"@site/docs/concepts/layer.md",sourceDirName:"concepts",slug:"/concepts/layer",permalink:"/Pixelorama-Docs/concepts/layer",draft:!1,unlisted:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/concepts/layer.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1723039016e3,frontMatter:{id:"layer",title:"Layer",sidebar_label:"Layer"},sidebar:"docs",previous:{title:"Cel",permalink:"/Pixelorama-Docs/concepts/cel"},next:{title:"Project",permalink:"/Pixelorama-Docs/concepts/project"}},d={},o=[{value:"Types of layers",id:"types-of-layers",level:2},{value:"Pixel layers",id:"pixel-layers",level:3},{value:"Group layers",id:"group-layers",level:3},{value:"3D layers",id:"3d-layers",level:3},{value:"Blend modes",id:"blend-modes",level:2},{value:"Layer effects",id:"layer-effects",level:2},{value:"Clipping mask",id:"clipping-mask",level:2}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["An artwork in Pixelorama can be consisted by several layers, giving you better control over different parts of the image, by allowing you to edit these parts without affecting any other part of the image. Layers are stacked on top of each other, which means that bottom layers are being drawn behind top layers. You can edit them in the ",(0,r.jsx)(t.a,{href:"../user_manual/user_interface/timeline",children:"timeline"}),". Each layer consists of a ",(0,r.jsx)(t.a,{href:"cel",children:"cels"}),", the number of which depends on the number of frames that the project has."]}),"\n",(0,r.jsx)(t.h2,{id:"types-of-layers",children:"Types of layers"}),"\n",(0,r.jsx)(t.p,{children:"Right now, there are three types of layers. Pixel layers, group layers, and 3D layers."}),"\n",(0,r.jsx)(t.h3,{id:"pixel-layers",children:"Pixel layers"}),"\n",(0,r.jsx)(t.p,{children:"Pixel layers are the default and most straight forward type of layer. Their cels contain regular raster image data, in which you can normally draw and manipulate pixels. Pixel cels are the only types of cels that can be linked right now."}),"\n",(0,r.jsx)(t.h3,{id:"group-layers",children:"Group layers"}),"\n",(0,r.jsx)(t.p,{children:"Group layers are used solely for organization and their cels are empty and do not hold any actual data. They can be used to group common layers together, and they can expanded and collapsed from view in the timeline. Right now, they do not affect blending or masking."}),"\n",(0,r.jsx)(t.h3,{id:"3d-layers",children:"3D layers"}),"\n",(0,r.jsx)(t.p,{children:"The cels of 3D layers contain 3D mesh, lighting, camera and environment data, that are being rasterized based on the size of the canvas. They can contain lights, such as directional lights, spot lights and point lights, and a variety of primitive meshes, including boxes, capsules, spheres, cylinders, prisms, toruses, planes and even text. Importing custom .obj models is also possible."}),"\n",(0,r.jsx)(t.h2,{id:"blend-modes",children:"Blend modes"}),"\n",(0,r.jsx)(t.p,{children:"The blend mode of each layer determines how its colors blend with the colors of the layer directly below it. Pixelorama supports the following blend modes:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Category"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Normal"}),(0,r.jsx)(t.td,{children:"Normal"}),(0,r.jsx)(t.td,{children:"The blend layer colors are simply placed on top of the base colors."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Darken"}),(0,r.jsx)(t.td,{children:"Darken"}),(0,r.jsx)(t.td,{children:"Keeps the darker colors between the blend and the base layers."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Multiply"}),(0,r.jsx)(t.td,{children:"Darken"}),(0,r.jsx)(t.td,{children:"Multiplies the numerical values of the two colors, giving a darker result."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Color burn"}),(0,r.jsx)(t.td,{children:"Darken"}),(0,r.jsx)(t.td,{children:"Darkens by increasing the contrast between the blend and base colors."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Linear burn"}),(0,r.jsx)(t.td,{children:"Darken"}),(0,r.jsx)(t.td,{children:"Darkens the base colors based on the value of the blend colors."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Lighten"}),(0,r.jsx)(t.td,{children:"Lighten"}),(0,r.jsx)(t.td,{children:"Keeps the lighter colors between the blend and the base layers."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Screen"}),(0,r.jsx)(t.td,{children:"Lighten"}),(0,r.jsx)(t.td,{children:"Lightens the colors by multiplying the inverse of the blend and base colors."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Color dodge"}),(0,r.jsx)(t.td,{children:"Lighten"}),(0,r.jsx)(t.td,{children:"Lightens by decreasing the contrast between the blend and base colors."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Add"}),(0,r.jsx)(t.td,{children:"Lighten"}),(0,r.jsx)(t.td,{children:"Lightens by adding the numerical values of the two colors. Also known as linear dodge."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Overlay"}),(0,r.jsx)(t.td,{children:"Contrast"}),(0,r.jsx)(t.td,{children:"Like Screen mode in bright base colors and Multiply mode in darker base colors."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Soft light"}),(0,r.jsx)(t.td,{children:"Contrast"}),(0,r.jsx)(t.td,{children:"Similar to Overlay, but more subtle."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Hard light"}),(0,r.jsx)(t.td,{children:"Contrast"}),(0,r.jsx)(t.td,{children:"Like Screen mode in bright blending colors and Multiply mode in darker colors."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Difference"}),(0,r.jsx)(t.td,{children:"Inversion"}),(0,r.jsx)(t.td,{children:"Subtracts the blend color from the base or vice versa, depending on the brightness."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Exclusion"}),(0,r.jsx)(t.td,{children:"Inversion"}),(0,r.jsx)(t.td,{children:"Similar to Difference mode, but with less contrast between the colors."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Subtract"}),(0,r.jsx)(t.td,{children:"Inversion"}),(0,r.jsx)(t.td,{children:"Darkens by subtracting the numerical values of the blend colors from the base."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Divide"}),(0,r.jsx)(t.td,{children:"Inversion"}),(0,r.jsx)(t.td,{children:"Divides the numerical values of the base colors by the blend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Hue"}),(0,r.jsx)(t.td,{children:"Component"}),(0,r.jsx)(t.td,{children:"Uses the blend hue while preserving the base saturation and luminosity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Saturation"}),(0,r.jsx)(t.td,{children:"Component"}),(0,r.jsx)(t.td,{children:"Uses the blend saturation while preserving the base hue and luminosity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Color"}),(0,r.jsx)(t.td,{children:"Component"}),(0,r.jsx)(t.td,{children:"Uses the blend hue and saturation while preserving the base luminosity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Luminosity"}),(0,r.jsx)(t.td,{children:"Component"}),(0,r.jsx)(t.td,{children:"Uses the blend luminosity while preserving the base hue and saturation."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"layer-effects",children:"Layer effects"}),"\n",(0,r.jsxs)(t.p,{children:["Layer effects are image effects that are being applied to the layer in a non-destructive way. This means that they do not directly modify the image data, which allows artists to disable and enable them at will, without having to worry that their work will be modified in a permanent way. They are only being applied on ",(0,r.jsx)(t.a,{href:"../user_manual/save_and_export",children:"export"}),', and they can be previewed in the canvas, if "Display Layer Effects" is enabled, under the View menu. Each layer can contain multiple layer effects.']}),"\n",(0,r.jsxs)(t.p,{children:['To add a layer effect, you can click on the "FX" button in the layer area of the timeline. A window will appear, that lets you add, remove and change the order of layer effects. You can also change the properties of each effect. For a list of all available layer effects, see ',(0,r.jsx)(t.a,{href:"../user_manual/image_effects#list-of-image-effects",children:"image effects"}),"."]}),"\n",(0,r.jsx)(t.admonition,{title:"Layer vs image effects",type:"info",children:(0,r.jsxs)(t.p,{children:["The difference between layer effects and image effects, is that layer effects can only be ",(0,r.jsx)(t.strong,{children:"applied per-layer"})," and are ",(0,r.jsx)(t.strong,{children:"non-destructive"}),", while image effects can be applied to ",(0,r.jsx)(t.strong,{children:"multiple cels"})," at the same time, and are ",(0,r.jsx)(t.strong,{children:"destructive"}),". Also, as of right now, layer effects cannot be animated."]})}),"\n",(0,r.jsx)(t.h2,{id:"clipping-mask",children:"Clipping mask"}),"\n",(0,r.jsx)(t.p,{children:'Clipping masks can be used to draw the content of the layer only on top of the non-transparent pixels of the layer directly below. In other words, the layer below the clipping mask is what controls the visibility of the content of the clipping mask. You can make a layer be a clipping mask by right-clicking the layer button in the timeline, and toggling "Clipping mask".'})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);