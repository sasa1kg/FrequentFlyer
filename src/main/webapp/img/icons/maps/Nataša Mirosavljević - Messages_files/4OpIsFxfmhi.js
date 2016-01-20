/*!CK:2344775984!*//*1451899397,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["C3jQW"]); }

__d('P2PChatThreadBanner.react',['Image.react','Layout.react','P2PAPI','P2PLogger','P2PPaymentLoggerEvent','React','Set','cx','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';if(c.__markCompiled)c.__markCompiled();var q=i.FillColumn,r=i.Column,s=new n(),t=m.PropTypes,u=m.createClass({displayName:'P2PChatThreadBanner',propTypes:{bannerType:t.string.isRequired,bodyText:t.string,buttonText:t.string,loggerEventFlow:t.string.isRequired,onClick:t.func,titleText:t.string.isRequired},_isRendered:false,componentDidMount:function(){var v=this.props.bannerType;if(!s.has(v)){s.add(v);this._isRendered=true;this.log(l.UI_ACTN_CHAT_THREAD_BANNER_VIEWED,{});j.incrementBannerViews(this.props.bannerType);}},log:function(v,w){k.log(v,babelHelpers._extends({www_event_flow:this.props.loggerEventFlow},w));},handleClick:function(v){v.stopPropagation();if(this.props.onClick)this.props.onClick();this.log(l.UI_ACTN_CHAT_THREAD_BANNER_CLICKED,{});j.incrementBannerDismissals(this.props.bannerType);},handleClose:function(v){v.stopPropagation();this.log(l.UI_ACTN_CHAT_THREAD_BANNER_DISMISSED,{});j.incrementBannerDismissals(this.props.bannerType);},hasRenderedSameBanner:function(){return !this._isRendered&&s.has(this.props.bannerType);},render:function(){var v,w;if(this.hasRenderedSameBanner())return null;if(this.props.bodyText)v=m.createElement('div',{className:"_1w2e"},this.props.bodyText);if(this.props.buttonText)w=m.createElement('a',{className:"_2hrk"},this.props.buttonText);return (m.createElement('div',{className:"_1w2f",onClick:this.handleClick},m.createElement('div',{className:"_3jht",onClick:this.handleClose},m.createElement(h,{className:"_47dg",height:9,src:p('/images/p2p/chat-thread-banner-close.png'),width:9})),m.createElement(i,null,m.createElement(r,{className:"_1w2g"},m.createElement(h,{className:"_1w2h",height:15,src:p('/images/p2p/thread-banner-dollar.png'),width:15})),m.createElement(q,{className:"_1w2i"},m.createElement('div',{className:"_1w2j"+(!!v?' '+"_1w2k":'')},this.props.titleText),v,w))));}});f.exports=u;},null);
__d('P2PProductItemChatThreadBanner.react',['AsyncRequest','ContextualLayerAutoFlip','BackgroundImage.react','Image.react','Layout.react','LineClamp.react','Link.react','P2PActions','P2PAPI','P2PLogger','P2PLinkConstants','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PPlatformContextShape','P2PPlatformContextStore','P2PUserEligibilityStore','PopoverMenu.react','ReactComponentWithPureRenderMixin','React','ReactLayeredComponentMixin','ReactXUIMenu','Set','StoreAndPropBasedStateMixin','Tooltip.react','URI','XC2CPayNUXBannerImpressionsUpdateController','XUIAmbientNUX.react','XUIButton.react','XUIGrayText.react','cx','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma){'use strict';if(c.__markCompiled)c.__markCompiled();var na=l.Column,oa=l.FillColumn,pa=ba.Item,qa=false,ra=new ca(),sa=z.createClass({displayName:'P2PProductItemChatThreadBanner',mixins:[aa,y,da(w)],propTypes:{platformContext:u.isRequired},getInitialState:function(){return {showNUX:false};},statics:{calculateState:function(ta){return {canSendToRecipient:w.getEligibilityByThreadID(v.getThreadIDFromPlatformContext(ta.platformContext))};}},componentDidMount:function(){var ta=this.props.platformContext,ua=v.getThreadIDFromPlatformContext(ta);this.handleShouldShowPayNUX();if(!ra.has(ua)){ra.add(ua);if(v.isViewerSellerForPlatformContext(ta)){this.log(s.UI_ACTN_PLATFORM_BANNER_SELLER_VIEWED);}else this.log(s.UI_ACTN_PLATFORM_BANNER_BUYER_VIEWED);}},componentDidUpdate:function(ta,ua){if(!ua.canSendToRecipient&&this.state.canSendToRecipient)this.handleShouldShowPayNUX();},log:function(ta,ua){var va={platform_logging_data:this.props.platformContext.product.loggingData};q.log(ta,babelHelpers._extends({www_event_flow:t.UI_FLOW_PLATFORM_BANNER},va,ua));},handleShouldShowPayNUX:function(){var ta=this.props.platformContext,ua=!qa&&this.shouldRenderPayButton()&&ta.banner.shouldShowPayNux;if(ua){this.log(s.UI_ACTN_PLATFORM_BANNER_PAY_NUX_SHOWN);qa=true;this.setState({showNUX:true});new h().setURI(ga.getURIBuilder().getURI()).setMethod('POST').send();}},handleDismissClick:function(ta){ta.preventDefault();var ua=this.props.platformContext;p.dismissPlatformContextBanner(ua.id);if(v.isViewerSellerForPlatformContext(ua)){this.log(s.UI_ACTN_PLATFORM_BANNER_SELLER_HIDE_CLICKED);}else this.log(s.UI_ACTN_PLATFORM_BANNER_BUYER_HIDE_CLICKED);},handleSoldClick:function(ta){ta.preventDefault();p.markSoldPlatformContextProductItem(this.props.platformContext.id);this.log(s.UI_ACTN_PLATFORM_BANNER_SOLD_CLICKED);},handlePayClick:function(ta){ta.preventDefault();var ua=this.props.platformContext,va=ua.product,wa=v.getThreadIDFromPlatformContext(ua);o.chatSendViewOpened({threadID:wa,amount:va.formattedAmount,platformData:{platformContextID:ua.id,loggingData:va.loggingData}});this.setState({showNUX:false});this.log(s.UI_ACTN_PLATFORM_BANNER_PAY_CLICKED);},handleImageClicked:function(){this.log(s.UI_ACTN_PLATFORM_BANNER_IMAGE_CLICKED);},handleTitleClicked:function(){this.log(s.UI_ACTN_PLATFORM_BANNER_TITLE_CLICKED);},renderMarkSold:function(){var ta=this.props.platformContext,ua;if(!ta.product.isAvailable)return null;if(v.isViewerSellerForPlatformContext(ta))ua=z.createElement('div',null,z.createElement(n,{href:'#',onClick:this.handleSoldClick},la._("Mark as Sold")));return ua;},renderPayButton:function(){if(!this.shouldRenderPayButton())return null;var ta=z.createElement(ia,{label:la._("Pay"),onClick:this.handlePayClick,ref:'pay_button',use:'confirm'});if(!this.state.showNUX)ta=z.createElement(ea,{alignH:'right',display:'block',tooltip:la._("You can confirm the amount next.")},ta);return (z.createElement('div',{className:!this.isCompactMode()?"_3-8x":''},ta));},shouldRenderPayButton:function(){var ta=this.props.platformContext,ua=v.isViewerBuyerForPlatformContext(this.props.platformContext);return !!(this.state.canSendToRecipient&&ta.product.isAvailable&&ua&&ta.product.rawAmount.amount>0);},getAmountText:function(){var ta=this.props.platformContext,ua=ta.product;return (ua.rawAmount.amount>0?ua.formattedAmount:la._("FREE"));},renderAskingPriceRow:function(){var ta=this.props.platformContext,ua=ta.product;if(ua.isAvailable)return (z.createElement(m,{lines:1,lineHeight:16},z.createElement(ja,{shade:'light'},la._("Price: {price of the item}",[la.param('price of the item',this.getAmountText())]))));},renderNameLine:function(){var ta=this.props.platformContext,ua=ta.product,va='dark',wa;if(!ua.isAvailable){va='light';wa=la._("SOLD");}return (z.createElement(n,{href:ua.refURL||'#',onClick:this.handleTitleClicked},z.createElement(ja,{shade:va},wa?'('+wa+') ':null,ua.name)));},renderImageColumn:function(){var ta=this.props.platformContext,ua=ta.product;if(this.isCompactMode())return null;return (z.createElement(na,null,z.createElement('div',{className:"_5qnr"},z.createElement('div',{className:"_5qn-"},z.createElement(n,{href:ua.refURL||'#',onClick:this.handleImageClicked},z.createElement(j,{backgroundPosition:'50% 50%',backgroundSize:'cover',height:45,src:ua.image,width:45}))))));},renderPopoverMenu:function(){var ta=this.props.platformContext,ua=ta.product,va=z.createElement(ba,{className:"_1z1u"},z.createElement(pa,{className:"_1z1_"},z.createElement('div',{onClick:this.handleDismissClick},la._("Hide from conversation"))),z.createElement(pa,{ajaxify:new fa('/ajax/groups/mall/report_to_admin').addQueryData({message_id:ua.loggingData.post_id}),rel:'async-post'},la._("Report to admin")),z.createElement(pa,{href:r.helpCenterURI,target:'_blank'},la._("Learn more")));return (z.createElement(x,{alignh:'right',layerBehaviors:[i],menu:va,className:"_3fqa"},z.createElement('div',{className:"_1z20"},z.createElement(n,{className:"_1z21",href:'#'}))));},isCompactMode:function(){var ta=this.props.platformContext,ua=ta.product;return !ua.image||!ua.isAvailable;},onNUXCloseButtonClick:function(){this.setState({showNUX:false});},renderLayers:function(){var ta={};if(this.state.showNUX)ta.ambientNUX=z.createElement(ha,{alignment:'left',contextRef:(function(){return this.refs.pay_button;}).bind(this),customwidth:234,onCloseButtonClick:this.onNUXCloseButtonClick,position:'above',shown:true,width:'custom'},z.createElement('div',{className:"_3-95"},la._("You can pay for this item directly from your messages.")),z.createElement('div',null,z.createElement(k,{className:"_3fqb",height:14,src:ma('/images/p2p/white-privacy-lock.png'),width:10}),z.createElement('span',{className:"_3fqc"},la._("It's free and secure."))));return ta;},render:function(){return (z.createElement('div',{className:"_319c"+(this.isCompactMode()?' '+"_5qn_":'')},z.createElement(l,null,this.renderImageColumn(),z.createElement(oa,null,z.createElement('div',{className:(!this.isCompactMode()?"_2pis":'')+(' '+"_5qo0")},z.createElement('div',{className:"_5qo1"},z.createElement(m,{lines:1,lineHeight:16},this.renderNameLine()),this.renderAskingPriceRow(),this.renderMarkSold()))),z.createElement(na,null,z.createElement('div',{className:"_1_68"},this.renderPopoverMenu(),this.renderPayButton())))));}});f.exports=sa;},null);
__d('P2PSendMoneyNUXChatThreadBanner.react',['MercuryIDs','P2PActions','P2PChatThreadBanner.react','P2PUserEligibilityStore','React','StoreAndPropBasedStateMixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=l.PropTypes,o=l.createClass({displayName:'P2PSendMoneyNUXChatThreadBanner',mixins:[m(k)],propTypes:{bannerType:n.string.isRequired,bodyText:n.string,buttonText:n.string,loggerEventFlow:n.string.isRequired,threadID:n.string.isRequired,titleText:n.string.isRequired},statics:{calculateState:function(p){var q=h.isGroupChat(p.threadID)||k.getEligibilityByThreadID(p.threadID);return {isThreadEligible:q};}},handleClick:function(){i.chatSendViewOpened({threadID:this.props.threadID});},render:function(){if(!this.state.isThreadEligible)return null;return (l.createElement(j,babelHelpers._extends({},this.props,{onClick:this.handleClick})));}});f.exports=o;},null);