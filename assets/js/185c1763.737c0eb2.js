"use strict";(self.webpackChunkhyperfy_docs=self.webpackChunkhyperfy_docs||[]).push([[2733],{642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(4848),r=n(8453);const s={sidebar_position:25},a="Terrain",l={id:"designers/terrain",title:"Terrain",description:'Hyperfy has support for building larger terrains with high quality textures using a technique called "Splatmaps" that are super performant.',source:"@site/docs/designers/terrain.md",sourceDirName:"designers",slug:"/designers/terrain",permalink:"/hyperfy-docs/docs/designers/terrain",draft:!1,unlisted:!1,editUrl:"https://github.com/madjin/hyperfy-docs/tree/main/docs/designers/terrain.md",tags:[],version:"current",lastUpdatedBy:"Ash",lastUpdatedAt:1696253992,formattedLastUpdatedAt:"Oct 2, 2023",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"docs",previous:{title:"Tags",permalink:"/hyperfy-docs/docs/designers/tags"},next:{title:"Overview",permalink:"/hyperfy-docs/docs/worlds/overview"}},o={},d=[{value:"Setup",id:"setup",level:2},{value:"Sculpting",id:"sculpting",level:2},{value:"Texture Painting",id:"texture-painting",level:2},{value:"Vertex Painting",id:"vertex-painting",level:2},{value:"Editing Brushes",id:"editing-brushes",level:2},{value:"Exporting",id:"exporting",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"terrain",children:"Terrain"}),"\n",(0,i.jsx)(t.p,{children:'Hyperfy has support for building larger terrains with high quality textures using a technique called "Splatmaps" that are super performant.'}),"\n",(0,i.jsxs)(t.p,{children:["GLTF doesn't have support for splatmaps, so we've created a workflow to do this on top of GLTF, using the ",(0,i.jsx)(t.code,{children:"Terrain Mesh"})," app in our editor."]}),"\n",(0,i.jsx)(t.p,{children:"Using a Terrain Mesh allows you to paint, blend and shade multiple tiling textures together onto a mesh. You can paint with up to four different textures and use vertex colors to tint or darken areas of the terrain."}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(t.p,{children:"To quickly get your started we\u2019ve created a blender template with everything you\u2019ll need to get started."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(7518).A+"",children:"Download: terrain-mesh.zip"})}),"\n",(0,i.jsx)(t.p,{children:"This blend file includes:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"A 500x500 terrain ready to sculpt and paint"}),"\n",(0,i.jsx)(t.li,{children:"An avatar mesh for scale"}),"\n",(0,i.jsx)(t.li,{children:"Splatmap shader"}),"\n",(0,i.jsx)(t.li,{children:"Four texture brushes (Grass, Dirt, Rock, Sand)"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"sculpting",children:"Sculpting"}),"\n",(0,i.jsx)(t.p,{children:"The first thing you\u2019ll likely want to do is start sculpting the terrain."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Go to the Sculpting tab"}),"\n",(0,i.jsx)(t.li,{children:"Use brushes (eg Draw and Smooth) to sculpt out the terrain"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Note: sculpting is locked to the Z axis for simplicity but this is not required"}),"\n",(0,i.jsx)(t.h2,{id:"texture-painting",children:"Texture Painting"}),"\n",(0,i.jsx)(t.p,{children:"Once you have your terrain shaped, it\u2019s time to paint it."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Go to the Texture Paint tab"}),"\n",(0,i.jsx)(t.li,{children:"Switch between brushes, adjust size/strength"}),"\n",(0,i.jsx)(t.li,{children:"Paint!"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"vertex-painting",children:"Vertex Painting"}),"\n",(0,i.jsx)(t.p,{children:"Optionally you can use vertex colors to tint or darken different areas."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Go to the Texture Paint tab"}),"\n",(0,i.jsx)(t.li,{children:"Switch from Texture Paint to Vertex Paint"}),"\n",(0,i.jsx)(t.li,{children:"Choose a color to paint with"}),"\n",(0,i.jsx)(t.li,{children:"Paint!"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"editing-brushes",children:"Editing Brushes"}),"\n",(0,i.jsx)(t.p,{children:"You can swap out the sample brushes with your own:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"In the Shading tab swap out the textures with your own and adjust their scale to the left of the image node"}),"\n",(0,i.jsx)(t.li,{children:"In the Texture Paint tab, select the brush and edit the name and icon in the Tool tab over on the right"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"exporting",children:"Exporting"}),"\n",(0,i.jsx)(t.p,{children:"When you\u2019re happy with your terrain its time to bring it into Hyperfy:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Select just the terrain mesh"}),"\n",(0,i.jsx)(t.li,{children:"Ensure the Decimate modifier \u201cRender\u201d is enabled and adjusted to be as low as possible"}),"\n",(0,i.jsx)(t.li,{children:"File > Export > GLB"}),"\n",(0,i.jsx)(t.li,{children:"Include > Selected Objects ticked!"}),"\n",(0,i.jsx)(t.li,{children:"Mesh > Apply Modifiers ticked!"}),"\n",(0,i.jsx)(t.li,{children:"Mesh > Vertex Colors ticked!"}),"\n",(0,i.jsx)(t.li,{children:"In Hyperfy add a \u201cTerrain Mesh\u201d app"}),"\n",(0,i.jsx)(t.li,{children:"Select your terrain GLB and then add each layers texture and enter its scale"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"Decimate must be used for both file size and performance. Hyperfy will not build collisions for extremely large geometry."})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7518:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/terrain-mesh-22aa42b2ff1782fc34597b2311be7d1e.zip"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(6540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);