const sounds ={
    "Heater kit": [
        {
            name : "Heater-1",
            shortcut : "q",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        },
        {
            name: "Heater-2",
            shortcut: "w",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },
        {
            name: "Heater-3",
            shortcut: "e",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        },
        {
            name: "Heater-4",
            shortcut: "a",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        },
        {
            name: "Clap",
            shortcut: "s",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        },
        {
            name: "Open-HH",
            shortcut: "d",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",

        },
        {
            name: "Kick-n'-Hat",
            shortcut: "z",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        {
            name: "Kick",
            shortcut: "x",
            link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        {
            name: "Closed-HH",
            shortcut: "c",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        },
    ],
    "Smooth piano kit": [
        {
            name: "Chord-1",
            shortcut: "q",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
        },
        {
            name: "Chord-2",
            shortcut: "w",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
        },
        {
            name: "Chord-3",
            shortcut: "e",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
        },
        {
            name: "Shaker",
            shortcut: "a",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
        },
        {
            name: "Open-HH",
            shortcut: "s",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
        },
        {
            name: "Closed-HH",
            shortcut: "d",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
        },
        {
            name: "Punchy-Kick",
            shortcut: "z",
            link: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
        },
        {
            name: "Side-Stick",
            shortcut: "x",
            link: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
        },
        {
            name: "Snare",
            shortcut: "c",
            link: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
        },
    ]
}
const MODE_NAMES = {
    true: "Heater kit",
    false: "Smooth piano kit"
}

export {
    sounds,
    MODE_NAMES
};