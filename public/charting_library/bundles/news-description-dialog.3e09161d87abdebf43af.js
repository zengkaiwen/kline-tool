(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[4664],{4270:e=>{e.exports={"close-button":"close-button-1X92xTLv","close-icon":"close-icon-1X92xTLv","button-l":"button-l-1X92xTLv","button-m":"button-m-1X92xTLv","button-s":"button-s-1X92xTLv","button-xs":"button-xs-1X92xTLv","button-xxs":"button-xxs-1X92xTLv"}},18850:e=>{e.exports={description:"description-vdtPsa1P"}},81470:e=>{e.exports={title:"title-2-Un7Upl",body:"body-2-Un7Upl"}},18435:e=>{e.exports={dialog:"dialog-3Q8J4Pu0",closeButton:"closeButton-3Q8J4Pu0",actions:"actions-3Q8J4Pu0"}},66541:e=>{e.exports={dialog:"dialog-UM6w7sFp",rounded:"rounded-UM6w7sFp",shadowed:"shadowed-UM6w7sFp",fullscreen:"fullscreen-UM6w7sFp",darker:"darker-UM6w7sFp",backdrop:"backdrop-UM6w7sFp"}},81349:e=>{e.exports={wrap:"wrap-2qEpRlNG",container:"container-2qEpRlNG",backdrop:"backdrop-2qEpRlNG",modal:"modal-2qEpRlNG",dialog:"dialog-2qEpRlNG"}},47967:(e,t,n)=>{"use strict";n.d(t,{CloseButton:()=>m});var s=n(67294),r=n(94184),o=n(21659),i=n(27214),a=n(43101),c=n(42998),d=n(83448),l=n(42782),u=n(4270),h=n.n(u);function p(e="l"){switch(e){case"l":return i;case"m":return a;case"s":return c;case"xs":return d;case"xxs":return l;default:return a}}const m=s.forwardRef((e,t)=>{const{className:n,size:i,...a}=e,c=r(h()["close-button"],h()["button-"+i],n);return s.createElement("button",{...a,type:"button",className:c,ref:t},s.createElement(o.Icon,{icon:p(i),className:h()["close-icon"]}))})},21659:(e,t,n)=>{"use strict";n.d(t,{Icon:()=>r});var s=n(67294);const r=s.forwardRef((e,t)=>{const{icon:n="",...r}=e;return s.createElement("span",{...r,ref:t,dangerouslySetInnerHTML:{__html:n}})})},76480:(e,t,n)=>{"use strict";function s(e){return o(e,i)}function r(e){return o(e,a)}function o(e,t){const n=Object.entries(e).filter(t),s={};for(const[e,t]of n)s[e]=t;return s}function i(e){const[t,n]=e;return 0===t.indexOf("data-")&&"string"==typeof n}function a(e){return 0===e[0].indexOf("aria-")}n.d(t,{filterDataProps:()=>s,filterAriaProps:()=>r,filterProps:()=>o,isDataAttribute:()=>i,isAriaAttribute:()=>a})},34253:(e,t,n)=>{"use strict";n.r(t),n.d(t,{openLibraryNewsDescriptionDialogImpl:()=>C});var s=n(67294),r=n(73935),o=n(74245),i=n(94184),a=n(46403),c=n(98988),d=n(95805),l=n(77632),u=n(81349);class h extends s.PureComponent{constructor(){super(...arguments),this._containerRef=null,this._handleContainerRef=e=>{this._containerRef=e}}componentDidMount(){var e;this.props.autofocus&&(null===(e=this._containerRef)||void 0===e||e.focus())}render(){const{zIndex:e,onClickOutside:t,children:n,className:r}=this.props;return s.createElement("div",{ref:this._handleContainerRef,style:{zIndex:e},"data-dialog-name":this.props["data-dialog-name"],tabIndex:-1},s.createElement("div",{className:u.backdrop}),s.createElement("div",{className:u.wrap},s.createElement("div",{className:u.container},s.createElement(l.OutsideEvent,{mouseDown:!0,touchStart:!0,handler:t},e=>s.createElement("div",{className:u.modal,ref:e},s.createElement(c.Dialog,{...this.props,className:i(r,u.dialog)},n))))))}}h.defaultProps={
width:500};const p=(0,d.makeOverlapable)(h);var m=n(47967),v=n(71374),w=n(86240),g=n(18435);function f(e){const{className:t,children:n,isOpened:r,maxWidth:c,onCloseIntent:d,closeOnOutsideClick:l=!0,closeOnEsc:u=!0,showCloseButton:h=!0,actions:f,fullscreenMode:E=1}=e,_=o.t("Close",{context:"input"});return s.createElement(a.MatchMedia,{rule:w["media-phone-vertical"]},e=>{const o=0===E||e;return s.createElement(p,{width:x(c,o),className:i(g.dialog,t),isOpened:r,onClickOutside:l?d:void 0,fullscreen:o,rounded:!o},h&&s.createElement(m.CloseButton,{className:g.closeButton,"aria-label":_,onClick:d,size:"m"}),d&&u&&s.createElement(v.KeyboardDocumentListener,{keyCode:27,handler:d}),"function"==typeof n?n(o):n,f&&s.createElement("div",{className:g.actions},f(o)))})}function x(e,t){return t?"100%":e||"100%"}var E=n(81470);function _(e){const{title:t,content:n,theme:r=E,header:o,reference:i,relatedSymbols:a}=e;return s.createElement("article",null,o,s.createElement("h2",{className:r.title},t),a,s.createElement("div",{className:r.body,ref:i},n))}var y=n(18850);function b(e){const{title:t,description:n}=e;return s.createElement(_,{title:t,content:s.createElement("div",{className:y.description},n)})}function C(e){const t=document.createElement("div");r.render(s.createElement(f,{isOpened:!0,onCloseIntent:()=>r.unmountComponentAtNode(t),maxWidth:800},s.createElement(b,{...e})),t)}},28675:(e,t,n)=>{"use strict";function s(e,t,n,s,r){function o(r){if(e>r.timeStamp)return;const o=r.target;void 0!==n&&null!==t&&null!==o&&o.ownerDocument===s&&(t.contains(o)||n(r))}return r.click&&s.addEventListener("click",o,!1),r.mouseDown&&s.addEventListener("mousedown",o,!1),r.touchEnd&&s.addEventListener("touchend",o,!1),r.touchStart&&s.addEventListener("touchstart",o,!1),()=>{s.removeEventListener("click",o,!1),s.removeEventListener("mousedown",o,!1),s.removeEventListener("touchend",o,!1),s.removeEventListener("touchstart",o,!1)}}n.d(t,{addOutsideEventListener:()=>s})},98988:(e,t,n)=>{"use strict";n.d(t,{Dialog:()=>d});var s=n(67294),r=n(94184),o=n(66189),i=n(28595),a=n(76480),c=n(66541);class d extends s.PureComponent{constructor(){super(...arguments),this._manager=new i.OverlapManager,this._handleSlot=e=>{this._manager.setContainer(e)}}render(){const{rounded:e=!0,shadowed:t=!0,fullscreen:n=!1,darker:i=!1,className:d,backdrop:l}=this.props,u=r(d,c.dialog,e&&c.rounded,t&&c.shadowed,n&&c.fullscreen,i&&c.darker),h=(0,a.filterDataProps)(this.props),p=this.props.style?{...this._createStyles(),...this.props.style}:this._createStyles();return s.createElement(s.Fragment,null,s.createElement(o.SlotContext.Provider,{value:this._manager},l&&s.createElement("div",{onClick:this.props.onClickBackdrop,className:c.backdrop}),s.createElement("div",{...h,className:u,style:p,ref:this.props.reference,onFocus:this.props.onFocus,onMouseDown:this.props.onMouseDown,onMouseUp:this.props.onMouseUp,onClick:this.props.onClick,onKeyDown:this.props.onKeyDown,tabIndex:-1},this.props.children)),s.createElement(o.Slot,{reference:this._handleSlot}))}_createStyles(){
const{bottom:e,left:t,width:n,right:s,top:r,zIndex:o,height:i}=this.props;return{bottom:e,left:t,right:s,top:r,zIndex:o,maxWidth:n,height:i}}}},18351:(e,t,n)=>{"use strict";n.d(t,{useOutsideEvent:()=>o});var s=n(67294),r=n(28675);function o(e){const{click:t,mouseDown:n,touchEnd:o,touchStart:i,handler:a,reference:c,ownerDocument:d=document}=e,l=(0,s.useRef)(null),u=(0,s.useRef)(new CustomEvent("timestamp").timeStamp);return(0,s.useLayoutEffect)(()=>{const e={click:t,mouseDown:n,touchEnd:o,touchStart:i},s=c?c.current:l.current;return(0,r.addOutsideEventListener)(u.current,s,a,d,e)},[t,n,o,i,a]),c||l}},71374:(e,t,n)=>{"use strict";n.d(t,{KeyboardDocumentListener:()=>r});var s=n(67294);class r extends s.PureComponent{constructor(){super(...arguments),this._handleKeyDown=e=>{e.keyCode===this.props.keyCode&&this.props.handler(e)}}componentDidMount(){document.addEventListener(this.props.eventType||"keydown",this._handleKeyDown,!1)}componentWillUnmount(){document.removeEventListener(this.props.eventType||"keydown",this._handleKeyDown,!1)}render(){return null}}},46403:(e,t,n)=>{"use strict";n.d(t,{MatchMedia:()=>r});var s=n(67294);class r extends s.PureComponent{constructor(e){super(e),this._handleChange=()=>{this.forceUpdate()},this.state={query:window.matchMedia(this.props.rule)}}componentDidMount(){this._subscribe(this.state.query)}componentDidUpdate(e,t){this.state.query!==t.query&&(this._unsubscribe(t.query),this._subscribe(this.state.query))}componentWillUnmount(){this._unsubscribe(this.state.query)}render(){return this.props.children(this.state.query.matches)}static getDerivedStateFromProps(e,t){return e.rule!==t.query.media?{query:window.matchMedia(e.rule)}:null}_subscribe(e){e.addListener(this._handleChange)}_unsubscribe(e){e.removeListener(this._handleChange)}}},77632:(e,t,n)=>{"use strict";n.d(t,{OutsideEvent:()=>r});var s=n(18351);function r(e){const{children:t,...n}=e;return t((0,s.useOutsideEvent)(n))}},28595:(e,t,n)=>{"use strict";n.d(t,{OverlapManager:()=>o,getRootOverlapManager:()=>a});var s=n(16282);class r{constructor(){this._storage=[]}add(e){this._storage.push(e)}remove(e){this._storage=this._storage.filter(t=>e!==t)}has(e){return this._storage.includes(e)}getItems(){return this._storage}}class o{constructor(e=document){this._storage=new r,this._windows=new Map,this._index=0,this._document=e,this._container=e.createDocumentFragment()}setContainer(e){const t=this._container,n=null===e?this._document.createDocumentFragment():e;!function(e,t){Array.from(e.childNodes).forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&t.appendChild(e)})}(t,n),this._container=n}registerWindow(e){this._storage.has(e)||this._storage.add(e)}ensureWindow(e,t={position:"fixed",direction:"normal"}){const n=this._windows.get(e);if(void 0!==n)return n;this.registerWindow(e);const s=this._document.createElement("div");if(s.style.position=t.position,s.style.zIndex=this._index.toString(),s.dataset.id=e,void 0!==t.index){const e=this._container.childNodes.length
;if(t.index>=e)this._container.appendChild(s);else if(t.index<=0)this._container.insertBefore(s,this._container.firstChild);else{const e=this._container.childNodes[t.index];this._container.insertBefore(s,e)}}else"reverse"===t.direction?this._container.insertBefore(s,this._container.firstChild):this._container.appendChild(s);return this._windows.set(e,s),++this._index,s}unregisterWindow(e){this._storage.remove(e);const t=this._windows.get(e);void 0!==t&&(null!==t.parentElement&&t.parentElement.removeChild(t),this._windows.delete(e))}getZindex(e){const t=this.ensureWindow(e);return parseInt(t.style.zIndex||"0")}moveToTop(e){if(this.getZindex(e)!==this._index){this.ensureWindow(e).style.zIndex=(++this._index).toString()}}removeWindow(e){this.unregisterWindow(e)}}const i=new WeakMap;function a(e=document){const t=e.getElementById("overlap-manager-root");if(null!==t)return(0,s.ensureDefined)(i.get(t));{const t=new o(e),n=function(e){const t=e.createElement("div");return t.style.position="absolute",t.style.zIndex=150..toString(),t.style.top="0px",t.style.left="0px",t.id="overlap-manager-root",t}(e);return i.set(n,t),t.setContainer(n),e.body.appendChild(n),t}}},95805:(e,t,n)=>{"use strict";n.d(t,{makeOverlapable:()=>o});var s=n(67294),r=n(22165);function o(e){return class extends s.PureComponent{render(){const{isOpened:t,root:n}=this.props;if(!t)return null;const o=s.createElement(e,{...this.props,zIndex:150});return"parent"===n?o:s.createElement(r.Portal,null,o)}}}},22165:(e,t,n)=>{"use strict";n.d(t,{Portal:()=>c,PortalContext:()=>d});var s=n(67294),r=n(73935),o=n(80068),i=n(28595),a=n(66189);class c extends s.PureComponent{constructor(){super(...arguments),this._uuid=(0,o.guid)()}componentWillUnmount(){this._manager().removeWindow(this._uuid)}render(){const e=this._manager().ensureWindow(this._uuid,this.props.layerOptions);return e.style.top=this.props.top||"",e.style.bottom=this.props.bottom||"",e.style.left=this.props.left||"",e.style.right=this.props.right||"",e.style.pointerEvents=this.props.pointerEvents||"",r.createPortal(s.createElement(d.Provider,{value:this},this.props.children),e)}moveToTop(){this._manager().moveToTop(this._uuid)}_manager(){return null===this.context?(0,i.getRootOverlapManager)():this.context}}c.contextType=a.SlotContext;const d=s.createContext(null)},66189:(e,t,n)=>{"use strict";n.d(t,{Slot:()=>r,SlotContext:()=>o});var s=n(67294);class r extends s.Component{shouldComponentUpdate(){return!1}render(){return s.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})}}const o=s.createContext(null)},27214:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="23" height="23"><path stroke="currentColor" stroke-width="1.2" d="M1 1l21 21m0-21L1 22"/></svg>'},43101:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>'},42998:e=>{
e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path stroke="currentColor" stroke-width="1.2" d="M1 1l11 11m0-11L1 12"/></svg>'},83448:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" width="11" height="11"><path stroke="currentColor" stroke-width="1.2" d="M1 1l9 9m0-9l-9 9"/></svg>'},42782:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9" height="9"><path stroke="currentColor" stroke-width="1.2" d="M1 1l7 7m0-7L1 8"/></svg>'},86240:e=>{"use strict";e.exports=JSON.parse('{"media-phone-vertical":"screen and (max-width: 479px)","media-mf-phone-landscape":"screen and (min-width: 568px)"}')}}]);