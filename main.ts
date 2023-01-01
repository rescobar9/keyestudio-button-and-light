basic.clearScreen()
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
