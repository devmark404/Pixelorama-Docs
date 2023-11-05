"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[31],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=i,c=d["".concat(s,".").concat(m)]||d[m]||A[m]||o;return a?n.createElement(c,r(r({ref:t},h),{},{components:a})):n.createElement(c,r({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>A,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const o={id:"timeline",title:"The Timeline",sidebar_label:"The Timeline"},r=void 0,l={unversionedId:"user_manual/user_interface/timeline",id:"user_manual/user_interface/timeline",title:"The Timeline",description:"The timeline's main purpose is to help you with creating animations. It is composed of frames, which are used for creating animations, and layers, which help you separate your frames in different parts. Each frame is essentially a collection of multiple layers, and each individual intersection of a frame and a layer is called a cel. All frames have the same amount of layers.",source:"@site/docs/user_manual/user_interface/timeline.md",sourceDirName:"user_manual/user_interface",slug:"/user_manual/user_interface/timeline",permalink:"/Pixelorama-Docs/user_manual/user_interface/timeline",draft:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/user_interface/timeline.md",tags:[],version:"current",lastUpdatedBy:"Variable",lastUpdatedAt:1699196681,formattedLastUpdatedAt:"Nov 5, 2023",frontMatter:{id:"timeline",title:"The Timeline",sidebar_label:"The Timeline"},sidebar:"docs",previous:{title:"The Canvas",permalink:"/Pixelorama-Docs/user_manual/user_interface/canvas"},next:{title:"Drawing",permalink:"/Pixelorama-Docs/user_manual/drawing"}},s={},u=[{value:"Animation",id:"animation",level:2},{value:"FPS",id:"fps",level:3},{value:"Loop modes",id:"loop-modes",level:3},{value:"Onion skinning",id:"onion-skinning",level:3},{value:"Layers",id:"layers",level:2},{value:"Frames",id:"frames",level:2},{value:"Frame tags",id:"frame-tags",level:3},{value:"Cels",id:"cels",level:2}],h={toc:u};function A(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The timeline's main purpose is to help you with creating animations. It is composed of frames, which are used for creating animations, and layers, which help you separate your frames in different parts. Each frame is essentially a collection of multiple layers, and each individual intersection of a frame and a layer is called a ",(0,i.kt)("a",{parentName:"p",href:"../../concepts/cel"},"cel"),". All frames have the same amount of layers.\n",(0,i.kt)("img",{alt:"Screenshot of Pixelorama&#39;s timeline",src:a(7623).Z,width:"1547",height:"617"})),(0,i.kt)("h2",{id:"animation"},"Animation"),(0,i.kt)("p",null,"To preview your animation, you can click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Play")," button (or press ",(0,i.kt)("kbd",null,"F5"),") located on the top right side of the timeline. The button on the left (mapped to ",(0,i.kt)("kbd",null,"F4"),") is used to preview the animation backward."),(0,i.kt)("h3",{id:"fps"},"FPS"),(0,i.kt)("p",null,"On the top and far right side of the timeline, you will see a number, which has the default value of 6. This is the FPS, which stands for ",(0,i.kt)("inlineCode",{parentName:"p"},"Frames Per Second"),". To put it simply, this is the speed of the animation and it determines how many frames are being shown for every second. Having a value of 6 FPS, for example, will display 6 frames every second the animation is running."),(0,i.kt)("p",null,"For more details, you can read this ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Frame_rate"},"Wikipedia article"),"."),(0,i.kt)("h3",{id:"loop-modes"},"Loop modes"),(0,i.kt)("p",null,"The button located directly on the left of the FPS is used to change the animation loop mode. There are three loop modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cycle loop. When the animation reaches the final frame, it will start playing again from the first frame. This is the default option."),(0,i.kt)("li",{parentName:"ul"},"Ping-pong. When the animation reaches the final frame, it begins playing backward, starting from that final frame. When it reaches the first frame, it will again start playing forward until it reaches the final frame, and so on."),(0,i.kt)("li",{parentName:"ul"},"No loop. When the animation reaches the final frame, it simply stops playing.")),(0,i.kt)("h3",{id:"onion-skinning"},"Onion skinning"),(0,i.kt)("p",null,"Directly on the left of the loop mode button, you will find two buttons used for onion skinning. Onion skinning is useful for animations because it's a simple and easy way to preview the previous and next frames at the same time as the frame you are currently editing. For more details, you can read this ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Onion_skinning"},"Wikipedia article"),"."),(0,i.kt)("p",null,"The button on the right simply toggles onion skinning on and off, and the one on the left brings up options, like the amount of past (previous) and future (next) frames that appear, and blue-red mode, which tints the previous frames blue, and the next frames red."),(0,i.kt)("h2",{id:"layers"},"Layers"),(0,i.kt)("p",null,"On the left side of the timeline, you will see the layer buttons. Clicking on a layer button will select the current layer. Double-clicking will let you change the name of that layer."),(0,i.kt)("p",null,"The layer buttons have three more buttons on them. The first toggles the layer's visibility. While invisible, the layer cannot be edited by the user. It will also remain invisible on export. The second locks and unlocks the layer. If the layer is locked, it cannot be edited by the user, but it does remain visible. The third button is used to automatically link the new cels that are being created. If it's toggled on, it is essentially a fast way to create linked cels."),(0,i.kt)("p",null,"There are 6 more buttons located on top of the layers. These, in order of appearance: add a new layer, remove the currently active layer, move the current layer up and down, clone the current layer and merge the current layer with the one directly below it."),(0,i.kt)("h2",{id:"frames"},"Frames"),(0,i.kt)("p",null,"Directly above the cels, you will notice some buttons with each one having a number. These are the frame buttons, and the number they have is their order in the animation."),(0,i.kt)("p",null,"Clicking on a frame button will select that frame, and right-clicking a frame button will open up a menu. The menu options include a remove frame option, clone frame, move frame to the left, move frame to the right and frame properties. Clicking on frame properties brings up a window that lets you change the duration of that frame."),(0,i.kt)("admonition",{title:"frame duration",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"By default, the duration of each frame is set to 1x, which means it will take exactly as much time as the timeline FPS (frames per second). Setting it to 2x, for example, that frame will take twice as much time, while setting it to 0.5x will take half the time, meaning it will play out faster.")),(0,i.kt)("p",null,"You can also drag and drop frame buttons to re-arrange them. This will also affect their corresponding cels."),(0,i.kt)("p",null,"On the top side of the timeline, you will find frame-related buttons which offer the same functionality as the frame button right-click menu, like adding, removing, cloning and moving frames. You will also find a button that is used to modify ",(0,i.kt)("inlineCode",{parentName:"p"},"frame tags"),"."),(0,i.kt)("h3",{id:"frame-tags"},"Frame tags"),(0,i.kt)("p",null,"Frame tags are used to organize different parts of your animated sprite. Those parts can also be exported independently using frame tags."),(0,i.kt)("p",null,"Clicking on the button mentioned above will bring up this window."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Frame tags",src:a(9508).Z,width:"395",height:"258"})),(0,i.kt)("p",null,"Here you can see the list of all of the frame tags of the current ",(0,i.kt)("a",{parentName:"p",href:"../../concepts/project"},"project"),". Using the plus (+) sign, you can add more tags. A tag has a starting frame (from), an ending frame (to), a name and a color."),(0,i.kt)("p",null,'To edit an already existing tag, you can click on the "Edit" button next to the tag you want.'),(0,i.kt)("p",null,'If "Animation plays only on frames of the same tag" is toggled on, then, when you preview your animation, it will only preview the frames that belong on the same tag as the currently selected frame. This is a great way to preview parts of your animation separately.'),(0,i.kt)("h2",{id:"cels"},"Cels"),(0,i.kt)("p",null,"Cels are the intersection of layers and frames. For a more detailed explanation, you can ",(0,i.kt)("a",{parentName:"p",href:"../../concepts/cel"},"read this page"),". To select a cel in order to draw on it, you can left-click on their respective button. The cel buttons take the most space in the timeline, and they are located to the right of the layer buttons and below the frame buttons. They also have a small preview of their image data on them."),(0,i.kt)("p",null,"Right-clicking on a cel button will bring up a menu, with options such as Link (or Unlink) Cel, and Delete, which clears the content of the cel, making it fully transparent."),(0,i.kt)("admonition",{title:"Selecting multiple cels",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can select/deselect multiple cels by holding the ",(0,i.kt)("kbd",null,"Control")," key and left-clicking individual cels, or hold the ",(0,i.kt)("kbd",null,"Shift")," key and left-click a cel to also select all of the cels between the one that was clicked and the one that has been selected last."),(0,i.kt)("p",{parentName:"admonition"},"This also works on frame and layer buttons. For example, selecting two frame buttons using ",(0,i.kt)("kbd",null,"Control")," or ",(0,i.kt)("kbd",null,"Shift")," will select all of their cels as well. The same is true for layer buttons.")),(0,i.kt)("admonition",{title:"Drag and drop",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can drag and drop layer, frame and cel buttons to re-arrange them. Re-arranging frame and layer buttons also affects their cels.")))}A.isMDXComponent=!0},9508:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},7623:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/timeline_cels-0898fdec9fee247933df1fe7cf819616.png"}}]);