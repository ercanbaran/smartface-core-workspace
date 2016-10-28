const Page1  = require("./pages/page1");
const Page2  = require("./pages/page2");
const Router = require("js-base/core/router");
// require("./libs/js-base/index");

Router.add(
    "page1",
    Page1,
    function(){
      return [
        SMF.UI.MotionEase.DECELERATING,
        SMF.UI.TransitionEffect.RIGHTTOLEFT,
        SMF.UI.TransitionEffectType.PUSH,
        false,
        false
      ];
  });
  
  Router.add(
    "page2",
    Page2,
    function(){
      return [
        SMF.UI.MotionEase.DECELERATING,
        SMF.UI.TransitionEffect.RIGHTTOLEFT,
        SMF.UI.TransitionEffectType.PUSH,
        false,
        false
      ];
  });

Router.go("page1", 1);