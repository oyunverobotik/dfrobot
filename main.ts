input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
WSJoyStick.onKey(KEY.E, function () {
    radio.sendString("forward")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("stop")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "right") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M2)
    } else if (receivedString == "left") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M1)
    } else if (receivedString == "stop") {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedString == "forward") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (receivedString == "backwards") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
WSJoyStick.onKey(KEY.C, function () {
    radio.sendString("backwards")
})
WSJoyStick.JoyStickInit()
radio.setGroup(2)
