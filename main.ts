basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorStop(maqueen.Motors.M2)
    basic.pause(2350)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(2350)
})
