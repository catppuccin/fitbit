import { Flavors, Themes } from "./colors";
import * as document from "document";

export const InfoSection = {
    HIDDEN: 0,
    DATE: 1,
    STEPS: 2,
    HEART: 3,
    BATTERY: 4
}

export function applySettings(
    flavor,
    latteAccent,
    frappeAccent,
    macchiatoAccent,
    mochaAccent,
    oledAccent,
    showClockDivider,
    tintHours,
    tintMinutes,
    useAmericanDate
) {
    let latteBackground = document.getElementById("latteBackground");
    let frappeBackground = document.getElementById("frappeBackground");
    let macchiatoBackground = document.getElementById("macchiatoBackground");
    let mochaBackground = document.getElementById("mochaBackground");
    let oledBackground = document.getElementById("oledBackground");
    let hoursText = document.getElementById("hours");
    let divider = document.getElementById("divider");
    let minutesText = document.getElementById("minutes");
    let dateIcon = document.getElementById("dateIcon");
    let dateText = document.getElementById("dateText");
    let stepsIcon = document.getElementById("stepsIcon");
    let stepsText = document.getElementById("stepsText");
    let heartIcon = document.getElementById("heartIcon");
    let heartText = document.getElementById("heartText");
    let batteryIcon = document.getElementById("batteryIcon");
    let batteryText = document.getElementById("batteryText");


    //Sets Default Values
    if(flavor === undefined){
        flavor = Flavors.MOCHA;
    }

    if(latteAccent === undefined){
        latteAccent = Themes.LATTE.BLUE;
    }

    if(frappeAccent === undefined){
        frappeAccent = Themes.FRAPPE.BLUE;
    }

    if(macchiatoAccent === undefined){
        macchiatoAccent = Themes.MACCHIATO.BLUE;
    }

    if(mochaAccent === undefined){
        mochaAccent = Themes.MOCHA.BLUE;
    }

    if(showClockDivider === undefined){
        showClockDivider = true;
    }

    if(tintHours === undefined){
        tintHours = true;
    }

    if(tintMinutes === undefined){
        tintMinutes = false;
    }

    
    hideElement(latteBackground);
    hideElement(frappeBackground);
    hideElement(macchiatoBackground);
    hideElement(mochaBackground);
    hideElement(oledBackground);


    if (showClockDivider) {
        showElement(divider);
    } else {
        hideElement(divider);
    }


    switch (flavor) {
        case Flavors.LATTE: {

            showElement(latteBackground);
            setElementColor(divider, Themes.LATTE.TEXT);
            setElementColor(dateText, Themes.LATTE.TEXT);
            setElementColor(stepsText, Themes.LATTE.TEXT);
            setElementColor(heartText, Themes.LATTE.TEXT);
            setElementColor(batteryText, Themes.LATTE.TEXT);
            setElementRef(dateIcon, "icons/latte-calendar.png");
            setElementRef(stepsIcon, "icons/latte-shoe-prints.png");
            setElementRef(heartIcon, "icons/latte-heart.png");
            setElementRef(batteryIcon, "icons/latte-battery.png");

            if (!tintHours) {
                setElementColor(hoursText, Themes.LATTE.TEXT);
            }

            if (!tintMinutes) {
                setElementColor(minutesText, Themes.LATTE.TEXT);
            }

            if (tintHours || tintMinutes) {
                switch (latteAccent) {
                    case Themes.LATTE.TEXT: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.TEXT); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.TEXT) }
                        break;
                    }
                    case Themes.LATTE.ROSEWATER: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.ROSEWATER); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.ROSEWATER) }
                        break;
                    }
                    case Themes.LATTE.FLAMINGO: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.FLAMINGO); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.FLAMINGO) }
                        break;
                    }
                    case Themes.LATTE.PINK: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.PINK); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.PINK) }
                        break;
                    }
                    case Themes.LATTE.MAUVE: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.MAUVE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.MAUVE) }
                        break;
                    }
                    case Themes.LATTE.RED: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.RED); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.RED) }
                        break;
                    }
                    case Themes.LATTE.MAROON: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.MAROON); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.MAROON) }
                        break;
                    }
                    case Themes.LATTE.PEACH: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.PEACH); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.PEACH) }
                        break;
                    }
                    case Themes.LATTE.YELLOW: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.YELLOW); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.YELLOW) }
                        break;
                    }
                    case Themes.LATTE.GREEN: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.GREEN); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.GREEN) }
                        break;
                    }
                    case Themes.LATTE.TEAL: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.TEAL); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.TEAL) }
                        break;
                    }
                    case Themes.LATTE.SKY: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.SKY); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.SKY) }
                        break;
                    }
                    case Themes.LATTE.SAPPHIRE: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.SAPPHIRE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.SAPPHIRE) }
                        break;
                    }
                    case Themes.LATTE.BLUE: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.BLUE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.BLUE) }
                        break;
                    }
                    case Themes.LATTE.LAVENDER: {
                        if (tintHours) { setElementColor(hoursText, Themes.LATTE.LAVENDER); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.LATTE.LAVENDER) }
                        break;
                    }
                }
            }

            break;
        }
        case Flavors.FRAPPE: {
            showElement(frappeBackground);
            setElementColor(divider, Themes.FRAPPE.TEXT);
            setElementColor(dateText, Themes.FRAPPE.TEXT);
            setElementColor(stepsText, Themes.FRAPPE.TEXT);
            setElementColor(heartText, Themes.FRAPPE.TEXT);
            setElementColor(batteryText, Themes.FRAPPE.TEXT);
            setElementRef(dateIcon, "icons/frappe-calendar.png");
            setElementRef(stepsIcon, "icons/frappe-shoe-prints.png");
            setElementRef(heartIcon, "icons/frappe-heart.png");
            setElementRef(batteryIcon, "icons/frappe-battery.png");

            if (!tintHours) {
                setElementColor(hoursText, Themes.FRAPPE.TEXT);
            }

            if (!tintMinutes) {
                setElementColor(minutesText, Themes.FRAPPE.TEXT);
            }

            if (tintHours || tintMinutes) {
                switch (frappeAccent) {
                    case Themes.FRAPPE.TEXT: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.TEXT); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.TEXT) }
                        break;
                    }
                    case Themes.FRAPPE.ROSEWATER: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.ROSEWATER); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.ROSEWATER) }
                        break;
                    }
                    case Themes.FRAPPE.FLAMINGO: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.FLAMINGO); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.FLAMINGO) }
                        break;
                    }
                    case Themes.FRAPPE.PINK: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.PINK); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.PINK) }
                        break;
                    }
                    case Themes.FRAPPE.MAUVE: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.MAUVE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.MAUVE) }
                        break;
                    }
                    case Themes.FRAPPE.RED: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.RED); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.RED) }
                        break;
                    }
                    case Themes.FRAPPE.MAROON: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.MAROON); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.MAROON) }
                        break;
                    }
                    case Themes.FRAPPE.PEACH: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.PEACH); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.PEACH) }
                        break;
                    }
                    case Themes.FRAPPE.YELLOW: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.YELLOW); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.YELLOW) }
                        break;
                    }
                    case Themes.FRAPPE.GREEN: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.GREEN); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.GREEN) }
                        break;
                    }
                    case Themes.FRAPPE.TEAL: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.TEAL); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.TEAL) }
                        break;
                    }
                    case Themes.FRAPPE.SKY: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.SKY); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.SKY) }
                        break;
                    }
                    case Themes.FRAPPE.SAPPHIRE: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.SAPPHIRE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.SAPPHIRE) }
                        break;
                    }
                    case Themes.FRAPPE.BLUE: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.BLUE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.BLUE) }
                        break;
                    }
                    case Themes.FRAPPE.LAVENDER: {
                        if (tintHours) { setElementColor(hoursText, Themes.FRAPPE.LAVENDER); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.FRAPPE.LAVENDER) }
                        break;
                    }
                }
            }

            break;
        }
        case Flavors.MACCHIATO: {

            showElement(macchiatoBackground);
            setElementColor(divider, Themes.MACCHIATO.TEXT);
            setElementColor(dateText, Themes.MACCHIATO.TEXT);
            setElementColor(stepsText, Themes.MACCHIATO.TEXT);
            setElementColor(heartText, Themes.MACCHIATO.TEXT);
            setElementColor(batteryText, Themes.MACCHIATO.TEXT);
            setElementRef(dateIcon, "icons/macchiato-calendar.png");
            setElementRef(stepsIcon, "icons/macchiato-shoe-prints.png");
            setElementRef(heartIcon, "icons/macchiato-heart.png");
            setElementRef(batteryIcon, "icons/macchiato-battery.png");

            if (!tintHours) {
                setElementColor(hoursText, Themes.MACCHIATO.TEXT);
            }

            if (!tintMinutes) {
                setElementColor(minutesText, Themes.MACCHIATO.TEXT);
            }

            if (tintHours || tintMinutes) {
                switch (macchiatoAccent) {
                    case Themes.MACCHIATO.TEXT: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.TEXT); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.TEXT) }
                        break;
                    }
                    case Themes.MACCHIATO.ROSEWATER: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.ROSEWATER); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.ROSEWATER) }
                        break;
                    }
                    case Themes.MACCHIATO.FLAMINGO: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.FLAMINGO); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.FLAMINGO) }
                        break;
                    }
                    case Themes.MACCHIATO.PINK: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.PINK); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.PINK) }
                        break;
                    }
                    case Themes.MACCHIATO.MAUVE: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.MAUVE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.MAUVE) }
                        break;
                    }
                    case Themes.MACCHIATO.RED: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.RED); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.RED) }
                        break;
                    }
                    case Themes.MACCHIATO.MAROON: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.MAROON); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.MAROON) }
                        break;
                    }
                    case Themes.MACCHIATO.PEACH: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.PEACH); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.PEACH) }
                        break;
                    }
                    case Themes.MACCHIATO.YELLOW: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.YELLOW); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.YELLOW) }
                        break;
                    }
                    case Themes.MACCHIATO.GREEN: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.GREEN); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.GREEN) }
                        break;
                    }
                    case Themes.MACCHIATO.TEAL: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.TEAL); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.TEAL) }
                        break;
                    }
                    case Themes.MACCHIATO.SKY: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.SKY); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.SKY) }
                        break;
                    }
                    case Themes.MACCHIATO.SAPPHIRE: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.SAPPHIRE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.SAPPHIRE) }
                        break;
                    }
                    case Themes.MACCHIATO.BLUE: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.BLUE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.BLUE) }
                        break;
                    }
                    case Themes.MACCHIATO.LAVENDER: {
                        if (tintHours) { setElementColor(hoursText, Themes.MACCHIATO.LAVENDER); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MACCHIATO.LAVENDER) }
                        break;
                    }
                }
            }

            break;
        }
        case Flavors.MOCHA: {

            showElement(mochaBackground);
            setElementColor(divider, Themes.MOCHA.TEXT);
            setElementColor(dateText, Themes.MOCHA.TEXT);
            setElementColor(stepsText, Themes.MOCHA.TEXT);
            setElementColor(heartText, Themes.MOCHA.TEXT);
            setElementColor(batteryText, Themes.MOCHA.TEXT);
            setElementRef(dateIcon, "icons/mocha-calendar.png");
            setElementRef(stepsIcon, "icons/mocha-shoe-prints.png");
            setElementRef(heartIcon, "icons/mocha-heart.png");
            setElementRef(batteryIcon, "icons/mocha-battery.png");

            if (!tintHours) {
                setElementColor(hoursText, Themes.MOCHA.TEXT);
            }

            if (!tintMinutes) {
                setElementColor(minutesText, Themes.MOCHA.TEXT);
            }

            if (tintHours || tintMinutes) {
                switch (mochaAccent) {
                    case Themes.MOCHA.TEXT: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.TEXT); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.TEXT) }
                        break;
                    }
                    case Themes.MOCHA.ROSEWATER: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.ROSEWATER); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.ROSEWATER) }
                        break;
                    }
                    case Themes.MOCHA.FLAMINGO: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.FLAMINGO); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.FLAMINGO) }
                        break;
                    }
                    case Themes.MOCHA.PINK: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.PINK); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.PINK) }
                        break;
                    }
                    case Themes.MOCHA.MAUVE: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.MAUVE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.MAUVE) }
                        break;
                    }
                    case Themes.MOCHA.RED: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.RED); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.RED) }
                        break;
                    }
                    case Themes.MOCHA.MAROON: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.MAROON); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.MAROON) }
                        break;
                    }
                    case Themes.MOCHA.PEACH: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.PEACH); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.PEACH) }
                        break;
                    }
                    case Themes.MOCHA.YELLOW: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.YELLOW); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.YELLOW) }
                        break;
                    }
                    case Themes.MOCHA.GREEN: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.GREEN); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.GREEN) }
                        break;
                    }
                    case Themes.MOCHA.TEAL: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.TEAL); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.TEAL) }
                        break;
                    }
                    case Themes.MOCHA.SKY: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.SKY); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.SKY) }
                        break;
                    }
                    case Themes.MOCHA.SAPPHIRE: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.SAPPHIRE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.SAPPHIRE) }
                        break;
                    }
                    case Themes.MOCHA.BLUE: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.BLUE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.BLUE) }
                        break;
                    }
                    case Themes.MOCHA.LAVENDER: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.LAVENDER); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.LAVENDER) }
                        break;
                    }
                }
            }

            break;
        }
        case Flavors.OLED: {

            showElement(oledBackground);
            setElementColor(divider, Themes.MOCHA.TEXT);
            setElementColor(dateText, Themes.MOCHA.TEXT);
            setElementColor(stepsText, Themes.MOCHA.TEXT);
            setElementColor(heartIcon, Themes.MOCHA.TEXT);
            setElementColor(batteryText, Themes.MOCHA.TEXT);
            setElementRef(dateIcon, "icons/mocha-calendar.png");
            setElementRef(stepsIcon, "icons/mocha-shoe-prints.png");
            setElementRef(heartIcon, "icons/mocha-heart.png");
            setElementRef(batteryIcon, "icons/mocha-battery.png");

            if (!tintHours) {
                setElementColor(hoursText, Themes.MOCHA.TEXT);
            }

            if (!tintMinutes) {
                setElementColor(minutesText, Themes.MOCHA.TEXT);
            }

            if (tintHours || tintMinutes) {
                switch (oledAccent) {
                    case Themes.MOCHA.TEXT: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.TEXT); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.TEXT) }
                        break;
                    }
                    case Themes.MOCHA.ROSEWATER: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.ROSEWATER); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.ROSEWATER) }
                        break;
                    }
                    case Themes.MOCHA.FLAMINGO: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.FLAMINGO); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.FLAMINGO) }
                        break;
                    }
                    case Themes.MOCHA.PINK: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.PINK); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.PINK) }
                        break;
                    }
                    case Themes.MOCHA.MAUVE: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.MAUVE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.MAUVE) }
                        break;
                    }
                    case Themes.MOCHA.RED: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.RED); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.RED) }
                        break;
                    }
                    case Themes.MOCHA.MAROON: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.MAROON); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.MAROON) }
                        break;
                    }
                    case Themes.MOCHA.PEACH: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.PEACH); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.PEACH) }
                        break;
                    }
                    case Themes.MOCHA.YELLOW: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.YELLOW); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.YELLOW) }
                        break;
                    }
                    case Themes.MOCHA.GREEN: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.GREEN); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.GREEN) }
                        break;
                    }
                    case Themes.MOCHA.TEAL: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.TEAL); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.TEAL) }
                        break;
                    }
                    case Themes.MOCHA.SKY: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.SKY); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.SKY) }
                        break;
                    }
                    case Themes.MOCHA.SAPPHIRE: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.SAPPHIRE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.SAPPHIRE) }
                        break;
                    }
                    case Themes.MOCHA.BLUE: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.BLUE); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.BLUE) }
                        break;
                    }
                    case Themes.MOCHA.LAVENDER: {
                        if (tintHours) { setElementColor(hoursText, Themes.MOCHA.LAVENDER); }
                        if (tintMinutes) { setElementColor(minutesText, Themes.MOCHA.LAVENDER) }
                        break;
                    }
                }
            }

            break;
        }
    }
}

export function setElementRef(element, location){
    element.href = location;
}

export function hideElement(element) {
    element.style.display = "none";
}

export function showElement(element) {
    element.style.display = "inline";
}

export function setElementColor(element, color) {
    element.style.fill = color;
}