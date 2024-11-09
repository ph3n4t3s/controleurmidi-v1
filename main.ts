input.onPinPressed(TouchPin.P0, function () {
    midi.channel(_this).note(midi.frequencyToKey(330), music.beat(BeatFraction.Half))
})
function Fonction1 () {
    midi.channel(1).controlChange(1, Math.round(Math.map(input.acceleration(Dimension.X), MinValue, MaxValue, 0, 127)))
    midi.channel(1).controlChange(2, Math.round(Math.map(input.acceleration(Dimension.X), MinValue, MaxValue, 127, 0)))
    midi.channel(1).controlChange(3, Math.round(Math.map(input.acceleration(Dimension.Y), MinValue, MaxValue, 0, 127)))
    midi.channel(1).controlChange(4, Math.round(Math.map(input.acceleration(Dimension.Y), MinValue, MaxValue, 127, 0)))
    midi.channel(1).controlChange(5, Math.round(Math.map(input.acceleration(Dimension.Z), MinValue, MaxValue, 0, 127)))
    midi.channel(1).controlChange(6, Math.round(Math.map(input.acceleration(Dimension.Z), MinValue, MaxValue, 127, 0)))
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    mode += 1
    if (mode > 5) {
        mode = 0
    }
    basic.showNumber(mode)
})
input.onButtonPressed(Button.B, function () {
    On = !(On)
})
input.onPinPressed(TouchPin.P1, function () {
    midi.channel(_this).note(midi.frequencyToKey(392), music.beat(BeatFraction.Half))
})
let _this = 0
let On = false
let MaxValue = 0
let MinValue = 0
let mode = 0
bluetooth.setTransmitPower(7)
basic.showIcon(IconNames.EighthNote)
mode = 0
MinValue = -1000
MaxValue = 1000
On = false
basic.forever(function () {
    if (On == true) {
        if (mode == 1) {
            midi.channel(1).controlChange(1, Math.round(Math.map(input.acceleration(Dimension.X), MinValue, MaxValue, 0, 127)))
        } else if (mode == 2) {
            midi.channel(1).controlChange(2, Math.round(Math.map(input.acceleration(Dimension.X), MinValue, MaxValue, 0, 127)))
        } else if (mode == 3) {
            midi.channel(1).controlChange(1, Math.round(Math.map(input.acceleration(Dimension.X), MinValue, MaxValue, 0, 127)))
            midi.channel(1).controlChange(2, Math.round(Math.map(input.acceleration(Dimension.X), MinValue, MaxValue, 127, 0)))
            midi.channel(1).controlChange(3, Math.round(Math.map(input.acceleration(Dimension.Y), MinValue, MaxValue, 0, 127)))
            midi.channel(1).controlChange(4, Math.round(Math.map(input.acceleration(Dimension.Y), MinValue, MaxValue, 127, 0)))
        } else if (mode == 4) {
            Fonction1()
        } else if (mode == 5) {
            mode = 0
        } else {
        	
        }
        basic.pause(100)
    }
})
