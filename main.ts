input.onButtonPressed(Button.A, function () {
    RED()
})
function RED () {
    for (let index = 0; index < 100; index++) {
        range = strip.range(0, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.clear()
        basic.pause(500)
        range = strip.range(2, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        range = strip.range(1, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.clear()
        basic.pause(500)
        range = strip.range(3, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Orange))
        strip.clear()
        basic.pause(500)
    }
}
function GREEN () {
	
}
function ORANGE () {
	
}
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(70)
