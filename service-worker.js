if(!self.define){let o,i={};const l=(l,r)=>(l=new URL(l+".js",r).href,i[l]||new Promise((i=>{if("document"in self){const o=document.createElement("script");o.src=l,o.onload=i,document.head.appendChild(o)}else o=l,importScripts(l),i()})).then((()=>{let o=i[l];if(!o)throw new Error(`Module ${l} didn’t register its module`);return o})));self.define=(r,e)=>{const n=o||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const u=o=>l(o,n),f={module:{uri:n},exports:s,require:u};i[n]=Promise.all(r.map((o=>f[o]||u(o)))).then((o=>(e(...o),s)))}}define(["./workbox-db5fc017"],(function(o){"use strict";o.setCacheNameDetails({prefix:"gz-folio"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/portfolio/css/430.2ac276f0.css",revision:null},{url:"/portfolio/css/app.f585ae6b.css",revision:null},{url:"/portfolio/img/about.600d116c.png",revision:null},{url:"/portfolio/img/argent.83880bf4.png",revision:null},{url:"/portfolio/img/bronze.6bd371e3.png",revision:null},{url:"/portfolio/img/default.259a22ed.jpg",revision:null},{url:"/portfolio/img/gold.bfe04f92.png",revision:null},{url:"/portfolio/img/logo.1b193602.png",revision:null},{url:"/portfolio/img/logo_navbar.d603db2d.png",revision:null},{url:"/portfolio/index.html",revision:"31653c0c7ac5e9f915a80836a329ff1f"},{url:"/portfolio/js/278.569c3777.js",revision:null},{url:"/portfolio/js/430.525c3efe.js",revision:null},{url:"/portfolio/js/906.416ba986.js",revision:null},{url:"/portfolio/js/919.258f819e.js",revision:null},{url:"/portfolio/js/app.4083bc53.js",revision:null},{url:"/portfolio/js/chunk-vendors.361fc9f2.js",revision:null},{url:"/portfolio/loading.svg",revision:"035b3eabbb6834d7148a174f6ec75950"},{url:"/portfolio/manifest.json",revision:"87ee60463eca47e656c0a37d09003945"},{url:"/portfolio/resume/resume.pdf",revision:"4b41a3475132bd861b30a878e30aa56a"}],{})}));
//# sourceMappingURL=service-worker.js.map
