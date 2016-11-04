const ActionWrapper = require("js-base/component/action-bar");
var eventCallback;

const options = {
  visible: true,
  backgroundImage: null,
  backgroundColor: "#0079B6",
  enabled: true
};


if(Device.deviceOS == "iOS") {
  options.ios = {
    rightBarButtonItems: [],
    leftBarButtonItems: [new SMF.UI.iOS.BarButtonItem({
      image : "Menu.png",
      onSelected: function(){
        eventCallback({type: "menu"})
      }
    })],
    translucent: false,
    titleView: {        
      type: SMF.UI.TitleViewType.IMAGE,
      frame: [100, 0, 44, 44],
      image: "Icon.png"
    }
  };
} else {
  options.android = {
    hideOnContentScroll: false,
    titleView: {
      type: SMF.UI.TitleViewType.IMAGE,
      left: 70,
      width: 44,
      height: 44,
      top: 0,
      image: "icon.png"
    },
    overlay: false,
    homeAsUpIndicator: "Menu.png",
    onHomeIconItemSelected: function(){
      eventCallback({type: "menu"})
    },
    displayShowHomeEnabled: true,
    alpha: 1,
    displayHomeAsUpEnabled: true,
    menuItems: []
  };
}

module.exports = {
    eventCallback: function(cb){
      console.log("event"+cb);
      eventCallback = cb;
    },
    options
};