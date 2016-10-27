const ActionWrapper = require("js-base/component/action-bar");
var eventCallback;

const options = {
    visible: true
  , backgroundImage: null
  , backgroundColor: "#0079B6"
  , enabled: true
};

if(Device.deviceOS == "iOS") {
  options.ios = {
      rightBarButtonItems: []
    , leftBarButtonItems: [new SMF.UI.iOS.BarButtonItem({
        image : "Menu.png"
       , onSelected: function(){
         eventCallback({type: "menu"})
       }
    })]
    , translucent: false
    , titleView: {        
        type: SMF.UI.TitleViewType.IMAGE
      , frame: [90, 5, 68.5, 39.5]
      , image: "icon.png"
    }
  };
} else {
  options.android = {
      hideOnContentScroll: false
    , titleView: {
        type: SMF.UI.TitleViewType.IMAGE
      , frame: [130.75, 0, 68.5, 39.5]
      , image: "icon.png"
    }  
    , overlay: false
    , homeAsUpIndicator: "Menu.png"
    , displayShowHomeEnabled: true
    , alpha: 1
    , displayHomeAsUpEnabled: true
    , menuItems: []
  };
  
}

module.exports = {
    eventCallback: function(cb){
      eventCallback = cb;
    },
    options
};