"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[642],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6252:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},p="Player",u={unversionedId:"api/functions/player",id:"version-3.2/api/functions/player",title:"Player",description:"setupPlayer(options)",source:"@site/versioned_docs/version-3.2/api/functions/player.md",sourceDirName:"api/functions",slug:"/api/functions/player",permalink:"/docs/api/functions/player",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-3.2/api/functions/player.md",tags:[],version:"3.2",frontMatter:{},sidebar:"app",previous:{title:"Lifecycle",permalink:"/docs/api/functions/lifecycle"},next:{title:"Queue",permalink:"/docs/api/functions/queue"}},s={},d=[{value:"<code>setupPlayer(options)</code>",id:"setupplayeroptions",level:2},{value:"<code>updateOptions(options)</code>",id:"updateoptionsoptions",level:2},{value:"<code>play()</code>",id:"play",level:2},{value:"<code>pause()</code>",id:"pause",level:2},{value:"<code>seekTo(seconds)</code>",id:"seektoseconds",level:2},{value:"<code>setVolume(volume)</code>",id:"setvolumevolume",level:2},{value:"<code>getVolume()</code>",id:"getvolume",level:2},{value:"<code>setRate(rate)</code>",id:"setraterate",level:2},{value:"<code>getRate()</code>",id:"getrate",level:2},{value:"<code>getDuration()</code>",id:"getduration",level:2},{value:"<code>getPosition()</code>",id:"getposition",level:2},{value:"<code>getBufferedPosition()</code>",id:"getbufferedposition",level:2},{value:"<code>getState()</code>",id:"getstate",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"player"},"Player"),(0,o.kt)("h2",{id:"setupplayeroptions"},(0,o.kt)("inlineCode",{parentName:"h2"},"setupPlayer(options)")),(0,o.kt)("p",null,"Accepts a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/objects/player-options"},(0,o.kt)("inlineCode",{parentName:"a"},"PlayerOptions"))," object."),(0,o.kt)("h2",{id:"updateoptionsoptions"},(0,o.kt)("inlineCode",{parentName:"h2"},"updateOptions(options)")),(0,o.kt)("p",null,"Accepts a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/objects/metadata-options"},(0,o.kt)("inlineCode",{parentName:"a"},"MetadataOptions"))," object. Updates\nthe configuration for the components."),(0,o.kt)("p",null,"\u26a0\ufe0f These parameters are different than the ones set using ",(0,o.kt)("inlineCode",{parentName:"p"},"setupPlayer()"),".\nParameters other than those listed below will not be applied."),(0,o.kt)("h2",{id:"play"},(0,o.kt)("inlineCode",{parentName:"h2"},"play()")),(0,o.kt)("p",null,"Plays or resumes the current track."),(0,o.kt)("h2",{id:"pause"},(0,o.kt)("inlineCode",{parentName:"h2"},"pause()")),(0,o.kt)("p",null,"Pauses the current track."),(0,o.kt)("h2",{id:"seektoseconds"},(0,o.kt)("inlineCode",{parentName:"h2"},"seekTo(seconds)")),(0,o.kt)("p",null,"Seeks to a specified time position in the current track."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Param"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seconds"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"The position in seconds")))),(0,o.kt)("h2",{id:"setvolumevolume"},(0,o.kt)("inlineCode",{parentName:"h2"},"setVolume(volume)")),(0,o.kt)("p",null,"Sets the volume of the player."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Param"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"volume"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"The volume in a range from 0 to 1")))),(0,o.kt)("h2",{id:"getvolume"},(0,o.kt)("inlineCode",{parentName:"h2"},"getVolume()")),(0,o.kt)("p",null,"Gets the volume of the player (a number between 0 and 1)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,o.kt)("h2",{id:"setraterate"},(0,o.kt)("inlineCode",{parentName:"h2"},"setRate(rate)")),(0,o.kt)("p",null,"Sets the playback rate"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Param"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rate"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"The playback rate where 1 is the regular speed")))),(0,o.kt)("h2",{id:"getrate"},(0,o.kt)("inlineCode",{parentName:"h2"},"getRate()")),(0,o.kt)("p",null,"Gets the playback rate, where 1 is the regular speed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,o.kt)("h2",{id:"getduration"},(0,o.kt)("inlineCode",{parentName:"h2"},"getDuration()")),(0,o.kt)("p",null,"Gets the duration of the current track in seconds."),(0,o.kt)("p",null,"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-track-player")," is a streaming library, which means it slowly buffers the track and doesn't know exactly when it ends.\nThe duration returned by this function is determined through various tricks and ",(0,o.kt)("em",{parentName:"p"},"may not be exact or may not be available at all"),"."),(0,o.kt)("p",null,"You should only trust the result of this function if you included the ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," property in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/objects/track"},"Track Object"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,o.kt)("h2",{id:"getposition"},(0,o.kt)("inlineCode",{parentName:"h2"},"getPosition()")),(0,o.kt)("p",null,"Gets the position of the current track in seconds."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,o.kt)("h2",{id:"getbufferedposition"},(0,o.kt)("inlineCode",{parentName:"h2"},"getBufferedPosition()")),(0,o.kt)("p",null,"Gets the buffered position of the current track in seconds."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,o.kt)("h2",{id:"getstate"},(0,o.kt)("inlineCode",{parentName:"h2"},"getState()")),(0,o.kt)("p",null,"Gets the playback ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/constants/state"},(0,o.kt)("inlineCode",{parentName:"a"},"State"))," of the player."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<"),(0,o.kt)("a",{parentName:"p",href:"/docs/api/constants/state"},"State"),(0,o.kt)("inlineCode",{parentName:"p"},">")))}m.isMDXComponent=!0}}]);