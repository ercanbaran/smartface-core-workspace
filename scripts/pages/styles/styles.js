var normalColor = "#0c77ff";
var warnColor = "#ff0c0c";

module.exports = {
  ".checkbox": {
    width : "150dp",
    height: "30dp",
    ".normal": {
      "&container":{
        borderColor: warnColor,
      },
      "&label": {
        font:{
          size: "28dp"
        }
      },
      "&checkedRect":{
        fillColor: warnColor
      },
      "&checkedAreaRect":{
        borderColor:  warnColor
      }
    },
    ".warn": {
      "&container":{
        borderColor: normalColor,
      },
      "&label": {
        font:{
          size: "28dp"
        }
      },
      "&checkedRect":{
        fillColor: normalColor
      },
      "&checkedAreaRect":{
        borderColor:  normalColor
      }
    }
  }
};