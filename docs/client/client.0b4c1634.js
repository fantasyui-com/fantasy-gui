function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function v(t){return b(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let x;function E(t){x=t}function P(t,e){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.context.set(t,e)}const R=[],A=[],j=[],C=[],L=Promise.resolve();let N=!1;function q(t){j.push(t)}let O=!1;const U=new Set;function k(){if(!O){O=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];E(e),D(e.$$)}for(R.length=0;A.length;)A.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];U.has(e)||(U.add(e),e())}j.length=0}while(R.length);for(;C.length;)C.pop()();N=!1,O=!1,U.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const I=new Set;let H;function T(){H={r:0,c:[],p:H}}function B(){H.r||o(H.c),H=H.p}function J(t,e){t&&t.i&&(I.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),H.c.push(()=>{I.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function M(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function F(t,e){t&&t.l(e)}function G(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),q(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(q)}function W(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(R.push(t),N||(N=!0,L.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(e,n,s,c,a,i,l=[-1]){const u=x;E(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&X(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l($(n.target)):p.fragment&&p.fragment.c(),n.intro&&J(e.$$.fragment),G(e,n.target,n.anchor),k()),E(u)}class Q{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Z=[];function tt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const et={},nt=()=>({});function rt(t){let e,n;const r=t[2].default,o=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(r,t,t[1],null);return{c(){e=p("main"),o&&o.c()},l(t){var n=$(e=y(t,"MAIN",{}));o&&o.l(n),n.forEach(u)},m(t,r){l(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&2&e&&o.p(a(r,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(r,t[1],e,null))},i(t){n||(J(o,t),n=!0)},o(t){K(o,t),n=!1},d(t){t&&u(e),o&&o.d(t)}}}function ot(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)}),[r,s,o]}class st extends Q{constructor(t){super(),Y(this,t,ot,rt,c,{segment:0})}}function ct(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){var o=$(e=y(t,"PRE",{}));n=b(o,r),o.forEach(u)},m(t,r){l(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&u(e)}}}function at(e){let n,r,o,s,c,a,f,S,x,E=e[1].message+"";document.title=n=e[0];let P=e[2]&&e[1].stack&&ct(e);return{c(){r=h(),o=p("h1"),s=d(e[0]),c=h(),a=p("p"),f=d(E),S=h(),P&&P.c(),x=m(),this.h()},l(t){w('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=v(t);var n=$(o=y(t,"H1",{class:!0}));s=b(n,e[0]),n.forEach(u),c=v(t);var i=$(a=y(t,"P",{class:!0}));f=b(i,E),i.forEach(u),S=v(t),P&&P.l(t),x=m(),this.h()},h(){g(o,"class","svelte-8od9u6"),g(a,"class","svelte-8od9u6")},m(t,e){l(t,r,e),l(t,o,e),i(o,s),l(t,c,e),l(t,a,e),i(a,f),l(t,S,e),P&&P.m(t,e),l(t,x,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(s,t[0]),2&e&&E!==(E=t[1].message+"")&&_(f,E),t[2]&&t[1].stack?P?P.p(t,e):((P=ct(t)).c(),P.m(x.parentNode,x)):P&&(P.d(1),P=null)},i:t,o:t,d(t){t&&u(r),t&&u(o),t&&u(c),t&&u(a),t&&u(S),P&&P.d(t),t&&u(x)}}}function it(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)}),[r,o,!1]}class lt extends Q{constructor(t){super(),Y(this,t,it,at,c,{status:0,error:1})}}function ut(t){let n,r;const o=[t[4].props];var s=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var a=new s(c());return{c(){a&&z(a.$$.fragment),n=m()},l(t){a&&F(a.$$.fragment,t),n=m()},m(t,e){a&&G(a,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?M(o,[V(t[4].props)]):{};if(s!==(s=t[4].component)){if(a){T();const t=a;K(t.$$.fragment,1,0,()=>{W(t,1)}),B()}s?(z((a=new s(c())).$$.fragment),J(a.$$.fragment,1),G(a,n.parentNode,n)):a=null}else s&&a.$set(r)},i(t){r||(a&&J(a.$$.fragment,t),r=!0)},o(t){a&&K(a.$$.fragment,t),r=!1},d(t){t&&u(n),a&&W(a,t)}}}function ft(t){let e;const n=new lt({props:{error:t[0],status:t[1]}});return{c(){z(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,r){G(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}function pt(t){let e,n,r,o;const s=[ft,ut],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){c[e].m(t,n),l(t,r,n),o=!0},p(t,o){let i=e;(e=a(t))===i?c[e].p(t,o):(T(),K(c[i],1,1,()=>{c[i]=null}),B(),(n=c[e])||(n=c[e]=s[e](t)).c(),J(n,1),n.m(r.parentNode,r))},i(t){o||(J(n),o=!0)},o(t){K(n),o=!1},d(t){c[e].d(t),t&&u(r)}}}function dt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[pt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new st({props:o});return{c(){z(s.$$.fragment)},l(t){F(s.$$.fragment,t)},m(t,e){G(s,t,e),n=!0},p(t,[e]){const n=12&e?M(r,[4&e&&{segment:t[2][0]},8&e&&V(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(J(s.$$.fragment,t),n=!0)},o(t){K(s.$$.fragment,t),n=!1},d(t){W(s,t)}}}function ht(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e;return P(et,r),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1)}),[o,s,c,a,i,r]}class mt extends Q{constructor(t){super(),Y(this,t,ht,dt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const gt=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],$t=[{js:()=>import("./index.9bf31a8f.js"),css:["client.0b4c1634.css"]},{js:()=>import("./about.6a94fb76.js"),css:["client.0b4c1634.css"]},{js:()=>import("./index.286840e1.js"),css:["index.286840e1.css","client.0b4c1634.css"]},{js:()=>import("./[slug].3059ed17.js"),css:["[slug].3059ed17.css","client.0b4c1634.css"]}],yt=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:e=>({slug:t(e[1])})}]}])(decodeURIComponent);const bt="undefined"!=typeof __SAPPER__&&__SAPPER__;let vt,_t,St,wt=!1,xt=[],Et="{}";const Pt={page:tt({}),preloading:tt(null),session:tt(bt&&bt.session)};let Rt,At;Pt.session.subscribe(async t=>{if(Rt=t,!wt)return;At=!0;const e=kt(new URL(location.href)),n=_t={},{redirect:r,props:o,branch:s}=await Tt(e);n===_t&&await Ht(r,s,o,e.page)});let jt,Ct=null;let Lt,Nt=1;const qt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ot={};function Ut(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function kt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(bt.baseUrl))return null;let e=t.pathname.slice(bt.baseUrl.length);if(""===e&&(e="/"),!gt.some(t=>t.test(e)))for(let n=0;n<yt.length;n+=1){const r=yt[n],o=r.pattern.exec(e);if(o){const n=Ut(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Dt(){return{x:pageXOffset,y:pageYOffset}}async function It(t,e,n,r){if(e)Lt=e;else{const t=Dt();Ot[Lt]=t,e=Lt=++Nt,Ot[Lt]=n?t:{x:0,y:0}}Lt=e,vt&&Pt.preloading.set(!0);const o=Ct&&Ct.href===t.href?Ct.promise:Tt(t);Ct=null;const s=_t={},{redirect:c,props:a,branch:i}=await o;if(s===_t&&(await Ht(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ot[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Ot[Lt]=t,t&&scrollTo(t.x,t.y)}}async function Ht(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=kt(new URL(t,document.baseURI));return n?(qt[e.replaceState?"replaceState":"pushState"]({id:Lt},"",t),It(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Pt.page.set(r),Pt.preloading.set(!1),vt)vt.$set(n);else{n.stores={page:{subscribe:Pt.page.subscribe},preloading:{subscribe:Pt.preloading.subscribe},session:Pt.session},n.level0={props:await St};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Jt(t.nextSibling);Jt(t),Jt(e)}vt=new mt({target:jt,props:n,hydrate:!0})}xt=e,Et=JSON.stringify(r.query),wt=!0,At=!1}async function Tt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let a;St||(St=bt.preloaded[0]||nt.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Rt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Et)return!0;const o=xt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!At&&!u&&xt[a]&&xt[a].part===e.i)return xt[a];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Bt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}($t[e.i]);let m;return m=wt||!bt.preloaded[a+1]?h?await h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Rt):{}:bt.preloaded[a+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function Bt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function Jt(t){t.parentNode.removeChild(t)}function Kt(t){const e=kt(new URL(t,document.baseURI));if(e)return Ct&&t===Ct.href||function(t,e){Ct={href:t,promise:e}}(t,Tt(e)),Ct.promise}let Mt;function Vt(t){clearTimeout(Mt),Mt=setTimeout(()=>{zt(t)},20)}function zt(t){const e=Gt(t.target);e&&"prefetch"===e.rel&&Kt(e.href)}function Ft(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Gt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=kt(o);if(s){It(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),qt.pushState({id:Lt},"",o.href)}}function Gt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Wt(t){if(Ot[Lt]=Dt(),t.state){const e=kt(new URL(location.href));e?It(e,t.state.id):location.href=location.href}else(function(t){Lt=t})(Nt=Nt+1),qt.replaceState({id:Lt},"",location.href)}!function(t){var e;"scrollRestoration"in qt&&(qt.scrollRestoration="manual"),e=t.target,jt=e,addEventListener("click",Ft),addEventListener("popstate",Wt),addEventListener("touchstart",zt),addEventListener("mousemove",Vt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;qt.replaceState({id:Nt},"",e);const n=new URL(location.href);if(bt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=bt;St||(St=s&&s[0]),Ht(null,[],{error:a,status:c,session:o,level0:{props:St},level1:{props:{status:c,error:a},component:lt},segments:s},{host:e,path:n,query:Ut(r),params:{}})}();const r=kt(n);return r?It(r,Nt,!0,t):void 0})}({target:document.querySelector("#sapper")});export{Q as S,h as a,y as b,v as c,u as d,p as e,$ as f,b as g,g as h,Y as i,S as j,l as k,i as l,_ as m,t as n,f as o,w as q,c as s,d as t};
