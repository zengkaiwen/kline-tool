(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[4193],{94066:()=>{},45587:()=>{},50990:e=>{e.exports={"css-value-chart-controls-bar-height":"38px","css-value-chart-controls-bar-border":"1px","css-value-chart-controls-bar-height-with-border":"39px"}},62235:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Bottomwidgetbar:()=>_});var s=i(16282),a=i(19160),h=i.n(a),r=i(69671),n=i(87060),o=i(48877),l=i(13951),d=i(37808),g=i(50990);i(45587),i(94066);const c=parseInt(g["css-value-chart-controls-bar-height-with-border"]);class _{constructor(e,t){this._draggable=null,this._inited=!1,this._widgetContents=new WeakMap,this._minHeight=30,this._paddingTop=n.footerWidgetHeight,this.open=()=>{"minimized"===this._mode.value()&&this._mode.setValue("normal")},this.close=()=>{this._mode.setValue("minimized")},this.toggleMaximize=()=>{switch(this._mode.value()){case"minimized":case"normal":this._trackResizeClick("maximize","on"),this._mode.setValue("maximized");break;case"maximized":this._trackResizeClick("maximize","off"),this._mode.setValue("normal")}},this.toggleMinimize=()=>{switch(this._mode.value()){case"minimized":this._trackResizeClick("show panel"),this.open();break;case"normal":case"maximized":this._trackResizeClick("hide panel"),this.close()}},this._mode=new(h()),this._isOverlap=new(h()),this._isVisible=new(h()),this._activeWidget=new(h()),this._widgets={},this._widgetsProperties={},this._normalHeight=new(h()),this._actualHeight=new(h()),this._userSettings=t,this._options=e||{},this._config=e.config,this._enabledWidgets=(e&&e.widgets||[]).filter(e=>e&&Boolean(this._config[e])),this._init(e)}activeWidget(){return this._activeWidget.readonly()}footerWidgetContainer(){return this._footerWidgetContainer}toggleWidget(e,t){return new Promise(i=>{"boolean"==typeof e?e?this.open():this.close():this.isWidgetEnabled(e)&&(t?this.open():this.activeWidget().value()===e&&"minimized"!==this.mode().value()?this.close():this.open(),this._activeWidget.setValue(e)),i()})}getWidgetByName(e){return this._widgets[e]||null}mode(){return this._mode.readonly()}isOverlap(){return this._isOverlap.readonly()}setNormalHeight(e){this._normalHeight.setValue(e)}destroy(){this._draggable&&(this._draggable.destroy(),this._draggable=null)}isWidgetEnabled(e){return this._enabledWidgets.includes(e)}activateTradingTab(){return this.toggleWidget("paper_trading",!0).then(()=>{const e=this.getWidgetByName("paper_trading");e&&e.activate&&e.activate()})}activateScriptEditorTab(e){this.toggleWidget("scripteditor",!0).then(()=>{const t=this._config.scripteditor;t&&t.ctor.open(e)})}turnOffMaximize(){"maximized"===this._mode.value()&&this.toggleMaximize()}enabledWidgets(){return this._enabledWidgets.map(e=>this._config[e])}activeWidgetName(){return this._activeWidget.value()}isVisible(){return this._isVisible.readonly()}_init(e){if(!this._enabledWidgets.length||this._inited)return;this._createLayout(this._options.resizerBridge.container.value());const t=()=>{let e=0;switch(this._mode.value()){case"normal":e=this._normalHeight.value();break;case"maximized":
e=this._resizerAvailHeight()}const t={min:Math.min(this._getPaddingBoxHeight(e),this._getPaddingBoxHeight(this._minHeight)),max:this._getPaddingBoxHeight(e)};this._options.resizerBridge.negotiateHeight(t)},i=()=>{if("minimized"!==this._mode.value()){const t=this._activeWidget.value();let i;if(this._container.classList.remove("js-hidden"),this._container.style.height=this._actualHeight.value()+"px",Array.from(this._container.querySelectorAll(".bottom-widgetbar-content"),e=>{e.classList.add("js-hidden")}),this._widgets[t]){const e=this._widgets[t];e&&this._widgetContents.has(e)&&(i=(0,s.ensureDefined)(this._widgetContents.get(e)),i.classList.remove("js-hidden"))}else{i=document.createElement("div"),i.className="bottom-widgetbar-content "+t,this._container.append(i),this._initWidgetProperties(t);const s=new(h());this._activeWidget.subscribe(e=>{s.setValue(e===t)},{callWithLast:!0});const a=()=>{this.toggleWidget(t,!0)},r=this._config[t];if(r){const h=r.ctor;this._widgets[t]=new h({container:i,bottomAreaContainer:this._container,height:this._actualHeight,width:this._options.resizerBridge.width,bottomToolbarMode:this.mode(),visible:s.readonly(),properties:this._widgetsProperties[t],activate:a,close:()=>this.close(),chartWidgetCollection:e.chartWidgetCollection||null,originalStandalone:"screener"===t,backtestingStrategyDispatcher:this._options.backtestingStrategyDispatcher,studyMarket:this._options.studyMarket})}const n=this._widgets[t];n&&(this._widgetContents.set(n,i),n.disabled&&n.disabled.subscribe(e=>{this._loadingOverlay.classList.toggle("js-hidden",!e)}))}}this._normalHeight.unsubscribe(t),this._normalHeight.subscribe(t),this._mode.unsubscribe(t),this._mode.subscribe(t),this._options.resizerBridge.availHeight.unsubscribe(t),this._options.resizerBridge.availHeight.subscribe(t),t(),this._save()};this._mode.subscribe(i),this._activeWidget.subscribe(i),this._normalHeight.subscribe(()=>{this._save()}),this._mode.subscribe(()=>{this._save()}),this._options.resizerBridge.height.subscribe(()=>{const e=this._options.resizerBridge.height.value(),t=Math.max(this._getContentBoxHeight(e),0);this._container.style.height=t+"px",this._actualHeight.setValue(t)},{callWithLast:!0}),this._registerWidgets(),this._loadState(),this._subscribeCheckOverlap(),this._subscribeVisibility(),this._inited=!0}_getContentBoxHeight(e){return e-this._paddingTop}_getPaddingBoxHeight(e){return e+this._paddingTop}_subscribeCheckOverlap(){this._checkOverlap(),this._actualHeight.subscribe(()=>{this._checkOverlap()}),this._mode.subscribe(()=>{this._checkOverlap()}),this._options.resizerBridge.availHeight.subscribe(()=>{this._checkOverlap()})}_updateVisibility(){this._isVisible.setValue(this._options.resizerBridge.visible.value())}_subscribeVisibility(){this._updateVisibility(),this._options.resizerBridge.visible.subscribe(()=>{this._updateVisibility()})}_createLayout(e){e.innerHTML="",this._footerWidgetContainer=document.createElement("div"),this._footerWidgetContainer.style.height=n.footerWidgetHeight+"px",e.append(this._footerWidgetContainer),
this._container=document.createElement("div"),this._container.id="bottom-area",e.append(this._container);const t=document.createElement("div");t.className="bottom-widgetbar-handle",this._container.append(t),t.addEventListener("contextmenu",e=>{e.preventDefault()});let i=null;this._draggable=new d.PointerBackend({handle:t,onDragStart:e=>{const t=this._mode.value(),s=this._normalHeight.value(),a="minimized"===this._mode.value()?0:(0,l.contentHeight)(this._container);i={startMode:t,lastNormalHeight:s,startHeight:a}},onDragMove:e=>{if(null===i)return;const{startHeight:t}=i,{initial:s,current:a}=e.detail;let h,r=t-(a.pageY-s.pageY);r<=0?(r=t,h=!0):h=!1,r=Math.max(r,this._minHeight),isFinite(r)&&("minimized"===this._mode.value()!==h?h?(this._mode.setValue("minimized"),this.setNormalHeight(Math.max(t,this._minHeight))):(this._mode.setValue("normal"),this.setNormalHeight(r)):this._normalHeight.value()!==r&&(r>=this._getContentBoxHeight(this._resizerAvailHeight())?(this._mode.setValue("maximized"),this.setNormalHeight(t)):(this._mode.setValue("normal"),this.setNormalHeight(r))))},onDragStop:()=>{if(null===i)return;const{lastNormalHeight:e,startMode:t}=i;i=null,e>0&&"normal"!==this._mode.value()&&"normal"!==t&&this.setNormalHeight(e),this._save()}}),this._loadingOverlay=document.createElement("div"),this._loadingOverlay.className="bottom-widgetbar-loading-overlay js-hidden",this._container.append(this._loadingOverlay)}_checkOverlap(){const e=this._getPaddingBoxHeight(this._actualHeight.value()),t=this._mode.value();this._isOverlap.setValue("maximized"===t||"normal"===t&&this._resizerAvailHeight()-e<=300+c)}_resizerAvailHeight(){return this._options.resizerBridge.availHeight.value()}_initWidgetProperties(e){const t="bottom"+e+"widget",i=new(h())(r.getJSON(t,null));i.subscribe(e=>{e?r.setJSON(t,e):r.remove(t)}),this._widgetsProperties[e]=i}_loadState(){const e=this._userSettings;this._mode.setValue(e.mode),this._activeWidget.setValue(this.isWidgetEnabled(e.activeWidget)?e.activeWidget:this._enabledWidgets[0]),this.setNormalHeight(Math.max(e.height,this._minHeight))}_save(){this._inited&&(0,o.setUserSettings)({activeWidget:this._activeWidget.value(),height:this._normalHeight.value(),mode:this._mode.value()})}_registerWidgets(){this._enabledWidgets.forEach(e=>{const t=this._config[e];if(!t||"function"!=typeof t.onRegister)return;t.onRegister.call(null,{activate:()=>{this.toggleWidget(e,!0)},name:e})})}_trackResizeClick(e,t){0}}}}]);