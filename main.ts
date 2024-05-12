// primanje kalorijskog kusura
radio.onReceivedNumber(function (receivedNumber) {
    kalorijski_kusur = receivedNumber
    potrosene_kalorije = kalorijski_kusur
    steps = kalorijski_kusur * 20
    basic.showNumber(kalorijski_kusur)
})
// resetovanje utrosenih kalorija i broja koraka
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    steps = 0
    reset_dioda()
    basic.clearScreen()
})
// kolicina kalorija koje su utrosene
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(steps / 20)
    basic.clearScreen()
    reset_dioda()
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    if (steps % broj_koraka_dioda == 0) {
        upali_diodu()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(steps)
})
function reset_dioda () {
    ledX = -1
    ledY = 0
}
function upali_diodu () {
    if (ledY == -1) {
        basic.clearScreen()
    }
    if (ledX < 4) {
        ledX += 1
    } else {
        ledY += 1
        ledX = 0
    }
    led.plot(ledX, ledY)
}
// slanje potrosenih kalorija
input.onButtonPressed(Button.AB, function () {
    // 20 koraka = 1 kal
    potrosene_kalorije = steps / 20
    radio.sendNumber(potrosene_kalorije)
    basic.showIcon(IconNames.Heart)
})
let ledY = 0
let ledX = 0
let potrosene_kalorije = 0
let kalorijski_kusur = 0
let broj_koraka_dioda = 0
let steps = 0
radio.setGroup(0)
steps = 0
broj_koraka_dioda = 10
reset_dioda()
