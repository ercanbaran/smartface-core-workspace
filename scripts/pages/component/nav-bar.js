const extend = require("js-base/core/extend");
const UIComponent = require("js-base/component/ui-component");
const Router = require("js-base/core/router");

const createButton = function(page, left, text){
  return new SMF.UI.Label({
    width: "20%",
    height: "50dp",
    left: left,
    top: 0,
    text: text,
    onTouch: function(){
      Router.go(page);
    }
  });
};

const NavBar = extend(UIComponent)(
  // Constructor
  function(_super){
    _super(this, {
      width: "100%",
      height: "10%",
      left: 0,
      fillColor: "#e6e6e6",
      top: "90%"
    },
    "navBar"
    );
  },
  // Public methods
  function(_proto){
    _proto.showNext = function(page) {
      this.add(createButton(page, "80%", "Next"));
    };

    _proto.showPrev = function(page) {
      this.add(createButton(page, "2%", "Prev"));
    };
  }
);

module.exports = NavBar;