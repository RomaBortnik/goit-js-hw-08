function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,o,i,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,a=setTimeout(T,t),l?y(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function T(){var e=v();if(S(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function h(e){return a=void 0,p&&r?y(e):(r=o=void 0,u)}function w(){var e=v(),n=S(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(T,t),y(f)}return void 0===a&&(a=setTimeout(T,t)),u}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},w.flush=function(){return void 0===a?u:h(v())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea"),T={};function h(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));return e&&(j.value=e.email||"",S.value=e.message||""),e}y.addEventListener("submit",(function(e){if(e.preventDefault(),""===S.value||""===j.value)return;console.log(h()),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",e(t)((function(e){return T.email=j.value.trim(),T.message=S.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),h();
//# sourceMappingURL=03-feedback.28e9938d.js.map
