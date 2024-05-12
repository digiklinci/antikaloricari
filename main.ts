// primanje kalorijskog kusura
radio.onReceivedNumber(function (receivedNumber) {
    kalorijski_kusur = receivedNumber
    potrosene_kalorije = kalorijski_kusur
    broj_koraka = kalorijski_kusur * broj_koraka_po_koloriji
    basic.showNumber(kalorijski_kusur)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    reset_dioda()
    for (let index = 0; index < broj_koraka / broj_koraka_po_koloriji; index++) {
        upali_diodu()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    broj_koraka = 0
    reset_dioda()
})
// kolicina kalorija koje su utrosene
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(broj_koraka / broj_koraka_po_koloriji)
    basic.clearScreen()
    reset_dioda()
})
input.onGesture(Gesture.Shake, function () {
    broj_koraka += 1
    if (broj_koraka % broj_koraka_po_koloriji == 0) {
        upali_diodu()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(broj_koraka)
})
function reset_dioda () {
    basic.clearScreen()
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
    potrosene_kalorije = broj_koraka / broj_koraka_po_koloriji
    radio.sendNumber(potrosene_kalorije)
})
let ledY = 0
let ledX = 0
let potrosene_kalorije = 0
let kalorijski_kusur = 0
let broj_koraka_po_koloriji = 0
let broj_koraka = 0
radio.setGroup(0)
broj_koraka = 0
// 20 koraka = 1Kcal
broj_koraka_po_koloriji = 20
reset_dioda()
