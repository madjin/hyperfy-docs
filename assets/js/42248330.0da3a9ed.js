"use strict";(self.webpackChunkhyperfy_docs=self.webpackChunkhyperfy_docs||[]).push([[3221],{4345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(4848),o=t(8453);const l={},i="useWorld()",s={id:"developers/hooks/use-world",title:"useWorld()",description:"A React hook that provides access to the underlying engine.",source:"@site/docs/developers/hooks/use-world.md",sourceDirName:"developers/hooks",slug:"/developers/hooks/use-world",permalink:"/hyperfy-docs/docs/developers/hooks/use-world",draft:!1,unlisted:!1,editUrl:"https://github.com/madjin/hyperfy-docs/tree/main/docs/developers/hooks/use-world.md",tags:[],version:"current",lastUpdatedBy:"Knar",lastUpdatedAt:1710620472,formattedLastUpdatedAt:"Mar 16, 2024",frontMatter:{},sidebar:"developers",previous:{title:"useSyncState()",permalink:"/hyperfy-docs/docs/developers/hooks/use-sync-state"},next:{title:"Avatar",permalink:"/hyperfy-docs/docs/developers/ref/avatar-ref"}},a={},c=[{value:".isServer",id:"isserver",level:3},{value:".isClient",id:"isclient",level:3},{value:".isDesktop",id:"isdesktop",level:3},{value:".isMobile",id:"ismobile",level:3},{value:".isVR",id:"isvr",level:3},{value:".getSlug()",id:"getslug",level:3},{value:".getShard()",id:"getshard",level:3},{value:".getTime()",id:"gettime",level:3},{value:".getAvatar(avatarUid)",id:"getavataravataruid",level:3},{value:".getAvatars()",id:"getavatars",level:3},{value:".chat(text, localOnly)",id:"chattext-localonly",level:3},{value:".open(url, newTab=false)",id:"openurl-newtabfalse",level:3},{value:".http(options)",id:"httpoptions",level:3},{value:".onUpdate(callback)",id:"onupdatecallback",level:3},{value:".on(eventName, callback)",id:"oneventname-callback",level:3},{value:".off(eventName, callback)",id:"offeventname-callback",level:3},{value:".once(eventName, callback)",id:"onceeventname-callback",level:3},{value:".emit(eventName, ...args)",id:"emiteventname-args",level:3},{value:".notify(eventName, ...args)",id:"notifyeventname-args",level:3},{value:".broadcast(eventName, ...args)",id:"broadcasteventname-args",level:3},{value:".getAudioAnalyser(sourceId)",id:"getaudioanalysersourceid",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"useworld",children:(0,r.jsx)(n.code,{children:"useWorld()"})}),"\n",(0,r.jsx)(n.p,{children:"A React hook that provides access to the underlying engine."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\n//highlight-next-line\nimport { useWorld } from "hyperfy";\n\nexport default function Box() {\n  //highlight-start\n  const world = useWorld();\n  world.chat("Hello world!");\n  //highlight-end\n\n  return <app></app>;\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"isserver",children:".isServer"}),"\n",(0,r.jsx)(n.p,{children:"Whether the app is currently running on the server"}),"\n",(0,r.jsx)(n.h3,{id:"isclient",children:".isClient"}),"\n",(0,r.jsx)(n.p,{children:"Whether the app is currently running on a client"}),"\n",(0,r.jsx)(n.h3,{id:"isdesktop",children:".isDesktop"}),"\n",(0,r.jsx)(n.p,{children:"Whether we are running on desktop"}),"\n",(0,r.jsx)(n.h3,{id:"ismobile",children:".isMobile"}),"\n",(0,r.jsx)(n.p,{children:"Whether we are running on mobile / touch device"}),"\n",(0,r.jsx)(n.h3,{id:"isvr",children:".isVR"}),"\n",(0,r.jsx)(n.p,{children:"Whether we are running on a VR device"}),"\n",(0,r.jsx)(n.h3,{id:"getslug",children:".getSlug()"}),"\n",(0,r.jsx)(n.p,{children:"Returns the slug of the current world."}),"\n",(0,r.jsxs)(n.p,{children:["Example: when in ",(0,r.jsx)(n.a,{href:"https://hyperfy.io/meadow",children:"https://hyperfy.io/meadow"})," ",(0,r.jsx)(n.code,{children:"world.getSlug()"})," will return ",(0,r.jsx)(n.code,{children:"meadow"})]}),"\n",(0,r.jsx)(n.h3,{id:"getshard",children:".getShard()"}),"\n",(0,r.jsx)(n.p,{children:"Returns the shard (instance) ID of the current world server"}),"\n",(0,r.jsxs)(n.p,{children:["Example: when in ",(0,r.jsx)(n.a,{href:"https://hyperfy.io/meadow/~k0h1",children:"https://hyperfy.io/meadow/~k0h1"})," ",(0,r.jsx)(n.code,{children:"world.getShard()"})," will return ",(0,r.jsx)(n.code,{children:"~k0h1"})]}),"\n",(0,r.jsx)(n.h3,{id:"gettime",children:".getTime()"}),"\n",(0,r.jsx)(n.p,{children:"Returns the current time of the server in milliseconds. This time is also synchronized across and available to all clients."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\n//highlight-next-line\nimport { useWorld } from "hyperfy";\n\nexport default function Box() {\n  //highlight-next-line\n  const world = useWorld();\n\n  //highlight-start\n  if (world.isServer) {\n    console.log(`I\'m running on the server!`);\n  }\n  if (world.isClient) {\n    console.log(`I\'m running on a client!`);\n  }\n  //highlight-end\n\n  return (\n    <app>\n      //highlight-start\n      <text\n        color="white"\n        value={`\n        isServer: ${world.isServer}\n        isClient: ${world.isClient}\n        isDesktop: ${world.isDesktop}\n        isMobile: ${world.isMobile}\n        isVR: ${world.isVR}\n        worldSlug: ${world.getSlug()}\n        worldShard: ${world.getShard()}\n        worldTime: ${world.getTime()}\n      `}\n      />\n      //highlight-end\n    </app>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"getavataravataruid",children:".getAvatar(avatarUid)"}),"\n",(0,r.jsxs)(n.p,{children:["Returns an ",(0,r.jsx)(n.code,{children:"Avatar"})," reference. If no avatarUid is provided it returns the local avatar."]}),"\n",(0,r.jsx)(n.h3,{id:"getavatars",children:".getAvatars()"}),"\n",(0,r.jsxs)(n.p,{children:["Returns an array of ",(0,r.jsx)(n.code,{children:"Avatar"})," references"]}),"\n",(0,r.jsx)(n.h3,{id:"chattext-localonly",children:".chat(text, localOnly)"}),"\n",(0,r.jsxs)(n.p,{children:["Posts an event into the chat. If ",(0,r.jsx)(n.code,{children:"localOnly"})," is ",(0,r.jsx)(n.code,{children:"true"})," only the current client will see it. Has no effect on the server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useEffect } from "react";\n//highlight-next-line\nimport { useWorld } from "hyperfy";\n\nexport default function App() {\n  //highlight-next-line\n  const world = useWorld();\n\n  function getAvatars() {\n    //highlight-next-line\n    const localAvatar = world.getAvatar();\n    //highlight-next-line\n    world.chat(`Your avatar name: ${localAvatar.name}`, true); //local chat only\n\n    //highlight-next-line\n    world.getAvatars().forEach((avatar) => {\n      if (avatar.uid !== localAvatar.uid) {\n        //highlight-next-line\n        world.chat(`Remote avatar name: ${avatar.name}`);\n      }\n    });\n  }\n\n  return (\n    <app>\n      <box onPointerDown={getAvatars} />\n    </app>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"openurl-newtabfalse",children:".open(url, newTab=false)"}),"\n",(0,r.jsx)(n.p,{children:"Opens a URL or Hyperfy world."}),"\n",(0,r.jsx)(n.h3,{id:"httpoptions",children:".http(options)"}),"\n",(0,r.jsx)(n.p,{children:"Performs an HTTP request similar to fetch()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useEffect } from "react";\n//highlight-next-line\nimport { useWorld } from "hyperfy";\n\nexport default function App() {\n  //highlight-next-line\n  const world = useWorld();\n\n  function switchWorld() {\n    //highlight-next-line\n    world.open("/world");\n  }\n\n  function openWorld() {\n    //highlight-next-line\n    world.open("/world", true);\n  }\n\n  function openLink() {\n    //highlight-next-line\n    world.open("https://google.com", true);\n  }\n\n  async function getHttp() {\n    //highlight-start\n    const response = await world.http({\n      method: "GET",\n      url: "https://cat-fact.herokuapp.com/facts",\n      //data: { foo: "bar" },\n    });\n    //highlight-end\n    console.log(response);\n  }\n\n  return (\n    <app>\n      <text\n        color="white"\n        position={[0, 0, 0]}\n        value="switch world"\n        onPointerDown={switchWorld}\n      />\n      <text\n        color="white"\n        position={[2, 0, 0]}\n        value="open world"\n        onPointerDown={openWorld}\n      />\n      <text\n        color="white"\n        position={[4, 0, 0]}\n        value="open link"\n        onPointerDown={openLink}\n      />\n      <text\n        color="white"\n        position={[6, 0, 0]}\n        value="http request"\n        onPointerDown={getHttp}\n      />\n    </app>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"onupdatecallback",children:".onUpdate(callback)"}),"\n",(0,r.jsx)(n.p,{children:"Subscribes to frame updates. Returns a function that unsubscribes."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useEffect } from "react";\n//highlight-next-line\nimport { useWorld } from "hyperfy";\n\nexport default function App() {\n  //highlight-next-line\n  const world = useWorld();\n\n  useEffect(() => {\n    //highlight-start\n    return world.onUpdate((delta) => {\n      console.log(delta);\n    });\n    //highlight-end\n  }, []);\n\n  return <app></app>;\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"oneventname-callback",children:".on(eventName, callback)"}),"\n",(0,r.jsxs)(n.p,{children:["Subscribes to a world event. Events can be system based such as ",(0,r.jsx)(n.code,{children:"join"}),", ",(0,r.jsx)(n.code,{children:"leave"})," and ",(0,r.jsx)(n.code,{children:"chat"}),", or custom events emitted by another app."]}),"\n",(0,r.jsx)(n.p,{children:"Returns a function that unsubscribes from the event."}),"\n",(0,r.jsx)(n.h3,{id:"offeventname-callback",children:".off(eventName, callback)"}),"\n",(0,r.jsx)(n.p,{children:"Unsubscribes from a world event."}),"\n",(0,r.jsx)(n.h3,{id:"onceeventname-callback",children:".once(eventName, callback)"}),"\n",(0,r.jsx)(n.p,{children:"Subscribes to a world event just once."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useEffect } from "react";\n//highlight-next-line\nimport { useWorld } from "hyperfy";\n\nexport default function App() {\n  //highlight-next-line\n  const world = useWorld();\n\n  useEffect(() => {\n    //highlight-next-line\n    return world.on("join", onJoin);\n  }, []);\n\n  const onJoin = (avatar) => {\n    console.log(`${avatar.name} joined.`);\n  };\n\n  function off() {\n    //highlight-next-line\n    world.off("join");\n  }\n\n  function once() {\n    //highlight-next-line\n    world.once("join", onJoin);\n  }\n\n  return (\n    <app>\n      <text\n        color="white"\n        position={[0, 0, 0]}\n        value="unsubscribe from join events"\n        onPointerDown={off}\n      />\n      <text\n        color="white"\n        position={[2, 0, 0]}\n        value="subscribe to a single join event"\n        onPointerDown={once}\n      />\n    </app>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"emiteventname-args",children:".emit(eventName, ...args)"}),"\n",(0,r.jsx)(n.p,{children:"Emits a world event that other apps might be listening for."}),"\n",(0,r.jsxs)(n.p,{children:["Some system event names are reserved: ",(0,r.jsx)(n.code,{children:"join"}),", ",(0,r.jsx)(n.code,{children:"leave"})," and ",(0,r.jsx)(n.code,{children:"chat"})]}),"\n",(0,r.jsx)(n.h3,{id:"notifyeventname-args",children:".notify(eventName, ...args)"}),"\n",(0,r.jsxs)(n.p,{children:["Sends an event directly to the server. If the caller is already on the server this acts the same as ",(0,r.jsx)(n.code,{children:".emit()"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Some system event names are reserved: ",(0,r.jsx)(n.code,{children:"join"}),", ",(0,r.jsx)(n.code,{children:"leave"})," and ",(0,r.jsx)(n.code,{children:"chat"})]}),"\n",(0,r.jsx)(n.h3,{id:"broadcasteventname-args",children:".broadcast(eventName, ...args)"}),"\n",(0,r.jsx)(n.p,{children:"Sends an event to the server and all other clients."}),"\n",(0,r.jsxs)(n.p,{children:["Some system event names are reserved: ",(0,r.jsx)(n.code,{children:"join"}),", ",(0,r.jsx)(n.code,{children:"leave"})," and ",(0,r.jsx)(n.code,{children:"chat"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useEffect } from "react";\n//highlight-next-line\nimport { useWorld } from "hyperfy";\n\nexport default function App() {\n  //highlight-next-line\n  const world = useWorld();\n\n  useEffect(() => {\n    return world.on("customEvent", (event) => {\n      console.log("custom event received");\n    });\n  }, []);\n\n  function emit() {\n    //highlight-next-line\n    world.emit("customEvent");\n  }\n\n  function notify() {\n    //highlight-next-line\n    world.notify("customEvent");\n  }\n\n  function broadcast() {\n    //highlight-next-line\n    world.broadcast("customEvent");\n  }\n\n  return (\n    <app>\n      <text\n        color="white"\n        position={[0, 0, 0]}\n        value="emit event to local apps"\n        onPointerDown={emit}\n      />\n      <text\n        color="white"\n        position={[2, 0, 0]}\n        value="notify server apps"\n        onPointerDown={notify}\n      />\n      <text\n        color="white"\n        position={[4, 0, 0]}\n        value="broadcast event to server and all other clients"\n        onPointerDown={broadcast}\n      />\n    </app>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"getaudioanalysersourceid",children:".getAudioAnalyser(sourceId)"}),"\n",(0,r.jsxs)(n.p,{children:["Returns an AudioAnalyser that targets a sourceId from ",(0,r.jsx)(n.code,{children:"<video audioSourceId>"})," or ",(0,r.jsx)(n.code,{children:"<audio sourceId>"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If the source doesn't exist, it will be connected when it becomes available."}),"\n",(0,r.jsxs)(n.p,{children:["AudioAnalyser currently has a single method ",(0,r.jsx)(n.code,{children:".getByteFrequencyData()"})," which returns a ",(0,r.jsx)(n.code,{children:"Uint8Array"})," of values sampled from the audio source."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useEffect } from "react";\n//highlight-next-line\nimport { useWorld } from "hyperfy";\n\nexport default function App() {\n  //highlight-start\n  const world = useWorld();\n  const analyser = world.getAudioAnalyser("source1");\n  //highlight-end\n\n  useEffect(() => {\n    return world.onUpdate((_) => {\n      //highlight-next-line\n      const frequencyData = analyser.getByteFrequencyData();\n      console.log(frequencyData);\n    });\n  }, []);\n\n  return (\n    <app>\n      <audio\n        autoplay\n        loop\n        sourceId="source1"\n        src="https://archive.org/download/kmart-the-lost-tapes-pdgxxn/Donut%20Specialist%20-%20Kmart-%20The%20Lost%20Tapes%20-%2007%20K%20Funk.mp3"\n      />\n    </app>\n  );\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const o={},l=r.createContext(o);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);