(self.webpackChunkextract_css=self.webpackChunkextract_css||[]).push([[84467],{783647:(A,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e;(function(i){i.SUB_FOOTER="SUB_FOOTER",i.PILL="PILL",i.HIDDEN="HIDDEN"})(e||(e={}));var u=e;n.default=u,A.exports=n.default},845076:(A,n)=>{var e,u;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var i={}.hasOwnProperty;function m(){for(var s=[],l=0;l<arguments.length;l++){var a=arguments[l];if(a){var E=typeof a;if(E==="string"||E==="number")s.push(a);else if(Array.isArray(a)){if(a.length){var S=m.apply(null,a);S&&s.push(S)}}else if(E==="object")if(a.toString===Object.prototype.toString)for(var t in a)i.call(a,t)&&a[t]&&s.push(t);else s.push(a.toString())}}return s.join(" ")}A.exports?(m.default=m,A.exports=m):(e=[],u=function(){return m}.apply(n,e),u!==void 0&&(A.exports=u))})()},418008:(A,n,e)=>{var u="Expected a function",i=NaN,m="[object Symbol]",s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,E=/^0o[0-7]+$/i,S=parseInt,t=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,p=typeof self=="object"&&self&&self.Object===Object&&self,d=t||p||Function("return this")(),g=Object.prototype,T=g.toString,O=Math.max,h=Math.min,_=function(){return d.Date.now()};function y(v,P,M){var k,G,W,B,R,r,f=0,o=!1,C=!1,N=!0;if(typeof v!="function")throw new TypeError(u);P=w(P)||0,b(M)&&(o=!!M.leading,C="maxWait"in M,W=C?O(w(M.maxWait)||0,P):W,N="trailing"in M?!!M.trailing:N);function D(L){var $=k,V=G;return k=G=void 0,f=L,B=v.apply(V,$),B}function U(L){return f=L,R=setTimeout(K,P),o?D(L):B}function F(L){var $=L-r,V=L-f,J=P-$;return C?h(J,W-V):J}function j(L){var $=L-r,V=L-f;return r===void 0||$>=P||$<0||C&&V>=W}function K(){var L=_();if(j(L))return H(L);R=setTimeout(K,F(L))}function H(L){return R=void 0,N&&k?D(L):(k=G=void 0,B)}function X(){R!==void 0&&clearTimeout(R),f=0,k=r=G=R=void 0}function q(){return R===void 0?B:H(_())}function z(){var L=_(),$=j(L);if(k=arguments,G=this,r=L,$){if(R===void 0)return U(r);if(C)return R=setTimeout(K,P),D(r)}return R===void 0&&(R=setTimeout(K,P)),B}return z.cancel=X,z.flush=q,z}function b(v){var P=typeof v;return!!v&&(P=="object"||P=="function")}function c(v){return!!v&&typeof v=="object"}function I(v){return typeof v=="symbol"||c(v)&&T.call(v)==m}function w(v){if(typeof v=="number")return v;if(I(v))return i;if(b(v)){var P=typeof v.valueOf=="function"?v.valueOf():v;v=b(P)?P+"":P}if(typeof v!="string")return v===0?v:+v;v=v.replace(s,"");var M=a.test(v);return M||E.test(v)?S(v.slice(2),M?2:8):l.test(v)?i:+v}A.exports=y},750317:A=>{A.exports={}},439896:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});function u(c,I){for(var w in I)Object.defineProperty(c,w,{enumerable:!0,get:I[w]})}u(n,{SITE_STYLES_ACCESSORIES:function(){return S},SITE_STYLES_ANIMATIONS:function(){return g},SITE_STYLES_BUTTONS:function(){return a},SITE_STYLES_COLORS:function(){return O},SITE_STYLES_COOKIE_BANNER:function(){return T},SITE_STYLES_FONTS:function(){return l},SITE_STYLES_FORMS:function(){return y},SITE_STYLES_IMAGE_BLOCKS:function(){return p},SITE_STYLES_PALETTE_EDITOR:function(){return h},SITE_STYLES_PRODUCT_ITEMS:function(){return E},SITE_STYLES_ROOT:function(){return s},SITE_STYLES_SITE_SPACING:function(){return d},SITE_STYLES_THEME_EDITOR:function(){return _},default:function(){return b}});var i=m(e(62600));function m(c){return c&&c.__esModule?c:{default:c}}var s="".concat(i.default.forSiteStyles(),"/site-styles"),l="".concat(s,"/fonts"),a="".concat(s,"/buttons"),E="".concat(s,"/product-items"),S="".concat(s,"/accessories"),t=S,p="".concat(t,"/image-blocks"),d="".concat(t,"/site-spacing"),g="".concat(t,"/animations"),T="".concat(S,"/cookie-banner"),O="".concat(s,"/colors"),h="".concat(O,"/palette-editor"),_="".concat(O,"/theme-editor"),y="".concat(s,"/forms"),b={ROOT:s,FONTS:l,COLORS:O,PALETTE_EDITOR:h,THEME_EDITOR:_,BUTTONS:a,ACCESSORIES:S,IMAGE_BLOCKS:p,PRODUCT_ITEMS:E,SITE_SPACING:d,ANIMATIONS:g,FORMS:y,COOKIE_BANNER:T}},508948:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});function u(r,f){for(var o in f)Object.defineProperty(r,o,{enumerable:!0,get:f[o]})}u(n,{areCookiesSet:function(){return W},default:function(){return R}});var i=y(e(174161)),m=e(233284),s=h(e(687048)),l=h(e(602775)),a=h(e(994336)),E=h(e(680907)),S=h(e(477577)),t=e(57466),p=h(e(304974)),d=e(71226);function g(r,f){(f==null||f>r.length)&&(f=r.length);for(var o=0,C=new Array(f);o<f;o++)C[o]=r[o];return C}function T(r){if(Array.isArray(r))return r}function O(r,f,o){return f in r?Object.defineProperty(r,f,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[f]=o,r}function h(r){return r&&r.__esModule?r:{default:r}}function _(r){if(typeof WeakMap!="function")return null;var f=new WeakMap,o=new WeakMap;return(_=function(C){return C?o:f})(r)}function y(r,f){if(!f&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var o=_(f);if(o&&o.has(r))return o.get(r);var C={__proto__:null},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in r)if(D!=="default"&&Object.prototype.hasOwnProperty.call(r,D)){var U=N?Object.getOwnPropertyDescriptor(r,D):null;U&&(U.get||U.set)?Object.defineProperty(C,D,U):C[D]=r[D]}return C.default=r,o&&o.set(r,C),C}function b(r,f){var o=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(o!=null){var C=[],N=!0,D=!1,U,F;try{for(o=o.call(r);!(N=(U=o.next()).done)&&(C.push(U.value),!(f&&C.length===f));N=!0);}catch(j){D=!0,F=j}finally{try{!N&&o.return!=null&&o.return()}finally{if(D)throw F}}return C}}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function I(r){for(var f=1;f<arguments.length;f++){var o=arguments[f]!=null?arguments[f]:{},C=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(C=C.concat(Object.getOwnPropertySymbols(o).filter(function(N){return Object.getOwnPropertyDescriptor(o,N).enumerable}))),C.forEach(function(N){O(r,N,o[N])})}return r}function w(r,f){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(r);f&&(C=C.filter(function(N){return Object.getOwnPropertyDescriptor(r,N).enumerable})),o.push.apply(o,C)}return o}function v(r,f){return f=f!=null?f:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(f)):w(Object(f)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(f,o))}),r}function P(r,f){return T(r)||b(r,f)||M(r,f)||c()}function M(r,f){if(r){if(typeof r=="string")return g(r,f);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(o);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return g(r,f)}}var k={performance:"ss_performanceCookiesAllowed",marketing:"ss_marketingCookiesAllowed"},G=[k.performance,k.marketing],W=()=>G.some(r=>!!a.default.get(r)),B=()=>{(0,s.default)(window.onCookieBannerInteraction)&&window.onCookieBannerInteraction()};function R(r){var f=r.cookiesControlledOutsideOfBanner,o=P((0,i.useState)(!!r.forceShowCookieBanner),2),C=o[0],N=o[1],D=P((0,i.useState)(W()),2),U=D[0],F=D[1],j=P((0,i.useState)(!1),2),K=j[0],H=j[1],X=(0,i.useRef)(null),q=(0,p.default)(X,K),z=new Date(Date.now()+1e3*60*60*24*30),L={path:"/",expires:z.toUTCString()},$=(r.hasDeclineCookies||r.hasManageCookies)&&r.savedPreferencesLayout!=="HIDDEN";(0,i.useEffect)(()=>{var Y=ee=>{N(ee.detail.forceShow)};return document.addEventListener(t.COOKIE_BANNER_FORCE_SHOW_EVENT,Y),()=>{document.removeEventListener(t.COOKIE_BANNER_FORCE_SHOW_EVENT,Y)}},[]),(0,i.useEffect)(()=>{f&&(0,S.default)({performanceGranted:a.default.get(k.performance)==="true",marketingGranted:a.default.get(k.marketing)==="true"})},[f]);var V=()=>{C||(G.forEach(Y=>{a.default.set(Y,"true",L)}),F(!0),(0,d.setThirdPartyConsentViaCookieBanner)({performance:!0,marketing:!0}),B())},J=()=>{C||(G.forEach(Y=>{a.default.set(Y,"false",L)}),F(!0),(0,d.setThirdPartyConsentViaCookieBanner)({performance:!1,marketing:!1}),B())},te=Y=>{Y||(q.current=!0),H(Y)},ne=Y=>{if(!C){G.forEach(x=>{var Z=Y.includes(x)?"true":"false";a.default.set(x,Z,L)}),F(!0),H(!1);var ee=Object.keys(k).reduce((x,Z)=>(x[Z]=Y.includes(k[Z]),x),{});(0,d.setThirdPartyConsentViaCookieBanner)(ee),B()}},ie=()=>{H(!0)},oe=v(I({},r),{onAccept:V,onDecline:J,onSaveManageSettings:ne,toggleManageOverlay:te,showManageOverlay:K,cookieNames:k,manageButtonRef:X}),re="cookie-banner-mount-point",Q=document.querySelector(".".concat(re));if(!Q){Q=document.createElement("div"),Q.classList.add(re);var ue=document.body.querySelector("#siteWrapper")||document.body;ue.prepend(Q)}var se=r.bannerPosition==="TOP"&&document.body.querySelector(".sqs-announcement-bar-dropzone")||Q,ae=i.default.createElement(l.default.ManageOverlay,{theme:r.theme,cookieNames:k,onClose:()=>{te(!1)},onSave:ne});return U&&!C?$?i.default.createElement(E.default,null,i.default.createElement(l.default.ManageBar,{savedPreferencesLayout:r.savedPreferencesLayout,savedPreferencesText:r.savedPreferencesText,theme:r.theme,manageButtonRef:X,openOverlay:ie}),K&&ae):null:i.default.createElement(E.default,null,(0,m.createPortal)(i.default.createElement(l.default.Banner,oe),se),K&&ae)}},457966:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});function u(O,h){for(var _ in h)Object.defineProperty(O,_,{enumerable:!0,get:h[_]})}u(n,{default:function(){return T},renderCookieBannerManager:function(){return g}});var i=t(e(174161)),m=e(233284),s=t(e(827903)),l=t(e(378434)),a=t(e(222684)),E=e(439896),S=t(e(508948));e(750317);function t(O){return O&&O.__esModule?O:{default:O}}var p="/config".concat(E.SITE_STYLES_COOKIE_BANNER),d="cookie-banner-manager",g=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h,_,y=(h=window.Static)===null||h===void 0?void 0:h.SQUARESPACE_CONTEXT,b=y||{},c=b.cookieSettings,I=b.pageType,w=c&&a.default.shouldShowCookieBanner({settings:c,urlSearch:window.location.search});if(w){var v=c.cookieBannerCtaText,P=c.cookieBannerText,M=c.cookieBannerOptOutCtaText,k=c.cookieBannerHasOptOut,G=c.cookieBannerHasManageCookies,W=c.cookieBannerManageCookiesLabel,B=c.cookieBannerSavedPreferencesLayout,R=c.cookieBannerSavedPreferencesText,r=c.cookieBannerTheme,f=c.cookieBannerThemeName,o=c.isRestrictiveCookiePolicyEnabled,C=O.theme||(l.default.isSevenOne()?f:"legacy-".concat(r.toLowerCase())),N=O.bannerPosition||c.cookieBannerPosition,D=((_=window.top)===null||_===void 0?void 0:_.location.pathname)===p,U=I===s.default.SPLASH_PAGE,F={acceptCookiesLabel:v,bannerPosition:N,bannerText:P,cookiesControlledOutsideOfBanner:o,declineCookiesLabel:M,forceShowCookieBanner:D,hasDeclineCookies:k,hasManageCookies:G,manageCookiesLabel:W,savedPreferencesLayout:B,savedPreferencesText:R,theme:C},j=document.querySelector(".".concat(d));if(!j){j=document.createElement("div"),j.classList.add(d),U&&j.classList.add("cover-page");var K=document.body.querySelector("#siteWrapper")||document.body;K.appendChild(j)}(0,m.render)(i.default.createElement(S.default,F),j)}},T=g},304974:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return m}});var u=e(174161);function i(s,l){var a=(0,u.useRef)(!1);return(0,u.useEffect)(()=>{!l&&a.current&&s.current&&s.current.focus(),a.current=!1},[s,l]),a}var m=i},71226:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"setThirdPartyConsentViaCookieBanner",{enumerable:!0,get:function(){return m}});var u=e(714698),i=e(828930),m=s=>{var l=s.marketing,a=s.performance;(0,u.setFacebookPixelConsentViaCookieBanner)(l),(0,i.setGoogleAnalyticsConsentViaCookieBanner)(a)}},590291:(A,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return e}});var e={CAMPAIGNS:"campaigns",COMPED:"comped",DOMAIN:"domain",GETTY_IMAGE:"getty-image",GOOGLE_APPS:"googleapps",IAP:"resold",MEMBER_AREAS:"member-areas",DIGITAL_PRODUCTS:"digital-products",SCHEDULING:"scheduling",V5_LINKED:"v5-linked",WEBSITE:"website",SQUARESPACE:"squarespace"}},284734:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});function u(E,S){for(var t in S)Object.defineProperty(E,t,{enumerable:!0,get:S[t]})}u(n,{isManageMultipleGoogleWorkspaceEnabled:function(){return l},isUseMultipleGoogleWorkspaceApiEnabled:function(){return a}});var i=e(572991),m;(function(E){E.MANAGE_MULTIPLE_GOOGLE_WORKSPACE="manage-multiple-google-workspace",E.USE_MULTIPLE_GOOGLE_WORKSPACE_API="use-multiple-google-workspace-api"})(m||(m={}));function s(E){var S,t;return!!(!(i.getStatsigClient===null||i.getStatsigClient===void 0||(S=(t=(0,i.getStatsigClient)()).checkGate)===null||S===void 0)&&S.call(t,E))}var l=()=>s("manage-multiple-google-workspace"),a=()=>s("use-multiple-google-workspace-api")},680907:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return p}});var u=a(e(174161)),i=e(910771),m=e(684353),s=e(491644),l=a(e(273289));function a(d){return d&&d.__esModule?d:{default:d}}function E(){return s.context===null||s.context===void 0?void 0:s.context.website.language}function S(){return m.translationLocale}var t=d=>{var g=d.children;return u.default.createElement(i.I18nContext.Provider,{value:{translationLocale:S(),formattingLocale:E(),cldrLoader:l.default}},g)},p=t},714698:(A,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"setFacebookPixelConsentViaCookieBanner",{enumerable:!0,get:function(){return e}});var e=u=>{window.fbq&&window.facebookPixelRequiresConsentUpdates&&window.fbq("consent",u?"grant":"revoke")}},828930:(A,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"setGoogleAnalyticsConsentViaCookieBanner",{enumerable:!0,get:function(){return e}});var e=u=>{window.gtag&&window.googleAnalyticsRequiresConsentUpdates&&(u?window.gtag("consent","update",{analytics_storage:"granted"}):window.gtag("consent","update",{analytics_storage:"denied"}))}},477577:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});function u(S,t){for(var p in t)Object.defineProperty(S,p,{enumerable:!0,get:t[p]})}u(n,{LEGACY_SQUARESPACE_COOKIES_TO_EXPIRE:function(){return a},default:function(){return E}});var i=m(e(994336));function m(S){return S&&S.__esModule?S:{default:S}}var s=["SS_MID","SS_MATTR","SS_lastvisit","user_segment"],l=["ss_cid","ss_cpvisit","ss_cvisit","ss_cvr","ss_cvt"],a=["ss_cookieAllowed"],E=S=>{var t=S.performanceGranted,p=S.marketingGranted;if(!(t&&p)){var d={expires:new Date(0).toUTCString()},g=a;t||(g=g.concat(l)),p||(g=g.concat(s)),g.forEach(T=>{i.default.set(T,"",d)})}}},62600:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return S}});var u=a(e(96866)),i=e(808475),m=a(e(590291)),s=e(769119),l=e(284734);function a(t){return t&&t.__esModule?t:{default:t}}function E(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:(0,s.getWebsiteType)();return t===u.default.PARKING_PAGE?"/settings/email/google-workspace":"/settings/domains-email/google-workspace"}var S={forDomains(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:(0,s.getWebsiteType)();return t===u.default.PARKING_PAGE&&!i.multiProductConfig.isStandaloneScheduling()?"/":"/settings/domains-email/domains/"},forDomainsAndEmail(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:(0,s.getWebsiteType)();return t===u.default.PARKING_PAGE&&!i.multiProductConfig.isStandaloneScheduling()?"/":"/settings/domains-email/"},forDomainsFullWidth(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:(0,s.getWebsiteType)();return t===u.default.PARKING_PAGE&&!i.multiProductConfig.isStandaloneScheduling()?"/domains/":"/settings/domains-email/domains/"},forDomainsInAccountService(){return"/domains/"},forBilling(){return"/settings/billing/"},forBillingSubscriptionsList(){var t=this.forBilling();return"".concat(t,"subscriptions/")},forBillingSubscription(t){var p=this.forBillingSubscriptionsList();return"".concat(p).concat(t)},forAccountMenu(){return"/settings/billing/"},forSettingsOrConfig(){return"/settings/"},forGoogleWorkspace:E,forGoogleWorkspaceAccount(t){var p=t.websiteType,d=p===void 0?(0,s.getWebsiteType)():p,g=t.googleAppsSubscriptionInfoId;return"".concat(E(d),"/account/").concat(g)},forGoogleWorkspaceSubscriptionRequest(t){var p=t.websiteType,d=p===void 0?(0,s.getWebsiteType)():p,g=t.billingRequestId;return"".concat(E(d),"/subscription-request/").concat(g)},forGSuiteBillingAndAccountingLink(){return"".concat(this.forBilling(),"subscriptions/").concat(m.default.GOOGLE_APPS)},forSwitchProducts(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:(0,s.getWebsiteType)();return t===u.default.PARKING_PAGE?"/upgrade/":"/settings/billing/switch-products/"},forMemberAreasCheckout(){return"".concat(this.forBilling(),"digital-products-checkout")},forWebsiteCheckout(){return"".concat(this.forBilling(),"upgrade")},forChangeWebsitePlan(){return"/settings/billing/subscriptions/website"},forGSuiteIntitialPurchase(){return"/settings/gsuite-checkout"},forGSuiteAddUser(t){return(0,l.isManageMultipleGoogleWorkspaceEnabled)()&&t?"/settings/gsuite-add-user/".concat(t):"/settings/gsuite-add-user"},forGSuiteReactivation(t){return(0,l.isManageMultipleGoogleWorkspaceEnabled)()&&t?"/settings/gsuite-reactivation/".concat(t):"/settings/gsuite-reactivation"},forPermissions(){return"/settings/permissions-ownership/permissions"},forSiteStyles(){return""},forDesignPanel(){return"/design"},forPagesPanel(){return"/pages"},forWebsiteTools(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return i.multiProductConfig.isStandaloneScheduling()?"/settings"+t:this.forPagesPanel()+"/website-tools"},forMobilePathToPublish(){return"/mobile-path-to-publish"}}},769119:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});function u(d,g){for(var T in g)Object.defineProperty(d,T,{enumerable:!0,get:g[T]})}u(n,{getWebsiteType:function(){return l},isClassic:function(){return S},isCommerce:function(){return t},isCoverPage:function(){return E},isEnterprise:function(){return p},isParkingPage:function(){return a}});var i=e(491644),m=s(e(96866));function s(d){return d&&d.__esModule?d:{default:d}}var l=()=>{var d;return i.context===null||i.context===void 0||(d=i.context.website)===null||d===void 0?void 0:d.websiteType},a=()=>l()===m.default.PARKING_PAGE,E=()=>l()===m.default.COVER_PAGE,S=()=>l()===m.default.CLASSIC,t=()=>l()===m.default.COMMERCE,p=()=>l()===m.default.ENTERPRISE},701268:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.STATSIG_CLIENT_SDK_KEY=n.ENVIRONMENT=void 0;var u=e(365752),i=n.ENVIRONMENT=(0,u.getEnvironment)(),m=n.STATSIG_CLIENT_SDK_KEY="client-hXbQ63BqA68Jpec4rnPjIAjGV2coXa9IB73ydOtHa4T"},254708:(A,n,e)=>{"use strict";e(392338),e(392338),e(392338),e(392338),Object.defineProperty(n,"__esModule",{value:!0}),n.eventsClient=void 0;var u=s(e(221661)),i=e(365752);function m(a){if(typeof WeakMap!="function")return null;var E=new WeakMap,S=new WeakMap;return(m=function(p){return p?S:E})(a)}function s(a,E){if(!E&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var S=m(E);if(S&&S.has(a))return S.get(a);var t={__proto__:null},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(d!=="default"&&Object.prototype.hasOwnProperty.call(a,d)){var g=p?Object.getOwnPropertyDescriptor(a,d):null;g&&(g.get||g.set)?Object.defineProperty(t,d,g):t[d]=a[d]}return t.default=a,S&&S.set(a,t),t}var l=n.eventsClient=new u.default({customSchemaName:"ABTestAssignment",sourceEnvironment:(0,i.isInternal)()?u.SourceEnvironment.STAGING:u.SourceEnvironment.PROD},{action:"assign",actor:"system",event_name:"StatsigAssignment_TestAssignment",event_source:"web",object_type:"subject",test_namespace:"Squarespace"})},757183:(A,n,e)=>{"use strict";e(392338),e(392338),e(392338),e(392338),e(392338);var u=e(875832);Object.defineProperty(n,"__esModule",{value:!0}),n.createStatsigClient=d,n.extendUser=h,n.getStatsigClient=T,n.isFeatureEnabled=O;var i=u(e(544257)),m=u(e(346797)),s=u(e(385870)),l=u(e(646715)),a=e(310332),E=e(701268),S=e(73040);function t(y,b){var c=Object.keys(y);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(y);b&&(I=I.filter(function(w){return Object.getOwnPropertyDescriptor(y,w).enumerable})),c.push.apply(c,I)}return c}function p(y){for(var b=1;b<arguments.length;b++){var c=arguments[b]!=null?arguments[b]:{};b%2?t(Object(c),!0).forEach(function(I){(0,m.default)(y,I,c[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(c)):t(Object(c)).forEach(function(I){Object.defineProperty(y,I,Object.getOwnPropertyDescriptor(c,I))})}return y}function d(){return g.apply(this,arguments)}function g(){return g=(0,s.default)(i.default.mark(function y(){var b,c,I,w,v=arguments;return i.default.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return b=v.length>0&&v[0]!==void 0?v[0]:{},c=v.length>1&&v[1]!==void 0?v[1]:{},M.next=4,(0,S.getStatsigUser)(b==null?void 0:b.context);case 4:return I=M.sent,w=new a.StatsigClient(E.STATSIG_CLIENT_SDK_KEY,I,p({environment:{tier:E.ENVIRONMENT}},c)),M.next=8,w.initializeAsync();case 8:return M.abrupt("return",w);case 9:case"end":return M.stop()}},y)})),g.apply(this,arguments)}function T(){return a.StatsigClient.instance(E.STATSIG_CLIENT_SDK_KEY)}function O(y){return T().checkGate(y)}function h(y){return _.apply(this,arguments)}function _(){return _=(0,s.default)(i.default.mark(function y(b){var c,I,w;return i.default.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(c=T(),c.loadingStatus==="Ready"){P.next=3;break}return P.abrupt("return");case 3:return I=c.getContext(),w=I.user,P.next=6,c.updateUserAsync((0,l.default)(w,b));case 6:return P.abrupt("return",c.getContext().user);case 7:case"end":return P.stop()}},y)})),_.apply(this,arguments)}},73040:(A,n,e)=>{"use strict";var u=e(875832);Object.defineProperty(n,"__esModule",{value:!0}),n.getStatsigUser=p;var i=u(e(544257)),m=u(e(385870)),s=u(e(375798));e(392338),e(392338),e(392338),e(392338),e(392338);var l=u(e(528336)),a=e(254708);function E(g){var T,O=g==null?void 0:g.authenticatedAccount,h=Object.entries(l.default).filter(y=>{var b,c=(0,s.default)(y,2),I=c[0],w=c[1];return typeof w=="number"&&(O==null||(b=O.guilds)===null||b===void 0?void 0:b[w])===!0}).map(y=>{var b=(0,s.default)(y,1),c=b[0];return c}),_=O?(O==null||(T=O.guilds)===null||T===void 0?void 0:T[l.default.CIRCLE_USER])||!1:void 0;return{data:O,computed:{guilds:h,circleStatus:_}}}function S(g){return t.apply(this,arguments)}function t(){return t=(0,m.default)(i.default.mark(function g(T){var O;return i.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(O=T==null?void 0:T.website,T){_.next=4;break}return _.next=4,fetch("/api/rest/websites/mine").then(y=>y.json()).then(y=>{O=y}).catch(y=>{console.warn("Experimentation assignment data initialized without Website related values",y)});case 4:return _.abrupt("return",{data:O});case 5:case"end":return _.stop()}},g)})),t.apply(this,arguments)}function p(g){return d.apply(this,arguments)}function d(){return d=(0,m.default)(i.default.mark(function g(T){var O,h,_,y,b,c,I,w,v,P,M,k,G,W,B,R,r;return i.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return W=a.eventsClient._getAnalyticsId(),B=E(T),o.next=4,S(T);case 4:return R=o.sent,r={email:(O=B.data)===null||O===void 0?void 0:O.email,customIDs:{analytics_id:W,member_account_id:(h=B.data)===null||h===void 0?void 0:h.id,website_id:(_=R.data)===null||_===void 0?void 0:_.id},custom:{circle_status:(y=B.computed)===null||y===void 0?void 0:y.circleStatus,circle_tier:(b=B.data)===null||b===void 0?void 0:b.circleTier,member_account_creation_date:(c=B.data)===null||c===void 0?void 0:c.createdOn,member_account_guilds:(I=B.computed)===null||I===void 0?void 0:I.guilds,member_account_language:(w=B.data)===null||w===void 0?void 0:w.preferredLocale,site_status:(v=R.data)===null||v===void 0||(v=v.siteStatus)===null||v===void 0?void 0:v.value,template_version:T==null?void 0:T.templateVersion,developer_mode:(P=R.data)===null||P===void 0?void 0:P.developerMode,website_creation_date:(M=R.data)===null||M===void 0?void 0:M.createdOn,website_language:(k=R.data)===null||k===void 0?void 0:k.language,website_type:(G=R.data)===null||G===void 0?void 0:G.websiteType}},o.abrupt("return",r);case 7:case"end":return o.stop()}},g)})),d.apply(this,arguments)}},572991:(A,n,e)=>{"use strict";e(392338),e(392338),Object.defineProperty(n,"__esModule",{value:!0});var u={createStatsigClient:!0,extendUser:!0,getStatsigClient:!0,isFeatureEnabled:!0,LocalOverrideAdapter:!0};Object.defineProperty(n,"LocalOverrideAdapter",{enumerable:!0,get:function(){return s.LocalOverrideAdapter}}),Object.defineProperty(n,"createStatsigClient",{enumerable:!0,get:function(){return i.createStatsigClient}}),Object.defineProperty(n,"extendUser",{enumerable:!0,get:function(){return i.extendUser}}),Object.defineProperty(n,"getStatsigClient",{enumerable:!0,get:function(){return i.getStatsigClient}}),Object.defineProperty(n,"isFeatureEnabled",{enumerable:!0,get:function(){return i.isFeatureEnabled}});var i=e(757183),m=e(310332);Object.keys(m).forEach(function(l){l==="default"||l==="__esModule"||Object.prototype.hasOwnProperty.call(u,l)||l in n&&n[l]===m[l]||Object.defineProperty(n,l,{enumerable:!0,get:function(){return m[l]}})});var s=e(934114)},365752:(A,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isStage=n.isQA=n.isInternal=n.isDev=n.getReleaseVersion=n.getEnvironment=n.getDomain=n.Environment=void 0,e(392338),e(392338),e(392338),e(392338),e(392338),e(392338);var u=n.Environment=function(t){return t.DEVELOPMENT="development",t.STAGING="staging",t.QA="qa",t.PRODUCTION="production",t}({}),i=n.getDomain=function(){var p,d,g,T,O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;if(typeof O=="string"){var h=new URL(O);return h.hostname}return(p=(d=(g=O.Static)===null||g===void 0||(g=g.SQUARESPACE_CONTEXT)===null||g===void 0?void 0:g.appDomain)!==null&&d!==void 0?d:(T=O.location)===null||T===void 0?void 0:T.host)!==null&&p!==void 0?p:""},m=n.isInternal=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return/\.(sqsp|squarespace)\.net$/.test(i(p))},s=n.isStage=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return/stage\.(sqsp|squarespace)\.net$/.test(i(p))},l=n.isQA=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return/qa[0-9]+\.(sqsp|squarespace)\.net$/.test(i(p))},a=n.isDev=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return/dev\.(sqsp|squarespace)\.net$/.test(i(p))},E=()=>{var t=u.PRODUCTION;return a()?t=u.DEVELOPMENT:l()?t=u.QA:(s()||m())&&(t=u.STAGING),t};n.getEnvironment=E;var S=()=>window.__RELEASE_VERSION__;n.getReleaseVersion=S}}]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/32545527e56d00cd4668220787222fae/async-gdpr-cookie-banner-fe369516fda955d70905-min.en-US.js.map