"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[740],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,l=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),o=new RegExp(n.source+l.source,"gu"),s=new RegExp("\\d+"+l.source,"gu"),c=(e,l)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(l={pascalCase:!1,preserveConsecutiveUppercase:!1,...l},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===l.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(l.locale),c=!1===l.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(l.locale);if(1===e.length)return l.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,l)=>{let n=!1,i=!1,o=!1;for(let s=0;s<e.length;s++){const c=e[s];n&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),n=!1,o=i,i=!0,s++):i&&o&&a.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),o=i,i=!1,n=!0):(n=r(c)===c&&l(c)!==c,o=i,i=l(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(i,""),e=l.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),l.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,s.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return v},S:function(){return G},_:function(){return o},a:function(){return i},b:function(){return m},g:function(){return d},h:function(){return s}});var r=a(7294),l=(a(3204),a(5697)),n=a.n(l);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(l[a]=e[a]);return l}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let l="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(l="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:l,"data-gatsby-image-wrapper":"",style:r}}function m(e,t,a,r,l){return void 0===l&&(l={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},l,{opacity:t?1:0})})}function d(e,t,a,r,l,n,o,s){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=l,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),s&&(c.objectPosition=s);const m=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}const u=["children"],p=function(e){let{layout:t,width:a,height:l}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:l/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+l+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,u);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:l,alt:n="",shouldLoad:s}=e,c=o(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:l,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:n}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:l=!0}=e,n=o(e,f);const s=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,i({},n,t,{sizes:s,shouldLoad:l}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:s})})),c):c};var E;b.propTypes={src:l.string.isRequired,alt:l.string.isRequired,sizes:l.string,srcSet:l.string,shouldLoad:l.bool},y.displayName="Picture",y.propTypes={alt:l.string.isRequired,shouldLoad:l.bool,fallback:l.exact({src:l.string.isRequired,srcSet:l.string,sizes:l.string}),sources:l.arrayOf(l.oneOfType([l.exact({media:l.string.isRequired,type:l.string,sizes:l.string,srcSet:l.string.isRequired}),l.exact({media:l.string,type:l.string.isRequired,sizes:l.string,srcSet:l.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(y,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};v.displayName="Placeholder",v.propTypes={fallback:l.string,sources:null==(E=y.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=y.propTypes;const _=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],C=e=>e.replace(/\n/g,""),j=function(e,t,a){for(var r=arguments.length,l=new Array(r>3?r-3:0),i=3;i<r;i++)l[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(l)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:n().object.isRequired,alt:j},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],I=new Set;let T,L;const R=function(e){let{as:t="div",image:l,style:n,backgroundColor:m,className:d,class:u,onStartLoad:p,onLoad:g,onError:h}=e,f=o(e,x);const{width:b,height:y,layout:E}=l,w=c(b,y,E),{style:v,className:k}=w,_=o(w,O),N=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(l.images)),[l.images]);u&&(d=u);const j=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,b,y);return(0,r.useEffect)((()=>{T||(T=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(C);if(L&&I.has(C))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;N.current&&(N.current.innerHTML=a(i({isLoading:!0,isLoaded:I.has(C),image:l},f)),I.has(C)||(t=requestAnimationFrame((()=>{N.current&&(r=o(N.current,C,I,n,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[l]),(0,r.useLayoutEffect)((()=>{I.has(C)&&L&&(N.current.innerHTML=L(i({isLoading:I.has(C),isLoaded:I.has(C),image:l},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[l]),(0,r.createElement)(t,i({},_,{style:i({},v,n,{backgroundColor:m}),className:k+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));P.propTypes=S,P.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function D(e){return function(t){let{src:a,__imageData:l,__error:n}=t,s=o(t,A);return n&&console.warn(n),l?r.createElement(e,i({image:l},s)):(console.warn("Image not loaded",a),null)}}const z=D((function(e){let{as:t="div",className:a,class:l,style:n,image:s,loading:u="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:b,objectPosition:y}=e,E=o(e,_);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;l&&(a=l),h=i({objectFit:b,objectPosition:y,backgroundColor:f},h);const{width:w,height:j,layout:S,images:x,placeholder:O,backgroundColor:I}=s,T=c(w,j,S),{style:L,className:R}=T,P=o(T,N),A={fallback:void 0,sources:[]};return x.fallback&&(A.fallback=i({},x.fallback,{srcSet:x.fallback.srcSet?C(x.fallback.srcSet):void 0})),x.sources&&(A.sources=x.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},P,{style:i({},L,n,{backgroundColor:f}),className:R+(a?" "+a:"")}),r.createElement(g,{layout:S,width:w,height:j},r.createElement(v,i({},d(O,!1,S,w,j,I,b,y))),r.createElement(k,i({"data-gatsby-image-ssr":"",className:p},E,m("eager"===u,!1,A,u,h)))))})),F=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),W={src:n().string.isRequired,alt:j,width:F,height:F,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=W;const G=D(P);G.displayName="StaticImage",G.propTypes=W},7395:function(e,t,a){a.d(t,{Z:function(){return L}});var r=a(7294),l=(a(1883),a(405)),n=a(3636),i=a(5697),o=a.n(i);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function p(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function h(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var f=["style"];var b=!1;try{b=!0}catch(R){}function y(e){return e&&"object"===m(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===m(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function E(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?d({},e,t):{}}var w=r.forwardRef((function(e,t){var a=e.icon,r=e.mask,l=e.symbol,i=e.className,o=e.title,s=e.titleId,m=e.maskId,u=y(a),g=E("classes",[].concat(p(function(e){var t,a=e.beat,r=e.fade,l=e.beatFade,n=e.bounce,i=e.shake,o=e.flash,s=e.spin,c=e.spinPulse,m=e.spinReverse,u=e.pulse,p=e.fixedWidth,g=e.inverse,h=e.border,f=e.listItem,b=e.flip,y=e.size,E=e.rotation,w=e.pull,v=(d(t={"fa-beat":a,"fa-fade":r,"fa-beat-fade":l,"fa-bounce":n,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":p,"fa-inverse":g,"fa-border":h,"fa-li":f,"fa-flip":!0===b,"fa-flip-horizontal":"horizontal"===b||"both"===b,"fa-flip-vertical":"vertical"===b||"both"===b},"fa-".concat(y),null!=y),d(t,"fa-rotate-".concat(E),null!=E&&0!==E),d(t,"fa-pull-".concat(w),null!=w),d(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(v).map((function(e){return v[e]?e:null})).filter((function(e){return e}))}(e)),p(i.split(" ")))),h=E("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),f=E("mask",y(r)),k=(0,n.qv)(u,c(c(c(c({},g),h),f),{},{symbol:l,title:o,titleId:s,maskId:m}));if(!k)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var _=k.abstract,N={ref:t};return Object.keys(e).forEach((function(t){w.defaultProps.hasOwnProperty(t)||(N[t]=e[t])})),v(_[0],N)}));w.displayName="FontAwesomeIcon",w.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},w.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var v=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var l=(a.children||[]).map((function(a){return e(t,a)})),n=Object.keys(a.attributes||{}).reduce((function(e,t){var r=a.attributes[t];switch(t){case"class":e.attrs.className=r,delete a.attributes.class;break;case"style":e.attrs.style=r.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,r=t.indexOf(":"),l=h(t.slice(0,r)),n=t.slice(r+1).trim();return l.startsWith("webkit")?e[(a=l,a.charAt(0).toUpperCase()+a.slice(1))]=n:e[l]=n,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[h(t)]=r}return e}),{attrs:{}}),i=r.style,o=void 0===i?{}:i,s=u(r,f);return n.attrs.style=c(c({},n.attrs.style),o),t.apply(void 0,[a.tag,c(c({},n.attrs),s)].concat(p(l)))}.bind(null,r.createElement),k=a(9417);var _=()=>{const{0:e,1:t}=(0,r.useState)("light");(0,r.useEffect)((()=>{const e=localStorage.getItem("portfolio-theme");e&&(document.body.classList.add(e),t(e))}),[]);const a=()=>"dark"===e;return r.createElement("button",{type:"button","aria-label":"toggle theme",className:"btn btn--icon",onClick:()=>{a()?(document.body.classList.remove("dark"),t("light"),localStorage.setItem("portfolio-theme","light")):(document.body.classList.add("dark"),t("dark"),localStorage.setItem("portfolio-theme","dark"))}},r.createElement(w,{icon:a()?k.enB:k.DBF,"aria-hidden":"true",id:"btn-theme"}))};var N=e=>{let{siteTitle:t}=e;return r.createElement("nav",{class:"sticky-nav shadow-5-strong"},r.createElement("header",{className:"header center"},r.createElement("h2",null,r.createElement("a",{href:"https://github.com/RodCato",class:"link"},"CR.")),r.createElement("nav",{class:"nav center"},r.createElement("ul",{class:"nav__list center"},r.createElement("li",{class:"nav__list-item"},r.createElement("a",{class:"link link--nav",href:"#projects"},"🛠️ Projects")),r.createElement("li",{class:"nav__list-item"},r.createElement("a",{class:"link link--nav",href:"#skills"},"🧰 Skills")),r.createElement("li",{class:"nav__list-item"},r.createElement("a",{class:"link link--nav",href:"#contact"},"💻 Contact")),r.createElement("li",{class:"nav__list-item"},r.createElement("a",{class:"link link--nav",href:"https://www.catalinorodriguez.com"},"📝 Blog"))),r.createElement(_,null),r.createElement("button",{type:"button","aria-label":"toggle navigation",className:"btn btn--icon nav__hamburger"},r.createElement(w,{icon:k.xiG,"aria-hidden":"true"})," "))))},C=a(3024),j=a(8032);var S=()=>r.createElement("div",{className:"about center"},r.createElement("h1",{className:"font-bold"},"🪄 Hi, I am ",r.createElement("span",{className:"about__name"},"Catalino.")),r.createElement(j.S,{src:"../images/bluebgprofile.png",alt:"profile pic",className:"profilepic",__imageData:a(5442)}),r.createElement("h2",{className:"about__role"},"✨ A Full Stack Web Developer ⚡️"),r.createElement("p",{class:"about__desc"},"👋🏽 My name is Catalino Rodriguez (aka C Rod), and I am a US Army Combat Veteran🪖. Currently, I am expanding my skill set as a Software Engineer at",r.createElement("a",{href:"https://goloadup.com",target:"_blank",alt:"Load Up",title:"Load Up"},"Load Up"),"as an intern. I bring a unique blend of problem-solving skills, creativity, and real-world experience to the table. With a passion for helping others, I thrive on finding innovative solutions that address the needs of both clients and end-users. Through my military background and growth mindset I have honed my ability to work well under pressure, adapt to rapidly changing environments, and collaborate effectively with diverse teams. I am excited to apply my technical expertise and dedication to creating impactful web solutions that make a difference."),r.createElement("div",{className:"about__contact center"},r.createElement("a",{href:"https://github.com/RodCato",target:"_blank",rel:"noopener noreferrer","aria-label":"View my resume"},r.createElement("span",{className:"btn btn--outline"},"Resume")),r.createElement("a",{href:"https://github.com/RodCato","aria-label":"github",className:"link link--icon",target:"_blank",rel:"noopener noreferrer"},r.createElement(w,{icon:C.zhw})),r.createElement("a",{href:"https://linkedin.com/in/catalinorodriguez","aria-label":"linkedin",className:"link link--icon",target:"_blank",rel:"noopener noreferrer"},r.createElement(w,{icon:C.D9H}))));var x=()=>r.createElement("div",{id:"projects",className:"section projects"},r.createElement("h2",{className:"section__title"},"🛠️ Projects"),r.createElement("div",{className:"projects__grid"},r.createElement("div",{className:"project"},r.createElement("h3",null,"Find the Loot (game)🎫"),r.createElement("a",{href:"https://rodcato.github.io/jumpstart-treasure-hunt/",target:"_blank",rel:"noopener noreferrer","aria-label":"Demo",title:"Demo"},r.createElement("img",{src:"screenshot.png",alt:"Find the Loot screenshot",className:"projectpic"})),r.createElement("p",{className:"project__description"},"Find the loot is a game developed in Html, CSS and Javascript. Although a mostly static game, through the use of JavaScript I was able to make it interactive. I added the ability for the game to keep track of your score and incorporate modal functionality to let the end-users know if they won or lost the game."),r.createElement("ul",{className:"project__stack"},r.createElement("li",{className:"project__stack-item"},"Html"),r.createElement("li",{className:"project__stack-item"},"CSS"),r.createElement("li",{className:"project__stack-item"},"Javascript")),r.createElement("a",{href:"https://github.com/RodCato/jumpstart-treasure-hunt","aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noopener noreferrer"},r.createElement(w,{icon:C.zhw})),r.createElement("a",{href:"https://rodcato.github.io/jumpstart-treasure-hunt/","aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noopener noreferrer"},r.createElement(w,{icon:k.Xjp})," ")),r.createElement("div",{className:"project"},r.createElement("h3",null,"Gamer Vault 🎮"),r.createElement("a",{href:"https://gamer-vault.onrender.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"Gamer Vault Demo",title:"Gamer Vault Demo"},r.createElement("img",{src:"GamerVaultbrowsepage.png",alt:"Gamer Vault website",className:"projectpic"})),r.createElement("p",{className:"project__description"},'This is the capstone project from my time at LEARN academy on which I served as the tech lead for my team. This is a fully functional CRUD application with user authentication / authorization using JWT and Devise. The site uses an API to fetch games when a user enters a search term. The user can then select a game from the search and save it to their "vault". Awesome way to find and save games from your past to relive the memories! Demo is 100% functional.'),r.createElement("ul",{className:"project__stack"},r.createElement("li",{className:"project__stack-item"},"Rails"),r.createElement("li",{className:"project__stack-item"},"JWT"),r.createElement("li",{className:"project__stack-item"},"Devise"),r.createElement("li",{className:"project__stack-item"},"React")),r.createElement("a",{href:"https://github.com/RodCato","aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noopener noreferrer"},r.createElement(w,{icon:C.zhw})),r.createElement("a",{href:"https://gamer-vault.onrender.com/","aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noopener noreferrer"},r.createElement(w,{icon:k.Xjp}))),r.createElement("div",{className:"project"},r.createElement("h3",null,"Project 3"),r.createElement("img",{src:"projects1.jpeg",alt:"Project 3 Placeholder",className:"projectpic"}),r.createElement("p",{className:"project__description"},"This is the placeholder for my 3rd project which is currently a work in progress. Once the project is complete I will update as needed to provide the links and code to demo."),r.createElement("ul",{className:"project__stack"},r.createElement("li",{className:"project__stack-item"},"React")),r.createElement("a",{href:"https://github.com/RodCato","aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noopener noreferrer"},r.createElement(w,{icon:C.zhw})),r.createElement("a",{href:"https://github.com/RodCato","aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noopener noreferrer"},r.createElement(w,{icon:k.Xjp})))));var O=()=>r.createElement("div",null,r.createElement("section",{className:"section skills",id:"skills"},r.createElement("h2",{className:"section__title"},"🧰 Skills 🔥"),r.createElement("ul",{className:"skills__list"},r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",alt:"HTML5"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",alt:"CSS3"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",alt:"Javascript"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",alt:"Node"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white",alt:"Wordpress"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",alt:"MySql"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",alt:"PHP"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",alt:"React"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white",alt:"Ruby"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",alt:"Git"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white",alt:"Ruby on Rails"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",alt:"Postgresql"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",alt:"Jest"})),r.createElement("li",{className:"skills__list-item btn btn--plain"},r.createElement("img",{src:"https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white",alt:"Yarn"})))));var I=()=>r.createElement("div",null,r.createElement("section",{class:"section skills",id:"connect"},r.createElement("h2",{class:"section__title"},"💻 Connect"),r.createElement("ul",{class:"skills__list"},r.createElement("li",null,r.createElement("a",{href:"https://www.linkedin.com/in/catalinorodriguez/",target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{src:"https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",alt:"LinkedIn"}))),r.createElement("li",null," ",r.createElement("a",{href:"https://www.twitter.com/CRodDev",target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{src:"https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white",alt:"Twitter"}))," "),r.createElement("li",null,r.createElement("a",{href:"https://github.com/RodCato",target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{src:"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",alt:"Github"}))),r.createElement("li",null," ",r.createElement("a",{href:"https://www.codewars.com/users/CRodDev",target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{src:"https://www.codewars.com/users/CRodDev/badges/micro",alt:"CodeWars",width:"120%"}))),r.createElement("li",null,r.createElement("a",{href:"https://wakatime.com/@36909aee-5bcd-487e-ba59-26e85f89c050",target:"_blank"},r.createElement("img",{src:"https://wakatime.com/badge/user/36909aee-5bcd-487e-ba59-26e85f89c050.svg",alt:"Total time coded since Jun 3 2023"}))))));var T=()=>r.createElement("div",null,r.createElement("footer",{class:"footer"},r.createElement("a",{href:"https://github.com/RodCato",class:"link footer__link"},"Created By CRod with 🫶🏽 || © 2023 || 🎟️ Thanks for Visiting! 🎬")));var L=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement(l.ql,null,r.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),r.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Josefin%20Sans:wght@400;500;700&display=swap",rel:"stylesheet"})),r.createElement(N,null),r.createElement("main",null,r.createElement(S,null),r.createElement(x,null),r.createElement(O,null),r.createElement(I,null),r.createElement("div",{className:"scroll-container fixed bottom-10 right-10"},r.createElement("div",{className:"scroll-top"},r.createElement("a",{"aria-label":"Scroll up",href:"#top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"text-white bg-blue-500 rounded-full p-3"},r.createElement(w,{icon:k.FPD}))))),r.createElement(T,null))}},9357:function(e,t,a){var r=a(7294),l=a(1883);t.Z=function(e){var t,a;let{description:n,title:i,children:o}=e;const{site:s}=(0,l.useStaticQuery)("63159454"),c=n||s.siteMetadata.description,m=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,m?i+" | "+m:i),r.createElement("meta",{name:"description",content:c}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:c}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a?void 0:a.author)||""}),r.createElement("meta",{name:"twitter:title",content:i}),r.createElement("meta",{name:"twitter:description",content:c}),o)}},5442:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#0868c8","images":{"fallback":{"src":"/Gatsby-Tailwind/static/de5c96b15ca5213a49d47d3f0478839b/d6138/bluebgprofile.png","srcSet":"/Gatsby-Tailwind/static/de5c96b15ca5213a49d47d3f0478839b/15e42/bluebgprofile.png 100w,\\n/Gatsby-Tailwind/static/de5c96b15ca5213a49d47d3f0478839b/5aead/bluebgprofile.png 200w,\\n/Gatsby-Tailwind/static/de5c96b15ca5213a49d47d3f0478839b/d6138/bluebgprofile.png 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/Gatsby-Tailwind/static/de5c96b15ca5213a49d47d3f0478839b/d8057/bluebgprofile.webp 100w,\\n/Gatsby-Tailwind/static/de5c96b15ca5213a49d47d3f0478839b/2e34e/bluebgprofile.webp 200w,\\n/Gatsby-Tailwind/static/de5c96b15ca5213a49d47d3f0478839b/416c3/bluebgprofile.webp 400w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":400}')}}]);
//# sourceMappingURL=e6b5ce60e8c692d9d78e378d6f1575bf92e90566-8c851d6f1417d88ec76c.js.map