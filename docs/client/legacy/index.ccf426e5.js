import{_ as t,a as n,b as s,c as r,i as a,s as o,d as e,S as f,f as c,t as i,j as u,k as l,l as h,g as v,m as p,o as g,p as d,u as m,e as E,q as b,h as j,v as q,r as x,w as L}from"./client.88d0e1e0.js";function R(t,n,s){var r=t.slice();return r[1]=n[s],r}function k(t){var n,s,r,a,o=t[1].title+"";return{c:function(){n=c("li"),s=c("a"),r=i(o),this.h()},l:function(t){n=u(t,"LI",{});var a=l(n);s=u(a,"A",{rel:!0,href:!0});var e=l(s);r=h(e,o),e.forEach(v),a.forEach(v),this.h()},h:function(){p(s,"rel","prefetch"),p(s,"href",a="blog/"+t[1].slug)},m:function(t,a){g(t,n,a),d(n,s),d(s,r)},p:function(t,n){1&n&&o!==(o=t[1].title+"")&&m(r,o),1&n&&a!==(a="blog/"+t[1].slug)&&p(s,"href",a)},d:function(t){t&&v(n)}}}function w(t){for(var n,s,r,a,o,e=t[0],f=[],m=0;m<e.length;m+=1)f[m]=k(R(t,e,m));return{c:function(){n=E(),s=c("h1"),r=i("Recent posts"),a=E(),o=c("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){b('[data-svelte="svelte-hfp9t8"]',document.head).forEach(v),n=j(t),s=u(t,"H1",{});var e=l(s);r=h(e,"Recent posts"),e.forEach(v),a=j(t),o=u(t,"UL",{class:!0});for(var c=l(o),i=0;i<f.length;i+=1)f[i].l(c);c.forEach(v),this.h()},h:function(){document.title="Blog",p(o,"class","svelte-1frg2tf")},m:function(t,e){g(t,n,e),g(t,s,e),d(s,r),g(t,a,e),g(t,o,e);for(var c=0;c<f.length;c+=1)f[c].m(o,null)},p:function(t,n){var s=q(n,1)[0];if(1&s){var r;for(e=t[0],r=0;r<e.length;r+=1){var a=R(t,e,r);f[r]?f[r].p(a,s):(f[r]=k(a),f[r].c(),f[r].m(o,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=e.length}},i:x,o:x,d:function(t){t&&v(n),t&&v(s),t&&v(a),t&&v(o),L(f,t)}}}function y(t){t.params,t.query;return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{posts:t}})}function A(t,n,s){var r=n.posts;return t.$set=function(t){"posts"in t&&s(0,r=t.posts)},[r]}export default(function(c){function i(t){var f;return n(this,i),f=s(this,r(i).call(this)),a(e(f),t,A,w,o,{posts:0}),f}return t(i,f),i}());export{y as preload};