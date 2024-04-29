input.onButtonPressed(Button.AB, function () {
    show = !(show)
})
let show = false
show = true
basic.forever(function () {
    if (show) {
        led.toggle(randint(0, 4), randint(0, 4))
        led.setBrightness(60)
    }
    if (!(show)) {
        basic.clearScreen()
    }
})
