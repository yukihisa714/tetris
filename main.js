let frame = 0;

const keyOpe = {};

document.onkeydown = (e) => {
    console.log(e.key, typeof (e.key));
    keyOpe[e.key] = true;

    switch (e.key) {
        case " ":
            mino.dropMino();
            break;
        case "Shift":
            makeHoldMino();
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
    for (let y = BLOCKS_ROW - 1; y >= 0; y--) {
        let p = 1;
        for (const x of field[y]) {
            p *= x;
        }
        if (!p) continue;
        for (let py = y; py >= 1; py--) {
            field[py] = field[py - 1];
        }
        field[0] = Array(10).fill(0);
        y++;
    }
}

function drawOneBlock(x, y, blockSize, fillColor, strokeColor, ctx) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

// function drawAllHoldBlocks() {
//     for (let y = 0; y < HOLD_BLOCKS_ROW; y++) {
//         for (let x = 0; x < HOLD_BLOCKS_COL; x++) {
//             drawOneBlock(x, y, HOLD_BLOCK_SIZE, colors[holdField[y][x]], "dimgray", hcon);
//         }
//     }
// }

function drawAllBlocks() {
    for (let y = 0; y < BLOCKS_ROW; y++) {
        for (let x = 0; x < BLOCKS_COL; x++) {
            drawOneBlock(x, y, BLOCK_SIZE, colors[field[y][x]], "dimgray", con);
        }
    }
}

// function drawAllFutureBlocks() {
//     for (let y = 0; y < FUTURE_BLOCKS_ROW; y++) {
//         for (let x = 0; x < FUTURE_BLOCKS_COL; x++) {
//             drawOneBlock(x, y, FUTURE_BLOCK_SIZE, colors[futureField[y][x]], "dimgray", fcon);
//         }
//     }
// }

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

    hcon.clearRect(0, 0, HOLD_FIELD_WIDTH, HOLD_FIELD_HEIGHT);
    con.clearRect(0, 0, FIELD_WIDtH, FIELD_HEIGHT);
    fcon.clearRect(0, 0, FUTURE_FIELD_WIDTH, FUTURE_FIELD_HEIGHT);
    drawAllBlocks();
    // drawAllFutureBlocks();
    for (const fMino of futureMinos) {
        fMino.draw();
    }
    if (holdMino) {
        holdMino.draw();
    }
    predictMino.draw();
    mino.draw();

}

setInterval(mainLoop, 1000 / 60);
