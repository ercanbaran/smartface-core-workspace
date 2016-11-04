const ActionWrapper = require("js-base/component/action-bar");
const baseOptions = require("./page1.actionbar");


const options = Object.assign(
    {},
    baseOptions.options, 
    {
      backgroundColor: "#000000"
    });
    
// if(options.android)
    // delete options.android.onHomeIconItemSelected;

module.exports = {
    eventCallback: baseOptions.eventCallback,
    options: options
};