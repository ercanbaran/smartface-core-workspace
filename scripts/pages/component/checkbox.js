const extend = require("js-base/core/extend");
const UIComponent = require("js-base/component/ui-component");

const CheckBoxButton = extend(UIComponent)(
	function(_super, text){
		_super(this, 
			{
				width: 150,
				height: 30,
				borderWidth: 1
			},
			"checkbox",
			{
				checked: false
			}
		);
		
		this.checkedRect = new SMF.UI.Rectangle({
			fillColor: "#000000",
			width: 15,
			height: 15,
			left: 7.5,
			top: 7.5,
			alpha: 0
		});
		
		this.checkedAreaRect = new SMF.UI.Rectangle({
			fillColor: "#ffffff",
			width: 30,
			top: 0,
			left: 0,
		  borderWidth: "1px",
      borderColor: "#305E75",
			height: 30
		});
		
		this.label = new SMF.UI.Label({
			text: text,
			top: 0,
			left: 40,
			height: 30
		});
		
		this.label.font.size = 26;
		
		this.add(this.label);
		this.add(this.checkedAreaRect);
		this.add(this.checkedRect);
		
		var changeState = this._changeState.bind(this);
		
		this.getEventStream("onTouch")
			.subscribe(function(e){
				changeState(({checked: !e.state.checked}));
			})
	},
	function(_proto){
    _proto.stateChangedHandlder = function(state){
			this.checkedRect.alpha = state.checked? 1:0;
		};
		_proto.changeButton = function(){
		};
	}
);
	
module.exports = CheckBoxButton;