const BLOCK_SIZE = 20;
const BLOCKS_COL = 10;
const BLOCKS_ROW = 20;
const FIELD_WIDtH = BLOCK_SIZE * BLOCKS_COL;
const FIELD_HEIGHT = BLOCK_SIZE * BLOCKS_ROW;

const can = document.createElement("canvas");
const con = can.getContext("2d");
can.width = FIELD_WIDtH;
can.height = FIELD_HEIGHT;
// can.style.background = "lightgray";
document.body.appendChild(can);


let field = [];
for (let row = 0; row < BLOCKS_ROW; row++) {
    field[row] = Array(BLOCKS_COL).fill(0);
}

let frame = 0;

const keyOpe = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    z: false,
    x: false,
};

document.onkeydown = (e) => {
    console.log(e.key, typeof (e.key));
    keyOpe[e.key] = true;

    switch (e.key) {
        case " ":
            mino.dropMino();
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

function drawOneBlock(x, y, fillColor, strokeColor) {
    con.fillStyle = fillColor;
    con.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    con.strokeStyle = strokeColor;
    con.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

function drawAllBlocks() {
    for (let y = 0; y < BLOCKS_ROW; y++) {
        for (let x = 0; x < BLOCKS_COL; x++) {
            drawOneBlock(x, y, colors[field[y][x]], "dimgray");
        }
    }
}

function mainLoop() {
    frame++;
    con.clearRect(0, 0, FIELD_WIDtH, FIELD_HEIGHT);
    drawAllBlocks();

    if (!mino.check(0, 0, 0)) {
        nowGameState = GAME_STATES.afterGame;
    }

    if (frame % 60 === 0) {
        mino.moveMino(0, 1, 0);
        removeLine();
    }

    predictMino.x = mino.x;
    predictMino.y = mino.y;
    predictMino.rotate = mino.rotate;
    predictMino.dropMino();

    predictMino.draw();
    mino.draw();
    mino.update();

}

setInterval(mainLoop, 1000 / 60);
