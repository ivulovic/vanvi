import{S as s,i as a,s as e,f as t,c as l,e as r,j as c,k as n,a as o,h,g as f,o as i,m as u,p as g,n as m,t as p,b as d,d as v,r as E,q as $,u as b,l as D,D as V,z as I,E as M}from"./client.100c9913.js";import{a as j,M as w}from"./albums.830a9351.js";function x(s,a,e){const t=s.slice();return t[0]=a[e],t}function A(s){let a,e,E,$;return e=new w({props:{album:s[0]}}),{c(){a=t("div"),l(e.$$.fragment),E=r()},l(s){a=c(s,"DIV",{});var t=n(a);o(e.$$.fragment,t),E=h(t),t.forEach(f)},m(s,t){i(s,a,t),u(e,a,null),g(a,E),$=!0},p:m,i(s){$||(p(e.$$.fragment,s),$=!0)},o(s){d(e.$$.fragment,s),$=!1},d(s){s&&f(a),v(e)}}}function H(s){let a,e,l,o,u,m,v,w,H,k=j,q=[];for(let a=0;a<k.length;a+=1)q[a]=A(x(s,k,a));const y=s=>d(q[s],1,1,(()=>{q[s]=null}));return{c(){a=r(),e=t("header"),l=r(),o=t("div"),u=t("h1"),m=E("Music"),v=r(),w=t("div");for(let s=0;s<q.length;s+=1)q[s].c();this.h()},l(s){$('[data-svelte="svelte-sy6ri6"]',document.head).forEach(f),a=h(s),e=c(s,"HEADER",{class:!0}),n(e).forEach(f),l=h(s),o=c(s,"DIV",{class:!0});var t=n(o);u=c(t,"H1",{class:!0});var r=n(u);m=b(r,"Music"),r.forEach(f),v=h(t),w=c(t,"DIV",{class:!0});var i=n(w);for(let s=0;s<q.length;s+=1)q[s].l(i);i.forEach(f),t.forEach(f),this.h()},h(){document.title="Music | VANVI",D(e,"class","svelte-5ch3bh"),D(u,"class","page-title svelte-5ch3bh"),D(w,"class","page-content svelte-5ch3bh"),D(o,"class","page-wrapper svelte-5ch3bh")},m(s,t){i(s,a,t),i(s,e,t),i(s,l,t),i(s,o,t),g(o,u),g(u,m),g(o,v),g(o,w);for(let s=0;s<q.length;s+=1)q[s].m(w,null);H=!0},p(s,[a]){if(0&a){let e;for(k=j,e=0;e<k.length;e+=1){const t=x(s,k,e);q[e]?(q[e].p(t,a),p(q[e],1)):(q[e]=A(t),q[e].c(),p(q[e],1),q[e].m(w,null))}for(M(),e=k.length;e<q.length;e+=1)y(e);V()}},i(s){if(!H){for(let s=0;s<k.length;s+=1)p(q[s]);H=!0}},o(s){q=q.filter(Boolean);for(let s=0;s<q.length;s+=1)d(q[s]);H=!1},d(s){s&&f(a),s&&f(e),s&&f(l),s&&f(o),I(q,s)}}}class k extends s{constructor(s){super(),a(this,s,null,H,e,{})}}export{k as default};
