import{S as a,i as e,s,f as t,r as l,e as r,j as i,k as n,u as o,h as c,g as m,l as p,v as u,o as h,p as g,w as f,x as v,y as d,n as k,z as N,A as b,B as _}from"./client.26a56a18.js";function A(a,e,s){const t=a.slice();return t[9]=e[s],t}function E(a){let e,s,v,d,k,N,b=a[9].title+"";function _(...e){return a[7](a[9],...e)}return{c(){e=t("li"),s=l(b),v=r(),this.h()},l(a){e=i(a,"LI",{class:!0});var t=n(e);s=o(t,b),v=c(t),t.forEach(m),this.h()},h(){p(e,"class",d=u(a[2]&&a[9].id===a[2].id?"active":"")+" svelte-1bkponh")},m(a,t){h(a,e,t),g(e,s),g(e,v),k||(N=f(e,"click",_),k=!0)},p(s,t){a=s,4&t&&d!==(d=u(a[2]&&a[9].id===a[2].id?"active":"")+" svelte-1bkponh")&&p(e,"class",d)},d(a){a&&m(e),k=!1,N()}}}function S(a){let e,s,u,f,b,_,S,U,O,$,C,D,R,T,y,I,K,w,P,G,j,x,V,F,L,M,Y,z=(a[2]?a[2].title:"Select a song you wanna hear")+"",B=a[0].performer+"",q=a[0].name+"",H=a[0].name+"",J=a[3],Q=[];for(let e=0;e<J.length;e+=1)Q[e]=E(A(a,J,e));return{c(){e=t("div"),s=t("figure"),u=t("img"),_=r(),S=t("figcaption"),U=t("p"),O=l(z),$=r(),C=t("p"),D=t("span"),R=l(B),T=r(),y=t("span"),I=l("/ "),K=l(q),w=r(),P=t("audio"),G=t("source"),x=l("\n      Your browser does not support the audio element."),V=r(),F=t("p"),L=l(H),M=r(),Y=t("ul");for(let a=0;a<Q.length;a+=1)Q[a].c();this.h()},l(a){e=i(a,"DIV",{class:!0});var t=n(e);s=i(t,"FIGURE",{});var l=n(s);u=i(l,"IMG",{src:!0,alt:!0,class:!0}),_=c(l),S=i(l,"FIGCAPTION",{});var r=n(S);U=i(r,"P",{class:!0});var p=n(U);O=o(p,z),p.forEach(m),$=c(r),C=i(r,"P",{});var h=n(C);D=i(h,"SPAN",{class:!0});var g=n(D);R=o(g,B),g.forEach(m),T=c(h),y=i(h,"SPAN",{class:!0});var f=n(y);I=o(f,"/ "),K=o(f,q),f.forEach(m),h.forEach(m),r.forEach(m),l.forEach(m),w=c(t),P=i(t,"AUDIO",{controlslist:!0,class:!0});var v=n(P);G=i(v,"SOURCE",{src:!0,type:!0}),x=o(v,"\n      Your browser does not support the audio element."),v.forEach(m),V=c(t),F=i(t,"P",{class:!0});var d=n(F);L=o(d,H),d.forEach(m),M=c(t),Y=i(t,"UL",{class:!0});var k=n(Y);for(let a=0;a<Q.length;a+=1)Q[a].l(k);k.forEach(m),t.forEach(m),this.h()},h(){v(u.src,f=a[0].image)||p(u,"src",f),p(u,"alt",b=`${a[0].name} cover image`),p(u,"class","svelte-1bkponh"),p(U,"class","song-title svelte-1bkponh"),p(D,"class","song-author svelte-1bkponh"),p(y,"class","song-album svelte-1bkponh"),v(G.src,j=a[2].fileName||"")||p(G,"src",j),p(G,"type","audio/mpeg"),P.controls=!0,p(P,"controlslist","nodownload"),p(P,"class","svelte-1bkponh"),p(F,"class","album-title svelte-1bkponh"),p(Y,"class","svelte-1bkponh"),p(e,"class","music-player svelte-1bkponh")},m(t,l){h(t,e,l),g(e,s),g(s,u),g(s,_),g(s,S),g(S,U),g(U,O),g(S,$),g(S,C),g(C,D),g(D,R),g(C,T),g(C,y),g(y,I),g(y,K),g(e,w),g(e,P),g(P,G),g(P,x),a[6](P),g(e,V),g(e,F),g(F,L),g(e,M),g(e,Y);for(let a=0;a<Q.length;a+=1)Q[a].m(Y,null)},p(a,[e]){if(1&e&&!v(u.src,f=a[0].image)&&p(u,"src",f),1&e&&b!==(b=`${a[0].name} cover image`)&&p(u,"alt",b),4&e&&z!==(z=(a[2]?a[2].title:"Select a song you wanna hear")+"")&&d(O,z),1&e&&B!==(B=a[0].performer+"")&&d(R,B),1&e&&q!==(q=a[0].name+"")&&d(K,q),4&e&&!v(G.src,j=a[2].fileName||"")&&p(G,"src",j),1&e&&H!==(H=a[0].name+"")&&d(L,H),28&e){let s;for(J=a[3],s=0;s<J.length;s+=1){const t=A(a,J,s);Q[s]?Q[s].p(t,e):(Q[s]=E(t),Q[s].c(),Q[s].m(Y,null))}for(;s<Q.length;s+=1)Q[s].d(1);Q.length=J.length}},i:k,o:k,d(s){s&&m(e),a[6](null),N(Q,s)}}}function U(a,e,s){let t,l;b();let{album:r}=e;const i=r.tracks;let n=i[0].id;function o(a,e){s(5,n=e.id),l&&(l.pause(),s(1,l.currentTime=0,l),s(1,l.src=e.fileName,l),l.play())}return a.$$set=a=>{"album"in a&&s(0,r=a.album)},a.$$.update=()=>{32&a.$$.dirty&&s(2,t=i.find((a=>a.id===n)))},[r,l,t,i,o,n,function(a){_[a?"unshift":"push"]((()=>{l=a,s(1,l)}))},(a,e)=>o(0,a)]}class O extends a{constructor(a){super(),e(this,a,U,S,s,{album:0})}}const $=a=>`/audio/${a}`,C=[{id:0,slug:"garage",name:"Garage",performer:"VANVI",image:(D="garage.jpg",`/images/${D}`),tracks:[{id:"1",fileName:$("garage/vanvi_soundtrack_1.mp3"),title:"SOUNDTRACK 1",timestamp:1651603878040},{id:"2",fileName:$("garage/vanvi_soundtrack_2.mp3"),title:"SOUNDTRACK 2",timestamp:1651603878040},{id:"3",fileName:$("garage/vanvi_soundtrack_3.mp3"),title:"SOUNDTRACK 3",timestamp:1651603878040},{id:"4",fileName:$("garage/vanvi_soundtrack_4.mp3"),title:"SOUNDTRACK 4",timestamp:1651603878040},{id:"5",fileName:$("garage/vanvi_soundtrack_5.mp3"),title:"SOUNDTRACK 5",timestamp:1651603878040},{id:"6",fileName:$("garage/vanvi_soundtrack_6.mp3"),title:"SOUNDTRACK 6",timestamp:1651603878040},{id:"7",fileName:$("garage/vanvi_soundtrack_7.mp3"),title:"SOUNDTRACK 7",timestamp:1651603878040}]}];var D;export{O as M,C as a};
