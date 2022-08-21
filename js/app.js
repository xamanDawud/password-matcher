function getValue(id) {
    let element = document.getElementById(id);
    let elementstringValue = element.value;
    let elementValue = elementstringValue;
    return element;
}

function getFourDigitPin() {
    let newPin = getPin();
    let pingString = newPin + "";
    if (pingString.length === 4) {
        return pingString;
    } else {
        return getPin();
    }
}

function getPin() {
    let pin = Math.round(Math.random() * 10000);
    return pin;
}

document
    .getElementById("generate-btn")
    .addEventListener("click", function(event) {
        let pinField = getValue("pin-field");
        pinField.value = getFourDigitPin();
    });

document
    .getElementById("calculator")
    .addEventListener("click", function(event) {
        let elementValue = event.target.innerText;
        let pinCheckField = document.getElementById("mathcing-pin-field");
        let previouPincheckField = pinCheckField.value;

        if (!isNaN(elementValue)) {
            let newPinFiledNumber = previouPincheckField + elementValue;
            pinCheckField.value = newPinFiledNumber;
        } else if (elementValue === "C") {
            pinCheckField.value = "";
        } else if (elementValue === "<") {
            let pinCheckField = document.getElementById("mathcing-pin-field");
            let clearOne = pinCheckField.value;
            let clear = clearOne.slice(0, -1);
            pinCheckField.value = clear;
        }
    });

document
    .getElementById("pin-cecker-btn")
    .addEventListener("click", function(event) {
        let pinFieldString = getValue("pin-field");
        let pinField = pinFieldString.value;

        let pinCheckField = document.getElementById("mathcing-pin-field");
        let previouPincheckField = pinCheckField.value;

        let matchMeassage = document.getElementById("pinMatchedMessage");
        let notMatchMessage = document.getElementById("pinDoesNotMatchedMessage");

        if (pinField === previouPincheckField) {
            matchMeassage.style.display = "block";
            notMatchMessage.style.display = "none";
        } else {
            notMatchMessage.style.display = "block";
            matchMeassage.style.display = "none";
        }
    });