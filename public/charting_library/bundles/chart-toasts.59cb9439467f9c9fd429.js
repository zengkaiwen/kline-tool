(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[3088],{45936:t=>{t.exports={toast:"toast-2gM8G-uJ","intent-success":"intent-success-2gM8G-uJ","intent-warning":"intent-warning-2gM8G-uJ","intent-danger":"intent-danger-2gM8G-uJ",image:"image-2gM8G-uJ","main-content":"main-content-2gM8G-uJ",title:"title-2gM8G-uJ","main-text":"main-text-2gM8G-uJ","secondary-text":"secondary-text-2gM8G-uJ",actions:"actions-2gM8G-uJ","close-icon":"close-icon-2gM8G-uJ","close-button":"close-button-2gM8G-uJ","adjust-for-close-button":"adjust-for-close-button-2gM8G-uJ"}},42035:t=>{t.exports={"toast-wrapper":"toast-wrapper-1NBponn5",compact:"compact-1NBponn5"}},21659:(t,e,s)=>{"use strict";s.d(e,{Icon:()=>o});var n=s(67294);const o=n.forwardRef((t,e)=>{const{icon:s="",...o}=t;return n.createElement("span",{...o,ref:e,dangerouslySetInnerHTML:{__html:s}})})},36772:(t,e,s)=>{"use strict";s.r(e),s.d(e,{ChartToasts:()=>E});var n=s(67294),o=s(94184),a=s(69580),i=s(68845),r=s(21659),c=s(42998),l=s(45936),u=s.n(l);const d=n.forwardRef((t,e)=>{const{className:s,onClick:a,tabIndex:i}=t;return n.createElement("button",{type:"button",className:o(u()["close-button"],s),tabIndex:i,onClick:a,ref:e},n.createElement(r.Icon,{icon:c,className:u()["close-icon"]}))});function h(t){const{children:e,role:s,className:a,intent:r=i.ToastIntent.Default}=t,c=o(u().toast,r!==i.ToastIntent.Default&&u()["intent-"+r],a);return n.createElement("article",{className:c,role:s},e)}function m(t){const{children:e}=t;return n.createElement("div",{className:u().image},e)}function p(t){const{children:e,className:s}=t;return n.createElement("h2",{className:o(u().title,s)},e)}function g(t){const{children:e,className:s}=t;return n.createElement("p",{className:o(u()["main-text"],s)},e)}function _(t){const{children:e}=t;return n.createElement("div",{className:u().actions},e)}function f(t){const{children:e}=t;return n.createElement("p",{className:u()["secondary-text"]},e)}const w=n.memo(t=>{const{title:e,text:s,secondaryText:a,image:i,actions:r,intent:c,role:l="status",showCloseButton:w=!1,onClose:y,onAutoFocus:b,className:T}=t,C=n.useRef(null),v=w&&!i?u()["adjust-for-close-button"]:void 0,E=!w||i||e?void 0:u()["adjust-for-close-button"];return n.useEffect(()=>{"alert"===l&&(void 0!==b?b():null!==C.current&&C.current.focus())},[]),n.createElement(h,{intent:c,role:l,className:T},w&&n.createElement(d,{ref:C,onClick:y}),i&&n.createElement(m,null,i),n.createElement("div",{className:o(u()["main-content"],w&&u()["with-close-button"])},e&&n.createElement(p,{className:v},e),s&&n.createElement(g,{className:E},s),r&&n.createElement(_,null,r),a&&n.createElement(f,null,a)))});var y=s(76806),b=s(42035);const T=y.mobileFirstLegacyBreakpoints["media-mf-legacy-phone"],C=`screen and (min-width: ${T}px)`,v=1e4;class E{constructor(t,e,s,n=0){this._mediaQuery=window.matchMedia(C),this._pipedToasts=null,this._handleContainerUpdate=()=>{if(this._isWindowWide()){null!==this._pipedToasts&&(this._globalToasts.split(this._toastsLayer),this.unpipe());const t={
suggestedLayout:this._getSuggestedLayout(),rootContainerOptions:this._getRootContainerOptions()};this._toastsLayer.update(t)}else{if(this._pipedToasts===this._globalToasts)return;this._globalToasts.merge(this._toastsLayer),this.pipe(this._globalToasts)}},this._resizerBridge=t,this._container=e,this._globalToasts=s,this._bottomOffset=n,this._toastsLayer=new a.ToastsLayer(this._getSuggestedLayout(),this._container,this._getRootContainerOptions()),this._resizerBridge.width.subscribe(this._handleContainerUpdate),this._isWindowWide()||this.pipe(this._globalToasts)}destroy(){this._toastsLayer.destroy(),this._resizerBridge.width.unsubscribe(this._handleContainerUpdate)}reset(){this._toastsLayer.reset(),this._globalToasts.reset()}showCustomToast(t){if(null!==this._pipedToasts)return this._pipedToasts.showCustomToast({origin:this._toastsLayer,...t});const{render:e,...s}=t;var o;return this._toastsLayer.showToast({render:(o=e,t=>n.createElement(L,{suggestedLayout:t.suggestedLayout,children:o(t)})),...s}).remove}showSimpleToast(t){const{time:e=v,...s}=t;return new Promise(o=>{let a=!1;const i=this.showCustomToast({render:(r=()=>{a=!0,o()},c=s,({onRemove:t})=>n.createElement(x,{...c,onResolve:r,onRemove:t})),index:t.index,priority:t.priority});var r,c;!1!==e&&setTimeout(()=>{a||(i(),o())},e)})}forceRender(){null!==this._pipedToasts?this._pipedToasts.forceRender():this._toastsLayer.forceRender()}merge(t){this._toastsLayer.merge(t)}split(t){this._toastsLayer.split(t)}pipe(t){this._pipedToasts=t}unpipe(){this._pipedToasts=null}_isWindowWide(){return this._mediaQuery.matches}_isContainerWide(){return this._resizerBridge.width.value()>=T}_getRootContainerOptions(){const t=this._isContainerWide()?8:0;return{position:"absolute",zIndex:150,left:"0",right:"0",bottom:this._bottomOffset+27+t+"px"}}_getSuggestedLayout(){return this._isContainerWide()?"loose":"compact"}}function L(t){const{suggestedLayout:e,children:s}=t;return n.createElement("div",{className:o(b["toast-wrapper"],"compact"===e&&b.compact)},s)}function x(t){const{onRemove:e,onResolve:s,onClose:o,showCloseButton:a=!0,...i}=t,r=(0,n.useCallback)(()=>{void 0!==o&&o(),e(),s()},[e]);return n.createElement(w,{...i,onClose:r,showCloseButton:a})}},42998:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path stroke="currentColor" stroke-width="1.2" d="M1 1l11 11m0-11L1 12"/></svg>'}}]);