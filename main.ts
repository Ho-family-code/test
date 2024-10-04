let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlus.I2CInit()
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 255)
})
input.onButtonPressed(Button.AB, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    basic.showString("RAIN")
})
input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 255)
    DFRobotMaqueenPlus.PID(PID.OFF)
})
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P12, 8, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
    strip.show()
})
