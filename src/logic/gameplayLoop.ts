// Key is night number, value is array of difficulty levels (Freddy, Bonnie, Chica, Foxy)
const NIGHT_FOUR_FREDDY = Math.random() < 0.5 ? 1 : 2;
const ENEMY_DIFFICULTY = {
    1: [0, 0, 0, 0],
    2: [0, 3, 1, 1],
    3: [1, 0, 5, 2],
    4: [NIGHT_FOUR_FREDDY, 2, 4, 6],
    5: [3, 5, 7, 5],
    6: [4, 10, 12, 16]
}

// Key is night number, value is timeout in milliseconds. Power will subtract 1% every {value} milliseconds.
const POWER_TIMEOUT = {
    1: 7000,
    2: 6000,
    3: 5000,
    4: 4000,
    5: 3000,
    6: 3000
}

// 2am: +1 bonnie
// 3am, 4am: +1 everyone but freddy