const Page			       = require("js-base/component/page");
const extend		       = require("js-base/core/extend");
const UIComponent      = require("js-base/component/ui-component");
const CheckBoxButton   = require("./component/checkbox");
const NavBar           = require("./component/nav-bar");
const actionBarOptions = require("./actionbar/page1.actionbar");
const ActionBarWrapper = require("js-base/component/action-bar");
const style            = require("./styles/styles");
const styler           = require("js-base/core/styler").styler;

const Page1 = extend(Page)(
	//Page1 Constructor
	function(_super){

		_super(this, {
			name: "page1",
			fillColor: "#EEEEEE",
			onShow: onShow
		});
		
		alert("Hello World!!");
		
 	  const wrapper = ActionBarWrapper(this._view, actionBarOptions.options);
 	  
		function onShow() {
			// create subscription to actionbar events 
			wrapper.reload();

			actionBarOptions.eventCallback(function(e){
				alert(e.type);
			});
		}
		
		function onClose(){
			// unsubsribes from actionbar events
			actionBarOptions.eventCallback(function(){});
		}

		var navBar = new NavBar();
		this.add(navBar);

		var btn = new CheckBoxButton("Touch me!");
		this.add(btn);
		btn.set("top", "70dp");

		var btn2 = new CheckBoxButton("Touch me!");
		btn2.set("top", "110dp");
		this.add(btn2);

		var btn3 = new CheckBoxButton("Touch me!");
		btn3.set("top", "150dp");
		this.add(btn3);
		
		btn.setClassName(".checkbox.warn");
		btn2.setClassName(".checkbox.normal");
		btn3.setClassName(".checkbox.warn");
		
		btn.setStyler(styler(style));
		btn2.setStyler(styler(style));
		btn3.setStyler(styler(style));
	
		navBar.showNext("page2");
	},
	//Page1 Public Methods
	function(_proto){
		// injects routing data
		_proto.setRouteParams = function(){};
    _proto.changeStateHandlder = function(state){};
	});

module.exports = Page1;