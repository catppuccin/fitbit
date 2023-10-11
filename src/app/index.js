import clock from "clock";
import { battery } from "power";
import { HeartRateSensor } from "heart-rate";
import { today as todayActivity } from "user-activity";
import * as document from "document";
import { preferences } from "user-settings";
import * as simpleSettings from "./simple/device-settings";
import { getFlavor } from "./colors";
import { applySettings, hideElement, showElement, InfoSection } from "./settings";
import { me as appbit } from "appbit"

clock.granularity = "seconds";

// ===========================
// Items
// ===========================

let latteBackground = document.getElementById("latteBackground");
let frappeBackground = document.getElementById("frappeBackground");
let macchiatoBackground = document.getElementById("macchiatoBackground");
let mochaBackground = document.getElementById("mochaBackground");
let oledBackground = document.getElementById("oledBackground");
let hoursText = document.getElementById("hours");
let minutesText = document.getElementById("minutes");
let dateIcon = document.getElementById("dateIcon");
let dateText = document.getElementById("dateText");
let stepsIcon = document.getElementById("stepsIcon");
let stepsText = document.getElementById("stepsText");
let heartIcon = document.getElementById("heartIcon");
let heartText = document.getElementById("heartText");
let batteryIcon = document.getElementById("batteryIcon");
let batteryText = document.getElementById("batteryText");
let infoSection = InfoSection.HIDDEN;
let useAmericanDate = false;


document.getElementById("displayButton").addEventListener("click", (e) => {

  hideElement(dateIcon);
  hideElement(dateText);
  hideElement(stepsIcon);
  hideElement(stepsText);
  hideElement(heartIcon);
  hideElement(heartText);
  hideElement(batteryIcon);
  hideElement(batteryText);


  if (infoSection === InfoSection.HIDDEN) {

    showElement(dateIcon);
    showElement(dateText);
    infoSection = InfoSection.DATE;

  } else if (infoSection === InfoSection.DATE) {

    showElement(stepsIcon);
    showElement(stepsText);
    infoSection = InfoSection.STEPS;

  } else if (infoSection === InfoSection.STEPS) {

    showElement(heartIcon);
    showElement(heartText);
    infoSection = InfoSection.HEART;

  } else if (infoSection === InfoSection.HEART) {

    showElement(batteryIcon);
    showElement(batteryText);
    infoSection = InfoSection.BATTERY;

  } else {

    infoSection = InfoSection.HIDDEN;

  }

});

// ===========================
// Heart Rate
// ===========================

if (appbit.permissions.granted("access_activity")) {
  const heartRateMonitor = new HeartRateSensor({ frequency: 1 });

  heartRateMonitor.addEventListener("reading", () => {
    heartText.text = heartRateMonitor.heartRate;
  });

  heartRateMonitor.start();
} else {
  heartText.text = "-- "
}



// ===========================
// Battery
// ===========================

battery.onchange = function (_) {
  batteryText.text = `${battery.chargeLevel}%`;
}


// ===========================
// Clock
// ===========================

/**
 * This functions is triggered every minute
 */
clock.ontick = (event) => {
  let today = event.date;
  let hours = today.getHours();
  let minutes = addZeroToNumber(today.getMinutes());

  if (preferences.clockDisplay === "12h") {
    hours = hours % 12 || 12;
  } else {
    hours = addZeroToNumber(hours);
  }

  hoursText.text = hours;
  minutesText.text = minutes;
  setDate();

  if (todayActivity && appbit.permissions.granted("access_heart_rate")) {
    stepsText.text = todayActivity.adjusted.steps;
  } else {
    stepsText.text = "--   ";
  }
}

/**
 * This function returns a number with a 0 if it's lowers then 10.
 * 
 * For example, the number is 8 it will return 08 
 */
function addZeroToNumber(number) {
  if (number < 10) {
    number = "0" + number;
  }

  return number;
}

/**
 * This function sets the date in the date text. It will show accordingly to the date format setting
 */
function setDate() {
  let today = new Date();
  let date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  if (useAmericanDate) {
    date = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
  }

  dateText.text = date;
}

// ===========================
// Settings
// ===========================


function settingsCallback(data) {
  if (!data) {
    return;
  }

  applySettings(
    getFlavor(data.flavor),
    data.latteAccent,
    data.frappeAccent,
    data.macchiatoAccent,
    data.mochaAccent,
    data.oledAccent,
    data.showClockDivider,
    data.tintHours,
    data.tintMinutes,
  );

  useAmericanDate = data.useAmericanDate;

  if (useAmericanDate === undefined) {
    useAmericanDate = false;
  }

  setDate();

}
simpleSettings.initialize(settingsCallback);