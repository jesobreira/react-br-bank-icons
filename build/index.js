module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";var r=n(3);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,l){if(l!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),l=n.n(o),i={bankName:l.a.string,bankId:l.a.number,size:l.a.number},c=[{bankName:"itau",bankId:341,ariaTitle:"Banco Itaú",svg:{original:a.a.createElement("g",null,a.a.createElement("path",{d:"M0 3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34315 24 0 22.6569 0 21V3Z",fill:"#004990"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.1804 15.0764L19.2769 13.5H20.9955L19.4494 15.0764H18.1804ZM5.77614 13.5005V15.4527H4.94713V16.7862H5.77614V19.1635C5.77614 19.9499 5.93377 20.5405 6.27495 20.8997C6.56739 21.2136 7.08157 21.4463 7.7042 21.4463C8.23902 21.4463 8.45023 21.3664 8.68997 21.2733V19.9152C8.64079 19.9385 8.50072 19.9661 8.3185 19.9661C7.6884 19.9661 7.54262 19.574 7.54262 18.8574V16.7862H8.67065V15.4527H7.54262V13.5005H5.77614ZM2.25 21.3025H4.06915V13.5006H2.25V21.3025ZM19.9487 15.4566V18.8837C19.9487 19.0216 19.9316 19.1445 19.8877 19.2552C19.7419 19.6069 19.3831 20.0051 18.7921 20.0051C18.0496 20.0051 17.7242 19.4594 17.7242 18.5469V15.4526H15.9485V18.8718C15.9485 19.3294 16.0039 19.7184 16.1141 20.039C16.2238 20.3595 16.374 20.6251 16.565 20.8328C16.756 21.0419 16.9852 21.1942 17.2518 21.2904C17.5183 21.3865 17.8134 21.4348 18.1348 21.4348C18.4149 21.4348 18.6626 21.4006 18.8791 21.3321C19.0951 21.2645 19.2817 21.1819 19.438 21.0853C19.5948 20.99 19.7261 20.8855 19.8319 20.7727C19.9377 20.6607 20.0211 20.5606 20.0804 20.4719L20.3092 21.3022H21.7499V15.4566H19.9487ZM9.82121 15.8375C10.273 15.5744 11.1051 15.2846 12.2204 15.2846C14.2332 15.2846 14.9235 16.4386 14.9235 17.8441V21.3024H13.4429L13.244 20.6947H13.2246C12.8273 21.165 12.173 21.446 11.398 21.446C10.097 21.446 9.39178 20.5481 9.39178 19.6585C9.39178 18.1467 10.8483 17.3809 13.2066 17.391V17.3282C13.2066 17.0542 12.9818 16.5132 11.9175 16.5163C11.2794 16.5163 10.5729 16.7389 10.1628 16.987L9.82121 15.8375ZM13.229 19.4385C13.2505 19.3428 13.2593 19.2369 13.2593 19.1443V18.5247C13.1355 18.523 13.0161 18.5243 12.8997 18.5282C12.7065 18.5357 12.526 18.5511 12.3623 18.577C11.6615 18.685 11.1916 18.9687 11.1916 19.5193C11.1916 20.0106 11.5363 20.2697 12.0364 20.2697C12.6108 20.2697 13.0376 19.911 13.1992 19.5298L13.211 19.5004C13.2145 19.4916 13.2264 19.4508 13.229 19.4385Z",fill:"#FFE512"})),mono:a.a.createElement("g",null,a.a.createElement("path",{d:"M13.2593 19.1443C13.2593 19.2369 13.2505 19.3428 13.229 19.4385C13.2264 19.4508 13.2145 19.4916 13.211 19.5004L13.1992 19.5298C13.0376 19.911 12.6108 20.2697 12.0364 20.2697C11.5363 20.2697 11.1916 20.0106 11.1916 19.5193C11.1916 18.9687 11.6615 18.685 12.3623 18.577C12.526 18.5511 12.7065 18.5357 12.8997 18.5282C13.0161 18.5243 13.1355 18.523 13.2593 18.5247V19.1443Z"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 0C1.34315 0 0 1.34315 0 3V21C0 22.6569 1.34315 24 3 24H21C22.6569 24 24 22.6569 24 21V3C24 1.34315 22.6569 0 21 0H3ZM19.2769 13.5L18.1804 15.0764H19.4494L20.9955 13.5H19.2769ZM5.77614 15.4527V13.5005H7.54262V15.4527H8.67065V16.7862H7.54262V18.8574C7.54262 19.574 7.6884 19.9662 8.3185 19.9662C8.50072 19.9662 8.64079 19.9385 8.68997 19.9152V21.2733C8.45023 21.3664 8.23902 21.4463 7.7042 21.4463C7.08157 21.4463 6.56739 21.2136 6.27495 20.8997C5.93377 20.5405 5.77614 19.9499 5.77614 19.1635V16.7862H4.94713V15.4527H5.77614ZM4.06915 21.3025H2.25V13.5006H4.06915V21.3025ZM19.9487 18.8837V15.4566H21.7499V21.3022H20.3092L20.0804 20.4719C20.0211 20.5606 19.9377 20.6607 19.8319 20.7727C19.7261 20.8855 19.5948 20.99 19.438 21.0853C19.2817 21.1819 19.0951 21.2645 18.8791 21.3321C18.6626 21.4006 18.4149 21.4348 18.1348 21.4348C17.8134 21.4348 17.5183 21.3865 17.2518 21.2904C16.9852 21.1942 16.756 21.0419 16.565 20.8328C16.374 20.6251 16.2238 20.3595 16.1141 20.039C16.0039 19.7184 15.9485 19.3294 15.9485 18.8718V15.4526H17.7242V18.5469C17.7242 19.4594 18.0496 20.0051 18.7921 20.0051C19.3831 20.0051 19.7419 19.6069 19.8877 19.2552C19.9316 19.1445 19.9487 19.0216 19.9487 18.8837ZM12.2204 15.2846C11.1051 15.2846 10.273 15.5744 9.82121 15.8375L10.1628 16.987C10.5729 16.7389 11.2794 16.5163 11.9175 16.5163C12.9818 16.5132 13.2066 17.0542 13.2066 17.3282V17.391C10.8483 17.3809 9.39178 18.1467 9.39178 19.6585C9.39178 20.5481 10.097 21.446 11.398 21.446C12.173 21.446 12.8273 21.165 13.2246 20.6947H13.244L13.4429 21.3024H14.9235V17.8441C14.9235 16.4386 14.2332 15.2846 12.2204 15.2846Z"}))}},{bankName:"bb",bankId:1,ariaTitle:"Banco do Brasil",svg:{original:a.a.createElement("g",null,a.a.createElement("path",{d:"M0 3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34315 24 0 22.6569 0 21V3Z",fill:"#FDE100"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 9.00004L6.74648 11.5L11.2465 8.50004L9.37324 7.24652L11.8099 5.6268L17.0563 9.1268L8.43662 14.8733L10.3099 16.1268L21 9.00004L12 3L3 9.00004ZM21 15L17.2465 12.5L12.7465 15.5L14.6197 16.7465L12.1831 18.3733L6.93662 14.8733L15.5563 9.1268L13.6831 7.87328L3 15L12 21L21 15ZM21 5.5L19.1197 6.75357L17.2465 5.5L21 3V5.5ZM3 18.5L4.87324 17.2465L6.74648 18.5L3 21V18.5Z",fill:"#003882"})),mono:a.a.createElement("g",null,a.a.createElement("path",{d:"M24 0H0V24H24V0ZM6.74648 11.5L3 9.00004L12 3L21 9.00004L10.3099 16.1268L8.43662 14.8733L17.0563 9.1268L11.8099 5.6268L9.37324 7.24652L11.2465 8.50004L6.74648 11.5ZM17.2465 12.5L21 15L12 21L3 15L13.6831 7.87328L15.5563 9.1268L6.93662 14.8733L12.1831 18.3733L14.6197 16.7465L12.7465 15.5L17.2465 12.5ZM19.1197 6.75356L21 5.5V3L17.2465 5.5L19.1197 6.75356ZM4.87324 17.2465L3 18.5V21L6.74648 18.5L4.87324 17.2465Z"}))}}],u=function(e){var t=e.bankName,n=(e.bankId,e.size),r=e.color,o=function(e){return c.find((function(t){return new RegExp(e,"i").test(t.bankName)}))}(t),l=r?o.svg.mono:o.svg.original,i="Ícone representando a marca do ".concat(o.ariaTitle,".");return a.a.createElement("svg",{width:n,className:"rbbi-".concat(o.bankName),height:n,viewBox:"0 0 24 24",fill:r},a.a.createElement("title",null,o.ariaTitle),a.a.createElement("desc",null,i),l)};u.propTypes=i,u.defaultProps={bankName:"fallback",bankId:-1,size:24};var C=u;t.default=C}]);