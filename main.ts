let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        if (false) {
            music.playMelody("C5 A F - - B - C5 ", 120)
        }
    }
    if (hand == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            . # . # .
            `)
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playMelody("D - G - B - G C5 ", 120)
    }
    if (hand == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playMelody("C C C C C C C C ", 120)
    }
})
basic.forever(function () {
	
})
