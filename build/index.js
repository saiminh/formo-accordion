!function(){"use strict";var e,t={513:function(){var e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}var n=window.wp.element,r=window.wp.i18n,o=window.wp.blockEditor,a=JSON.parse('{"u2":"create-block/formo-accordion"}');(0,e.registerBlockType)(a.u2,{edit:function(e){let{attributes:a,setAttributes:c}=e;const i=(0,o.useBlockProps)();return(0,n.createElement)("details",{className:"fo-accordion"},(0,n.createElement)(o.RichText,t({},i,{tagName:"summary",value:a.header,onChange:e=>{c({header:e})},allowedFormats:["core/bold","core/italic"],placeholder:(0,r.__)("FAQ Question?","formo-accordion-summary")})),(0,n.createElement)("div",{className:"content"},(0,n.createElement)(o.InnerBlocks,null)))},save:function(e){let{attributes:r}=e;const a=o.useBlockProps.save();return(0,n.createElement)("details",{className:"fo-accordion"},(0,n.createElement)(o.RichText.Content,t({},a,{tagName:"summary",value:r.header})),(0,n.createElement)("div",{className:"content"},(0,n.createElement)(o.InnerBlocks.Content,null)))}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],a=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&a||c>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(i=!1,a<c&&(c=a));if(i){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,c=n[0],i=n[1],l=n[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var u=l(r)}for(t&&t(n);s<c.length;s++)a=c[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunkformo_headline=self.webpackChunkformo_headline||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[431],(function(){return r(513)}));o=r.O(o)}();