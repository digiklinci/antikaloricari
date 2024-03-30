input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    steps = 0
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(steps)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(steps)
})
let steps = 0
radio.setGroup(0)
steps = 0
