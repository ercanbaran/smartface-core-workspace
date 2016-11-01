const extend = require("js-base/core/extend");
const UIComponent = require("js-base/component/ui-component");

const CheckBoxButton = extend(UIComponent)(
	function(_super, text){
		_super(
			// for initializing super component as this scope
			this, 
			// Component container properties
			{
				width: "150dp",
				height: "30dp",
				borderWidth: 1
			},
			// component unique name
			"checkbox",
			// initial state of component
			{
				checked: false
			}
		);
		
		this.checkedRect = new SMF.UI.Rectangle({
			fillColor: "#000000",
			width: "15dp",
			height: "15dp",
			left: "7.5dp",
			top: "7.5dp",
			alpha: 0
		});
		
		this.checkedAreaRect = new SMF.UI.Rectangle({
			fillColor: "#ffffff",
			width: "30dp",
			top: 0,
			left: 0,
		  borderWidth: "1dp",
      borderColor: "#305E75",
			height: "30dp"
		});
		
		this.label = new SMF.UI.Label({
			text: text,
			top: 0,
			left: "40dp",
			height: "30dp",
			// if this propery is true then onTouch event of parent Container of this Label cannot be captured.
			touchEnabled: false
		});
		
		this.label.font.size = "26dp";
		
		this.add(this.label);
		this.add(this.checkedAreaRect);
		this.add(this.checkedRect);
		
		var changeState = this._changeState.bind(this);
		// gets component events as stream sequences
		this.getEventStream("onTouch")
			.subscribe(function(e){
				changeState(({checked: !e.state.checked}));
			})
	},
	function(_proto){
		// lifecycle state change event handler
    _proto.stateChangedHandlder = function(state){
			this.checkedRect.alpha = state.checked? 1:0;
		};
		
		_proto.changeButton = function(){
		};
	}
);
	
module.exports = CheckBoxButton;