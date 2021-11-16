"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6151],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(2263),o=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},3340:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=r(4996),c=["components"],u={},s="Products",l={unversionedId:"panel/panel",id:"panel/panel",isDocsHomePage:!1,title:"Products",description:"With products, you can configure the resources allocated to new servers created on your panel. You can set the custom pricing and link products to specific nodes and eggs. You can check out the pterodactyl server creation page for more information about the specific options like CPU and IO.",source:"@site/docs/panel/panel.md",sourceDirName:"panel",slug:"/panel/panel",permalink:"/docs/panel/panel",editUrl:"https://github.com/Spawn-Hosting/docs/docs/panel/panel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Whitelist",permalink:"/docs/minecraft-support/Whitelist"},next:{title:"Player List",permalink:"/docs/panel/Player List"}},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"products"},"Products"),(0,i.kt)("p",null,"With products, you can configure the resources allocated to new servers created on your panel. You can set the custom pricing and link products to specific nodes and eggs. You can check out the pterodactyl server creation page for more information about the specific options like CPU and IO."),(0,i.kt)("img",{src:(0,a.Z)("/img/userguides/product-page.png")}),(0,i.kt)("h1",{id:"credits-system"},"Credits System"),(0,i.kt)("p",null,"Credits are charged hourly based on the monthly price you've configured (price / 30 / 24) This means that the price of your products won\u2019t be charged right away when the user creates a server, but instead, the credits are reduced hourly\u2014giving the user the option to cancel and create servers freely anytime. When the user runs out of credits, his server will automatically be suspended."),(0,i.kt)("h1",{id:"product-linking"},"Product Linking"),(0,i.kt)("img",{width:"50%",height:"50%",src:(0,a.Z)("/img/userguides/product-linking-example.gif")}),"Example of making a product for minecraft servers.",(0,i.kt)("h1",{id:"information"},"Information"),(0,i.kt)("p",null,"Product linking allows you to configure the nodes and eggs this product can be a used on. For example, you have a node that is more powerful than another node, you may most likely want to charge a bit extra for the usage of this node. Or you may have a node dedicated for Minecraft hosting and another node for discord bots. Using the node and egg links, you can easily keep your pricing and server creation separated."),(0,i.kt)("p",null,"Hiding nodes and eggs\nYou can hide specific nodes or eggs from being used by not configuring them in any of your products. this way, they won\u2019t show up in the server creation page and therefore can\u2019t be used by your customers. This is great if you have some nodes or eggs that you want to exclude from controlpanel."),(0,i.kt)("p",null,"Tips\nIf you have a well-configured product, you can use the Copy button to copy the product to create slight variations of it easily :)"))}f.isMDXComponent=!0}}]);