const ActionWrapper = require("js-base/component/action-bar");
const baseOptions = require("./page1.actionbar");

const options = Object.assign(
    {},
    baseOptions.options, 
    {
      backgroundColor: "#000000"
    });

module.exports = {
    eventCallback: baseOptions.eventCallback,
    options
};