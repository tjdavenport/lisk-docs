!function(){"use strict";var l=window.location.hash;function o(t,a){return Array.prototype.slice.call((a||document).querySelectorAll(t))}o(".tabset").forEach(function(c){var n,r,t=c.querySelector(".tabs");t&&(o("li",t).forEach(function(t,a){var i=(t.querySelector("a[id]")||t).id;if(i){var e,s=(e=i,o(".tab-pane",c).find(function(t){return t.getAttribute("aria-labelledby")===e}));a||(r={tab:t,pane:s}),!n&&l==="#"+i&&(n=!0)?(t.classList.add("is-active"),s&&s.classList.add("is-active")):a||(t.classList.remove("is-active"),s&&s.classList.remove("is-active")),t.addEventListener("click",function(t){var a=this.tab,i=this.pane;o(".tabs li, .tab-pane",this.tabset).forEach(function(t){t===a||t===i?t.classList.add("is-active"):t.classList.remove("is-active")}),t.preventDefault()}.bind({tabset:c,tab:t,pane:s}))}}),!n&&r&&(r.tab.classList.add("is-active"),r.pane&&r.pane.classList.add("is-active")));c.classList.remove("is-loading")})}();