import{n as e,t}from"./ExperienceTimeline-lSaR1fvi.js";import{t as n}from"./ContactForm-C54qd6y9.js";import{c as r,i,l as a,t as o,u as s}from"./index-_L9mQL74.js";import{t as c}from"./ServicesGrid-BUWItJ2g.js";var l=s(a(),1);function u(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function d(e){if(Array.isArray(e))return e}function f(e){if(Array.isArray(e))return u(e)}function p(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,re(r.key),r)}}function h(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function g(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=ae(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function _(e,t,n){return(t=re(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function y(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function b(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ee(Object(n),!0).forEach(function(t){_(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function te(e,t){return d(e)||y(e,t)||ae(e,t)||b()}function C(e){return f(e)||v(e)||ae(e)||x()}function ne(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function re(e){var t=ne(e,`string`);return typeof t==`symbol`?t:t+``}function ie(e){"@babel/helpers - typeof";return ie=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ie(e)}function ae(e,t){if(e){if(typeof e==`string`)return u(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}var oe=function(){},se={},ce={},le=null,ue={mark:oe,measure:oe};try{typeof window<`u`&&(se=window),typeof document<`u`&&(ce=document),typeof MutationObserver<`u`&&(le=MutationObserver),typeof performance<`u`&&(ue=performance)}catch{}var de=(se.navigator||{}).userAgent,fe=de===void 0?``:de,w=se,T=ce,pe=le,me=ue;w.document;var E=!!T.documentElement&&!!T.head&&typeof T.addEventListener==`function`&&typeof T.createElement==`function`,he=~fe.indexOf(`MSIE`)||~fe.indexOf(`Trident/`),ge,_e=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ve=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,ye={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},be={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},xe=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],D=`classic`,O=`duotone`,Se=`sharp`,Ce=`sharp-duotone`,we=`chisel`,Te=`etch`,Ee=`graphite`,De=`jelly`,Oe=`jelly-duo`,ke=`jelly-fill`,Ae=`notdog`,je=`notdog-duo`,Me=`slab`,Ne=`slab-press`,Pe=`thumbprint`,Fe=`utility`,Ie=`utility-duo`,Le=`utility-fill`,Re=`whiteboard`,ze=`Classic`,Be=`Duotone`,Ve=`Sharp`,He=`Sharp Duotone`,Ue=`Chisel`,We=`Etch`,Ge=`Graphite`,Ke=`Jelly`,qe=`Jelly Duo`,Je=`Jelly Fill`,Ye=`Notdog`,Xe=`Notdog Duo`,Ze=`Slab`,Qe=`Slab Press`,$e=`Thumbprint`,et=`Utility`,tt=`Utility Duo`,nt=`Utility Fill`,rt=`Whiteboard`,it=[D,O,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re];ge={},_(_(_(_(_(_(_(_(_(_(ge,D,ze),O,Be),Se,Ve),Ce,He),we,Ue),Te,We),Ee,Ge),De,Ke),Oe,qe),ke,Je),_(_(_(_(_(_(_(_(_(ge,Ae,Ye),je,Xe),Me,Ze),Ne,Qe),Pe,$e),Fe,et),Ie,tt),Le,nt),Re,rt);var at={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},ot={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},st=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),ct={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},lt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ut={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},dt=[`kit`];_(_({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ft={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},pt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},mt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},ht={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},gt,_t={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},vt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];gt={},_(_(_(_(_(_(_(_(_(_(gt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),_(_(_(_(_(_(_(_(_(gt,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),_(_({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var yt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},bt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},xt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},St=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(vt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Ct=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],wt=[1,2,3,4,5,6,7,8,9,10],Tt=wt.concat([11,12,13,14,15,16,17,18,19,20]),Et=[].concat(C(Object.keys(bt)),Ct,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,_t.GROUP,_t.SWAP_OPACITY,_t.PRIMARY,_t.SECONDARY],wt.map(function(e){return`${e}x`}),Tt.map(function(e){return`w-${e}`})),Dt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},k=`___FONT_AWESOME___`,Ot=16,kt=`fa`,At=`svg-inline--fa`,A=`data-fa-i2svg`,jt=`data-fa-pseudo-element`,Mt=`data-fa-pseudo-element-pending`,Nt=`data-prefix`,Pt=`data-icon`,Ft=`fontawesome-i2svg`,It=`async`,Lt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Rt=[`::before`,`::after`,`:before`,`:after`],zt=function(){try{return!0}catch{return!1}}();function Bt(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[D]}})}var Vt=S({},ye);Vt[D]=S(S(S(S({},{"fa-duotone":`duotone`}),ye[D]),ut.kit),ut[`kit-duotone`]);var Ht=Bt(Vt),Ut=S({},ct);Ut[D]=S(S(S(S({},{duotone:`fad`}),Ut[D]),ht.kit),ht[`kit-duotone`]);var Wt=Bt(Ut),Gt=S({},xt);Gt[D]=S(S({},Gt[D]),mt.kit);var Kt=Bt(Gt),qt=S({},yt);qt[D]=S(S({},qt[D]),ft.kit),Bt(qt);var Jt=_e,Yt=`fa-layers-text`,Xt=ve;Bt(S({},at));var Zt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Qt=be,$t=[].concat(C(dt),C(Et)),j=w.FontAwesomeConfig||{};function en(e){var t=T.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function tn(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}T&&typeof T.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=te(e,2),n=t[0],r=t[1],i=tn(en(n));i!=null&&(j[r]=i)});var nn={styleDefault:`solid`,familyDefault:D,cssPrefix:kt,replacementClass:At,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};j.familyPrefix&&(j.cssPrefix=j.familyPrefix);var M=S(S({},nn),j);M.autoReplaceSvg||(M.observeMutations=!1);var N={};Object.keys(nn).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(t){M[e]=t,P.forEach(function(e){return e(N)})},get:function(){return M[e]}})}),Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(e){M.cssPrefix=e,P.forEach(function(e){return e(N)})},get:function(){return M.cssPrefix}}),w.FontAwesomeConfig=N;var P=[];function rn(e){return P.push(e),function(){P.splice(P.indexOf(e),1)}}var F=Ot,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function an(e){if(!(!e||!E)){var t=T.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=T.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return T.head.insertBefore(t,r),e}}var on=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function sn(){for(var e=12,t=``;e-- >0;)t+=on[Math.random()*62|0];return t}function L(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function cn(e){return e.classList?L(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function ln(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function un(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${ln(e[n])}" `},``).trim()}function dn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function fn(e){return e.size!==I.size||e.x!==I.x||e.y!==I.y||e.rotate!==I.rotate||e.flipX||e.flipY}function pn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function mn(e){var t=e.transform,n=e.width,r=n===void 0?Ot:n,i=e.height,a=i===void 0?Ot:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&he?c+=`translate(${t.x/F-r/2}em, ${t.y/F-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/F}em), calc(-50% + ${t.y/F}em)) `:c+=`translate(${t.x/F}em, ${t.y/F}em) `,c+=`scale(${t.size/F*(t.flipX?-1:1)}, ${t.size/F*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var hn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function gn(){var e=kt,t=At,n=N.cssPrefix,r=N.replacementClass,i=hn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var _n=!1;function vn(){N.autoAddCss&&!_n&&(an(gn()),_n=!0)}var yn={mixout:function(){return{dom:{css:gn,insertCss:vn}}},hooks:function(){return{beforeDOMElementCreation:function(){vn()},beforeI2svg:function(){vn()}}}},R=w||{};R[k]||(R[k]={}),R[k].styles||(R[k].styles={}),R[k].hooks||(R[k].hooks={}),R[k].shims||(R[k].shims=[]);var z=R[k],bn=[],xn=function(){T.removeEventListener(`DOMContentLoaded`,xn),Sn=1,bn.map(function(e){return e()})},Sn=!1;E&&(Sn=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),Sn||T.addEventListener(`DOMContentLoaded`,xn));function Cn(e){E&&(Sn?setTimeout(e,0):bn.push(e))}function B(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?ln(e):`<${t} ${un(r)}>${a.map(B).join(``)}</${t}>`}function wn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Tn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},En=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Tn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Dn(e){return C(e).length===1?e.codePointAt(0).toString(16):null}function On(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function kn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=On(t);typeof z.hooks.addPack==`function`&&!r?z.hooks.addPack(e,On(t)):z.styles[e]=S(S({},z.styles[e]||{}),i),e===`fas`&&kn(`fa`,t)}var V=z.styles,An=z.shims,jn=Object.keys(Kt),Mn=jn.reduce(function(e,t){return e[t]=Object.keys(Kt[t]),e},{}),Nn=null,Pn={},Fn={},In={},Ln={},Rn={};function zn(e){return~$t.indexOf(e)}function Bn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!zn(i)?i:null}var Vn=function(){var e=function(e){return En(V,function(t,n,r){return t[r]=En(n,e,{}),t},{})};Pn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Fn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Rn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in V||N.autoFetchSvg,n=En(An,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});In=n.names,Ln=n.unicodes,Nn=Jn(N.styleDefault,{family:N.familyDefault})};rn(function(e){Nn=Jn(e.styleDefault,{family:N.familyDefault})}),Vn();function Hn(e,t){return(Pn[e]||{})[t]}function Un(e,t){return(Fn[e]||{})[t]}function H(e,t){return(Rn[e]||{})[t]}function Wn(e){return In[e]||{prefix:null,iconName:null}}function Gn(e){var t=Ln[e],n=Hn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function U(){return Nn}var Kn=function(){return{prefix:null,iconName:null,rest:[]}};function qn(e){var t=D,n=jn.reduce(function(e,t){return e[t]=`${N.cssPrefix}-${t}`,e},{});return it.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Mn[r].includes(e)}))&&(t=r)}),t}function Jn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?D:t,r=Ht[n][e];if(n===O&&!e)return`fad`;var i=Wt[n][e]||Wt[n][r],a=e in z.styles?e:null;return i||a||null}function Yn(e){var t=[],n=null;return e.forEach(function(e){var r=Bn(N.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Xn(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Zn=St.concat(lt);function Qn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Xn(e.filter(function(e){return Zn.includes(e)})),a=Xn(e.filter(function(e){return!Zn.includes(e)})),o=te(i.filter(function(e){return r=e,!xe.includes(e)}),1)[0],s=o===void 0?null:o,c=qn(i),l=S(S({},Yn(a)),{},{prefix:Jn(s,{family:c})});return S(S(S({},l),nr({values:e,family:c,styles:V,config:N,canonical:l,givenPrefix:r})),$n(n,r,l))}function $n(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Wn(i):{},o=H(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!V.far&&V.fas&&!N.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var er=it.filter(function(e){return e!==D||e!==O}),tr=Object.keys(xt).filter(function(e){return e!==D}).map(function(e){return Object.keys(xt[e])}).flat();function nr(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===O,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&er.includes(n)&&(Object.keys(s).find(function(e){return tr.includes(e)})||l.autoFetchSvg)&&(r.prefix=st.get(n).defaultShortPrefixId,r.iconName=H(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=U()||`fas`),r}var rr=function(){function e(){p(this,e),this.definitions={}}return h(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=S(S({},e.definitions[n]||{}),t[n]),kn(n,t[n]);var r=Kt[D][n];r&&kn(r,t[n]),Vn()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),ir=[],W={},G={},ar=Object.keys(G);function or(e,t){var n=t.mixoutsTo;return ir=e,W={},Object.keys(G).forEach(function(e){ar.indexOf(e)===-1&&delete G[e]}),ir.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),ie(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){W[e]||(W[e]=[]),W[e].push(r[e])})}e.provides&&e.provides(G)}),n}function sr(e,t){var n=[...arguments].slice(2);return(W[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function K(e){var t=[...arguments].slice(1);(W[e]||[]).forEach(function(e){e.apply(null,t)})}function q(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return G[e]?G[e].apply(null,t):void 0}function cr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||U();if(t)return t=H(n,t)||t,wn(lr.definitions,n,t)||wn(z.styles,n,t)}var lr=new rr,J={noAuto:function(){N.autoReplaceSvg=!1,N.observeMutations=!1,K(`noAuto`)},config:N,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(K(`beforeI2svg`,e),q(`pseudoElements2svg`,e),q(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Cn(function(){ur({autoReplaceSvgRoot:t}),K(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(ie(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:H(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Jn(e[0]);return{prefix:n,iconName:H(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${N.cssPrefix}-`)>-1||e.match(Jt))){var r=Qn(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:H(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=U();return{prefix:i,iconName:H(i,e)||e}}}},library:lr,findIconDefinition:cr,toHtml:B},ur=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?T:e;(Object.keys(z.styles).length>0||N.autoFetchSvg)&&E&&N.autoReplaceSvg&&J.dom.i2svg({node:t})};function dr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return B(e)})}}),Object.defineProperty(e,"node",{get:function(){if(E){var t=T.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function fr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(fn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=dn(S(S({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function pr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${N.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:S(S({},i),{},{id:o}),children:r}]}]}function mr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function hr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[N.replacementClass,a?`${N.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:S(S({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!mr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[A]=``);var _=S(S({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:S({},l.styles)}),v=r.found&&n.found?q(`generateAbstractMask`,_)||{children:[],attributes:{}}:q(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?pr(_):fr(_)}function gr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=S(S({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[A]=``);var l=S({},a.styles);fn(i)&&(l.transform=mn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=dn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function _r(e){var t=e.content,n=e.extra,r=S(S({},n.attributes),{},{class:n.classes.join(` `)}),i=dn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var vr=z.styles;function yr(e){var t=e[0],n=e[1],r=te(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${N.cssPrefix}-${Qt.GROUP}`},children:[{tag:`path`,attributes:{class:`${N.cssPrefix}-${Qt.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${N.cssPrefix}-${Qt.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var br={found:!1,width:512,height:512};function xr(e,t){!zt&&!N.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Sr(e,t){var n=t;return t===`fa`&&N.styleDefault!==null&&(t=U()),new Promise(function(r,i){if(n===`fa`){var a=Wn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&vr[t]&&vr[t][e]){var o=vr[t][e];return r(yr(o))}xr(e,t),r(S(S({},br),{},{icon:N.showMissingIcons&&e&&q(`missingIconAbstract`)||{}}))})}var Cr=function(){},wr=N.measurePerformance&&me&&me.mark&&me.measure?me:{mark:Cr,measure:Cr},Tr=`FA "7.2.0"`,Er=function(e){return wr.mark(`${Tr} ${e} begins`),function(){return Dr(e)}},Dr=function(e){wr.mark(`${Tr} ${e} ends`),wr.measure(`${Tr} ${e}`,`${Tr} ${e} begins`,`${Tr} ${e} ends`)},Or={begin:Er,end:Dr},kr=function(){};function Ar(e){return typeof(e.getAttribute?e.getAttribute(A):null)==`string`}function jr(e){var t=e.getAttribute?e.getAttribute(Nt):null,n=e.getAttribute?e.getAttribute(Pt):null;return t&&n}function Mr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Nr(){return N.autoReplaceSvg===!0?Rr.replace:Rr[N.autoReplaceSvg]||Rr.replace}function Pr(e){return T.createElementNS(`http://www.w3.org/2000/svg`,e)}function Fr(e){return T.createElement(e)}function Ir(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Pr:Fr:t;if(typeof e==`string`)return T.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Ir(e,{ceFn:n}))}),r}function Lr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Rr={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Ir(e),t)}),t.getAttribute(A)===null&&N.keepOriginalSource){var n=T.createComment(Lr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~cn(t).indexOf(N.replacementClass))return Rr.replace(e);var r=RegExp(`${N.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===N.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return B(e)}).join(`
`);t.setAttribute(A,``),t.innerHTML=a}};function zr(e){e()}function Br(e,t){var n=typeof t==`function`?t:kr;if(e.length===0)n();else{var r=zr;N.mutateApproach===It&&(r=w.requestAnimationFrame||zr),r(function(){var t=Nr(),r=Or.begin(`mutate`);e.map(t),r(),n()})}}var Vr=!1;function Hr(){Vr=!0}function Ur(){Vr=!1}var Wr=null;function Gr(e){if(pe&&N.observeMutations){var t=e.treeCallback,n=t===void 0?kr:t,r=e.nodeCallback,i=r===void 0?kr:r,a=e.pseudoElementsCallback,o=a===void 0?kr:a,s=e.observeMutationsRoot,c=s===void 0?T:s;Wr=new pe(function(e){if(!Vr){var t=U();L(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Ar(e.addedNodes[0])&&(N.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&N.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Ar(e.target)&&~Zt.indexOf(e.attributeName))if(e.attributeName===`class`&&jr(e.target)){var r=Qn(cn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Nt,a||t),s&&e.target.setAttribute(Pt,s)}else Mr(e.target)&&i(e.target)})}}),E&&Wr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Kr(){Wr&&Wr.disconnect()}function qr(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Jr(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Qn(cn(e));return i.prefix||=U(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Un(i.prefix,e.innerText)||Hn(i.prefix,Dn(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Yr(e){return L(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Xr(){return{iconName:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Jr(e),r=n.iconName,i=n.prefix,a=n.rest,o=Yr(e),s=sr(`parseNodeAttributes`,{},e);return S({iconName:r,prefix:i,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?qr(e):[],attributes:o}},s)}var Qr=z.styles;function $r(e){var t=N.autoReplaceSvg===`nest`?Zr(e,{styleParser:!1}):Zr(e);return~t.extra.classes.indexOf(Yt)?q(`generateLayersText`,e,t):q(`generateSvgReplacementMutation`,e,t)}function ei(){return[].concat(C(lt),C(St))}function ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();var n=T.documentElement.classList,r=function(e){return n.add(`${Ft}-${e}`)},i=function(e){return n.remove(`${Ft}-${e}`)},a=N.autoFetchSvg?ei():xe.concat(Object.keys(Qr));a.includes(`fa`)||a.push(`fa`);var o=[`.${Yt}:not([${A}])`].concat(a.map(function(e){return`.${e}:not([${A}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=L(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Or.begin(`onTree`),l=s.reduce(function(e,t){try{var n=$r(t);n&&e.push(n)}catch(e){zt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Br(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$r(e).then(function(e){e&&Br([e],t)})}function ri(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:cr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:cr(i||{}),e(r,S(S({},n),{},{mask:i}))}}var ii=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?I:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return dr(S({type:`icon`},e),function(){return K(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),hr({icons:{main:yr(v),mask:s?yr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:S(S({},I),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ai={mixout:function(){return{icon:ri(ii)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ti,e.nodeCallback=ni,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?T:t,r=e.callback;return ti(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Sr(n,r),o.iconName?Sr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=te(o,2),u=l[0],d=l[1];t([e,hr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=dn(a);o.length>0&&(n.style=o);var s;return fn(i)&&(s=q(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},oi={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return dr({type:`layer`},function(){K(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${N.cssPrefix}-layers`].concat(C(r)).join(` `)},children:n}]})}}}},si={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return dr({type:`counter`,content:e},function(){return K(`beforeDOMElementCreation`,{content:e,params:t}),_r({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${N.cssPrefix}-layers-counter`].concat(C(a))}})})}}}},ci={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?I:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return dr({type:`text`,content:e},function(){return K(`beforeDOMElementCreation`,{content:e,params:t}),gr({content:e,transform:S(S({},I),r),extra:{attributes:s,styles:l,classes:[`${N.cssPrefix}-layers-text`].concat(C(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(he){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,gr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},li=RegExp(`"`,`ug`),ui=[1105920,1112319],di=S(S(S(S({},{FontAwesome:{normal:`fas`,400:`fas`}}),ot),Dt),pt),fi=Object.keys(di).reduce(function(e,t){return e[t.toLowerCase()]=di[t],e},{}),pi=Object.keys(fi).reduce(function(e,t){var n=fi[t];return e[t]=n[900]||C(Object.entries(n))[0][1],e},{});function mi(e){return Dn(C(e.replace(li,``))[0]||``)}function hi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(li,``),r=n.codePointAt(0),i=r>=ui[0]&&r<=ui[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function gi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(fi[n]||{})[i]||pi[n]}function _i(e,t){var n=`${Mt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=L(e.children).filter(function(e){return e.getAttribute(jt)===t})[0],o=w.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Xt),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=gi(s,l),p=mi(d),m=c[0].startsWith(`FontAwesome`),h=hi(o),g=Hn(f,p),_=g;if(m){var v=Gn(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Nt)!==f||a.getAttribute(Pt)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Xr(),b=y.extra;b.attributes[jt]=t,Sr(g,f).then(function(i){var a=hr(S(S({},y),{},{icons:{main:i,mask:Kn()},prefix:f,iconName:_,extra:b,watchable:!0})),o=T.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return B(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function vi(e){return Promise.all([_i(e,`::before`),_i(e,`::after`)])}function yi(e){return e.parentNode!==document.head&&!~Lt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(jt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var bi=function(e){return!!e&&Rt.some(function(t){return e.includes(t)})},xi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=g(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(bi(a)){var o=Rt.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(E){var n;if(t)n=e;else if(N.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=g(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=g(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=g(xi(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){N.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=L(n).filter(yi).map(vi),i=Or.begin(`searchPseudoElements`);Hr(),Promise.all(r).then(function(){i(),Ur(),e()}).catch(function(){i(),Ur(),t()})})}}var Ci={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Si,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?T:t;N.searchPseudoElements&&Si(n)}}},wi=!1,Ti={mixout:function(){return{dom:{unwatch:function(){Hr(),wi=!0}}}},hooks:function(){return{bootstrap:function(){Gr(sr(`mutationObserverCallbacks`,{}))},noAuto:function(){Kr()},watch:function(e){var t=e.observeMutationsRoot;wi?Ur():Gr(sr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Ei=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Di={mixout:function(){return{parse:{transform:function(e){return Ei(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Ei(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:S({},a.outer),children:[{tag:`g`,attributes:S({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:S(S({},t.icon.attributes),a.path)}]}]}}}},Oi={x:0,y:0,width:`100%`,height:`100%`};function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ai(e){return e.tag===`g`?e.children:[e]}or([yn,ai,oi,si,ci,Ci,Ti,Di,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Qn(n.split(` `).map(function(e){return e.trim()})):Kn();return r.prefix||=U(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=pn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:S(S({},Oi),{},{fill:`white`})},p=c.children?{children:c.children.map(ki)}:{},m={tag:`g`,attributes:S({},d.inner),children:[ki(S({tag:c.tag,attributes:S(S({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:S({},d.outer),children:[m]},g=`mask-${a||sn()}`,_=`clip-${a||sn()}`,v={tag:`mask`,attributes:S(S({},Oi),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Ai(u)},v]};return t.push(y,{tag:`rect`,attributes:S({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Oi)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;w.matchMedia&&(t=w.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:S(S({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=S(S({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:S(S({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:S(S({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:S(S({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:S(S({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:S(S({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:S(S({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:S(S({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:J}),J.noAuto;var Y=J.config;J.library,J.dom;var ji=J.parse;J.findIconDefinition,J.toHtml;var Mi=J.icon;J.layer,J.text,J.counter;var X=o();function Ni(e){return e-=0,e===e}function Pi(e){return Ni(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var Fi=(e,t)=>l.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Ii(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Z=new Map,Li=1e3;function Ri(e){if(Z.has(e))return Z.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Pi(n);t[e.startsWith(`webkit`)?Ii(e):e]=r}}}n=a+1}if(Z.size===Li){let e=Z.keys().next().value;e&&Z.delete(e)}return Z.set(e,t),t}function zi(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),zi(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Ri(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Pi(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Fi)))}return e(t.tag,{...a,...u},...r)}var Bi=zi.bind(null,l.createElement),Vi=(e,t)=>{let n=(0,l.useId)();return e||(t?n:void 0)},Hi=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var Ui=`searchPseudoElementsFullScan`in Y&&typeof Y.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Wi=Number.parseInt(Ui)>=7,Gi=()=>Wi,Ki=`fa`,Q={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`},qi={left:`fa-pull-left`,right:`fa-pull-right`},Ji={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Yi={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},$={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},Xi={default:`fa-layers`};function Zi(e){let t=Y.cssPrefix||Y.familyPrefix||Ki;return t===Ki?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Ki}-`,`g`),`${t}-`)}function Qi(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,className:b}=e,x=[];return b&&x.push(...b.split(` `)),t&&x.push(Q.beat),n&&x.push(Q.fade),r&&x.push(Q.beatFade),i&&x.push(Q.bounce),a&&x.push(Q.shake),o&&x.push(Q.spin),c&&x.push(Q.spinReverse),s&&x.push(Q.spinPulse),l&&x.push(Q.pulse),u&&x.push($.fixedWidth),d&&x.push($.inverse),f&&x.push($.border),p===!0&&x.push($.flip),(p===`horizontal`||p===`both`)&&x.push($.flipHorizontal),(p===`vertical`||p===`both`)&&x.push($.flipVertical),m!=null&&x.push(Yi[m]),h!=null&&h!==0&&x.push(Ji[h]),g!=null&&x.push(qi[g]),_&&x.push($.swapOpacity),Gi()?(v&&x.push($.rotateBy),y&&x.push($.widthAuto),(Y.cssPrefix||Y.familyPrefix||Ki)===Ki?x:x.map(Zi)):x}var $i=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function ea(e){if(e)return $i(e)?e:ji.icon(e)}function ta(e){return Object.keys(e)}var na=new Hi(`FontAwesomeIcon`),ra={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},ia=new Set(Object.keys(ra)),aa=l.forwardRef((e,t)=>{let n={...ra,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=Vi(c,!!i),d=Vi(s,!!o),f=ea(r);if(!f)return na.error(`Icon lookup is undefined`,r),null;let p=Qi(n),m=typeof l==`string`?ji.transform(l):l,h=ea(i),g=Mi(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return na.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of ta(n))ia.has(e)||(v[e]=n[e]);return Bi(_[0],v)});aa.displayName=`FontAwesomeIcon`,`${Xi.default}${$.fixedWidth}`;var oa={prefix:`fab`,iconName:`whatsapp`,icon:[448,512,[],`f232`,`M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z`]};function sa(){return(0,X.jsxs)(`section`,{id:`home`,className:`scroll-section relative isolate overflow-hidden`,children:[(0,X.jsx)(`div`,{className:`absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-sky-100/70 via-cyan-100/35 to-transparent`,"aria-hidden":`true`}),(0,X.jsx)(`div`,{className:`mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8`,children:(0,X.jsxs)(`div`,{className:`animate-fade-up mx-auto max-w-4xl`,children:[(0,X.jsx)(`h1`,{className:`text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl`,children:i.name}),(0,X.jsx)(`p`,{className:`mt-5 text-xl font-semibold text-sky-800 sm:text-2xl`,children:i.role}),(0,X.jsx)(`p`,{className:`mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9`,children:`Engineering consultant focused on automation, instrumentation, robotics, object detection, and practical optimization for industrial systems.`}),(0,X.jsxs)(`div`,{className:`mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row`,children:[(0,X.jsxs)(`a`,{href:`https://wa.me/918741814358`,className:`btn-primary hero-action border-teal-300/70 from-emerald-500 via-teal-500 to-cyan-600 hover:border-teal-100 hover:from-emerald-400 hover:via-teal-500 hover:to-blue-500`,children:[(0,X.jsx)(aa,{icon:oa}),`Chat on WhatsApp`]}),(0,X.jsx)(r,{to:`/#services`,className:`btn-secondary hero-action`,children:`View Services`})]})]})})]})}function ca(){return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(sa,{}),(0,X.jsx)(e,{}),(0,X.jsx)(t,{}),(0,X.jsx)(c,{compact:!0}),(0,X.jsx)(n,{})]})}export{ca as default};