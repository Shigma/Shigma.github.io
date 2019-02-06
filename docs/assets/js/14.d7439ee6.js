(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{66:function(e,r,t){"use strict";t.r(r);var a=t(1),n=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("p",[e._v("这个页面展示了有关 web-stg 的一些常见问题的解答.")]),e._v(" "),t("h2",{attrs:{id:"关于框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于框架","aria-hidden":"true"}},[e._v("#")]),e._v(" 关于框架")]),e._v(" "),t("h3",{attrs:{id:"在网页上运行弹幕游戏的困难在哪里"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在网页上运行弹幕游戏的困难在哪里","aria-hidden":"true"}},[e._v("#")]),e._v(" 在网页上运行弹幕游戏的困难在哪里?")]),e._v(" "),t("p",[e._v("熟悉 JavaScript 的人都知道这是一门特性依赖于标准的修订和浏览器的实现的语言. 因此有许多功能很难被所有浏览器兼容 (比如"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/ellipse",target:"_blank",rel:"noopener noreferrer"}},[e._v("画椭圆"),t("OutboundLink")],1),e._v("和"),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas",target:"_blank",rel:"noopener noreferrer"}},[e._v("离屏渲染"),t("OutboundLink")],1),e._v("). 我们将努力做到让尽可能多的浏览器运行我们的弹幕, 但仍然会选择放弃对于一部分浏览器的支持, 希望大家谅解. (IE: 你们看我干啥?)")]),e._v(" "),t("h3",{attrs:{id:"在浏览器上运行弹幕-性能会受到影响吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器上运行弹幕-性能会受到影响吗","aria-hidden":"true"}},[e._v("#")]),e._v(" 在浏览器上运行弹幕, 性能会受到影响吗?")]),e._v(" "),t("p",[e._v("会. Web 应用与本地应用的一个很大区别在于它对自身运行的控制力是较弱的, 影响运行性能的不确定因素更大. 有的时候开一个页面不卡, 但是页面多了以后浏览器就会分配更少的内存给我们的弹幕引擎, 造成帧率难以维持或者是处理落. 此外, Web 应用的另一个劣势在于 JavaScript 本身的运行速度可能不如 Cpp 或者 C#, 这可能导致页面所能承载的最大子弹数低于原生应用.")]),e._v(" "),t("p",[e._v("不过尽管如此, 我们也有一定的应对措施. 使用 WebWorker 结合离屏渲染可以大幅度降低外部环境因素对性能带来的影响. 但同时离屏渲染对浏览器的要求也更高 (Chrome 69, Firefox 44, Opera 56), 在不支持它的浏览器上, 我们仍将采取普通的渲染方法.")]),e._v(" "),t("h3",{attrs:{id:"我可以用它制作本地游戏吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我可以用它制作本地游戏吗","aria-hidden":"true"}},[e._v("#")]),e._v(" 我可以用它制作本地游戏吗?")]),e._v(" "),t("p",[e._v("可以. "),t("a",{attrs:{href:"https://electronjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Electron"),t("OutboundLink")],1),e._v(" 等工具可以实现 Web 应用的本地化, 可以直接生成弹幕游戏的可执行文件, 效果将与普通的弹幕游戏无异.")])])},[],!1,null,null,null);r.default=n.exports}}]);