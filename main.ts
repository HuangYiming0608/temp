input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(false)
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(true)
})
music.setVolume(2147483647)
basic.forever(function () {
    basic.showNumber(0 - input.compassHeading())
    if (input.temperature() < 10) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
    if (input.temperature() > 30) {
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
})
