//
//
//

//.slideToggle(..)
//  "slow" or "fast" or duration_in_milliseconds
//.slideUp(..)
//.fadeOut(..)
var registrationsRun = {}
registrationsRun[{ registerCollapsablePanels }] = false;

var animationOptions = {}
animationOptions.slideToggle = "slideToggle";
animationOptions.slideUp = "slideUp";
animationOptions.fadeOut = "fadeOut";

var enum_slow_fast_or_null = {}
enum_slow_fast_or_null.slow = "slow";
enum_slow_fast_or_null.fast = "fast";
enum_slow_fast_null.null = null;

//emulate the header click and activate the collapse/expand w/o subscribing to an event handler...
export function toggleContentExpandoOnHeaderClick(
  animationOption = "slideToggle"
  , sharedClickerClass = ".panel-header"
  , sharedContentClass = ".panel-content"
  , data_panelID_name = "panel-id"
  , data_panelState_name = "panel-state"
  , slow_fast_or_null = "slow"
  , time_in_ms = 300
) {

  var panel = $(sharedClickerClass).parent();
  var panelContent = panel.find(sharedContentClass);
  var panelID = panel.data(data_panelID_name);
  var panelState = panel.data(data_panelState_name)

  if (animationOption == "slideUp") {

    if (slow_fast_or_null == "slow") {
      panelContent.slideUp("slow");
    }
    else if (slow_fast_or_null == "fast") {
      panelContent.slideUp("fast");
    }
    else if (slow_fast_or_null == null) {
      panelContent.slideUp(time_in_ms);
    }

  }
  else if (animationOption == "fadeOut") {

    if (slow_fast_or_null == "slow") {
      panelContent.fadeOut("slow");
    }
    else if (slow_fast_or_null == "fast") {
      panelContent.fadeOut("fast");
    }
    else if (slow_fast_or_null == null) {
      panelContent.fadeOut(time_in_ms);
    }

  }
  else {
    if (slow_fast_or_null == "slow") {
      panelContent.slideToggle("slow");
    }
    else if (slow_fast_or_null == "fast") {
      panelContent.slideToggle("fast");
    }
    else if (slow_fast_or_null == null) {
      panelContent.slideToggle(time_in_ms);
    }
  }
  
}

export function registerCollapsablePanels() {

  registrationsRun[{ registerCollapsablePanels }] = true;

  //export function toggleVisibility(id) {
  //  $('id').visibility
  //}

  $(".panel-header").click(function () {
    var panel = $(this).parent();
    var panelContent = panel.find(".panel-content");
    var panelId = panel.data("panel-id");
    var panelState = panel.data("panel-state");

    panelContent.slideToggle("slow");
    $(this).toggleClass("active");

    if (panelState === "closed") {
      panel.data("panel-state", "open");
      // code to handle opening the panel
    } else {
      panel.data("panel-state", "closed");
      // code to handle closing the panel
    }
  });

}

