const HOLD_BLOCK_SIZE = 15;
const HOLD_BLOCKS_COL = 4;
const HOLD_BLOCKS_ROW = 4;
const HOLD_FIELD_WIDTH = HOLD_BLOCK_SIZE * HOLD_BLOCKS_COL;
const HOLD_FIELD_HEIGHT = HOLD_BLOCK_SIZE * HOLD_BLOCKS_ROW;
const hcan = document.getElementById("h-canvas");
const hcon = hcan.getContext("2d");
hcan.width = HOLD_FIELD_WIDTH;
hcan.height = HOLD_FIELD_HEIGHT;
hcan.style.background = "darkgray";

const BLOCK_SIZE = 20;
const BLOCKS_COL = 10;
const BLOCKS_ROW = 20;
const FIELD_WIDtH = BLOCK_SIZE * BLOCKS_COL;
const FIELD_HEIGHT = BLOCK_SIZE * BLOCKS_ROW;

const can = document.getElementById("canvas");
const con = can.getContext("2d");
can.width = FIELD_WIDtH;
can.height = FIELD_HEIGHT;
// can.style.background = "lightgray";

const FUTURE_BLOCK_SIZE = 15;
const FUTURE_BLOCKS_COL = 4;
const FUTURE_BLOCKS_ROW = 20;
const FUTURE_FIELD_WIDTH = FUTURE_BLOCK_SIZE * FUTURE_BLOCKS_COL;
const FUTURE_FIELD_HEIGHT = FUTURE_BLOCK_SIZE * FUTURE_BLOCKS_ROW;

const fcan = document.getElementById("f-canvas");
const fcon = fcan.getContext("2d");
fcan.width = FUTURE_FIELD_WIDTH;
fcan.height = FUTURE_FIELD_HEIGHT;
fcan.style.background = "darkgray";

let holdField = [];
for (let row = 0; row < HOLD_BLOCKS_ROW; row++) {
    holdField[row] = Array(HOLD_BLOCKS_COL).fill(0);
}

let field = [];
for (let row = 0; row < BLOCKS_ROW; row++) {
    field[row] = Array(BLOCKS_COL).fill(0);
}

let futureField = [];
for (let row = 0; row < FUTURE_BLOCKS_ROW; row++) {
    futureField[row] = Array(FUTURE_BLOCKS_COL).fill(0);
}

/**
 * 
 * @param {Number} min 以上
 * @param {Number} max 未満
 */
function makeRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}