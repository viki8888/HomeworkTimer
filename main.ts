input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    开始计时 = 1
    秒数 = 0
})
input.onButtonPressed(Button.B, function () {
    结束计时 = 1
    for (let index = 0; index < 4; index++) {
        basic.showString("" + convertToText(Math.idiv(秒数, 60)) + "m")
        basic.showString("" + convertToText(秒数 % 60) + "s")
        basic.pause(2000)
    }
})
let 结束计时 = 0
let 开始计时 = 0
let 秒数 = 0
basic.showIcon(IconNames.Yes)
秒数 = 0
basic.forever(function () {
    if (开始计时 == 1 && 结束计时 == 0) {
        basic.pause(1000)
        秒数 += 1
    }
})
