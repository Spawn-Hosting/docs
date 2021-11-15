"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[489],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,h=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},7486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(4996),c=["components"],u={},s="Products",l={unversionedId:"Billing/panel",id:"Billing/panel",isDocsHomePage:!1,title:"Products",description:"With products, you can configure the resources allocated to new servers created on your panel. You can set the custom pricing and link products to specific nodes and eggs. You can check out the pterodactyl server creation page for more information about the specific options like CPU and IO.",source:"@site/docs/Billing/panel.md",sourceDirName:"Billing",slug:"/Billing/panel",permalink:"/docs/Billing/panel",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Billing/panel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Products",permalink:"/docs/panel/panel"}},d=[],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"products"},"Products"),(0,i.kt)("p",null,"With products, you can configure the resources allocated to new servers created on your panel. You can set the custom pricing and link products to specific nodes and eggs. You can check out the pterodactyl server creation page for more information about the specific options like CPU and IO."),(0,i.kt)("img",{src:(0,a.Z)("/img/userguides/product-page.png")}),(0,i.kt)("h1",{id:"credits-system"},"Credits System"),(0,i.kt)("p",null,"Credits are charged hourly based on the monthly price you've configured (price / 30 / 24) This means that the price of your products won\u2019t be charged right away when the user creates a server, but instead, the credits are reduced hourly\u2014giving the user the option to cancel and create servers freely anytime. When the user runs out of credits, his server will automatically be suspended."),(0,i.kt)("h1",{id:"product-linking"},"Product Linking"),(0,i.kt)("img",{width:"50%",height:"50%",src:(0,a.Z)("/img/userguides/product-linking-example.gif")}),"Example of making a product for minecraft servers.",(0,i.kt)("h1",{id:"information"},"Information"),(0,i.kt)("p",null,"Product linking allows you to configure the nodes and eggs this product can be a used on. For example, you have a node that is more powerful than another node, you may most likely want to charge a bit extra for the usage of this node. Or you may have a node dedicated for Minecraft hosting and another node for discord bots. Using the node and egg links, you can easily keep your pricing and server creation separated."),(0,i.kt)("p",null,"Hiding nodes and eggs\nYou can hide specific nodes or eggs from being used by not configuring them in any of your products. this way, they won\u2019t show up in the server creation page and therefore can\u2019t be used by your customers. This is great if you have some nodes or eggs that you want to exclude from controlpanel."),(0,i.kt)("p",null,"Tips\nIf you have a well-configured product, you can use the Copy button to copy the product to create slight variations of it easily :)"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In development, you can only use one locale at a same time."))))}f.isMDXComponent=!0}}]);