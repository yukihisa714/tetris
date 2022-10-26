const keyOpe = {};
document.onkeydown = (e) => {
    // console.log(e.key, typeof (e.key));
    keyOpe[e.key] = true;

    switch (e.key) {
        case " ":
            mino.dropMino();
            break;
        case "Shift":
            makeHoldMino();
            drawHold();
            break;

        default:
            break;
    }
};
document.onkeyup = (e) => {
    keyOpe[e.key] = false;
}

const GAME_STATES = {
    beforeGame: 0,
    inGame: 1,
    afterGame: 2,
};

let nowGameState = GAME_STATES.beforeGame;

function removeLine() {
    for (let y = FIELDS.main.blocksRow - 1; y >= 0; y--) {
        let p = 1;
        for (const x of FIELDS.main.array[y]) {
            p *= x;
        }
        if (!p) continue;
        for (let py = y; py >= 1; py--) {
            FIELDS.main.array[py] = FIELDS.main.array[py - 1];
        }
        FIELDS.main.array[0] = Array(10).fill(0);
        y++;
    }
}

let frame = 0;

function mainLoop() {
    frame++;
    if (!mino.check(0, 0, 0)) {
        nowGameState = GAME_STATES.afterGame;
    }

    if (frame % 60 === 0) {
        mino.moveMino(0, 1, 0);
        removeLine();
    }

    mino.update();

}

setInterval(mainLoop, 1000 / 60);
