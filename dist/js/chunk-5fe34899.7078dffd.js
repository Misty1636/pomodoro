(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fe34899"],{"13c5":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ringtones"},[n("div",{staticClass:"ringtones__work"},[n("button",{staticClass:"dropdown",on:{click:function(t){return e.dropdownClass("work")}}},[e._v("work"),n("div",{staticClass:"dropdown__icon",class:{hide:e.toogledropdown.work}})]),n("div",{staticClass:"ringtones__items",class:{hide:e.toogledropdown.work}},e._l(e.ringtone,function(t){return n("div",{key:t.name,staticClass:"ringtones__item"},[n("input",{staticClass:"task__checkbox checkboxCircle checkboxCircle__pink",attrs:{type:"radio"},domProps:{checked:t.work},on:{click:function(n){return e.checkWork(t.name)}}}),n("span",[e._v(e._s(t.name))])])}),0)]),n("div",{staticClass:"ringtones__break"},[n("button",{staticClass:"dropdown",on:{click:function(t){return e.dropdownClass("break")}}},[e._v("break"),n("div",{staticClass:"dropdown__icon",class:{hide:e.toogledropdown.break}})]),n("div",{staticClass:"ringtones__items",class:{hide:e.toogledropdown.break}},e._l(e.ringtone,function(t){return n("div",{key:t.name,staticClass:"ringtones__item"},[n("input",{staticClass:"task__checkbox checkboxCircle checkboxCircle__pink",attrs:{type:"radio"},domProps:{checked:t.break},on:{click:function(n){return e.checkBreak(t.name)}}}),n("span",[e._v(e._s(t.name))])])}),0)])])},o=[],a=(n("7f7f"),n("ac6a"),{name:"ringtones",data:function(){return{toogledropdown:{work:!1,break:!1},ringtone:[{name:"none",work:!1,break:!1},{name:"Default",work:!0,break:!0},{name:"alarm",work:!1,break:!1},{name:"alert",work:!1,break:!1},{name:"beep",work:!1,break:!1},{name:"bell",work:!1,break:!1},{name:"bird",work:!1,break:!1},{name:"bugle",work:!1,break:!1},{name:"digital",work:!1,break:!1},{name:"drop",work:!1,break:!1},{name:"horn",work:!1,break:!1},{name:"music",work:!1,break:!1},{name:"ring",work:!1,break:!1},{name:"warning",work:!1,break:!1},{name:"whistle",work:!1,break:!1}]}},methods:{checkWork:function(e){var t=this;t.ringtone.forEach(function(t){t.name===e?t.work=!0:t.work=!1})},checkBreak:function(e){var t=this;t.ringtone.forEach(function(t){t.name===e?t.break=!0:t.break=!1})},dropdownClass:function(e){"work"===e&&(this.toogledropdown.work=!this.toogledropdown.work),"break"===e&&(this.toogledropdown.break=!this.toogledropdown.break)}}}),i=a,s=n("2877"),c=Object(s["a"])(i,r,o,!1,null,null,null);t["default"]=c.exports},"7f7f":function(e,t,n){var r=n("86cc").f,o=Function.prototype,a=/^\s*function ([^ (]*)/,i="name";i in o||n("9e1e")&&r(o,i,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},ac6a:function(e,t,n){for(var r=n("cadf"),o=n("0d58"),a=n("2aba"),i=n("7726"),s=n("32e9"),c=n("84f2"),k=n("2b4c"),l=k("iterator"),d=k("toStringTag"),u=c.Array,w={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=o(w),m=0;m<b.length;m++){var p,f=b[m],h=w[f],g=i[f],_=g&&g.prototype;if(_&&(_[l]||s(_,l,u),_[d]||s(_,d,f),c[f]=u,h))for(p in r)_[p]||a(_,p,r[p],!0)}}}]);
//# sourceMappingURL=chunk-5fe34899.7078dffd.js.map