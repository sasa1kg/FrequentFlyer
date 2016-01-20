/*!CK:4201957929!*//*1451977710,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["iDKcU"]); }

__d("ActorSelectorNuxTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER:"composer_seen_count",COMPOSER_COVERED:"composer_covered_seen_count",M_COMPOSER:"m_composer_seen_count",M_UFI:"m_ufi_seen_count",UFI:"ufi_seen_count",UFI_TIMELINE:"ufi_timeline_seen_count",UFI_TIMELINE_COVERED:"ufi_timeline_covered_seen_count"};},null);
__d('AbstractPopoverButton.react',['React','URI','cloneWithProps','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.PropTypes,n=h.createClass({displayName:'AbstractPopoverButton',propTypes:{config:m.object.isRequired,haschevron:m.bool,maxwidth:m.number},getDefaultProps:function(){return {haschevron:true};},render:function(){var o=this.props.config,p={},q=o.defaultMaxWidth;if(typeof this.props.maxwidth!=='undefined')q=this.props.maxwidth;var r=null;if(q){var s=this.props.haschevron?q-o.chevronWidth:q;if(this.props.label)r={maxWidth:s+'px'};p.style=babelHelpers._extends({},p.style,{maxWidth:q+'px'});}p.image=null;var t=null;if(this.props.image&&this.props.label){t=j(this.props.image,{className:"_3-8_"});}else if(this.props.image)t=this.props.image;if(t||this.props.label)p.label=h.createElement('span',{className:"_55pe",style:r},t,this.props.label);if(this.props.haschevron)p.imageRight=o.chevron;p.className=l(o.button.props.className,"_2agf");p.href=new i('#');return j(o.button,p);}});f.exports=n;},null);
__d('XUIPopoverButton.react',['AbstractPopoverButton.react','Image.react','React','XUIButton.react','cx','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=j.PropTypes,p=j.createClass({displayName:'ReactXUIPopoverButton',propTypes:{haschevron:o.bool,maxwidth:o.number},statics:{getButtonSize:function(q){return q.size||'medium';}},render:function(){var q=p.getButtonSize(this.props),r="_55pi";if(this.props.theme==='dark')r=n(r,"_5vto"+(q==='small'?' '+"_55_o":'')+(q==='medium'?' '+"_55_p":'')+(q==='large'?' '+"_55_q":'')+(q==='xlarge'?' '+"_55_r":'')+(q==='xxlarge'?' '+"_55_s":''));var s=this.props.chevron;if(!s){var t=this.props.theme==='dark'||this.props.use==='confirm'||this.props.use==='special'?m('/images/ui/x/button/dark/chevron.png'):m('/images/ui/x/button/normal/chevron.png');s=j.createElement(i,{src:t});}var u={button:j.createElement(k,babelHelpers._extends({},this.props,{className:n(this.props.className,r),size:q})),chevron:s,chevronWidth:14,defaultMaxWidth:this.props.maxwidth||200};return (j.createElement(h,{config:u,haschevron:this.props.haschevron,image:this.props.image,label:this.props.label,maxwidth:this.props.maxwidth}));}});f.exports=p;},null);
__d('PageVoiceDropdownSelector.react',['BootloadedComponent.react','Image.react','JSResource','React','XUIPopoverButton.react','XUISpinner.react','cx','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=k.PropTypes,q=k.createClass({displayName:'PageVoiceDropdownSelector',propTypes:{loading:p.bool,maxWidth:p.number,pages:p.object.isRequired,selectedActorID:p.string,showPageName:p.bool,suppressed:p.bool.isRequired,user:p.object.isRequired,onChange:p.func.isRequired,onClick:p.func.isRequired},getDefaultProps:function(){return {showPageName:false};},getInitialState:function(){return {dialogShown:false,bootloadFinished:false};},_onChangeActor:function(r){this.props.onChange(r);this.setState({dialogShown:false});},_getDialogContextRef:function(){return this.refs['open-menu-button'];},_onBootloadFinished:function(){this.setState({bootloadFinished:true});},render:function(){var r=this.state.dialogShown&&!this.state.bootloadFinished,s=this.props.loading||r,t=null;if(s)t=k.createElement('div',{className:(!this.props.suppressed?"_3-8_":'')+(' '+"_2wk7")},k.createElement(m,null));var u=null;if(this.state.dialogShown)u=k.createElement(h,babelHelpers._extends({bootloadLoader:j('PageVoiceDropdownSelectorMenu.react'),bootloadPlaceholder:k.createElement('div',null),onComponentLoad:this._onBootloadFinished},this.props,{contextRef:this._getDialogContextRef,shown:true,shownBusinessID:this.state.shownBusinessID,onChange:this._onChangeActor,onToggle:this._onToggle}));return (k.createElement('span',null,k.createElement(l,{className:"_4z8-",image:k.createElement(i,{height:16,src:this._getSelectedImageSource(),width:16}),label:this.props.showPageName?this._getSelectedActorName():'',maxwidth:this.props.maxwidth,ref:'open-menu-button',suppressed:this.props.suppressed,type:'button',onClick:this._onButtonClick}),u,t));},_onButtonClick:function(event){this.setState({dialogShown:!this.state.dialogShown,shownBusinessID:this.state.defaultBusinessID},(function(){return this.props.onClick(event);}).bind(this));},_onToggle:function(r){this.setState({dialogShown:r});},_getSelectedImageSource:function(){var r=this.props.selectedActorID;if(!r)return '';if(r===this.props.user.id)return this.props.user.thumbSrc||'';return this.props.pages[r].thumbSrc||'';},_getSelectedActorName:function(){var r=this.props.selectedActorID;if(!r)return '';if(r===this.props.user.id)return this.props.user.name||'';return this.props.pages[r].name||'';}});f.exports=q;},null);
__d('ActorSelector.react',['BizSiteIdentifier.brands','BootloadedComponent.react','Bootloader','Event','JSResource','PageVoiceDropdownSelector.react','React','ReactDOM','ShortProfiles','TooltipData','cx','emptyFunction','getObjectValues','goURI','joinClasses','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x=n.PropTypes,y=500,z=n.createClass({displayName:'ActorSelector',propTypes:{actorIDs:x.array.isRequired,actorPermissions:x.object,loading:x.bool,nuxBody:x.node,nuxEnabled:x.bool,nuxHoverContext:x.object,onChange:x.func.isRequired,onCompleteNux:x.func,onShowNux:x.func,selectedActorID:x.string,settingsURI:x.string,showName:x.bool,showNameMaxWidth:x.number,suppressed:x.bool,tooltipConstructor:x.func},getDefaultProps:function(){return {suppressed:true};},getInitialState:function(){return {actorData:{},nuxShown:false};},componentWillMount:function(){this._canSetState=true;this._fetchActorData();},_getNUXContextRef:function(){return this.refs.selector;},render:function(){if(!this.props.selectedActorID||!this.state.actorData[this.props.selectedActorID])return n.createElement('div',null);if(this.props.actorIDs.length===0)return n.createElement('div',null);var aa=null;if(this.state.nuxShown)aa=n.createElement(i,{bootloadLoader:l('ActorSelectorNUXLayer.react'),bootloadPlaceholder:n.createElement('span',null),onCompleteNux:this._onCompleteNux,onClickSettings:this._onClickSettings,settingsURI:this.props.settingsURI,shown:true,contextRef:this._getNUXContextRef,nuxBody:this.props.nuxBody});return (n.createElement('span',{className:v("_6vh",this.props.className)},n.createElement('span',{ref:'selector'},n.createElement(m,{loading:this.props.loading,permissions:this.props.actorPermissions,pages:this.state.actorData,onChange:this.props.onChange,onClick:this._onClickSelector,selectedActorID:this.props.selectedActorID,searchBarVisible:true,showBusinessPages:false,showPageName:this.props.showName,showNameMaxWidth:this.props.showNameMaxWidth,showPersonalPagesInRoot:!h.isBizSite(),suppressed:this.props.suppressed,user:t(this.state.actorData)[0]})),aa));},componentDidMount:function(){this._setTooltip();if(this.props.nuxEnabled)if(this.props.nuxHoverContext){var aa=w(k.listen(this.props.nuxHoverContext,'mouseenter',(function(){j.loadModules(["ActorSelectorNUXLayer.react"],s);var ba=setTimeout((function(){aa.remove();if(this.props.nuxEnabled)this.setState({nuxShown:true});}).bind(this),y),ca=w(k.listen(this.props.nuxHoverContext,'mouseleave',function(){clearTimeout(ba);ca.remove();}));}).bind(this)));}else this.setState({nuxShown:true});},componentDidUpdate:function(aa,ba){if(this.props.actorIDs.toString()!==aa.actorIDs.toString())this._fetchActorData();this._setTooltip();if(this.state.nuxShown&&!ba.nuxShown&&this.props.onShowNux)this.props.onShowNux();},componentWillUnmount:function(){this._canSetState=false;},_fetchActorData:function(){p.getMulti(this.props.actorIDs,(function(aa){if(this._canSetState)this.setState({actorData:aa});}).bind(this));},_onClickSelector:function(){if(this.state.nuxShown)this._onCompleteNux();},_onClickSettings:function(){this._onCompleteNux();u(this.props.settingsURI);},_onCompleteNux:function(){this.setState({nuxShown:false});if(this.props.onCompleteNux)this.props.onCompleteNux();},_setTooltip:function(){if(!this.refs.selector)return;var aa=this.state.actorData[this.props.selectedActorID];if(!aa)return;if(!this.props.tooltipConstructor)return;q.set(o.findDOMNode(this.refs.selector),this.props.tooltipConstructor(aa.name),'above','right');}});f.exports=z;},null);
__d("XActorSelectorNuxSeenWriteController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/actor_selector\/nux\/mark_seen\/",{nux_type:{type:"Enum",required:true,enumType:1}});},null);
__d('UFIActorSelector.react',['ActorSelector.react','ActorSelectorNuxTypes','Arbiter','AsyncRequest','Parent','React','SubscriptionsHandler','UFICentralUpdates','UFIFeedbackTargets','UFIUserActions','XActorSelectorNuxSeenWriteController','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=m.PropTypes,u='ufi_actor_selector_nux_disabled_event',v=m.createClass({displayName:'UFIActorSelector',propTypes:{actorIDs:t.array.isRequired,ftEntIdentifier:t.string.isRequired,isTimeline:t.bool,nuxEnabled:t.bool,nuxHoverContext:t.object,settingsURI:t.string},getInitialState:function(){var w=l.byClass(this.props.nuxHoverContext,'timelineUnitContainer');return {loading:false,nuxEnabled:this.props.nuxEnabled,nuxHoverContext:w?w:this.props.nuxHoverContext,selectedActorID:null};},render:function(){return (m.createElement(h,{actorIDs:this.props.actorIDs,loading:this.state.loading,nuxBody:this._getNUXBody(),nuxEnabled:this.state.nuxEnabled,nuxHoverContext:this.state.nuxHoverContext,onChange:this._onChange,onShowNux:this._onShowNux,onCompleteNux:this._onCompleteNux,selectedActorID:this.state.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this._getTooltipForActorName}));},componentDidMount:function(){this._updateSelectedActorIDFromFeedbackTarget();this._subscriptions=new n();this._subscriptions.addSubscriptions(o.subscribe('feedback-updated',(function(w,x){if(this.props.ftEntIdentifier in x.updates)this._updateSelectedActorIDFromFeedbackTarget();}).bind(this)),j.subscribe(u,(function(){this.setState({nuxEnabled:false});}).bind(this)));},componentWillUnmount:function(){this._subscriptions.release();},_updateSelectedActorIDFromFeedbackTarget:function(){p.getFeedbackTarget(this.props.ftEntIdentifier,(function(w){this.setState({loading:false,selectedActorID:w.actorforpost});}).bind(this));},_getNUXBody:function(){return s._("Choose whether to like and comment as yourself or as one of the Pages you manage.");},_getTooltipForActorName:function(w){return s._("Liking and commenting as {actorName}",[s.param('actorName',w)]);},_onChange:function(w){this.setState({loading:true});q.changeActor(this.props.ftEntIdentifier,w.value);},_onCompleteNux:function(){var w=this.props.isTimeline?i.UFI_TIMELINE:i.UFI,x=r.getURIBuilder().setEnum('nux_type',w).getURI();new k().setURI(x).send();},_onShowNux:function(){j.inform(u);}});f.exports=v;},null);
__d('PopoverMenuContextMinWidth',['CSS','Style','cx','shield'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m){'use strict';this._popoverMenu=m;this._popover=m.getPopover();}l.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',k(this._onSetMenu,this));};l.prototype.disable=function(){'use strict';this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;if(this._showSubscription){this._showSubscription.unsubscribe();this._showSubscription=null;}if(this._menuSubscription){this._menuSubscription.unsubscribe();this._menuSubscription=null;}};l.prototype._onSetMenu=function(){'use strict';this._menu=this._popoverMenu.getMenu();this._showSubscription=this._popover.subscribe('show',k(this._updateWidth,this));var m=this._updateWidth.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(m,0);});this._updateWidth();};l.prototype._updateWidth=function(){'use strict';var m=this._menu.getRoot(),n=this._popoverMenu.getTriggerElem(),o=n.offsetWidth;i.set(m,'min-width',o+'px');h.conditionClass(m,"_575s",o>=m.offsetWidth);};Object.assign(l.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=l;},null);
__d('ReactSelectorUtils',['React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i={processMenuItems:function(j,k){var l,m=h.Children.map(j,function(n){if(n){var o=n.props.value===k;n=h.cloneElement(n,{selected:o});if(o)l=n;return n;}});return {items:m,selectedItem:l};},processMultiMenuItems:function(j,k){var l=[],m=j;if(k)m=h.Children.map(j,function(n){if(n){var o=k.some(function(p){return p===n.props.value;});n=h.cloneElement(n,{selected:o});if(o)l.push(n);return n;}});return {items:m,selectedItems:l};}};f.exports=i;},null);
__d('AbstractSelector.react',['InlineBlock.react','React','PopoverMenu.react','ReactSelectorUtils','ContextualLayerAutoFlip','PopoverMenuContextMinWidth','PopoverMenuOverlappingBorder','cloneWithProps','cx','invariant','joinClasses','intlList'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=i.PropTypes;function u(w,x,y){if(w[x]==null)return;var z=Array.isArray(w[x]);if(w.multiple){if(!z)return new Error('You are trying to set a single value for `'+x+'` '+'but the menu has `multiple` set to true, so it should be an '+'array of values.');}else if(z)return new Error('You are trying to set an array of values for `'+x+'` '+'but the menu has `multiple` set to false, so it should be a '+'single value.');}var v=i.createClass({displayName:'AbstractSelector',propTypes:{config:t.object.isRequired,alignh:t.oneOf(['left','center','right']),name:t.string,overlappingborder:t.bool,onChange:t.func,disabled:t.bool,maxheight:t.number,multiple:t.bool,defaultLabel:t.string,defaultValue:u,value:u,initialValue:u},getInitialState:function(){return {value:this.props.value!=null?this.props.value:this.props.defaultValue!=null?this.props.defaultValue:this.props.initialValue};},setMenuValue:function(w){!(this.refs&&this.refs.popover)?q(0):undefined;this._internalChange=true;this.refs.popover.getMenu().setValue(w);this._internalChange=false;},onChange:function(w,x){if(this._internalChange)return;if(this.props.value==null){var y=null;if(this.props.multiple){y=x.map(function(z){return z.value;});}else y=x.value;this.setState({value:y});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(x);},componentWillReceiveProps:function(w){if(w.value!=null){this.setState({value:w.value});}else if(this.props.multiple!==w.multiple)this.setState({value:w.multiple?[this.state.value]:this.state.value[0]});},render:function(){var w=this.props.config,x=!this.props.multiple?k.processMenuItems(this.props.children,this.state.value):k.processMultiMenuItems(this.props.children,this.state.value),y=o(w.menu,{children:x.items,className:r("_575t",w.menu.props.className),maxheight:this.props.maxheight,onChange:this.onChange}),z='',aa=null;if(!this.props.multiple){var ba=x.selectedItem;z=ba.props.label||ba.props.children;if(ba.props.icon)aa=o(ba.props.icon,{});}else{var ca=x.selectedItems;if(!ca.length){z=this.props.defaultLabel;}else z=s(ca.map(function(ka){return ka.props.children;}),s.CONJUNCTIONS.NONE);}var da={label:z,disabled:this.props.disabled};if(aa)da.image=aa;var ea=o(w.button,da),fa=[l];if(w.layerBehaviors)fa=fa.concat(w.layerBehaviors);var ga=[m];if(this.props.overlappingborder)ga.push(n);var ha=null;if(this.props.multiple){var ia=this.props.name+'[]',ja;if(this.state.value)ja=this.state.value.map(function(ka){return (i.createElement('input',{key:ka,type:'hidden',name:ia,value:ka}));});ha=i.createElement('div',null,ja);}else ha=i.createElement('input',{type:'hidden',name:this.props.name,value:this.state.value});return (i.createElement(h,babelHelpers._extends({},this.props,{alignv:'middle',name:null}),i.createElement(j,{ref:'popover',menu:y,alignh:this.props.alignh,layerBehaviors:fa,behaviors:ga,disabled:this.props.disabled},ea),ha));},showMenu:function(){!this.isMounted()?q(0):undefined;this.refs.popover.showPopover();},hideMenu:function(){!this.isMounted()?q(0):undefined;this.refs.popover.hidePopover();}});f.exports=v;},null);
__d('XUISelectorButton.react',['React','XUIPopoverButton.react','invariant'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUISelectorButton',render:function(){!!this.props.theme?j(0):undefined;return (h.createElement(i,babelHelpers._extends({},this.props,{theme:'dark'})));}});f.exports=k;},null);
__d('XUISelector.react',['AbstractSelector.react','ContextualLayerPositionClassOnContext','React','ReactChildren','ReactXUIMenu','XUISelectorButton.react','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=l.SelectableMenu,p=l.SelectableItem,q=j.PropTypes,r=j.createClass({displayName:'ReactXUISelector',propTypes:{layerBehaviors:q.array,maxheight:q.number,multiple:q.bool,disabled:q.bool,haschevron:q.bool,maxwidth:q.number,size:q.oneOf(['small','medium','large','xlarge','xxlarge']),suppressed:q.bool,use:q.oneOf(['default','special','confirm'])},statics:{getButtonSize:function(s){return s.size||'medium';}},getDefaultProps:function(){return {haschevron:true,layerBehaviors:[],multiple:false};},render:function(){var s,t=[];k.forEach(this.props.children,function(v){if(v)t.push(v);});if(t[0]&&t[0].type===m){s=t[0];t=t.slice(1);}else s=j.createElement(m,{haschevron:this.props.haschevron,disabled:this.props.disabled,use:this.props.use,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth});var u={button:s,menu:j.createElement(o,{maxheight:this.props.maxheight,multiple:this.props.multiple}),layerBehaviors:this.props.layerBehaviors.concat([i])};return (j.createElement(h,babelHelpers._extends({},this.props,{ref:'abstractSelector',config:u}),t));},showMenu:function(){!this.isMounted()?n(0):undefined;this.refs.abstractSelector.showMenu();},hideMenu:function(){!this.isMounted()?n(0):undefined;this.refs.abstractSelector.hideMenu();}});r.Option=p;f.exports=r;},null);
__d('ReactRenderer',['React','ReactDOM','Run','$'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();function l(p,q,r,s){var t=h.createElement(p,q),u=i.render(t,r,s);j.onLeave(function(){i.unmountComponentAtNode(r);});return u;}function m(p,q,r,s){var t=h.createElement(p,q);return i.render(t,r,s);}function n(p,q,r,s){return l(p,q,k(r),s);}function o(p,q,r,s){return m(p,q,k(r),s);}f.exports={constructAndRenderComponent:l,constructAndRenderComponentByID:n,constructAndRenderComponentAcrossTransitions:m,constructAndRenderComponentByIDAcrossTransitions:o,constructAndRenderComponent_DEPRECATED:m,constructAndRenderComponentByID_DEPRECATED:o};},null);